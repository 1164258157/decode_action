//Mon Dec 15 2025 04:42:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const _0x3e84d4 = {
    id: "PSBC",
    detect: () => {
      const _0x5e4d50 = location.hostname || "";
      const _0x1b2afa = location.pathname || "";
      return _0x5e4d50.includes("psbc") || _0x5e4d50.includes("postal") || _0x1b2afa.includes("邮政") || _0x1b2afa.includes("psbc");
    },
    async waitForOpen() {},
    getSelectorMap: () => ({
      fullName: ["input[name*=\"name\"]", "input[id*=\"name\"]", "input[placeholder*=\"姓名\"]"].join(", "),
      idType: ["select[name*=\"certType\"]", "select[id*=\"certType\"]", "select[name*=\"idType\"]", "select[id*=\"idType\"]"].join(", "),
      idNumber: ["input[name*=\"idNo\"]", "input[id*=\"idNo\"]", "input[name*=\"certNo\"]", "input[id*=\"certNo\"]", "input[placeholder*=\"证件号码\"]"].join(", "),
      mobile: ["input[name*=\"mobile\"]", "input[id*=\"mobile\"]", "input[name*=\"phone\"]", "input[id*=\"phone\"]", "input[placeholder*=\"手机号\"]"].join(", "),
      address: ["textarea[name*=\"address\"]", "textarea[id*=\"address\"]", "input[name*=\"address\"]", "input[id*=\"address\"]", "textarea[placeholder*=\"地址\"]", "input[placeholder*=\"地址\"]"].join(", "),
      province: ["select[name*=\"province\"]", "select[id*=\"province\"]"].join(", "),
      city: ["select[name*=\"city\"]", "select[id*=\"city\"]"].join(", "),
      district: ["select[name*=\"district\"]", "select[id*=\"district\"]", "select[name*=\"county\"]", "select[id*=\"county\"]"].join(", "),
      branch: ["input[name*=\"branch\"]", "input[id*=\"branch\"]", "input[placeholder*=\"网点\"]", ".el-cascader input.el-input__inner"].join(", "),
      quantity: ["input[name*=\"count\"]", "input[id*=\"count\"]", "input[name*=\"amount\"]", "input[id*=\"amount\"]", "input[placeholder*=\"数量\"]", "input[type=\"number\"]"].join(", ")
    }),
    delay(_0x1a4663) {
      return new Promise(_0x3ea290 => setTimeout(_0x3ea290, _0x1a4663));
    },
    resolveBranchParts(_0x384857 = {}) {
      if (_0x384857.branchPath) {
        return _0x384857.branchPath.split("/").map(_0x101a3c => _0x101a3c.trim()).filter(Boolean);
      }
      const _0x2d0c02 = [];
      if (_0x384857.province) {
        _0x2d0c02.push(_0x384857.province);
      }
      if (_0x384857.city) {
        _0x2d0c02.push(_0x384857.city);
      }
      if (_0x384857.district) {
        _0x2d0c02.push(_0x384857.district);
      }
      if (_0x384857.branch) {
        _0x2d0c02.push(_0x384857.branch);
      }
      return _0x2d0c02;
    },
    findInputByKeywords(_0x59e2a9) {
      const _0x3b77c6 = {
        fullName: ["姓名", "客户姓名", "兑换人"],
        idNumber: ["证件号码", "证件号", "身份证"],
        mobile: ["手机号", "手机号码", "联系电话"],
        address: ["联系地址", "详细地址", "通讯地址"],
        branch: ["网点", "兑换网点", "选择网点"]
      };
      const _0x5f017e = _0x3b77c6[_0x59e2a9];
      if (!_0x5f017e) {
        return null;
      }
      const _0x302528 = (_0x50bfaa = "") => _0x50bfaa.replace(/[\s:：]/g, "").toLowerCase();
      const _0x531285 = Array.from(document.querySelectorAll("input, textarea"));
      for (const _0x3ba4e7 of _0x531285) {
        if (_0x3ba4e7.disabled || _0x3ba4e7.offsetParent === null) {
          continue;
        }
        const _0x18dc1e = [_0x3ba4e7.placeholder, _0x3ba4e7.getAttribute("aria-label"), _0x3ba4e7.name, _0x3ba4e7.id];
        const _0x1db704 = _0x3ba4e7.closest("label");
        _0x1db704 && _0x18dc1e.push(_0x1db704.textContent);
        const _0x2269cc = _0x3ba4e7.closest(".el-form-item")?.["querySelector"](".el-form-item__label")?.["textContent"] || _0x3ba4e7.parentElement?.["querySelector"](".form-label")?.["textContent"];
        _0x2269cc && _0x18dc1e.push(_0x2269cc);
        const _0x38bd8e = _0x302528(_0x18dc1e.filter(Boolean).join(" "));
        if (!_0x38bd8e) {
          continue;
        }
        if (_0x5f017e.some(_0x150fda => _0x38bd8e.includes(_0x302528(_0x150fda)))) {
          return _0x3ba4e7;
        }
      }
      return null;
    },
    fillRegionSelects(_0x3e7875, _0x346c70) {
      const _0x442503 = (_0x4fa541, _0x4b706e) => {
        if (!_0x4b706e || !_0x346c70[_0x4fa541]) {
          return;
        }
        const _0x2d1f04 = document.querySelector(_0x346c70[_0x4fa541]);
        if (!_0x2d1f04) {
          return;
        }
        this.setSelectValue(_0x2d1f04, _0x4b706e);
      };
      _0x442503("province", _0x3e7875.province);
      _0x442503("city", _0x3e7875.city);
      _0x442503("district", _0x3e7875.district);
    },
    setSelectValue(_0x2e3df6, _0x59ac50) {
      if (!_0x2e3df6 || !_0x59ac50) {
        return false;
      }
      const _0x4ec286 = Array.from(_0x2e3df6.options || []);
      const _0x31c83e = _0x2e3f6c => _0x2e3f6c.replace(/省|市|区|县|分行|支行|营业部|网点/g, "").trim();
      const _0x45ed77 = _0x31c83e(_0x59ac50);
      let _0x4ddef6 = _0x4ec286.find(_0x1aa916 => (_0x1aa916.textContent || _0x1aa916.value || "").includes(_0x59ac50)) || _0x4ec286.find(_0x34830a => _0x31c83e(_0x34830a.textContent || _0x34830a.value || "") === _0x45ed77);
      if (_0x4ddef6) {
        _0x2e3df6.value = _0x4ddef6.value;
        _0x2e3df6.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        console.log("[PSBC] 下拉选择：", _0x4ddef6.textContent || _0x4ddef6.value);
        return true;
      }
      return false;
    },
    normalizeExchangeDate(_0x56120e) {
      if (!_0x56120e) {
        return null;
      }
      if (_0x56120e instanceof Date && !isNaN(_0x56120e)) {
        return _0x56120e.toISOString().slice(0, 10);
      }
      const _0x535cf7 = String(_0x56120e).trim();
      if (!_0x535cf7) {
        return null;
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(_0x535cf7)) {
        return _0x535cf7;
      }
      if (/^\d{4}[/.]\d{1,2}[/.]\d{1,2}$/.test(_0x535cf7)) {
        return _0x535cf7.replace(/[/.]/g, "-");
      }
      const _0x436477 = new Date(_0x535cf7);
      if (!isNaN(_0x436477)) {
        return _0x436477.toISOString().slice(0, 10);
      }
      return null;
    },
    findExchangeDateInput() {
      const _0x9cd3b6 = ["input[name*=\"exchangeDate\"]", "input[id*=\"exchangeDate\"]", "input[name*=\"exchangeTime\"]", "input[id*=\"exchangeTime\"]", "input[name*=\"appointmentDate\"]", "input[id*=\"appointmentDate\"]", "input[placeholder*=\"兑换日期\"]", "input[placeholder*=\"预约日期\"]", ".el-date-editor input.el-input__inner", "input[type=\"date\"]"];
      for (const _0x4a0a0e of _0x9cd3b6) {
        const _0x310bc8 = document.querySelector(_0x4a0a0e);
        if (_0x310bc8 && !_0x310bc8.disabled && _0x310bc8.offsetParent !== null) {
          return _0x310bc8;
        }
      }
      return null;
    },
    findQuantityInput(_0x447049) {
      if (_0x447049?.["quantity"]) {
        const _0x4253d9 = document.querySelector(_0x447049.quantity);
        if (_0x4253d9 && _0x4253d9.offsetParent !== null && !_0x4253d9.disabled) {
          return _0x4253d9;
        }
      }
      return document.querySelector("input[placeholder*=\"数量\"]") || document.querySelector("input[type=\"number\"]");
    },
    findRegionCascaderInput() {
      const _0x4da812 = Array.from(document.querySelectorAll(".el-form-item"));
      const _0x4a3b88 = _0x4da812.find(_0x385adc => {
        const _0x4c2f97 = _0x385adc.querySelector(".el-form-item__label");
        const _0x30e961 = (_0x4c2f97?.["textContent"] || "").trim();
        return /地区|所在|省市|网点/.test(_0x30e961);
      });
      const _0x484338 = _0x4a3b88 || document;
      return _0x484338.querySelector(".el-cascader input.el-input__inner");
    },
    findBranchSelectInput() {
      const _0x3aef94 = Array.from(document.querySelectorAll(".el-form-item"));
      const _0x51730c = _0x3aef94.find(_0x10e1d4 => {
        const _0x52e0b7 = _0x10e1d4.querySelector(".el-form-item__label");
        const _0x238852 = (_0x52e0b7?.["textContent"] || "").trim();
        return /网点|兑换网点|预约网点/.test(_0x238852);
      });
      const _0x505fe5 = _0x51730c || document;
      return _0x505fe5.querySelector(".el-select input.el-input__inner");
    },
    getVisibleCascaderDropdown() {
      const _0x57372e = Array.from(document.querySelectorAll(".el-cascader__dropdown"));
      return _0x57372e.find(_0x20875b => {
        const _0x3434e7 = window.getComputedStyle(_0x20875b);
        return _0x3434e7.display !== "none" && _0x3434e7.visibility !== "hidden" && parseFloat(_0x3434e7.opacity || "0") > 0;
      });
    },
    getVisibleElSelectDropdown() {
      const _0x45e9dd = Array.from(document.querySelectorAll(".el-select-dropdown.el-popper"));
      return _0x45e9dd.find(_0x2dd6fd => {
        const _0x3ed9ca = window.getComputedStyle(_0x2dd6fd);
        return _0x3ed9ca.display !== "none" && _0x3ed9ca.visibility !== "hidden" && parseFloat(_0x3ed9ca.opacity || "0") > 0;
      });
    },
    findCascaderOption(_0x1a25b7, _0x36ce9c) {
      if (!_0x1a25b7 || !_0x36ce9c) {
        return null;
      }
      const _0x4c0f31 = Array.from(_0x1a25b7.querySelectorAll(".el-cascader-node"));
      const _0x3bf605 = _0x3a1e82 => _0x3a1e82.replace(/省|市|区|县|分行|支行|营业部|网点/g, "").trim();
      const _0x375095 = _0x3bf605(_0x36ce9c);
      let _0x110b62 = null;
      let _0xd475de = -1;
      _0x4c0f31.forEach(_0x12481d => {
        const _0x5794f4 = (_0x12481d.textContent || "").trim();
        if (!_0x5794f4) {
          return;
        }
        const _0x21b1bf = _0x3bf605(_0x5794f4);
        let _0x498c50 = 0;
        if (_0x5794f4 === _0x36ce9c) {
          _0x498c50 = 100;
        } else {
          if (_0x5794f4.includes(_0x36ce9c)) {
            _0x498c50 = 90;
          } else {
            if (_0x36ce9c.includes(_0x5794f4)) {
              _0x498c50 = 80;
            } else {
              if (_0x21b1bf && _0x21b1bf === _0x375095) {
                _0x498c50 = 95;
              } else {
                if (_0x21b1bf && _0x21b1bf.includes(_0x375095)) {
                  _0x498c50 = 70;
                }
              }
            }
          }
        }
        _0x498c50 > _0xd475de && (_0xd475de = _0x498c50, _0x110b62 = _0x12481d);
      });
      return _0x110b62;
    },
    async selectCascaderValues(_0x348b75, _0x20e410 = []) {
      if (!_0x348b75 || !_0x20e410.length) {
        return {
          success: false,
          message: "无可选择的值"
        };
      }
      _0x348b75.focus();
      _0x348b75.click();
      await this.delay(150);
      for (let _0x5993d3 = 0; _0x5993d3 < _0x20e410.length; _0x5993d3++) {
        let _0x2ecb85 = this.getVisibleCascaderDropdown();
        let _0xe2176e = 0;
        while (!_0x2ecb85 && _0xe2176e < 8) {
          await this.delay(120);
          _0x2ecb85 = this.getVisibleCascaderDropdown();
          _0xe2176e++;
        }
        if (!_0x2ecb85) {
          return {
            success: false,
            message: "未检测到可见的级联下拉"
          };
        }
        const _0x151e70 = Array.from(_0x2ecb85.querySelectorAll(".el-cascader-menu"));
        const _0x1972be = _0x151e70[Math.min(_0x5993d3, _0x151e70.length - 1)];
        if (!_0x1972be) {
          return {
            success: false,
            message: "未找到第 " + (_0x5993d3 + 1) + " 级菜单"
          };
        }
        const _0x15f8e7 = this.findCascaderOption(_0x1972be, _0x20e410[_0x5993d3]);
        if (!_0x15f8e7) {
          return {
            success: false,
            message: "未匹配到 " + _0x20e410[_0x5993d3]
          };
        }
        _0x15f8e7.scrollIntoView({
          block: "center"
        });
        _0x15f8e7.click();
        await this.delay(200);
      }
      return {
        success: true
      };
    },
    async fillPsbcRegionCascader(_0x1fae1b = {}) {
      const _0x4b3249 = this.resolveBranchParts(_0x1fae1b).slice(0, 3).filter(Boolean);
      if (!_0x4b3249.length) {
        return {
          success: false,
          message: "无地区信息"
        };
      }
      const _0x53fb74 = this.findRegionCascaderInput();
      if (!_0x53fb74) {
        return {
          success: false,
          message: "未找到地区级联输入框"
        };
      }
      const _0x77ddaf = await this.selectCascaderValues(_0x53fb74, _0x4b3249);
      !_0x77ddaf.success ? console.warn("[PSBC] 地区级联选择失败：", _0x77ddaf.message) : console.log("[PSBC] 地区级联选择成功");
      return _0x77ddaf;
    },
    async selectPsbcBranchFromDropdown(_0x3f2244) {
      if (!_0x3f2244) {
        return {
          success: false,
          message: "未提供网点名称"
        };
      }
      const _0x2ad41e = this.findBranchSelectInput();
      if (!_0x2ad41e) {
        return {
          success: false,
          message: "未找到网点下拉输入框"
        };
      }
      _0x2ad41e.focus();
      _0x2ad41e.click();
      await this.delay(150);
      let _0xce8ca0 = this.getVisibleElSelectDropdown();
      let _0x15b850 = 0;
      while (!_0xce8ca0 && _0x15b850 < 8) {
        await this.delay(120);
        _0xce8ca0 = this.getVisibleElSelectDropdown();
        _0x15b850++;
      }
      if (!_0xce8ca0) {
        return {
          success: false,
          message: "未检测到可见的网点下拉面板"
        };
      }
      const _0x5c2c99 = Array.from(_0xce8ca0.querySelectorAll(".el-select-dropdown__item"));
      if (!_0x5c2c99.length) {
        return {
          success: false,
          message: "网点下拉列表为空"
        };
      }
      const _0x1c058f = _0x2646a2 => _0x2646a2.replace(/邮储银行|中国邮政储蓄银行|省|市|区|县|分行|支行|营业部|营业所|网点/g, "").trim();
      const _0x2aab29 = _0x1c058f(_0x3f2244);
      let _0x31663f = null;
      let _0x583683 = -1;
      _0x5c2c99.forEach(_0x560a8c => {
        const _0x3a5c2e = (_0x560a8c.textContent || "").trim();
        if (!_0x3a5c2e) {
          return;
        }
        const _0xda8a75 = _0x1c058f(_0x3a5c2e);
        let _0x5a2452 = 0;
        if (_0x3a5c2e === _0x3f2244) {
          _0x5a2452 = 1000;
        } else {
          if (_0x3a5c2e.includes(_0x3f2244)) {
            _0x5a2452 = 900;
          } else {
            if (_0x3f2244.includes(_0x3a5c2e)) {
              _0x5a2452 = 800;
            } else {
              if (_0xda8a75 && _0xda8a75 === _0x2aab29) {
                _0x5a2452 = 950;
              } else {
                if (_0xda8a75 && _0x2aab29 && _0xda8a75.includes(_0x2aab29)) {
                  _0x5a2452 = 700;
                }
              }
            }
          }
        }
        _0x5a2452 > _0x583683 && (_0x583683 = _0x5a2452, _0x31663f = _0x560a8c);
      });
      if (!_0x31663f) {
        return {
          success: false,
          message: "未匹配到网点：" + _0x3f2244
        };
      }
      _0x31663f.scrollIntoView({
        block: "center"
      });
      _0x31663f.click();
      await this.delay(200);
      const _0x259459 = (_0x31663f.textContent || "").trim();
      console.log("[PSBC] 精准选择网点：", _0x259459);
      return {
        success: true,
        text: _0x259459
      };
    },
    async fillBranch(_0x56be30, _0x1c6196) {
      const _0x38b9f4 = this.resolveBranchParts(_0x56be30);
      const _0x227dfb = _0x38b9f4.join("/");
      if (!_0x227dfb) {
        console.log("[PSBC] 未提供网点路径，跳过网点选择");
        return;
      }
      const _0x1475a1 = _0x56be30.branch && _0x56be30.branch.trim() || _0x56be30.branchPath && _0x38b9f4.length > 3;
      if (!_0x1475a1) {
        console.log("[PSBC] 仅提供地区信息，网点留待人工选择");
        return;
      }
      const _0x501051 = _0x56be30.branch || _0x38b9f4[_0x38b9f4.length - 1];
      const _0x4a7f4b = await this.selectPsbcBranchFromDropdown(_0x501051);
      if (_0x4a7f4b.success) {
        return;
      }
      console.warn("[PSBC] el-select 精确网点选择失败，尝试使用 BranchFinder：", _0x4a7f4b.message);
      if (window.__branchFinder__?.["autoFillBranch"]) {
        try {
          const _0x3b18d7 = await window.__branchFinder__.autoFillBranch(_0x227dfb, {
            enableLog: false
          });
          console.log("[PSBC] BranchFinder 填写结果：", _0x3b18d7);
          if (_0x3b18d7?.["success"]) {
            return;
          }
        } catch (_0x3760a9) {
          console.warn("[PSBC] BranchFinder 执行失败：", _0x3760a9);
        }
      }
      const _0x4ee8f0 = document.querySelector(_0x1c6196.branch) || this.findInputByKeywords("branch");
      _0x4ee8f0 ? (_0x4ee8f0.focus(), _0x4ee8f0.value = _0x227dfb, _0x4ee8f0.dispatchEvent(new Event("input", {
        bubbles: true
      })), _0x4ee8f0.dispatchEvent(new Event("change", {
        bubbles: true
      })), console.log("[PSBC] 直接写入网点：", _0x227dfb)) : console.warn("[PSBC] 未找到网点输入框");
    },
    autoCheckAgreementCheckboxes() {
      try {
        const _0x26351d = ["阅读", "同意", "协议", "声明", "须知", "知悉", "约定"];
        const _0x5d86c6 = new Set();
        const _0x3385df = _0x564a28 => {
          if (!_0x564a28 || _0x564a28.disabled) {
            return;
          }
          const _0x42cb73 = _0x564a28.closest(".el-checkbox") || _0x564a28.parentElement || _0x564a28;
          const _0x39df0a = _0x42cb73.querySelector(".el-checkbox__input") || _0x42cb73;
          const _0x1dc1f5 = _0x42cb73.querySelector(".el-checkbox__label");
          if (_0x564a28.checked || _0x39df0a.classList.contains("is-checked")) {
            return;
          }
          const _0xfa8e9e = _0x1dc1f5 || _0x39df0a;
          _0xfa8e9e.click();
          _0x5d86c6.add(_0x564a28);
        };
        const _0x5004fc = Array.from(document.querySelectorAll("label, [role='label'], .label, [class*='label']"));
        for (const _0x568013 of _0x5004fc) {
          const _0x274103 = (_0x568013.textContent || "").trim();
          if (!_0x274103) {
            continue;
          }
          if (!_0x26351d.some(_0x3b1714 => _0x274103.includes(_0x3b1714))) {
            continue;
          }
          let _0xf09889 = null;
          const _0x4439e2 = _0x568013.getAttribute("for");
          if (_0x4439e2) {
            const _0x39be59 = document.getElementById(_0x4439e2);
            _0x39be59 && _0x39be59.type === "checkbox" && (_0xf09889 = _0x39be59);
          }
          if (!_0xf09889) {
            const _0x55e547 = _0x568013.closest(".el-form-item, .el-checkbox, .el-col, .el-row") || _0x568013.parentElement;
            _0x55e547 && (_0xf09889 = _0x55e547.querySelector("input[type='checkbox']") || _0x55e547.querySelector(".el-checkbox input[type='checkbox']"));
          }
          _0xf09889 && !_0xf09889.disabled && !_0x5d86c6.has(_0xf09889) && (console.log("[PSBC] 自动勾选协议勾选框（label 匹配）：", _0x274103), _0x3385df(_0xf09889));
        }
        const _0x39b172 = Array.from(document.querySelectorAll("input[type='checkbox']"));
        for (const _0x533e4a of _0x39b172) {
          if (_0x5d86c6.has(_0x533e4a) || _0x533e4a.disabled) {
            continue;
          }
          const _0x21c1d0 = _0x533e4a.closest(".el-checkbox, .el-form-item, .el-col, .el-row") || _0x533e4a.parentElement;
          let _0x11bea8 = "";
          _0x21c1d0 && (_0x11bea8 = (_0x21c1d0.textContent || "").trim());
          if (!_0x11bea8) {
            continue;
          }
          if (!_0x26351d.some(_0x4abb38 => _0x11bea8.includes(_0x4abb38))) {
            continue;
          }
          console.log("[PSBC] 自动勾选协议勾选框（文本匹配）：", _0x11bea8);
          _0x3385df(_0x533e4a);
        }
      } catch (_0x196f66) {
        console.warn("[PSBC] 自动勾选协议勾选框出错：", _0x196f66);
      }
    },
    async fillForm(_0x2717b9 = {}) {
      console.log("[PSBC] 开始填充表单：", _0x2717b9);
      const _0x59efcc = this.getSelectorMap();
      const _0x2531cf = window.__SX_SMART_FIND__;
      const _0x29d985 = (_0x892ef9, _0x57429d, _0x53382b) => {
        if (!_0x57429d) {
          console.log("[PSBC] 跳过 " + _0x53382b + "，值为空");
          return;
        }
        let _0x3c1221 = null;
        typeof _0x2531cf === "function" && (_0x3c1221 = _0x2531cf(_0x892ef9));
        !_0x3c1221 && _0x59efcc[_0x892ef9] && (_0x3c1221 = document.querySelector(_0x59efcc[_0x892ef9]));
        !_0x3c1221 && (_0x3c1221 = this.findInputByKeywords(_0x892ef9));
        _0x3c1221 ? (_0x3c1221.value = _0x57429d, _0x3c1221.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x3c1221.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[PSBC] " + _0x53382b + " 填写成功：", _0x57429d)) : console.warn("[PSBC] 未找到 " + _0x53382b + " 输入框");
      };
      _0x29d985("fullName", _0x2717b9.name, "姓名");
      _0x29d985("idNumber", _0x2717b9.idcard, "证件号码");
      _0x29d985("mobile", _0x2717b9.phone, "手机号");
      const _0x1b1a58 = [_0x2717b9.province, _0x2717b9.city, _0x2717b9.district, _0x2717b9.address].filter(Boolean).join("");
      _0x1b1a58 && _0x29d985("address", _0x1b1a58, "联系地址");
      this.setIdTypeValue(_0x59efcc.idType);
      this.fillRegionSelects(_0x2717b9, _0x59efcc);
      await this.fillPsbcRegionCascader(_0x2717b9);
      await this.fillBranch(_0x2717b9, _0x59efcc);
      if (_0x2717b9.exchangeTime) {
        const _0x14c14e = this.normalizeExchangeDate(_0x2717b9.exchangeTime);
        if (_0x14c14e) {
          const _0x36bde6 = this.findExchangeDateInput();
          _0x36bde6 ? (_0x36bde6.value = _0x14c14e, _0x36bde6.dispatchEvent(new Event("input", {
            bubbles: true
          })), _0x36bde6.dispatchEvent(new Event("change", {
            bubbles: true
          })), console.log("[PSBC] 兑换日期填写成功：", _0x14c14e)) : console.warn("[PSBC] 未找到兑换日期输入框");
        } else {
          console.warn("[PSBC] 兑换日期格式不正确：", _0x2717b9.exchangeTime);
        }
      }
      if (_0x2717b9.quantity) {
        const _0x6ff710 = this.findQuantityInput(_0x59efcc);
        _0x6ff710 ? (_0x6ff710.value = String(_0x2717b9.quantity), _0x6ff710.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x6ff710.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[PSBC] 预约数量填写成功：", _0x2717b9.quantity)) : console.warn("[PSBC] 未找到预约数量输入框");
      }
      this.autoCheckAgreementCheckboxes();
      console.log("[PSBC] 表单填写完成");
    },
    setIdTypeValue(_0x290147) {
      if (!_0x290147) {
        return;
      }
      const _0x72077 = document.querySelector(_0x290147);
      if (!_0x72077) {
        return;
      }
      const _0x235d1f = Array.from(_0x72077.options || []);
      const _0x3540e5 = _0x235d1f.find(_0x14d506 => /身份证|1010|IDCARD/.test((_0x14d506.textContent || _0x14d506.value || "").toUpperCase())) || _0x235d1f[0];
      _0x3540e5 && (_0x72077.value = _0x3540e5.value, _0x72077.dispatchEvent(new Event("change", {
        bubbles: true
      })), console.log("[PSBC] 证件类型选择：", _0x3540e5.textContent || _0x3540e5.value));
    },
    async submit() {
      console.log("[PSBC] submit 被调用");
      const _0x3bab99 = this.getSelectorMap();
      let _0x2ea70e = document.querySelector(_0x3bab99.submitButton);
      if (!_0x2ea70e) {
        const _0x41a6f1 = Array.from(document.querySelectorAll("button, input[type='submit'], .el-button, [role='button']"));
        const _0x27ae8c = ["提交", "确认", "下一步", "预约", "完成"];
        _0x2ea70e = _0x41a6f1.find(_0x5035f8 => {
          const _0xe645eb = (_0x5035f8.textContent || _0x5035f8.value || "").trim();
          if (!_0xe645eb) {
            return false;
          }
          return _0x27ae8c.some(_0x5295a0 => _0xe645eb.includes(_0x5295a0));
        });
      }
      if (_0x2ea70e) {
        _0x2ea70e.click();
        _0x2ea70e.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }));
        console.log("[PSBC] 提交按钮已点击");
        return true;
      }
      console.warn("[PSBC] 未找到提交按钮");
      return false;
    },
    async verifyResult() {
      const _0x581d5c = (document.body.innerText || document.body.textContent || "").toLowerCase();
      return /成功|完成|已提交|提交成功|预约成功/.test(_0x581d5c);
    }
  };
  window.shuixian.register(_0x3e84d4);
})();