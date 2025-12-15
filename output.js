//Mon Dec 15 2025 04:39:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const _0x4bdb41 = {
    id: "CCB",
    detect: () => {
      const _0x38bb92 = location.hostname || "";
      const _0x89112c = location.pathname || "";
      return _0x38bb92.includes("ccb") || _0x38bb92.includes("ccbank") || _0x89112c.includes("建设银行") || _0x89112c.includes("ccb");
    },
    async waitForOpen() {},
    getSelectorMap: () => ({
      fullName: ["input[name*=\"userName\"]", "input[id*=\"userName\"]", "input[name*=\"name\"]", "input[id*=\"name\"]", "input[placeholder*=\"客户姓名\"]", "input[placeholder*=\"姓名\"]"].join(", "),
      idType: ["select[name*=\"certType\"]", "select[id*=\"certType\"]", "select[name*=\"idType\"]", "select[id*=\"idType\"]"].join(", "),
      idNumber: ["input[name*=\"certNo\"]", "input[id*=\"certNo\"]", "input[name*=\"idNo\"]", "input[id*=\"idNo\"]", "input[name*=\"idNumber\"]", "input[id*=\"idNumber\"]", "input[placeholder*=\"证件号\"]", "input[placeholder*=\"证件号码\"]"].join(", "),
      mobile: ["input[name*=\"phone\"]", "input[id*=\"phone\"]", "input[name*=\"mobile\"]", "input[id*=\"mobile\"]", "input[placeholder*=\"手机号码\"]", "input[placeholder*=\"手机号\"]"].join(", "),
      address: ["textarea[name*=\"address\"]", "textarea[id*=\"address\"]", "input[name*=\"address\"]", "input[id*=\"address\"]", "input[placeholder*=\"联系地址\"]", "textarea[placeholder*=\"联系地址\"]"].join(", "),
      province: ["select[name*=\"province\"]", "select[id*=\"province\"]"].join(", "),
      city: ["select[name*=\"city\"]", "select[id*=\"city\"]"].join(", "),
      district: ["select[name*=\"district\"]", "select[id*=\"district\"]", "select[name*=\"county\"]", "select[id*=\"county\"]"].join(", "),
      branch: ["input[name*=\"branch\"]", "input[id*=\"branch\"]", "input[placeholder*=\"网点\"]", ".el-cascader input.el-input__inner"].join(", "),
      submitButton: ["button[type=\"submit\"]", "input[type=\"submit\"]", ".el-button--primary"].join(", ")
    }),
    delay(_0x292061) {
      return new Promise(_0x26f630 => setTimeout(_0x26f630, _0x292061));
    },
    findSelectInputByPlaceholder(_0x71069c = [], _0x517785) {
      const _0x333da3 = Array.from(document.querySelectorAll(".el-form-item"));
      const _0x380703 = _0x333da3.find(_0x344571 => {
        const _0xd24865 = _0x344571.querySelector(".el-form-item__label");
        const _0x3a302a = (_0xd24865?.["textContent"] || "").trim();
        return _0x3a302a.includes("选择网点") || _0x3a302a.includes("网点");
      });
      const _0x5aa7ef = _0x46991d => {
        const _0x37ab64 = Array.from(_0x46991d.querySelectorAll("input.el-input__inner"));
        const _0x5168bb = (_0x45cb6d = "") => _0x45cb6d.trim();
        let _0x534fdc = _0x37ab64.filter(_0x57bec2 => {
          const _0x58d0f9 = _0x5168bb(_0x57bec2.placeholder);
          return _0x71069c.some(_0x55e770 => _0x58d0f9.includes(_0x55e770));
        });
        if (_0x517785 === "province") {
          _0x534fdc = _0x534fdc.filter(_0xdb8f67 => {
            const _0x431a08 = _0x5168bb(_0xdb8f67.placeholder);
            return _0x431a08.includes("省/直辖市") || _0x431a08.includes("省");
          });
        } else {
          if (_0x517785 === "city") {
            _0x534fdc = _0x534fdc.filter(_0xe0248c => {
              const _0xe25afc = _0x5168bb(_0xe0248c.placeholder);
              if (!_0xe25afc) {
                return false;
              }
              if (_0xe25afc.includes("省/直辖市") || _0xe25afc.includes("省") || _0xe25afc.includes("区/县")) {
                return false;
              }
              return _0xe25afc === "市" || _0xe25afc.endsWith("市") || _0xe25afc.includes("城市");
            });
          } else {
            if (_0x517785 === "district") {
              _0x534fdc = _0x534fdc.filter(_0x299b46 => {
                const _0x5cebca = _0x5168bb(_0x299b46.placeholder);
                return _0x5cebca.includes("区/县") || _0x5cebca.endsWith("区") || _0x5cebca.endsWith("县");
              });
            } else {
              _0x517785 === "branch" && (_0x534fdc = _0x534fdc.filter(_0x13a138 => {
                const _0x4dd8e0 = _0x5168bb(_0x13a138.placeholder);
                return _0x4dd8e0.includes("网点");
              }));
            }
          }
        }
        if (!_0x534fdc.length && _0x517785 === "branch") {
          const _0x5ff261 = Array.from(_0x46991d.querySelectorAll(".el-select input.el-input__inner"));
          const _0x2b56b1 = _0x5ff261.find(_0x344092 => _0x5168bb(_0x344092.placeholder).includes("网点"));
          _0x2b56b1 && (_0x534fdc = [_0x2b56b1]);
        }
        return _0x534fdc[0] || null;
      };
      if (_0x380703) {
        const _0x16c5aa = _0x5aa7ef(_0x380703);
        if (_0x16c5aa) {
          return _0x16c5aa;
        }
      }
      return _0x5aa7ef(document);
    },
    getVisibleElSelectDropdown() {
      const _0x51ade9 = Array.from(document.querySelectorAll(".el-select-dropdown.el-popper"));
      return _0x51ade9.find(_0x1b2fe0 => {
        const _0x54cec7 = window.getComputedStyle(_0x1b2fe0);
        if (_0x54cec7.display === "none" || _0x54cec7.visibility === "hidden" || parseFloat(_0x54cec7.opacity) === 0) {
          return false;
        }
        return _0x1b2fe0.querySelectorAll(".el-select-dropdown__item").length > 0;
      });
    },
    async selectOptionFromElDropdown(_0x216324, _0x1cbd5d, _0x254bf4) {
      if (!_0x1cbd5d) {
        return {
          success: true,
          skipped: true
        };
      }
      const _0x397898 = this.findSelectInputByPlaceholder(_0x216324, _0x254bf4);
      if (!_0x397898) {
        return {
          success: false,
          message: "未找到包含 " + _0x216324.join("/") + " 的下拉输入框"
        };
      }
      _0x397898.click();
      await this.delay(150);
      let _0x595719 = this.getVisibleElSelectDropdown();
      let _0x509cba = 0;
      while (!_0x595719 && _0x509cba < 10) {
        await this.delay(150);
        _0x595719 = this.getVisibleElSelectDropdown();
        _0x509cba++;
      }
      if (!_0x595719) {
        return {
          success: false,
          message: "未检测到可见的下拉面板"
        };
      }
      const _0x333eb9 = Array.from(_0x595719.querySelectorAll(".el-select-dropdown__item"));
      if (!_0x333eb9.length) {
        return {
          success: false,
          message: "下拉面板没有可选项"
        };
      }
      const _0x1356a0 = _0x4ad82d => _0x4ad82d.replace(/省|市|区|县|分行|支行|营业部|网点/g, "").trim();
      const _0x24ca91 = _0x1356a0(_0x1cbd5d);
      let _0x1d1124 = null;
      let _0x2a15ce = 0;
      _0x333eb9.forEach(_0xb1b37c => {
        const _0x4eeb28 = (_0xb1b37c.textContent || "").trim();
        if (!_0x4eeb28) {
          return;
        }
        const _0x3f43be = _0x1356a0(_0x4eeb28);
        let _0x5949b7 = 0;
        if (_0x4eeb28 === _0x1cbd5d) {
          _0x5949b7 = 1000;
        } else {
          if (_0x4eeb28.includes(_0x1cbd5d)) {
            _0x5949b7 = 800;
          } else {
            if (_0x1cbd5d.includes(_0x4eeb28)) {
              _0x5949b7 = 700;
            } else {
              if (_0x3f43be && _0x3f43be === _0x24ca91) {
                _0x5949b7 = 900;
              } else {
                if (_0x3f43be && _0x24ca91 && _0x3f43be.includes(_0x24ca91)) {
                  _0x5949b7 = 600;
                }
              }
            }
          }
        }
        _0x5949b7 > _0x2a15ce && (_0x2a15ce = _0x5949b7, _0x1d1124 = _0xb1b37c);
      });
      if (!_0x1d1124) {
        const _0x88dc6a = _0x1cbd5d.replace(/市|区|县/g, "").trim();
        _0x1d1124 = _0x333eb9.find(_0x1de7ea => {
          const _0x359484 = (_0x1de7ea.textContent || "").trim().replace(/市|区|县/g, "");
          return _0x359484 === _0x88dc6a;
        });
      }
      if (!_0x1d1124) {
        const _0x5c2462 = _0x595719.closest(".el-select-dropdown");
        _0x5c2462 && (_0x1d1124 = _0x5c2462.querySelector(".el-select-dropdown__item"));
      }
      !_0x1d1124 && (_0x1d1124 = _0x333eb9[0], console.warn("[CCB] 未严格匹配到选项，退回选择第一个可见项：", _0x1d1124 && (_0x1d1124.textContent || "").trim()));
      _0x1d1124.scrollIntoView({
        block: "center"
      });
      await this.delay(100);
      _0x1d1124.click();
      await this.delay(150);
      return {
        success: true,
        text: (_0x1d1124.textContent || "").trim()
      };
    },
    async fillCCBBranchSelectors(_0x236a2f) {
      console.log("[CCB] 专用选择器开始：省市区+网点");
      const _0x2b7ad3 = [{
        key: "province",
        placeholderKeywords: ["省/直辖市", "请选择省份", "请选择省", "省份"],
        value: _0x236a2f.province
      }, {
        key: "city",
        placeholderKeywords: ["市", "请选择城市", "请选择市", "城市"],
        value: _0x236a2f.city
      }, {
        key: "district",
        placeholderKeywords: ["区/县", "请选择区县", "请选择区域", "区县", "区域"],
        value: _0x236a2f.district
      }, {
        key: "branch",
        placeholderKeywords: ["请选择网点", "选择兑换网点", "兑换网点", "预约网点"],
        value: _0x236a2f.branch
      }];
      let _0x1bddea = 0;
      for (const _0x38b356 of _0x2b7ad3) {
        if (!_0x38b356.value) {
          continue;
        }
        console.log("[CCB] 选择 " + _0x38b356.key + ": " + _0x38b356.value);
        const _0x35f076 = await this.selectOptionFromElDropdown(_0x38b356.placeholderKeywords, _0x38b356.value, _0x38b356.key);
        console.log("[CCB] " + _0x38b356.key + " 结果：", _0x35f076);
        if (!_0x35f076.success) {
          console.warn("[CCB] " + _0x38b356.key + " 选择失败:", _0x35f076.message);
          return {
            success: false,
            message: _0x35f076.message,
            failedStep: _0x38b356.key
          };
        }
        _0x1bddea++;
        await this.delay(100);
      }
      if (_0x1bddea === 0) {
        console.log("[CCB] 未提供省/市/区/网点信息，跳过专用选择器");
        return {
          success: false,
          message: "无可选信息"
        };
      }
      console.log("[CCB] 专用选择器执行完成");
      return {
        success: true
      };
    },
    async fillForm(_0x1cae49 = {}) {
      console.log("[CCB] 开始填充表单：", _0x1cae49);
      const _0x202f55 = this.getSelectorMap();
      const _0x1e994e = window.__SX_SMART_FIND__;
      const _0x4279e4 = (_0x31e683, _0x261f1d, _0x5912c8) => {
        if (!_0x261f1d) {
          console.log("[CCB] 跳过 " + _0x5912c8 + "，值为空");
          return;
        }
        let _0x32a3a0 = null;
        typeof _0x1e994e === "function" && (_0x32a3a0 = _0x1e994e(_0x31e683));
        !_0x32a3a0 && _0x202f55[_0x31e683] && (_0x32a3a0 = document.querySelector(_0x202f55[_0x31e683]));
        !_0x32a3a0 && (_0x32a3a0 = this.findInputByKeywords(_0x31e683));
        _0x32a3a0 ? (_0x32a3a0.value = _0x261f1d, _0x32a3a0.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x32a3a0.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[CCB] " + _0x5912c8 + " 填写成功：", _0x261f1d)) : console.warn("[CCB] 未找到 " + _0x5912c8 + " 输入框");
      };
      _0x4279e4("fullName", _0x1cae49.name, "姓名");
      _0x4279e4("idNumber", _0x1cae49.idcard, "证件号码");
      _0x4279e4("mobile", _0x1cae49.phone, "手机号");
      const _0x26e2d3 = [_0x1cae49.province, _0x1cae49.city, _0x1cae49.district, _0x1cae49.address].filter(Boolean).join("");
      _0x26e2d3 && _0x4279e4("address", _0x26e2d3, "联系地址");
      this.setIdTypeValue(_0x202f55.idType);
      this.fillRegionSelects(_0x1cae49, _0x202f55);
      const _0x3c4be3 = _0x1cae49.province || _0x1cae49.city || _0x1cae49.district || _0x1cae49.branch;
      if (_0x3c4be3) {
        const _0x995ade = await this.fillCCBBranchSelectors(_0x1cae49);
        !_0x995ade?.["success"] && console.warn("[CCB] 分段下拉网点选择失败：", _0x995ade?.["message"]);
      }
      if (_0x1cae49.exchangeTime) {
        const _0x4a4c04 = this.normalizeExchangeDate(_0x1cae49.exchangeTime);
        if (_0x4a4c04) {
          const _0x16b11c = this.findExchangeDateInput();
          _0x16b11c ? (_0x16b11c.value = _0x4a4c04, _0x16b11c.dispatchEvent(new Event("input", {
            bubbles: true
          })), _0x16b11c.dispatchEvent(new Event("change", {
            bubbles: true
          })), console.log("[CCB] 兑换日期填写成功：", _0x4a4c04)) : console.warn("[CCB] 未找到兑换日期输入框");
        } else {
          console.warn("[CCB] 兑换日期格式不正确：", _0x1cae49.exchangeTime);
        }
      }
      if (_0x1cae49.quantity) {
        const _0x397d9e = document.querySelector("input[placeholder*=\"数量\"]") || document.querySelector("input[type=\"number\"]");
        _0x397d9e && (_0x397d9e.value = String(_0x1cae49.quantity), _0x397d9e.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x397d9e.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[CCB] 预约数量填写成功：", _0x1cae49.quantity));
      }
      this.autoCheckAgreementCheckboxes();
      console.log("[CCB] 表单填写完成");
    },
    setIdTypeValue(_0x194162) {
      if (!_0x194162) {
        return;
      }
      const _0x5df24b = document.querySelector(_0x194162);
      if (!_0x5df24b) {
        return;
      }
      const _0x3503da = Array.from(_0x5df24b.options || []);
      const _0x2dca82 = _0x3503da.find(_0x4d3a98 => /身份证|1010|IDCARD/.test((_0x4d3a98.textContent || _0x4d3a98.value || "").toUpperCase())) || _0x3503da[0];
      _0x2dca82 && (_0x5df24b.value = _0x2dca82.value, _0x5df24b.dispatchEvent(new Event("change", {
        bubbles: true
      })), console.log("[CCB] 证件类型选择：", _0x2dca82.textContent || _0x2dca82.value));
    },
    fillRegionSelects(_0x3f59e3, _0x55fdbf) {
      const _0x94fc40 = (_0x3b42a2, _0x26fbaf) => {
        if (!_0x26fbaf || !_0x55fdbf[_0x3b42a2]) {
          return;
        }
        const _0xcd2fc6 = document.querySelector(_0x55fdbf[_0x3b42a2]);
        if (!_0xcd2fc6) {
          return;
        }
        this.setSelectValue(_0xcd2fc6, _0x26fbaf);
      };
      _0x94fc40("province", _0x3f59e3.province);
      _0x94fc40("city", _0x3f59e3.city);
      _0x94fc40("district", _0x3f59e3.district);
    },
    setSelectValue(_0x28db85, _0x2bd79f) {
      if (!_0x28db85 || !_0x2bd79f) {
        return false;
      }
      const _0x507d2b = Array.from(_0x28db85.options || []);
      const _0x2203d2 = _0x148bba => _0x148bba.replace(/省|市|区|县|分行|支行|营业部|网点/g, "").trim();
      const _0x5c8bd1 = _0x2203d2(_0x2bd79f);
      let _0x489a98 = _0x507d2b.find(_0x20817c => (_0x20817c.textContent || _0x20817c.value || "").includes(_0x2bd79f)) || _0x507d2b.find(_0x538db5 => _0x2203d2(_0x538db5.textContent || _0x538db5.value || "") === _0x5c8bd1);
      if (_0x489a98) {
        _0x28db85.value = _0x489a98.value;
        _0x28db85.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        console.log("[CCB] 下拉选择：", _0x489a98.textContent || _0x489a98.value);
        return true;
      }
      return false;
    },
    async fillBranch(_0xaab567) {
      const _0xf699df = [];
      if (_0xaab567.branchPath) {
        _0xf699df.push(..._0xaab567.branchPath.split("/").map(_0x3460e1 => _0x3460e1.trim()).filter(Boolean));
      } else {
        if (_0xaab567.province) {
          _0xf699df.push(_0xaab567.province);
        }
        if (_0xaab567.city) {
          _0xf699df.push(_0xaab567.city);
        }
        if (_0xaab567.district) {
          _0xf699df.push(_0xaab567.district);
        }
        if (_0xaab567.branch) {
          _0xf699df.push(_0xaab567.branch);
        }
      }
      const _0x106238 = _0xf699df.join("/");
      if (!_0x106238) {
        console.log("[CCB] 未提供网点路径，跳过网点选择");
        return;
      }
      if (window.__branchFinder__?.["autoFillBranch"]) {
        try {
          const _0x1fe25b = await window.__branchFinder__.autoFillBranch(_0x106238, {
            enableLog: false
          });
          console.log("[CCB] BranchFinder 填写结果：", _0x1fe25b);
          if (_0x1fe25b?.["success"]) {
            return;
          }
        } catch (_0x516e10) {
          console.warn("[CCB] BranchFinder 执行失败：", _0x516e10);
        }
      }
      const _0x2a5de2 = document.querySelector(this.getSelectorMap().branch);
      _0x2a5de2 && (_0x2a5de2.value = _0x106238, _0x2a5de2.dispatchEvent(new Event("input", {
        bubbles: true
      })), _0x2a5de2.dispatchEvent(new Event("change", {
        bubbles: true
      })), console.log("[CCB] 直接写入网点：", _0x106238));
    },
    findInputByKeywords(_0x142b5c) {
      const _0x4fd08c = {
        fullName: ["姓名", "客户姓名", "兑换人"],
        idNumber: ["证件号码", "证件号", "身份证"],
        mobile: ["手机号", "手机号码", "联系电话"],
        address: ["联系地址", "详细地址", "通讯地址"],
        branch: ["网点", "兑换网点", "预约网点"]
      };
      const _0x545406 = _0x4fd08c[_0x142b5c];
      if (!_0x545406) {
        return null;
      }
      const _0x3ecb06 = (_0x516cc6 = "") => _0x516cc6.replace(/[\s:：]/g, "").toLowerCase();
      const _0x12174e = Array.from(document.querySelectorAll("input, textarea"));
      for (const _0x25eb0d of _0x12174e) {
        if (_0x25eb0d.disabled || _0x25eb0d.offsetParent === null) {
          continue;
        }
        const _0x31d8ff = [_0x25eb0d.placeholder, _0x25eb0d.getAttribute("aria-label"), _0x25eb0d.name, _0x25eb0d.id];
        const _0x2bbefc = _0x25eb0d.closest("label");
        _0x2bbefc && _0x31d8ff.push(_0x2bbefc.textContent);
        const _0x17a9a1 = _0x25eb0d.closest(".el-form-item")?.["querySelector"](".el-form-item__label")?.["textContent"] || _0x25eb0d.parentElement?.["querySelector"](".form-label")?.["textContent"];
        _0x17a9a1 && _0x31d8ff.push(_0x17a9a1);
        const _0x585f96 = _0x3ecb06(_0x31d8ff.filter(Boolean).join(" "));
        if (!_0x585f96) {
          continue;
        }
        if (_0x545406.some(_0x34b3bb => _0x585f96.includes(_0x3ecb06(_0x34b3bb)))) {
          return _0x25eb0d;
        }
      }
      return null;
    },
    normalizeExchangeDate(_0x192c61) {
      if (!_0x192c61) {
        return null;
      }
      if (_0x192c61 instanceof Date && !isNaN(_0x192c61)) {
        return _0x192c61.toISOString().slice(0, 10);
      }
      const _0x1a790e = String(_0x192c61).trim();
      if (!_0x1a790e) {
        return null;
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(_0x1a790e)) {
        return _0x1a790e;
      }
      if (/^\d{4}[/.]\d{1,2}[/.]\d{1,2}$/.test(_0x1a790e)) {
        return _0x1a790e.replace(/[/.]/g, "-");
      }
      const _0x540298 = new Date(_0x1a790e);
      if (!isNaN(_0x540298)) {
        return _0x540298.toISOString().slice(0, 10);
      }
      return null;
    },
    findExchangeDateInput() {
      const _0x451de6 = ["input[name*=\"exchangeDate\"]", "input[id*=\"exchangeDate\"]", "input[name*=\"exchangeTime\"]", "input[id*=\"exchangeTime\"]", "input[name*=\"appointmentDate\"]", "input[id*=\"appointmentDate\"]", "input[placeholder*=\"兑换日期\"]", "input[placeholder*=\"预约日期\"]", ".el-date-editor input.el-input__inner", "input[type=\"date\"]"];
      for (const _0x4008b0 of _0x451de6) {
        const _0x5656c7 = document.querySelector(_0x4008b0);
        if (_0x5656c7 && !_0x5656c7.disabled && _0x5656c7.offsetParent !== null) {
          return _0x5656c7;
        }
      }
      return null;
    },
    autoCheckAgreementCheckboxes() {
      try {
        const _0x4d1fb9 = ["阅读", "同意", "协议", "声明", "须知", "知悉", "约定"];
        const _0x1bd203 = new Set();
        const _0x1e42c9 = _0x16875c => {
          if (!_0x16875c || _0x16875c.disabled) {
            return;
          }
          const _0x117688 = _0x16875c.closest(".el-checkbox") || _0x16875c.parentElement || _0x16875c;
          const _0x31fd30 = _0x117688.querySelector(".el-checkbox__input") || _0x117688;
          const _0x396d19 = _0x117688.querySelector(".el-checkbox__label");
          if (_0x16875c.checked || _0x31fd30.classList.contains("is-checked")) {
            return;
          }
          const _0x60e302 = _0x396d19 || _0x31fd30;
          _0x60e302.click();
          _0x1bd203.add(_0x16875c);
        };
        const _0x287912 = Array.from(document.querySelectorAll("label, [role='label'], .label, [class*='label']"));
        for (const _0x461df1 of _0x287912) {
          const _0x163e46 = (_0x461df1.textContent || "").trim();
          if (!_0x163e46) {
            continue;
          }
          if (!_0x4d1fb9.some(_0x542db4 => _0x163e46.includes(_0x542db4))) {
            continue;
          }
          let _0x343239 = null;
          const _0x491f54 = _0x461df1.getAttribute("for");
          if (_0x491f54) {
            const _0xfc1f6 = document.getElementById(_0x491f54);
            _0xfc1f6 && _0xfc1f6.type === "checkbox" && (_0x343239 = _0xfc1f6);
          }
          if (!_0x343239) {
            const _0x40610a = _0x461df1.closest(".el-form-item, .el-checkbox, .el-col, .el-row") || _0x461df1.parentElement;
            _0x40610a && (_0x343239 = _0x40610a.querySelector("input[type='checkbox']") || _0x40610a.querySelector(".el-checkbox input[type='checkbox']"));
          }
          _0x343239 && !_0x343239.disabled && !_0x1bd203.has(_0x343239) && (console.log("[CCB] 自动勾选协议勾选框（label 匹配）：", _0x163e46), _0x1e42c9(_0x343239));
        }
        const _0x463ffe = Array.from(document.querySelectorAll("input[type='checkbox']"));
        for (const _0x2ea2d3 of _0x463ffe) {
          if (_0x1bd203.has(_0x2ea2d3) || _0x2ea2d3.disabled) {
            continue;
          }
          const _0x1c7fa0 = _0x2ea2d3.closest(".el-checkbox, .el-form-item, .el-col, .el-row") || _0x2ea2d3.parentElement;
          let _0x2013e1 = "";
          _0x1c7fa0 && (_0x2013e1 = (_0x1c7fa0.textContent || "").trim());
          if (!_0x2013e1) {
            continue;
          }
          if (!_0x4d1fb9.some(_0x1ee1eb => _0x2013e1.includes(_0x1ee1eb))) {
            continue;
          }
          console.log("[CCB] 自动勾选协议勾选框（文本匹配）：", _0x2013e1);
          _0x1e42c9(_0x2ea2d3);
        }
      } catch (_0x5d2ba0) {
        console.warn("[CCB] 自动勾选协议勾选框出错：", _0x5d2ba0);
      }
    },
    async submit() {
      console.log("[CCB] submit 被调用");
      const _0x15fda2 = this.getSelectorMap();
      let _0x555bac = document.querySelector(_0x15fda2.submitButton);
      if (!_0x555bac) {
        const _0x37e59f = Array.from(document.querySelectorAll("button, input[type='submit'], .el-button, [role='button']"));
        const _0x613434 = ["提交", "确认", "下一步", "预约", "完成"];
        _0x555bac = _0x37e59f.find(_0x26176c => {
          const _0x5c15b2 = (_0x26176c.textContent || _0x26176c.value || "").trim();
          if (!_0x5c15b2) {
            return false;
          }
          return _0x613434.some(_0xc8f7f1 => _0x5c15b2.includes(_0xc8f7f1));
        });
      }
      if (_0x555bac) {
        _0x555bac.click();
        _0x555bac.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }));
        console.log("[CCB] 提交按钮已点击");
        return true;
      }
      console.warn("[CCB] 未找到提交按钮");
      return false;
    },
    async verifyResult() {
      const _0x17dc09 = (document.body.innerText || document.body.textContent || "").toLowerCase();
      return /成功|完成|已提交|提交成功|预约成功/.test(_0x17dc09);
    }
  };
  window.shuixian.register(_0x4bdb41);
})();