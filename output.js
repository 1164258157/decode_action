//Mon Dec 15 2025 04:38:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const BRANCH_FINDER_LOG_ENABLED = false;
const noop = () => {};
class BranchFinder {
  constructor() {
    this.LOG_PREFIX = "[BranchFinder]";
    this.COMPONENT_TYPES = {
      INPUT: "input",
      SELECT: "select",
      BUTTON: "button",
      LINK: "link",
      LIST_ITEM: "list_item",
      DIV: "div",
      SPAN: "span",
      LABEL: "label",
      OTHER: "other"
    };
    this.searchConfig = {
      maxElements: 10000,
      minTextLength: 2,
      maxTextLength: 200
    };
    this.clickConfig = {
      enableAnimation: true,
      enableCursor: true,
      enableTrajectory: true,
      speedMultiplier: 0.4,
      timing: {
        preCheck: 100,
        scroll: [300, 500],
        move: [200, 400],
        hover: [150, 250],
        mousedown: [50, 100],
        click: [50, 100],
        afterClick: 100
      }
    };
    this.currentMousePos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.includeKeywords = ["兑换网点", "网点", "选择网点", "兑换点", "branch", "exchange"];
    this.excludeKeywords = ["证件", "身份证", "手机", "验证码", "idtype", "mobile", "phone", "captcha"];
    this.initStyles();
    this.initMouseTracking();
  }
  log(..._0x131e30) {
    BRANCH_FINDER_LOG_ENABLED && console.log(this.LOG_PREFIX, ..._0x131e30);
  }
  warn(..._0x17c415) {
    BRANCH_FINDER_LOG_ENABLED && console.warn(this.LOG_PREFIX, ..._0x17c415);
  }
  error(..._0x55c630) {
    BRANCH_FINDER_LOG_ENABLED && console.error(this.LOG_PREFIX, ..._0x55c630);
  }
  delay(_0x2ded06) {
    return new Promise(_0x36d3fd => setTimeout(_0x36d3fd, _0x2ded06));
  }
  randomDelay(_0x3754f9, _0xad4c4, _0x227432 = 1) {
    const _0x5603f2 = _0x3754f9 + Math.random() * (_0xad4c4 - _0x3754f9);
    return new Promise(_0x22c809 => setTimeout(_0x22c809, _0x5603f2 * _0x227432));
  }
  parseBranchPath(_0x3209ca) {
    if (!_0x3209ca) {
      this.warn("网点路径为空");
      return null;
    }
    const _0x304681 = _0x3209ca.split("/").map(_0x4a0b18 => _0x4a0b18.trim()).filter(Boolean);
    return {
      fullPath: _0x3209ca,
      parts: _0x304681,
      province: _0x304681[0] || "",
      city: _0x304681[1] || "",
      branch: _0x304681[2] || "",
      finalBranch: _0x304681[3] || "",
      keywords: _0x304681.map(_0x20f8f5 => _0x20f8f5.replace(/(省分行|分行|支行|营业部.*)$/, "")).concat(_0x3209ca).filter(Boolean)
    };
  }
  initStyles() {
    if (document.getElementById("branch-finder-styles")) {
      return;
    }
    const _0xc74179 = document.createElement("style");
    _0xc74179.id = "branch-finder-styles";
    _0xc74179.textContent = "\n      .bf-found { outline: 2px dashed #2196f3 !important; outline-offset: 2px !important; }\n      .bf-hovering { outline: 3px solid #ff9800 !important; outline-offset: 2px !important; box-shadow: 0 0 10px rgba(255, 152, 0, 0.5) !important; transition: all 0.2s ease !important; }\n      .bf-pre-click { outline: 4px solid #f44336 !important; outline-offset: 2px !important; animation: bf-pulse 0.6s ease-in-out infinite !important; }\n      @keyframes bf-pulse { 0%,100% { outline-color: #f44336; box-shadow: 0 0 15px rgba(244,67,54,0.8); } 50% { outline-color: #ff5722; box-shadow:0 0 25px rgba(244,67,54,1); } }\n      .bf-clicking { outline: 3px solid #4caf50 !important; outline-offset: 2px !important; position: relative !important; }\n      .bf-ripple { position: absolute; border-radius: 50%; background: rgba(76,175,80,0.5); transform: scale(0); animation: bf-ripple 0.6s ease-out; pointer-events:none; z-index:9999; }\n      @keyframes bf-ripple { to { transform: scale(4); opacity:0; } }\n      .bf-clicked { animation: bf-fadeout 0.3s ease-out forwards !important; }\n      @keyframes bf-fadeout { to { outline-color: transparent !important; box-shadow:none !important; } }\n      .bf-cursor-wait { cursor: wait !important; }\n      .bf-cursor-move { cursor: crosshair !important; }\n      .bf-cursor-hover { cursor: pointer !important; }\n    ";
    document.head.appendChild(_0xc74179);
  }
  initMouseTracking() {
    document.addEventListener("mousemove", _0x11b40c => {
      this.currentMousePos = {
        x: _0x11b40c.clientX,
        y: _0x11b40c.clientY
      };
    }, {
      passive: true
    });
  }
  getElementType(_0x3cf107) {
    const _0x4ee844 = _0x3cf107.tagName.toLowerCase();
    if (_0x4ee844 === "input") {
      return this.COMPONENT_TYPES.INPUT;
    }
    if (_0x4ee844 === "select") {
      return this.COMPONENT_TYPES.SELECT;
    }
    if (_0x4ee844 === "button") {
      return this.COMPONENT_TYPES.BUTTON;
    }
    if (_0x4ee844 === "a") {
      return this.COMPONENT_TYPES.LINK;
    }
    if (_0x4ee844 === "li") {
      return this.COMPONENT_TYPES.LIST_ITEM;
    }
    if (_0x4ee844 === "div") {
      return this.COMPONENT_TYPES.DIV;
    }
    if (_0x4ee844 === "span") {
      return this.COMPONENT_TYPES.SPAN;
    }
    if (_0x4ee844 === "label") {
      return this.COMPONENT_TYPES.LABEL;
    }
    return this.COMPONENT_TYPES.OTHER;
  }
  getElementText(_0x49c4c4) {
    const _0x2e9f0d = Array.from(_0x49c4c4.childNodes).filter(_0xa71c60 => _0xa71c60.nodeType === Node.TEXT_NODE).map(_0x56540d => _0x56540d.textContent.trim()).join(" ").trim();
    const _0x4e5fe3 = _0x49c4c4.textContent?.["trim"]() || "";
    const _0x2613d1 = _0x49c4c4.value || "";
    const _0x1fcaa5 = _0x49c4c4.placeholder || "";
    return {
      directText: _0x2e9f0d,
      allText: _0x4e5fe3,
      value: _0x2613d1,
      placeholder: _0x1fcaa5,
      searchText: (_0x2e9f0d + " " + _0x4e5fe3 + " " + _0x2613d1 + " " + _0x1fcaa5).trim()
    };
  }
  getElementStyle(_0x5140be) {
    const _0x9a8bce = window.getComputedStyle(_0x5140be);
    const _0x421362 = _0x5140be.getBoundingClientRect();
    return {
      display: _0x9a8bce.display,
      visibility: _0x9a8bce.visibility,
      opacity: _0x9a8bce.opacity,
      rect: {
        top: Math.round(_0x421362.top),
        left: Math.round(_0x421362.left),
        width: Math.round(_0x421362.width),
        height: Math.round(_0x421362.height),
        centerX: Math.round(_0x421362.left + _0x421362.width / 2),
        centerY: Math.round(_0x421362.top + _0x421362.height / 2)
      },
      isVisible: _0x421362.width > 0 && _0x421362.height > 0 && _0x9a8bce.display !== "none" && _0x9a8bce.visibility !== "hidden" && parseFloat(_0x9a8bce.opacity) > 0
    };
  }
  getElementInteraction(_0x1f3186) {
    return {
      isClickable: _0x1f3186.onclick !== null || _0x1f3186.tagName === "BUTTON" || _0x1f3186.tagName === "A" || _0x1f3186.getAttribute("role") === "button",
      isInput: _0x1f3186.tagName === "INPUT" || _0x1f3186.tagName === "SELECT" || _0x1f3186.tagName === "TEXTAREA",
      disabled: _0x1f3186.disabled || _0x1f3186.getAttribute("disabled") !== null
    };
  }
  matchKeywords(_0x36453b, _0x56b254) {
    if (!_0x36453b) {
      return {
        matched: false,
        matchedKeywords: [],
        matchCount: 0
      };
    }
    const _0x1e8e90 = _0x56b254.filter(_0x5c34bd => _0x5c34bd && _0x36453b.includes(_0x5c34bd));
    return {
      matched: _0x1e8e90.length > 0,
      matchedKeywords: _0x1e8e90,
      matchCount: _0x1e8e90.length
    };
  }
  calculatePriority(_0x4014a6) {
    let _0x1de787 = 100;
    const _0x339a06 = {
      [this.COMPONENT_TYPES.INPUT]: -30,
      [this.COMPONENT_TYPES.SELECT]: -25,
      [this.COMPONENT_TYPES.BUTTON]: -15,
      [this.COMPONENT_TYPES.LIST_ITEM]: -10,
      [this.COMPONENT_TYPES.LINK]: -10,
      [this.COMPONENT_TYPES.DIV]: 5,
      [this.COMPONENT_TYPES.SPAN]: 10,
      [this.COMPONENT_TYPES.OTHER]: 20
    };
    _0x1de787 += _0x339a06[_0x4014a6.type] || 0;
    _0x1de787 -= _0x4014a6.match.matchCount * 5;
    if (!_0x4014a6.style.isVisible) {
      _0x1de787 += 50;
    }
    if (_0x4014a6.interaction.isClickable) {
      _0x1de787 -= 20;
    }
    if (_0x4014a6.interaction.isInput) {
      _0x1de787 -= 25;
    }
    if (_0x4014a6.interaction.disabled) {
      _0x1de787 += 30;
    }
    const _0x32e447 = _0x4014a6.text.allText.length;
    if (_0x32e447 > 100) {
      _0x1de787 += 15;
    } else {
      if (_0x32e447 < 30) {
        _0x1de787 -= 10;
      }
    }
    return _0x1de787;
  }
  checkMeta(_0x457dc5) {
    if (!_0x457dc5) {
      return false;
    }
    const _0x5d7e7f = _0x457dc5.toLowerCase();
    if (this.excludeKeywords.some(_0x4cdc5a => _0x5d7e7f.includes(_0x4cdc5a.toLowerCase()))) {
      return false;
    }
    return this.includeKeywords.some(_0x2fbb73 => _0x5d7e7f.includes(_0x2fbb73.toLowerCase()));
  }
  findInputByLabel() {
    const _0x541b2f = Array.from(document.querySelectorAll("label, [role='label'], .label, [class*='label']"));
    for (const _0x516fb8 of _0x541b2f) {
      const _0x20c2ef = (_0x516fb8.textContent || "").trim();
      if (!_0x20c2ef || !this.checkMeta(_0x20c2ef)) {
        continue;
      }
      const _0x2b63dc = _0x516fb8.getAttribute("for");
      if (_0x2b63dc) {
        const _0x143008 = document.getElementById(_0x2b63dc);
        if (_0x143008 && _0x143008.offsetParent !== null && !_0x143008.disabled) {
          return _0x143008;
        }
      }
      const _0x521bcb = _0x516fb8.parentElement;
      if (_0x521bcb) {
        const _0x56c694 = _0x521bcb.querySelectorAll("input[type='text'], input:not([type]), select, [role='textbox'], [role='combobox']");
        for (const _0x1670be of _0x56c694) {
          if (_0x1670be.offsetParent !== null && !_0x1670be.disabled) {
            return _0x1670be;
          }
        }
      }
      let _0x5ec085 = _0x516fb8.nextElementSibling;
      while (_0x5ec085) {
        const _0x5ee992 = _0x5ec085.querySelectorAll("input[type='text'], input:not([type]), select, [role='textbox'], [role='combobox']");
        for (const _0x33a734 of _0x5ee992) {
          if (_0x33a734.offsetParent !== null && !_0x33a734.disabled) {
            return _0x33a734;
          }
        }
        _0x5ec085 = _0x5ec085.nextElementSibling;
      }
    }
    const _0x42a9f1 = document.querySelectorAll("input[type='text'], input:not([type]), select, [role='textbox'], [role='combobox']");
    for (const _0x1dd7ba of _0x42a9f1) {
      if (_0x1dd7ba.disabled || _0x1dd7ba.offsetParent === null) {
        continue;
      }
      const _0x515df8 = _0x1dd7ba.getAttribute("aria-label");
      const _0x162858 = _0x1dd7ba.getAttribute("aria-labelledby");
      const _0x20d381 = [_0x1dd7ba.placeholder, _0x1dd7ba.name, _0x1dd7ba.id, _0x515df8, _0x162858 ? document.getElementById(_0x162858)?.["textContent"] || "" : ""].filter(Boolean).join(" ");
      if (this.checkMeta(_0x20d381)) {
        return _0x1dd7ba;
      }
    }
    return null;
  }
  findBranchComponents(_0x425a9f, _0x24197b = {}) {
    const {
      enableLog = true,
      maxResults = 10,
      onlyVisible = true
    } = _0x24197b;
    enableLog && (this.log("========== 开始查找组件 =========="), this.log("网点路径:", _0x425a9f));
    const _0xbf611d = this.parseBranchPath(_0x425a9f);
    if (!_0xbf611d) {
      return [];
    }
    const _0x5756d6 = [];
    enableLog && this.log("[策略1] 通过 label/placeholder 查找输入框...");
    const _0x4d5f86 = this.findInputByLabel();
    if (_0x4d5f86) {
      const _0x3f5281 = this.getElementText(_0x4d5f86);
      const _0x2ea2b9 = {
        index: 0,
        element: _0x4d5f86,
        type: this.getElementType(_0x4d5f86),
        text: _0x3f5281,
        match: {
          matched: true,
          matchedKeywords: ["兑换网点"],
          matchCount: 1
        },
        style: this.getElementStyle(_0x4d5f86),
        interaction: this.getElementInteraction(_0x4d5f86),
        priority: -1000
      };
      _0x5756d6.push(_0x2ea2b9);
      enableLog && this.log("✓ 通过 label 找到候选输入框");
    } else {
      enableLog && this.warn("✗ 未通过 label 找到输入框，开始全局扫描...");
    }
    const _0x3cbb52 = document.querySelectorAll("*");
    const _0x1179e2 = Math.min(_0x3cbb52.length, this.searchConfig.maxElements);
    for (let _0x53cfa4 = 0; _0x53cfa4 < _0x1179e2; _0x53cfa4++) {
      const _0x2b2a19 = _0x3cbb52[_0x53cfa4];
      if (["script", "style", "meta", "link", "noscript"].includes(_0x2b2a19.tagName.toLowerCase())) {
        continue;
      }
      if (_0x2b2a19 === _0x4d5f86) {
        continue;
      }
      const _0x344f8f = this.getElementText(_0x2b2a19);
      if (_0x344f8f.searchText.length < this.searchConfig.minTextLength || _0x344f8f.searchText.length > this.searchConfig.maxTextLength) {
        continue;
      }
      const _0x18dfbf = this.matchKeywords(_0x344f8f.searchText, _0xbf611d.keywords);
      if (!_0x18dfbf.matched) {
        continue;
      }
      const _0x1c956a = {
        index: _0x5756d6.length,
        element: _0x2b2a19,
        type: this.getElementType(_0x2b2a19),
        text: _0x344f8f,
        match: _0x18dfbf,
        style: this.getElementStyle(_0x2b2a19),
        interaction: this.getElementInteraction(_0x2b2a19),
        priority: 0
      };
      _0x1c956a.priority = this.calculatePriority(_0x1c956a);
      _0x5756d6.push(_0x1c956a);
    }
    _0x5756d6.sort((_0x15aa54, _0x1c79e0) => _0x15aa54.priority - _0x1c79e0.priority);
    let _0x3ddf4c = onlyVisible ? _0x5756d6.filter(_0x16c4cc => _0x16c4cc.style.isVisible) : _0x5756d6;
    _0x3ddf4c = _0x3ddf4c.slice(0, maxResults);
    enableLog && (this.log("共找到候选组件:", _0x3ddf4c.length), this.logComponentSummary(_0x3ddf4c));
    return _0x3ddf4c;
  }
  logComponentSummary(_0x35882a) {
    if (!_0x35882a.length) {
      this.warn("未找到任何匹配的组件");
      return;
    }
    const _0x222cd2 = _0x35882a.map((_0x3aee9c, _0x1559df) => ({
      "序号": _0x1559df + 1,
      "类型": _0x3aee9c.type,
      "文本": _0x3aee9c.text.allText.slice(0, 30),
      "匹配数": _0x3aee9c.match.matchCount,
      "可见": _0x3aee9c.style.isVisible ? "是" : "否",
      "可点击": _0x3aee9c.interaction.isClickable ? "是" : "否",
      "优先级": _0x3aee9c.priority
    }));
    this.log("候选组件：", _0x222cd2);
  }
  generateBezierPath(_0x50ac7d, _0x5b7630, _0x2722d2 = 20) {
    const _0x5979b5 = [];
    const _0x5dc2b9 = _0x5b7630.x - _0x50ac7d.x;
    const _0x53137b = _0x5b7630.y - _0x50ac7d.y;
    const _0x40acd8 = _0x50ac7d.x + _0x5dc2b9 * 0.25 + (Math.random() - 0.5) * 50;
    const _0x5078f2 = _0x50ac7d.y + _0x53137b * 0.25 + (Math.random() - 0.5) * 50;
    const _0x5084f0 = _0x50ac7d.x + _0x5dc2b9 * 0.75 + (Math.random() - 0.5) * 50;
    const _0x5e6858 = _0x50ac7d.y + _0x53137b * 0.75 + (Math.random() - 0.5) * 50;
    for (let _0x201c6e = 0; _0x201c6e <= _0x2722d2; _0x201c6e++) {
      const _0x54f3ed = _0x201c6e / _0x2722d2;
      const _0x5914a9 = 1 - _0x54f3ed;
      const _0x2c7e97 = _0x5914a9 * _0x5914a9 * _0x5914a9 * _0x50ac7d.x + 3 * _0x5914a9 * _0x5914a9 * _0x54f3ed * _0x40acd8 + 3 * _0x5914a9 * _0x54f3ed * _0x54f3ed * _0x5084f0 + _0x54f3ed * _0x54f3ed * _0x54f3ed * _0x5b7630.x;
      const _0x3ddc33 = _0x5914a9 * _0x5914a9 * _0x5914a9 * _0x50ac7d.y + 3 * _0x5914a9 * _0x5914a9 * _0x54f3ed * _0x5078f2 + 3 * _0x5914a9 * _0x54f3ed * _0x54f3ed * _0x5e6858 + _0x54f3ed * _0x54f3ed * _0x54f3ed * _0x5b7630.y;
      _0x5979b5.push({
        x: _0x2c7e97,
        y: _0x3ddc33
      });
    }
    return _0x5979b5;
  }
  async simulateMouseMove(_0x59c908, _0x5b360a = {}) {
    const {
      enableTrajectory = true,
      speedMultiplier = 1
    } = _0x5b360a;
    const _0x57b9c5 = _0x59c908.getBoundingClientRect();
    const _0x26839a = {
      x: _0x57b9c5.left + _0x57b9c5.width / 2 + (Math.random() - 0.5) * 10,
      y: _0x57b9c5.top + _0x57b9c5.height / 2 + (Math.random() - 0.5) * 10
    };
    if (!enableTrajectory) {
      this.triggerMouseEvent(_0x59c908, "mouseover", _0x26839a);
      this.triggerMouseEvent(_0x59c908, "mouseenter", _0x26839a);
      return;
    }
    const _0x2073e4 = this.generateBezierPath(this.currentMousePos, _0x26839a, 20);
    const [_0x341499, _0x14f80c] = this.clickConfig.timing.move;
    const _0xfb85ee = (_0x341499 + Math.random() * (_0x14f80c - _0x341499)) * speedMultiplier / _0x2073e4.length;
    for (const _0x5b79ca of _0x2073e4) {
      this.triggerMouseEvent(_0x59c908, "mousemove", _0x5b79ca);
      await this.delay(_0xfb85ee);
    }
    this.triggerMouseEvent(_0x59c908, "mouseover", _0x26839a);
    this.triggerMouseEvent(_0x59c908, "mouseenter", _0x26839a);
    this.currentMousePos = _0x26839a;
  }
  triggerMouseEvent(_0x8a3209, _0x19addb, _0x4f68aa) {
    const _0x5736e0 = new MouseEvent(_0x19addb, {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: _0x4f68aa.x,
      clientY: _0x4f68aa.y
    });
    _0x8a3209.dispatchEvent(_0x5736e0);
    if (_0x8a3209._reactProps) {
      const _0xe55e87 = _0x8a3209._reactProps["on" + _0x19addb];
      if (_0xe55e87) {
        _0xe55e87(_0x5736e0);
      }
    }
    _0x8a3209.__vue__ && _0x8a3209.__vue__.$emit(_0x19addb, _0x5736e0);
  }
  addVisualFeedback(_0x195151, _0x3fcb37) {
    _0x195151.classList.remove("bf-found", "bf-hovering", "bf-pre-click", "bf-clicking", "bf-clicked", "bf-cursor-wait", "bf-cursor-move", "bf-cursor-hover");
    switch (_0x3fcb37) {
      case "found":
        _0x195151.classList.add("bf-found");
        break;
      case "hovering":
        _0x195151.classList.add("bf-hovering");
        this.clickConfig.enableCursor && _0x195151.classList.add("bf-cursor-hover");
        break;
      case "pre-click":
        _0x195151.classList.add("bf-pre-click");
        break;
      case "clicking":
        _0x195151.classList.add("bf-clicking");
        this.addRippleEffect(_0x195151);
        break;
      case "clicked":
        _0x195151.classList.add("bf-clicked");
        break;
      default:
        break;
    }
  }
  addRippleEffect(_0x815d21) {
    const _0x811e55 = _0x815d21.getBoundingClientRect();
    const _0x4160bc = document.createElement("div");
    _0x4160bc.className = "bf-ripple";
    const _0x1998f6 = Math.max(_0x811e55.width, _0x811e55.height);
    _0x4160bc.style.width = _0x1998f6 + "px";
    _0x4160bc.style.height = _0x1998f6 + "px";
    _0x4160bc.style.left = _0x811e55.width / 2 - _0x1998f6 / 2 + "px";
    _0x4160bc.style.top = _0x811e55.height / 2 - _0x1998f6 / 2 + "px";
    _0x815d21.appendChild(_0x4160bc);
    setTimeout(() => _0x4160bc.remove(), 600);
  }
  removeVisualFeedback(_0x280773) {
    _0x280773.classList.remove("bf-found", "bf-hovering", "bf-pre-click", "bf-clicking", "bf-clicked", "bf-cursor-wait", "bf-cursor-move", "bf-cursor-hover");
  }
  async scrollToElement(_0x224868, _0x5bb708 = {}) {
    const {
      speedMultiplier = 1
    } = _0x5bb708;
    _0x224868.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
    const [_0x19ebe7, _0x260892] = this.clickConfig.timing.scroll;
    await this.randomDelay(_0x19ebe7, _0x260892, speedMultiplier);
  }
  isElementClickable(_0x44611d) {
    const _0x4287b3 = this.getElementStyle(_0x44611d);
    const _0xe7acff = this.getElementInteraction(_0x44611d);
    if (!_0x4287b3.isVisible) {
      return {
        clickable: false,
        reason: "元素不可见"
      };
    }
    if (_0xe7acff.disabled) {
      return {
        clickable: false,
        reason: "元素已禁用"
      };
    }
    return {
      clickable: true
    };
  }
  async humanClick(_0x3e36f3, _0x1a7802 = {}) {
    const _0x3e74fa = _0x3e36f3.element || _0x3e36f3;
    const _0x191132 = {
      enableAnimation: this.clickConfig.enableAnimation,
      enableCursor: this.clickConfig.enableCursor,
      enableTrajectory: this.clickConfig.enableTrajectory,
      speedMultiplier: this.clickConfig.speedMultiplier,
      precise: false,
      ..._0x1a7802
    };
    const _0x4779e7 = async () => {
      const _0x563afc = this.isElementClickable(_0x3e74fa);
      if (!_0x563afc.clickable) {
        throw new Error(_0x563afc.reason);
      }
      await this.scrollToElement(_0x3e74fa, _0x191132);
      const _0x1c9e26 = _0x3e74fa.getBoundingClientRect();
      const _0x38a351 = {
        x: _0x1c9e26.left + _0x1c9e26.width / 2,
        y: _0x1c9e26.top + _0x1c9e26.height / 2
      };
      ["mousemove", "mouseover", "mouseenter", "mousedown", "mouseup", "click"].forEach(_0x3f98ed => this.triggerMouseEvent(_0x3e74fa, _0x3f98ed, _0x38a351));
      _0x3e74fa.click();
      (_0x3e74fa.tagName === "INPUT" || _0x3e74fa.tagName === "SELECT" || _0x3e74fa.getAttribute("role") === "textbox") && (_0x3e74fa.focus(), _0x3e74fa.dispatchEvent(new FocusEvent("focus", {
        bubbles: true,
        cancelable: true
      })), _0x3e74fa.dispatchEvent(new FocusEvent("focusin", {
        bubbles: true,
        cancelable: true
      })), _0x3e74fa.dispatchEvent(new Event("input", {
        bubbles: true,
        cancelable: true
      })), _0x3e74fa.dispatchEvent(new Event("change", {
        bubbles: true,
        cancelable: true
      })));
      return {
        success: true,
        message: "点击成功",
        element: _0x3e74fa
      };
    };
    if (_0x191132.precise) {
      try {
        return await _0x4779e7();
      } catch (_0x1a957c) {
        this.error("精确点击失败:", _0x1a957c);
        return {
          success: false,
          message: _0x1a957c.message,
          element: _0x3e74fa
        };
      }
    }
    this.log("========== 开始拟人化点击 ==========");
    try {
      this.log("[1/7] 预检查...");
      const _0x374959 = this.isElementClickable(_0x3e74fa);
      if (!_0x374959.clickable) {
        throw new Error(_0x374959.reason);
      }
      await this.randomDelay(this.clickConfig.timing.preCheck, this.clickConfig.timing.preCheck, _0x191132.speedMultiplier);
      this.log("[2/7] 滚动到元素...");
      await this.scrollToElement(_0x3e74fa, _0x191132);
      this.log("[3/7] 鼠标移动...");
      if (_0x191132.enableAnimation) {
        this.addVisualFeedback(_0x3e74fa, "found");
      }
      await this.simulateMouseMove(_0x3e74fa, _0x191132);
      this.log("[4/7] 悬停高亮...");
      if (_0x191132.enableAnimation) {
        this.addVisualFeedback(_0x3e74fa, "hovering");
      }
      const [_0x5d7fe3, _0x52667c] = this.clickConfig.timing.hover;
      await this.randomDelay(_0x5d7fe3, _0x52667c, _0x191132.speedMultiplier);
      Math.random() < 0.2 && (this.log("[模拟犹豫] 额外暂停..."), await this.randomDelay(100, 300, _0x191132.speedMultiplier));
      this.log("[5/7] 准备点击...");
      if (_0x191132.enableAnimation) {
        this.addVisualFeedback(_0x3e74fa, "pre-click");
      }
      await this.randomDelay(100, 200, _0x191132.speedMultiplier);
      this.log("[6/7] 鼠标按下...");
      const _0x1bdb99 = _0x3e74fa.getBoundingClientRect();
      const _0x16cedb = {
        x: _0x1bdb99.left + _0x1bdb99.width / 2 + (Math.random() - 0.5) * 5,
        y: _0x1bdb99.top + _0x1bdb99.height / 2 + (Math.random() - 0.5) * 5
      };
      this.triggerMouseEvent(_0x3e74fa, "mousedown", _0x16cedb);
      const [_0x47948a, _0x6a30d] = this.clickConfig.timing.mousedown;
      await this.randomDelay(_0x47948a, _0x6a30d, _0x191132.speedMultiplier);
      this.log("[7/7] 执行点击...");
      if (_0x191132.enableAnimation) {
        this.addVisualFeedback(_0x3e74fa, "clicking");
      }
      this.triggerMouseEvent(_0x3e74fa, "mouseup", _0x16cedb);
      this.triggerMouseEvent(_0x3e74fa, "click", _0x16cedb);
      _0x3e74fa.click();
      if (_0x3e74fa.tagName === "INPUT" || _0x3e74fa.tagName === "SELECT" || _0x3e74fa.getAttribute("role") === "textbox") {
        _0x3e74fa.focus();
        _0x3e74fa.dispatchEvent(new FocusEvent("focus", {
          bubbles: true,
          cancelable: true
        }));
        _0x3e74fa.dispatchEvent(new FocusEvent("focusin", {
          bubbles: true,
          cancelable: true
        }));
        await this.delay(100);
        _0x3e74fa.dispatchEvent(new Event("input", {
          bubbles: true,
          cancelable: true
        }));
        _0x3e74fa.dispatchEvent(new Event("change", {
          bubbles: true,
          cancelable: true
        }));
        const _0x23bb4f = _0x3e74fa.parentElement;
        if (_0x23bb4f) {
          const _0x35097b = [".el-input__suffix", ".el-select__caret", ".el-icon-arrow-down", "[class*='arrow']", "[class*='caret']", ".el-input__suffix-inner"];
          for (const _0x2a610a of _0x35097b) {
            const _0x789234 = _0x23bb4f.querySelector(_0x2a610a);
            if (_0x789234) {
              _0x789234.click();
              await this.delay(100);
              break;
            }
          }
        }
        _0x3e74fa.dispatchEvent(new KeyboardEvent("keydown", {
          key: "ArrowDown",
          code: "ArrowDown",
          keyCode: 40,
          bubbles: true,
          cancelable: true
        }));
        await this.delay(50);
        _0x3e74fa.dispatchEvent(new KeyboardEvent("keyup", {
          key: "ArrowDown",
          code: "ArrowDown",
          keyCode: 40,
          bubbles: true,
          cancelable: true
        }));
      }
      const [_0x29955c, _0x21015a] = this.clickConfig.timing.click;
      await this.randomDelay(_0x29955c, _0x21015a, _0x191132.speedMultiplier);
      _0x191132.enableAnimation && (this.addVisualFeedback(_0x3e74fa, "clicked"), setTimeout(() => this.removeVisualFeedback(_0x3e74fa), 300));
      this.log("========== 点击成功 ==========");
      return {
        success: true,
        message: "点击成功",
        element: _0x3e74fa
      };
    } catch (_0x1b34f3) {
      this.error("点击失败:", _0x1b34f3);
      this.removeVisualFeedback(_0x3e74fa);
      return {
        success: false,
        message: _0x1b34f3.message,
        element: _0x3e74fa
      };
    }
  }
  findMultiLevelDropdown(_0x4e733b) {
    const _0x31e489 = ["[role='menu']", ".el-select-dropdown", ".el-popper", ".ant-select-dropdown", ".el-cascader-menu", ".cascader-menu", "[class*='dropdown']", "[class*='menu']", "[class*='select']"];
    const _0x17ea43 = _0x4e733b.getBoundingClientRect();
    let _0x5bbe37 = null;
    let _0x295bbe = -Infinity;
    _0x31e489.forEach(_0x2418eb => {
      try {
        const _0x13df35 = document.querySelectorAll(_0x2418eb);
        _0x13df35.forEach(_0x4cc9b2 => {
          const _0x2c7b08 = window.getComputedStyle(_0x4cc9b2);
          if (_0x2c7b08.display === "none" || _0x2c7b08.visibility === "hidden") {
            return;
          }
          if (parseFloat(_0x2c7b08.opacity) === 0) {
            return;
          }
          const _0x402316 = _0x4cc9b2.getBoundingClientRect();
          if (_0x402316.width < 50 || _0x402316.height < 50) {
            return;
          }
          const _0x3956e4 = _0x4cc9b2.querySelectorAll("[role='list'], ul[role='list'], .el-select-dropdown__list, .el-scrollbar__view, ul");
          if (!_0x3956e4.length && !_0x4cc9b2.querySelector("[role='menuitem'], li")) {
            return;
          }
          let _0x7a1fc = Math.abs(_0x402316.top - _0x17ea43.bottom);
          _0x402316.top < _0x17ea43.bottom && (_0x7a1fc = Math.abs(_0x402316.bottom - _0x17ea43.top));
          const _0x334d1a = 1000 - _0x7a1fc + (_0x3956e4.length > 1 ? 300 : _0x3956e4.length === 1 ? 100 : 0) + _0x4cc9b2.querySelectorAll("[role='menuitem'], li").length;
          _0x334d1a > _0x295bbe && (_0x295bbe = _0x334d1a, _0x5bbe37 = _0x4cc9b2);
        });
      } catch (_0x539435) {
        this.warn("选择器查找出错", _0x2418eb, _0x539435);
      }
    });
    _0x5bbe37 && this.log("找到下拉菜单容器，评分:", _0x295bbe);
    return _0x5bbe37;
  }
  async forceOpenDropdown(_0x481e86) {
    this.log("尝试强制打开下拉菜单...");
    if (this.findMultiLevelDropdown(_0x481e86)) {
      this.log("下拉菜单已经打开");
      return;
    }
    try {
      _0x481e86.focus();
      _0x481e86.dispatchEvent(new FocusEvent("focus", {
        bubbles: true,
        cancelable: true
      }));
      _0x481e86.dispatchEvent(new FocusEvent("focusin", {
        bubbles: true,
        cancelable: true
      }));
      await this.delay(50);
      let _0x5a477f = _0x481e86.parentElement;
      let _0x21bd62 = 0;
      while (_0x5a477f && _0x21bd62 < 5) {
        const _0x2a5814 = _0x5a477f.querySelectorAll(".el-input__suffix, .el-select__caret, .el-icon-arrow-down, .el-input__suffix-inner, [class*='suffix'], [class*='arrow'], [class*='caret'], .el-cascader__caret, i.el-icon-arrow-down");
        for (const _0x15102b of _0x2a5814) {
          const _0x452604 = window.getComputedStyle(_0x15102b);
          if (_0x452604.display !== "none" && _0x452604.visibility !== "hidden") {
            _0x15102b.click();
            await this.delay(50);
            if (this.findMultiLevelDropdown(_0x481e86)) {
              return;
            }
          }
        }
        if (_0x5a477f.classList.contains("el-input") || _0x5a477f.classList.contains("el-select") || _0x5a477f.classList.contains("el-cascader")) {
          _0x5a477f.click();
          await this.delay(50);
          if (this.findMultiLevelDropdown(_0x481e86)) {
            return;
          }
        }
        _0x5a477f = _0x5a477f.parentElement;
        _0x21bd62++;
      }
      const _0x4fc363 = _0x481e86.__vue__ || _0x481e86.__vueParentComponent;
      if (_0x4fc363) {
        if (typeof _0x4fc363.toggleMenu === "function") {
          _0x4fc363.toggleMenu();
          await this.delay(50);
          if (this.findMultiLevelDropdown(_0x481e86)) {
            return;
          }
        }
        if (typeof _0x4fc363.handleClick === "function") {
          _0x4fc363.handleClick();
          await this.delay(50);
          if (this.findMultiLevelDropdown(_0x481e86)) {
            return;
          }
        }
      }
      const _0x1bc6f9 = [{
        key: "ArrowDown",
        keyCode: 40
      }, {
        key: "Space",
        keyCode: 32
      }, {
        key: "Enter",
        keyCode: 13
      }];
      for (const _0x10829c of _0x1bc6f9) {
        _0x481e86.dispatchEvent(new KeyboardEvent("keydown", {
          key: _0x10829c.key,
          code: _0x10829c.key,
          keyCode: _0x10829c.keyCode,
          which: _0x10829c.keyCode,
          bubbles: true,
          cancelable: true
        }));
        await this.delay(30);
        if (this.findMultiLevelDropdown(_0x481e86)) {
          return;
        }
        _0x481e86.dispatchEvent(new KeyboardEvent("keyup", {
          key: _0x10829c.key,
          code: _0x10829c.key,
          keyCode: _0x10829c.keyCode,
          which: _0x10829c.keyCode,
          bubbles: true,
          cancelable: true
        }));
        await this.delay(50);
        if (this.findMultiLevelDropdown(_0x481e86)) {
          return;
        }
      }
    } catch (_0x366115) {
      this.warn("强制打开下拉菜单出错:", _0x366115);
    }
  }
  getDropdownColumns(_0x36cf97) {
    if (!_0x36cf97) {
      return [];
    }
    const _0x43479a = ["[role='list']", "ul[role='list']", ".el-scrollbar__view", ".el-select-dropdown__list", ".el-cascader-menu", "ul", "ol"];
    const _0x18db75 = [];
    _0x43479a.forEach(_0xc12c41 => {
      const _0x3bdf85 = _0x36cf97.querySelectorAll(_0xc12c41);
      _0x3bdf85.forEach(_0x226b24 => {
        const _0x45e75a = window.getComputedStyle(_0x226b24);
        const _0x24e7cb = _0x226b24.getBoundingClientRect();
        if (_0x45e75a.display === "none" || _0x45e75a.visibility === "hidden" || _0x24e7cb.width < 30 || _0x24e7cb.height < 20) {
          return;
        }
        const _0x27b9e8 = _0x226b24.querySelector("[role='menuitem'], li[role='menuitem'], li[role='option'], li, .el-cascader-node");
        if (!_0x27b9e8) {
          return;
        }
        !_0x18db75.some(_0x1e1b7e => {
          const _0xdfcb2a = _0x1e1b7e.getBoundingClientRect();
          return _0x1e1b7e.contains(_0x226b24) || _0x226b24.contains(_0x1e1b7e) || Math.abs(_0xdfcb2a.left - _0x24e7cb.left) < 10;
        }) && _0x18db75.push(_0x226b24);
      });
    });
    if (!_0x18db75.length) {
      const _0x466447 = _0x36cf97.querySelector("[role='menu']");
      if (_0x466447) {
        _0x18db75.push(_0x466447);
      }
    }
    if (!_0x18db75.length) {
      _0x18db75.push(_0x36cf97);
    }
    _0x18db75.sort((_0x453701, _0x335950) => {
      const _0x18ef74 = _0x453701.getBoundingClientRect();
      const _0x3e1ce6 = _0x335950.getBoundingClientRect();
      const _0x32a1ca = _0x18ef74.left - _0x3e1ce6.left;
      if (Math.abs(_0x32a1ca) < 10) {
        return _0x18ef74.top - _0x3e1ce6.top;
      }
      return _0x32a1ca;
    });
    this.log("识别列数量:", _0x18db75.length);
    return _0x18db75;
  }
  findMatchingOptionInColumn(_0x2c19e2, _0x34c07e) {
    if (!_0x2c19e2 || !_0x34c07e) {
      return null;
    }
    const _0x4afc8d = ["[role='menuitem']", "[role='option']", "li[role='menuitem']", "li[role='option']", ".el-select-dropdown__item", ".el-cascader-node", "li"];
    const _0x5c87e6 = [];
    _0x4afc8d.some(_0x5e4361 => {
      const _0x4ea34b = _0x2c19e2.querySelectorAll(_0x5e4361);
      if (!_0x4ea34b.length) {
        return false;
      }
      _0x4ea34b.forEach(_0xfd607b => {
        const _0x26532e = (_0xfd607b.textContent || "").trim();
        if (_0x26532e && _0x26532e !== "请选择" && _0x26532e !== "请选择...") {
          const _0x2c5ccd = window.getComputedStyle(_0xfd607b);
          const _0x19a86f = _0xfd607b.getBoundingClientRect();
          _0x2c5ccd.display !== "none" && _0x2c5ccd.visibility !== "hidden" && _0x19a86f.width > 0 && _0x19a86f.height > 0 && _0x5c87e6.push({
            element: _0xfd607b,
            text: _0x26532e
          });
        }
      });
      return _0x5c87e6.length > 0;
    });
    if (!_0x5c87e6.length) {
      return null;
    }
    let _0x55f931 = null;
    let _0x4fb209 = 0;
    _0x5c87e6.forEach(_0x84bed3 => {
      const _0x1a2646 = _0x84bed3.text;
      let _0x31fa54 = 0;
      if (_0x1a2646 === _0x34c07e) {
        _0x31fa54 = 10000;
      } else {
        if (_0x1a2646.includes(_0x34c07e)) {
          _0x31fa54 = 5000 + _0x34c07e.length;
        } else {
          if (_0x34c07e.includes(_0x1a2646)) {
            _0x31fa54 = 3000 + _0x1a2646.length;
          } else {
            const _0x5ee906 = _0x23c381 => _0x23c381.replace(/省分行|分行|支行|营业部|营业室|市|县|区|镇|乡/g, "").trim();
            const _0x1dafe8 = _0x5ee906(_0x34c07e);
            const _0x504836 = _0x5ee906(_0x1a2646);
            if (_0x1dafe8 && _0x504836.includes(_0x1dafe8)) {
              _0x31fa54 = 2000 + _0x1dafe8.length * 10;
            } else {
              _0x504836 && _0x1dafe8.includes(_0x504836) && (_0x31fa54 = 1800 + _0x504836.length * 10);
            }
          }
        }
      }
      _0x31fa54 > _0x4fb209 && (_0x4fb209 = _0x31fa54, _0x55f931 = _0x84bed3);
    });
    return _0x55f931;
  }
  async selectFromDropdown(_0x30373d, _0x54f1ea, _0x2d77dc = {}) {
    const _0xaad3c9 = this.parseBranchPath(_0x30373d);
    if (!_0xaad3c9) {
      return {
        success: false,
        message: "网点路径解析失败"
      };
    }
    const _0x1c8965 = typeof _0x2d77dc.speedMultiplier === "number" ? _0x2d77dc.speedMultiplier : this.clickConfig.speedMultiplier;
    this.log("========== 开始多级联动选择 ==========");
    this.log("网点路径:", _0x30373d);
    await this.forceOpenDropdown(_0x54f1ea);
    let _0x3761ff = this.findMultiLevelDropdown(_0x54f1ea);
    if (!_0x3761ff) {
      this.warn("未找到下拉菜单容器，尝试单级选择");
      return this.selectFromSingleDropdown(_0x30373d, _0x54f1ea);
    }
    const _0x113ef7 = [];
    for (let _0xfad390 = 0; _0xfad390 < _0xaad3c9.parts.length; _0xfad390++) {
      const _0x1f53df = _0xaad3c9.parts[_0xfad390];
      if (!_0x1f53df) {
        continue;
      }
      this.log("[第 " + (_0xfad390 + 1) + " 级] 查找:", _0x1f53df);
      let _0x45e8ea = this.getDropdownColumns(_0x3761ff);
      if (_0x45e8ea.length <= _0xfad390) {
        let _0x5deee1 = 0;
        while (_0x5deee1 < 8 && _0x45e8ea.length <= _0xfad390) {
          await this.delay(40 * _0x1c8965);
          _0x45e8ea = this.getDropdownColumns(_0x3761ff);
          _0x5deee1++;
        }
      }
      if (!_0x45e8ea.length) {
        return {
          success: false,
          message: "未找到第 " + (_0xfad390 + 1) + " 级列表",
          selectedParts: _0x113ef7
        };
      }
      const _0x12d9d2 = _0x45e8ea[Math.min(_0xfad390, _0x45e8ea.length - 1)];
      let _0x378cd7 = this.findMatchingOptionInColumn(_0x12d9d2, _0x1f53df);
      if (!_0x378cd7) {
        this.warn("未找到匹配选项，使用第一个可用项");
        const _0x347527 = _0x12d9d2.querySelector("[role='menuitem'], li");
        if (!_0x347527) {
          return {
            success: false,
            message: "未找到 " + _0x1f53df,
            selectedParts: _0x113ef7
          };
        }
        _0x378cd7 = {
          element: _0x347527,
          text: _0x347527.textContent?.["trim"]() || _0x347527.innerText || ""
        };
      }
      _0x378cd7.element.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      await this.delay(120 * _0x1c8965);
      const _0x13e21c = _0xfad390 === _0xaad3c9.parts.length - 1;
      const _0x37fecf = await this.humanClick(_0x378cd7.element, {
        enableLog: false,
        enableAnimation: false,
        enableTrajectory: false,
        precise: true,
        speedMultiplier: _0x1c8965
      });
      if (!_0x37fecf.success) {
        return {
          success: false,
          message: "点击 " + _0x1f53df + " 失败: " + _0x37fecf.message,
          selectedParts: _0x113ef7
        };
      }
      _0x113ef7.push(_0x378cd7.text || _0x1f53df);
      !_0x13e21c && (await this.delay(220 * _0x1c8965), _0x3761ff = this.findMultiLevelDropdown(_0x54f1ea) || _0x3761ff, !_0x3761ff && (await this.forceOpenDropdown(_0x54f1ea), _0x3761ff = this.findMultiLevelDropdown(_0x54f1ea)));
    }
    if (_0x54f1ea.tagName?.["toLowerCase"]() === "input" || _0x54f1ea.getAttribute("role") === "textbox" || _0x54f1ea.getAttribute("role") === "combobox") {
      const _0x2c6a73 = _0x113ef7.join(" / ");
      _0x54f1ea.value = _0x2c6a73;
      _0x54f1ea.dispatchEvent(new Event("input", {
        bubbles: true,
        cancelable: true
      }));
      _0x54f1ea.dispatchEvent(new Event("change", {
        bubbles: true,
        cancelable: true
      }));
      if (_0x54f1ea.__vueParentComponent || _0x54f1ea.__vue__) {
        try {
          const _0x48a4d7 = _0x54f1ea.__vueParentComponent || _0x54f1ea.__vue__;
          _0x48a4d7?.["props"]?.["modelValue"] !== undefined && _0x48a4d7.$emit("update:modelValue", _0x2c6a73);
          _0x48a4d7?.["modelValue"] !== undefined && (_0x48a4d7.modelValue = _0x2c6a73);
        } catch (_0x2fed99) {
          this.warn("Vue 实例更新失败:", _0x2fed99);
        }
      }
      await this.delay(200);
      _0x54f1ea.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        bubbles: true,
        cancelable: true
      }));
      _0x54f1ea.blur();
      await this.delay(100);
      document.body.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 0
      }));
    }
    return {
      success: true,
      message: "多级联动选择成功",
      selectedParts: _0x113ef7,
      fullPath: _0x113ef7.join(" / ")
    };
  }
  async selectFromSingleDropdown(_0x2130eb, _0x1814d4) {
    const _0x2c41b1 = this.parseBranchPath(_0x2130eb);
    if (!_0x2c41b1) {
      return {
        success: false,
        message: "网点路径解析失败"
      };
    }
    await this.forceOpenDropdown(_0x1814d4);
    await this.delay(300);
    let _0x5bfeff = 0;
    const _0x3b6e86 = 150;
    while (_0x5bfeff < 30) {
      const _0x2634cf = this.findMultiLevelDropdown(_0x1814d4);
      if (_0x2634cf) {
        const _0x4eb80b = ["[role='menuitem']", "li[role='menuitem']", "[role='option']", "li[role='option']", ".el-select-dropdown__item", ".ant-select-item", "li"];
        let _0x24f432 = [];
        _0x4eb80b.some(_0x3d2236 => {
          const _0x2291d5 = _0x2634cf.querySelectorAll(_0x3d2236);
          if (_0x2291d5.length) {
            _0x24f432 = Array.from(_0x2291d5).filter(_0x329c42 => {
              const _0x141c18 = (_0x329c42.textContent || "").trim();
              const _0xcf27b = window.getComputedStyle(_0x329c42);
              const _0x315141 = _0x329c42.getBoundingClientRect();
              return _0x141c18 && _0x141c18 !== "请选择" && _0xcf27b.display !== "none" && _0xcf27b.visibility !== "hidden" && _0x315141.width > 0 && _0x315141.height > 0;
            });
            return _0x24f432.length > 0;
          }
          return false;
        });
        if (!_0x24f432.length) {
          _0x5bfeff++;
          await this.delay(_0x3b6e86);
          continue;
        }
        let _0x25bd23 = null;
        let _0x6c25d2 = 0;
        _0x24f432.forEach(_0x5bce2f => {
          const _0x56a9df = (_0x5bce2f.textContent || "").trim();
          let _0x8becac = 0;
          if (_0x56a9df === _0x2c41b1.fullPath) {
            _0x8becac = 10000;
          } else {
            if (_0x56a9df.includes(_0x2c41b1.fullPath)) {
              _0x8becac = 5000;
            } else {
              if (_0x2c41b1.fullPath.includes(_0x56a9df)) {
                _0x8becac = 3000;
              } else {
                _0x2c41b1.parts.forEach(_0x3843e6 => {
                  if (!_0x3843e6) {
                    return;
                  }
                  if (_0x56a9df.includes(_0x3843e6)) {
                    _0x8becac += 500;
                  } else {
                    if (_0x3843e6.includes(_0x56a9df)) {
                      _0x8becac += 300;
                    }
                  }
                });
              }
            }
          }
          _0x8becac > _0x6c25d2 && (_0x6c25d2 = _0x8becac, _0x25bd23 = _0x5bce2f);
        });
        if (_0x25bd23) {
          const _0x50f307 = await this.humanClick(_0x25bd23, {
            enableLog: false
          });
          if (_0x50f307.success) {
            return {
              success: true,
              message: "单级选择成功",
              selectedOption: _0x25bd23,
              selectedText: _0x25bd23.textContent.trim()
            };
          }
          this.warn("单级选项点击失败:", _0x50f307.message);
        }
      } else {
        _0x5bfeff % 5 === 0 && this.log("等待下拉菜单出现...", "已等待 " + _0x5bfeff * _0x3b6e86 + "ms");
      }
      _0x5bfeff++;
      await this.delay(_0x3b6e86);
    }
    return {
      success: false,
      message: "未找到下拉菜单或匹配选项"
    };
  }
  async autoFillBranch(_0x556863, _0x3e1052 = {}) {
    this.log("========== 开始自动填充 ==========");
    this.log("网点路径:", _0x556863);
    try {
      const _0x2f415a = this.findBranchComponents(_0x556863, {
        enableLog: _0x3e1052.enableLog !== false,
        maxResults: 10,
        onlyVisible: true
      });
      if (!_0x2f415a.length) {
        throw new Error("未找到匹配的网点组件");
      }
      this.log("找到候选组件数量:", _0x2f415a.length);
      const _0x178a13 = _0x2f415a[0];
      const _0x4758c1 = _0x178a13.element || _0x178a13;
      const _0x42e863 = ["证件类型", "证件", "身份证", "手机", "验证码"];
      const _0x1f7062 = ((_0x4758c1.placeholder || "") + _0x4758c1.name + _0x4758c1.id + (_0x4758c1.getAttribute("aria-label") || "")).toLowerCase();
      if (_0x42e863.some(_0x3e8667 => _0x1f7062.includes(_0x3e8667))) {
        throw new Error("找到的组件不是网点字段");
      }
      const _0x494fde = await this.humanClick(_0x4758c1, _0x3e1052);
      if (!_0x494fde.success) {
        throw new Error(_0x494fde.message);
      }
      const _0x245b45 = _0x4758c1.tagName?.["toLowerCase"]();
      if (_0x245b45 === "input" || _0x4758c1.getAttribute("role") === "textbox" || _0x4758c1.getAttribute("role") === "combobox") {
        await this.forceOpenDropdown(_0x4758c1);
        const _0x366358 = await this.selectFromDropdown(_0x556863, _0x4758c1, _0x3e1052);
        if (_0x366358.success) {
          return {
            success: true,
            message: "自动填充成功（多级选择）",
            component: _0x4758c1,
            selectedParts: _0x366358.selectedParts
          };
        }
        this.warn("多级选择失败，尝试直接填值:", _0x366358.message);
        _0x4758c1.value = _0x556863;
        _0x4758c1.dispatchEvent(new Event("input", {
          bubbles: true
        }));
        _0x4758c1.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        return {
          success: true,
          message: "直接填充路径（未点击下拉）",
          warning: _0x366358.message
        };
      }
      return {
        success: true,
        message: "自动填充成功（组件已点击）",
        component: _0x4758c1
      };
    } catch (_0x17849b) {
      this.error("自动填充失败:", _0x17849b);
      return {
        success: false,
        message: _0x17849b.message,
        error: _0x17849b
      };
    }
  }
}
typeof window !== "undefined" && (window.BranchFinder = BranchFinder, window.__branchFinder__ = new BranchFinder(), console.log("[BranchFinder] 模块已加载"));
typeof module !== "undefined" && module.exports && (module.exports = BranchFinder);