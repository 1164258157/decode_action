//Mon Dec 15 2025 04:41:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const _0x361593 = {
    id: "ICBC",
    detect: () => location.hostname.includes("icbc"),
    async waitForOpen() {},
    getSelectorMap: () => ({
      fullName: "#custName, input[name=\"custName\"]",
      idType: "#idType, select[name=\"idType\"]",
      idNumber: "#idNo, input[name=\"idNo\"]",
      mobile: "#mobile, input[name=\"mobile\"]",
      address: "#address, textarea[name=\"address\"]",
      zipCode: "#zip, input[name=\"zip\"]",
      province: "select#province",
      city: "select#city",
      district: "select#district",
      submitButton: "button#submit, button.btn-submit, .submit"
    }),
    async fillForm(_0x1f6c77) {
      console.log("[ICBC] fillForm 被调用（使用智能匹配逻辑）");
      console.log("[ICBC] 接收到的数据：", _0x1f6c77);
      const _0x227a60 = window.__SX_SMART_FIND__;
      if (typeof _0x227a60 !== "function") {
        console.warn("[ICBC] 未找到智能匹配函数 __SX_SMART_FIND__，无法智能匹配表单");
        return;
      }
      function _0x230e20(_0x5b5a9a, _0x30ad0f, _0x474081) {
        if (!_0x30ad0f) {
          console.log("[ICBC] 跳过 " + _0x5b5a9a + "，值为空");
          return;
        }
        console.log("[ICBC] 尝试通过智能匹配填写 " + _0x5b5a9a + "（" + _0x474081 + "）：", _0x30ad0f);
        const _0x4c04b2 = _0x227a60(_0x5b5a9a);
        console.log("[ICBC] 智能匹配到的 " + _0x5b5a9a + " 元素：", _0x4c04b2);
        _0x4c04b2 ? (_0x4c04b2.value = _0x30ad0f, _0x4c04b2.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x4c04b2.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[ICBC] " + _0x5b5a9a + " 填写成功，当前值：", _0x4c04b2.value)) : console.warn("[ICBC] 未通过智能匹配找到 " + _0x5b5a9a + " 对应的输入框");
      }
      _0x230e20("fullName", _0x1f6c77.name, "姓名");
      _0x230e20("idNumber", _0x1f6c77.idcard, "证件号码");
      _0x230e20("mobile", _0x1f6c77.phone, "手机号");
      const _0x1f8384 = [_0x1f6c77.province, _0x1f6c77.city, _0x1f6c77.district].filter(Boolean).join("");
      _0x230e20("address", _0x1f8384, "地址");
      if (_0x1f6c77.quantity) {
        console.log("[ICBC] 尝试填写预约数量：", _0x1f6c77.quantity);
        const _0x4fe50e = ["input[placeholder*=\"预约数量\"]", "input[placeholder*=\"数量\"]", "input[placeholder*=\"份额\"]", "input[type=\"number\"]"];
        let _0x108379 = null;
        for (const _0x2066e6 of _0x4fe50e) {
          _0x108379 = document.querySelector(_0x2066e6);
          if (_0x108379) {
            console.log("[ICBC] 通过选择器找到预约数量输入框：", _0x2066e6, _0x108379);
            break;
          }
        }
        if (!_0x108379) {
          const _0x3611a0 = Array.from(document.querySelectorAll("input"));
          console.log("[ICBC] 预约数量未通过选择器找到，遍历 input 进一步尝试...");
          for (const _0x53e291 of _0x3611a0) {
            const _0x40ba17 = (_0x53e291.placeholder || "").trim();
            if (_0x40ba17.includes("数量") || _0x40ba17.includes("份") || _0x40ba17.includes("预约")) {
              _0x108379 = _0x53e291;
              console.log("[ICBC] 通过 placeholder 猜测的预约数量输入框：", _0x53e291);
              break;
            }
          }
        }
        _0x108379 ? (_0x108379.value = String(_0x1f6c77.quantity), _0x108379.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x108379.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[ICBC] 预约数量填写成功，当前值：", _0x108379.value)) : console.warn("[ICBC] 未找到预约数量输入框，请检查页面结构或占位符文本");
      }
      if (_0x1f6c77.exchangeTime) {
        const _0x19efa7 = this.normalizeExchangeDate(_0x1f6c77.exchangeTime);
        if (_0x19efa7) {
          console.log("[ICBC] 尝试填写兑换日期：", _0x19efa7);
          const _0x29e34f = this.findExchangeDateInput() || document.querySelector("input[type=\"date\"]");
          _0x29e34f ? (_0x29e34f.value = _0x19efa7, _0x29e34f.dispatchEvent(new Event("input", {
            bubbles: true
          })), _0x29e34f.dispatchEvent(new Event("change", {
            bubbles: true
          })), console.log("[ICBC] 兑换日期填写成功，当前值：", _0x29e34f.value)) : console.warn("[ICBC] 未找到兑换日期输入框，请检查页面结构或占位符文本");
        } else {
          console.warn("[ICBC] 兑换日期格式不正确：", _0x1f6c77.exchangeTime);
        }
      }
      const _0x16cc70 = _0x1f6c77.province || _0x1f6c77.city || _0x1f6c77.district || _0x1f6c77.branch;
      if (_0x16cc70) {
        const _0x5ac5ff = await this.fillICBCBranchSelectors(_0x1f6c77);
        let _0xa3de32 = _0x5ac5ff.success;
        if (!_0xa3de32 && _0x1f6c77.branch) {
          const _0x5965e7 = [_0x1f6c77.province, _0x1f6c77.city, _0x1f6c77.branch].filter(Boolean).join("/");
          console.log("[ICBC] 专用选择失败，尝试 BranchFinder：", _0x5965e7);
          if (window.__branchFinder__?.["autoFillBranch"]) {
            try {
              const _0x1719bb = await window.__branchFinder__.autoFillBranch(_0x5965e7, {
                enableLog: BRANCH_FINDER_LOG_ENABLED
              });
              console.log("[ICBC] BranchFinder 返回：", _0x1719bb);
              _0xa3de32 = !!_0x1719bb?.["success"];
            } catch (_0x3f76ba) {
              console.warn("[ICBC] BranchFinder 执行报错：", _0x3f76ba);
            }
          }
        }
        if (!_0xa3de32 && _0x1f6c77.branch) {
          console.log("[ICBC] BranchFinder 也失败，使用回退逻辑定位网点输入框...");
          const _0x45752a = this.findBranchInputFallback();
          console.log("[ICBC] 回退逻辑匹配到的网点输入框：", _0x45752a);
          const _0x2e4507 = [_0x1f6c77.province, _0x1f6c77.city, _0x1f6c77.branch].filter(Boolean).join("/");
          _0x45752a ? (_0x45752a.value = _0x2e4507, _0x45752a.dispatchEvent(new Event("input", {
            bubbles: true
          })), _0x45752a.dispatchEvent(new Event("change", {
            bubbles: true
          })), console.log("[ICBC] 网点填写成功，当前值：", _0x45752a.value)) : console.warn("[ICBC] 未找到网点输入框，请检查页面上与“网点/兑换网点”相关的字段");
        }
      }
      this.autoCheckAgreementCheckboxes();
      console.log("[ICBC] fillForm 执行完成（智能匹配逻辑结束）");
    },
    delay(_0x4e7550) {
      return new Promise(_0x46f763 => setTimeout(_0x46f763, _0x4e7550));
    },
    findSelectInputByPlaceholder(_0x288d94 = []) {
      const _0x365340 = Array.from(document.querySelectorAll("input.el-input__inner"));
      return _0x365340.find(_0x346e38 => {
        const _0x424e91 = (_0x346e38.placeholder || "").trim();
        return _0x288d94.some(_0x4a6344 => _0x424e91.includes(_0x4a6344));
      });
    },
    autoCheckAgreementCheckboxes() {
      try {
        const _0x1e5b94 = ["阅读", "同意", "协议", "声明", "须知", "知悉", "约定"];
        const _0x1afcfe = new Set();
        const _0x5ca0b3 = _0x3e13df => {
          if (!_0x3e13df || _0x3e13df.disabled) {
            return;
          }
          const _0x4b807d = _0x3e13df.closest(".el-checkbox") || _0x3e13df.parentElement || _0x3e13df;
          const _0x23335f = _0x4b807d.querySelector(".el-checkbox__input") || _0x4b807d;
          const _0x3bc495 = _0x4b807d.querySelector(".el-checkbox__label");
          if (_0x3e13df.checked || _0x23335f.classList.contains("is-checked")) {
            return;
          }
          const _0x2bc554 = _0x3bc495 || _0x23335f;
          _0x2bc554.click();
          _0x1afcfe.add(_0x3e13df);
        };
        const _0x1b1a6c = Array.from(document.querySelectorAll("label, [role='label'], .label, [class*='label']"));
        for (const _0x477a02 of _0x1b1a6c) {
          const _0x64520e = (_0x477a02.textContent || "").trim();
          if (!_0x64520e) {
            continue;
          }
          if (!_0x1e5b94.some(_0x29de08 => _0x64520e.includes(_0x29de08))) {
            continue;
          }
          let _0x54ff7f = null;
          const _0x2fd056 = _0x477a02.getAttribute("for");
          if (_0x2fd056) {
            const _0x51de80 = document.getElementById(_0x2fd056);
            _0x51de80 && _0x51de80.type === "checkbox" && (_0x54ff7f = _0x51de80);
          }
          if (!_0x54ff7f) {
            const _0x98d035 = _0x477a02.closest(".el-form-item, .el-checkbox, .el-col, .el-row") || _0x477a02.parentElement;
            _0x98d035 && (_0x54ff7f = _0x98d035.querySelector("input[type='checkbox']") || _0x98d035.querySelector(".el-checkbox input[type='checkbox']"));
          }
          _0x54ff7f && !_0x54ff7f.disabled && !_0x1afcfe.has(_0x54ff7f) && (console.log("[ICBC] 自动勾选协议勾选框（通过 label 匹配）：", _0x64520e, _0x54ff7f), _0x5ca0b3(_0x54ff7f));
        }
        const _0x39c2ea = Array.from(document.querySelectorAll("input[type='checkbox']"));
        for (const _0x34634f of _0x39c2ea) {
          if (_0x1afcfe.has(_0x34634f) || _0x34634f.disabled) {
            continue;
          }
          const _0x30358a = _0x34634f.closest(".el-checkbox, .el-form-item, .el-col, .el-row") || _0x34634f.parentElement;
          let _0x673813 = "";
          _0x30358a && (_0x673813 = (_0x30358a.textContent || "").trim());
          if (!_0x673813) {
            continue;
          }
          if (!_0x1e5b94.some(_0x108af6 => _0x673813.includes(_0x108af6))) {
            continue;
          }
          console.log("[ICBC] 自动勾选协议勾选框（通过周围文本匹配）：", _0x673813, _0x34634f);
          _0x5ca0b3(_0x34634f);
        }
      } catch (_0x4fa1ff) {
        console.warn("[ICBC] 自动勾选协议勾选框出错：", _0x4fa1ff);
      }
    },
    getVisibleElSelectDropdown() {
      const _0x5c915a = Array.from(document.querySelectorAll(".el-select-dropdown.el-popper"));
      return _0x5c915a.find(_0x555ad3 => {
        const _0x5e5278 = window.getComputedStyle(_0x555ad3);
        if (_0x5e5278.display === "none" || _0x5e5278.visibility === "hidden" || parseFloat(_0x5e5278.opacity) === 0) {
          return false;
        }
        return _0x555ad3.querySelectorAll(".el-select-dropdown__item").length > 0;
      });
    },
    async selectOptionFromElDropdown(_0x28e5a4, _0x40e601) {
      if (!_0x40e601) {
        return {
          success: true,
          skipped: true
        };
      }
      const _0x5510d0 = this.findSelectInputByPlaceholder(_0x28e5a4);
      if (!_0x5510d0) {
        return {
          success: false,
          message: "未找到包含 " + _0x28e5a4.join("/") + " 的下拉输入框"
        };
      }
      _0x5510d0.click();
      await this.delay(150);
      let _0x5094c8 = this.getVisibleElSelectDropdown();
      let _0x228195 = 0;
      while (!_0x5094c8 && _0x228195 < 10) {
        await this.delay(150);
        _0x5094c8 = this.getVisibleElSelectDropdown();
        _0x228195++;
      }
      if (!_0x5094c8) {
        return {
          success: false,
          message: "未检测到可见的下拉面板"
        };
      }
      const _0x54ce63 = Array.from(_0x5094c8.querySelectorAll(".el-select-dropdown__item"));
      if (!_0x54ce63.length) {
        return {
          success: false,
          message: "下拉面板没有可选项"
        };
      }
      const _0x3238a1 = _0x51f520 => _0x51f520.replace(/省|市|区|县|分行|支行|营业部|网点/g, "").trim();
      const _0x351c2d = _0x3238a1(_0x40e601);
      let _0x1cd547 = null;
      let _0x4769a3 = 0;
      _0x54ce63.forEach(_0x42f3af => {
        const _0x29daea = (_0x42f3af.textContent || "").trim();
        if (!_0x29daea) {
          return;
        }
        const _0x2bc7cd = _0x3238a1(_0x29daea);
        let _0x979524 = 0;
        if (_0x29daea === _0x40e601) {
          _0x979524 = 1000;
        } else {
          if (_0x29daea.includes(_0x40e601)) {
            _0x979524 = 800;
          } else {
            if (_0x40e601.includes(_0x29daea)) {
              _0x979524 = 700;
            } else {
              if (_0x2bc7cd && _0x2bc7cd === _0x351c2d) {
                _0x979524 = 900;
              } else {
                if (_0x2bc7cd && _0x351c2d && _0x2bc7cd.includes(_0x351c2d)) {
                  _0x979524 = 600;
                }
              }
            }
          }
        }
        _0x979524 > _0x4769a3 && (_0x4769a3 = _0x979524, _0x1cd547 = _0x42f3af);
      });
      if (!_0x1cd547) {
        return {
          success: false,
          message: "未在下拉中匹配到 \"" + _0x40e601 + "\""
        };
      }
      _0x1cd547.scrollIntoView({
        block: "center"
      });
      await this.delay(100);
      _0x1cd547.click();
      await this.delay(150);
      return {
        success: true,
        text: (_0x1cd547.textContent || "").trim()
      };
    },
    async fillICBCBranchSelectors(_0x48fbe5) {
      console.log("[ICBC] 专用选择器开始：省市区+网点");
      const _0x29bdbb = [{
        key: "province",
        placeholderKeywords: ["请选择省份", "省份"],
        value: _0x48fbe5.province
      }, {
        key: "city",
        placeholderKeywords: ["请选择城市", "城市"],
        value: _0x48fbe5.city
      }, {
        key: "district",
        placeholderKeywords: ["请选择区县", "区县", "请选择区域"],
        value: _0x48fbe5.district
      }, {
        key: "branch",
        placeholderKeywords: ["请选择网点", "选择预约网点", "兑换网点"],
        value: _0x48fbe5.branch
      }];
      let _0x3fbc1e = 0;
      for (const _0x2c3105 of _0x29bdbb) {
        if (!_0x2c3105.value) {
          continue;
        }
        console.log("[ICBC] 选择 " + _0x2c3105.key + ": " + _0x2c3105.value);
        const _0xb63f6a = await this.selectOptionFromElDropdown(_0x2c3105.placeholderKeywords, _0x2c3105.value);
        console.log("[ICBC] " + _0x2c3105.key + " 结果：", _0xb63f6a);
        if (!_0xb63f6a.success) {
          console.warn("[ICBC] " + _0x2c3105.key + " 选择失败:", _0xb63f6a.message);
          return {
            success: false,
            message: _0xb63f6a.message,
            failedStep: _0x2c3105.key
          };
        }
        _0x3fbc1e++;
        await this.delay(100);
      }
      if (_0x3fbc1e === 0) {
        console.log("[ICBC] 未提供省/市/区/网点信息，跳过专用选择器");
        return {
          success: false,
          message: "无可选信息"
        };
      }
      console.log("[ICBC] 专用选择器执行完成");
      return {
        success: true
      };
    },
    normalizeExchangeDate(_0x32e46e) {
      if (!_0x32e46e) {
        return "";
      }
      const _0x469869 = _0x32e46e.trim();
      if (!_0x469869) {
        return "";
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(_0x469869)) {
        return _0x469869;
      }
      const _0x36fa38 = _0x469869.match(/^(\d{4}-\d{2}-\d{2})/);
      return _0x36fa38 ? _0x36fa38[1] : "";
    },
    findExchangeDateInput() {
      const _0x4f4321 = ["input[placeholder*=\"兑换日期\"]", "input[placeholder*=\"兑换时间\"]", "input[placeholder*=\"预约日期\"]", "input[placeholder*=\"预约时间\"]"];
      for (const _0x2661f6 of _0x4f4321) {
        const _0x2924d7 = document.querySelector(_0x2661f6);
        if (_0x2924d7 && !_0x2924d7.disabled && _0x2924d7.offsetParent !== null) {
          return _0x2924d7;
        }
      }
      const _0x4befe2 = Array.from(document.querySelectorAll("label, [role='label'], .label, [class*='label']"));
      for (const _0x9cafa2 of _0x4befe2) {
        const _0x2312bc = (_0x9cafa2.textContent || "").trim();
        if (!_0x2312bc) {
          continue;
        }
        if (!_0x2312bc.includes("兑换") && !_0x2312bc.includes("预约")) {
          continue;
        }
        if (!_0x2312bc.includes("日期") && !_0x2312bc.includes("时间")) {
          continue;
        }
        const _0xf11ac6 = _0x9cafa2.getAttribute("for");
        if (_0xf11ac6) {
          const _0x15a500 = document.getElementById(_0xf11ac6);
          if (_0x15a500 && _0x15a500.tagName === "INPUT") {
            return _0x15a500;
          }
        }
        const _0x4cc43a = _0x9cafa2.parentElement?.["querySelector"]("input");
        if (_0x4cc43a) {
          return _0x4cc43a;
        }
      }
      return null;
    },
    findBranchInputFallback() {
      const _0x31df5f = ["兑换网点", "网点", "选择网点", "兑换点", "branch"];
      const _0x47132f = ["证件类型", "证件", "身份证", "手机", "手机号", "验证码", "手机号码"];
      const _0x23139b = Array.from(document.querySelectorAll("label, [role='label'], .label, [class*='label']"));
      for (const _0x749fd4 of _0x23139b) {
        const _0x561ab6 = (_0x749fd4.textContent || "").trim();
        if (!_0x561ab6) {
          continue;
        }
        const _0xb666c0 = _0x561ab6.toLowerCase();
        if (_0x47132f.some(_0x146648 => _0xb666c0.includes(_0x146648.toLowerCase()))) {
          continue;
        }
        if (!_0x31df5f.some(_0x42f1d6 => _0xb666c0.includes(_0x42f1d6.toLowerCase()))) {
          continue;
        }
        const _0x59f83c = _0x749fd4.getAttribute("for");
        if (_0x59f83c) {
          const _0x5adb79 = document.getElementById(_0x59f83c);
          if (_0x5adb79 && (_0x5adb79.tagName === "INPUT" || _0x5adb79.tagName === "SELECT")) {
            return _0x5adb79;
          }
        }
        const _0x35ccf7 = _0x749fd4.parentElement;
        if (_0x35ccf7) {
          const _0x5a6b57 = _0x35ccf7.querySelectorAll("input[type='text'], input:not([type]), select, [role='textbox'], [role='combobox']");
          for (const _0x301db3 of _0x5a6b57) {
            if (_0x301db3.offsetParent !== null && !_0x301db3.disabled) {
              return _0x301db3;
            }
          }
        }
        let _0x139f65 = _0x749fd4.nextElementSibling;
        while (_0x139f65) {
          const _0xe473a8 = _0x139f65.querySelectorAll("input[type='text'], input:not([type]), select, [role='textbox'], [role='combobox']");
          if (_0xe473a8.length > 0) {
            for (const _0x308647 of _0xe473a8) {
              if (_0x308647.offsetParent !== null && !_0x308647.disabled) {
                return _0x308647;
              }
            }
          }
          _0x139f65 = _0x139f65.nextElementSibling;
        }
      }
      const _0x363fc9 = Array.from(document.querySelectorAll("input[type='text'], input:not([type]), select, [role='textbox'], [role='combobox']"));
      for (const _0x4fc4ae of _0x363fc9) {
        const _0x1e973f = ((_0x4fc4ae.placeholder || "") + " " + (_0x4fc4ae.name || "") + " " + (_0x4fc4ae.id || "") + " " + (_0x4fc4ae.getAttribute("aria-label") || "")).toLowerCase();
        if (_0x47132f.some(_0x2b6633 => _0x1e973f.includes(_0x2b6633.toLowerCase()))) {
          continue;
        }
        if (_0x31df5f.some(_0x11ef99 => _0x1e973f.includes(_0x11ef99.toLowerCase())) && _0x4fc4ae.offsetParent !== null && !_0x4fc4ae.disabled) {
          return _0x4fc4ae;
        }
      }
      return null;
    },
    async submit() {
      console.log("[ICBC] submit 被调用");
      const _0x4e1caa = this.getSelectorMap();
      let _0x4b5df0 = document.querySelector(_0x4e1caa.submitButton);
      console.log("[ICBC] 提交按钮元素：", _0x4b5df0);
      console.log("[ICBC] 提交按钮选择器：", _0x4e1caa.submitButton);
      if (!_0x4b5df0) {
        const _0x298376 = Array.from(document.querySelectorAll("button, .el-button, .btn, [role='button']"));
        const _0x2a1823 = ["提交", "确认", "下一步", "预约"];
        _0x4b5df0 = _0x298376.find(_0x4ea20c => {
          const _0x2b7358 = (_0x4ea20c.textContent || "").trim();
          if (!_0x2b7358) {
            return false;
          }
          return _0x2a1823.some(_0x320661 => _0x2b7358.includes(_0x320661));
        });
        console.log("[ICBC] 通过文本兜底找到的提交按钮：", _0x4b5df0);
      }
      _0x4b5df0 ? (console.log("[ICBC] 点击提交按钮"), _0x4b5df0.click(), _0x4b5df0.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })), console.log("[ICBC] 提交按钮已点击")) : console.warn("[ICBC] 未找到提交按钮");
    },
    verifyResult: async () => document.body.innerText.includes("预约成功") || document.body.innerText.includes("提交成功")
  };
  window.shuixian.register(_0x361593);
})();