//Mon Dec 15 2025 04:34:43 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const _0x50960b = {
    id: "ABC",
    detect: () => location.hostname.includes("abchina") || location.hostname.includes("eapply.abchina.com.cn") || location.pathname.includes("农业银行") || location.pathname.includes("CoinSearch") || location.pathname.includes("coin"),
    async waitForOpen() {},
    getSelectorMap: () => ({
      fullName: ["input[name*=\"name\"]", "input[id*=\"name\"]", "input[placeholder*=\"姓名\"]", "input[name*=\"userName\"]", "input[name*=\"customerName\"]", "input[name*=\"realName\"]", "input[id*=\"userName\"]", "input[id*=\"customerName\"]", "input[id*=\"realName\"]", "input[name*=\"custName\"]", "input[id*=\"custName\"]"].join(", "),
      idType: ["select[name*=\"idType\"]", "select[id*=\"idType\"]", "select[name*=\"certType\"]", "select[id*=\"certType\"]", "select[name*=\"idTypeCode\"]", "select[id*=\"idTypeCode\"]", "select[value*=\"身份证\"]", "select[value*=\"IDCARD\"]", "select[value*=\"1010\"]"].join(", "),
      idNumber: ["input[name*=\"idNumber\"]", "input[id*=\"idNumber\"]", "input[name*=\"idNo\"]", "input[id*=\"idNo\"]", "input[name*=\"certNo\"]", "input[id*=\"certNo\"]", "input[name*=\"certNumber\"]", "input[id*=\"certNumber\"]", "input[placeholder*=\"证件号码\"]", "input[placeholder*=\"证件号\"]", "input[placeholder*=\"身份证号\"]", "input[name*=\"idCardNo\"]", "input[id*=\"idCardNo\"]", "input[name*=\"idCard\"]", "input[id*=\"idCard\"]"].join(", "),
      mobile: ["input[name*=\"mobile\"]", "input[id*=\"mobile\"]", "input[name*=\"phone\"]", "input[id*=\"phone\"]", "input[placeholder*=\"手机号码\"]", "input[placeholder*=\"手机号\"]", "input[name*=\"mobilePhone\"]", "input[id*=\"mobilePhone\"]", "input[name*=\"tel\"]", "input[id*=\"tel\"]", "input[name*=\"telephone\"]", "input[id*=\"telephone\"]"].join(", "),
      address: ["input[name*=\"address\"]", "input[id*=\"address\"]", "textarea[name*=\"address\"]", "textarea[id*=\"address\"]", "input[placeholder*=\"地址\"]", "textarea[placeholder*=\"地址\"]", "input[name*=\"detailAddress\"]", "textarea[name*=\"detailAddress\"]"].join(", "),
      province: ["select[name*=\"province\"]", "select[id*=\"province\"]", "select[name*=\"Province\"]", "select[id*=\"Province\"]"].join(", "),
      city: ["select[name*=\"city\"]", "select[id*=\"city\"]", "select[name*=\"City\"]", "select[id*=\"City\"]"].join(", "),
      district: ["select[name*=\"district\"]", "select[id*=\"district\"]", "select[name*=\"District\"]", "select[id*=\"District\"]", "select[name*=\"county\"]", "select[id*=\"county\"]", "select[name*=\"area\"]", "select[id*=\"area\"]"].join(", "),
      verifyCode: ["input[name*=\"verifyCode\"]", "input[id*=\"verifyCode\"]", "input[name*=\"captcha\"]", "input[id*=\"captcha\"]", "input[name*=\"vcode\"]", "input[id*=\"vcode\"]", "input[placeholder*=\"验证码\"]", "input[placeholder*=\"图形验证码\"]", "input[placeholder*=\"附加码\"]"].join(", "),
      submitButton: ["input[type=\"submit\"][value*=\"提交\"]", "input[type=\"submit\"][value*=\"确认\"]", "input[type=\"submit\"][value*=\"预约\"]", "button[type=\"submit\"]", "button:contains(\"提交\")", "button:contains(\"确认\")", "button:contains(\"预约\")"].join(", ")
    }),
    async fillForm(_0x1ecfaa = {}) {
      console.log("[ABC] 开始填充表单：", _0x1ecfaa);
      const _0x493672 = this.getSelectorMap();
      const _0x3ad81f = window.__SX_SMART_FIND__;
      const _0x1fa83c = (_0x51e0f7, _0x575bbf, _0x21fa8e) => {
        if (!_0x575bbf) {
          console.log("[ABC] 跳过 " + _0x51e0f7 + "，值为空");
          return;
        }
        let _0x543883 = null;
        typeof _0x3ad81f === "function" && (_0x543883 = _0x3ad81f(_0x51e0f7));
        !_0x543883 && _0x493672[_0x51e0f7] && (_0x543883 = document.querySelector(_0x493672[_0x51e0f7]));
        !_0x543883 && (_0x543883 = this.findInputByKeywords(_0x51e0f7));
        _0x543883 ? (_0x543883.value = _0x575bbf, _0x543883.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x543883.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[ABC] " + _0x21fa8e + " 填写成功：", _0x575bbf)) : console.warn("[ABC] 未找到 " + _0x21fa8e + " 输入框");
      };
      _0x1fa83c("fullName", _0x1ecfaa.name, "姓名");
      _0x1fa83c("idNumber", _0x1ecfaa.idcard, "证件号码");
      _0x1fa83c("mobile", _0x1ecfaa.phone, "手机号");
      const _0x42f84f = [_0x1ecfaa.province, _0x1ecfaa.city, _0x1ecfaa.district, _0x1ecfaa.address].filter(Boolean).join("");
      _0x42f84f && _0x1fa83c("address", _0x42f84f, "地址");
      const _0x505daf = (_0x4adb9a, _0x34e5a8) => {
        if (!_0x34e5a8 || !_0x493672[_0x4adb9a]) {
          return false;
        }
        const _0x502bb3 = document.querySelector(_0x493672[_0x4adb9a]);
        if (!_0x502bb3) {
          return false;
        }
        const _0x42d790 = Array.from(_0x502bb3.options || []);
        const _0x530e27 = _0x34e5a8.replace(/省|市|区|县|分行|支行|营业部/g, "").trim();
        let _0x14db33 = _0x42d790.find(_0x437398 => (_0x437398.textContent || _0x437398.value || "").includes(_0x34e5a8));
        !_0x14db33 && _0x530e27 && (_0x14db33 = _0x42d790.find(_0x5e4744 => (_0x5e4744.textContent || _0x5e4744.value || "").replace(/省|市|区|县|分行|支行|营业部/g, "").includes(_0x530e27)));
        if (_0x14db33) {
          _0x502bb3.value = _0x14db33.value;
          _0x502bb3.dispatchEvent(new Event("change", {
            bubbles: true
          }));
          console.log("[ABC] 选择 " + _0x4adb9a + "：", _0x14db33.textContent || _0x14db33.value);
          return true;
        }
        return false;
      };
      _0x505daf("province", _0x1ecfaa.province);
      _0x505daf("city", _0x1ecfaa.city);
      _0x505daf("district", _0x1ecfaa.district);
      const _0x5512c4 = [];
      if (_0x1ecfaa.branchPath) {
        _0x5512c4.push(..._0x1ecfaa.branchPath.split("/").map(_0xc1171a => _0xc1171a.trim()).filter(Boolean));
      } else {
        if (_0x1ecfaa.province) {
          _0x5512c4.push(_0x1ecfaa.province);
        }
        if (_0x1ecfaa.city) {
          _0x5512c4.push(_0x1ecfaa.city);
        }
        if (_0x1ecfaa.district) {
          _0x5512c4.push(_0x1ecfaa.district);
        }
        if (_0x1ecfaa.branch) {
          _0x5512c4.push(_0x1ecfaa.branch);
        }
      }
      const _0x4558d5 = _0x5512c4.join("/");
      if (_0x4558d5 && window.__branchFinder__?.["autoFillBranch"]) {
        try {
          const _0x43bd5e = await window.__branchFinder__.autoFillBranch(_0x4558d5, {
            enableLog: false,
            speedMultiplier: 0.3
          });
          console.log("[ABC] BranchFinder 填写结果：", _0x43bd5e);
        } catch (_0x35db3d) {
          console.warn("[ABC] BranchFinder 执行失败：", _0x35db3d);
        }
      }
      if (_0x1ecfaa.exchangeTime) {
        const _0x50c411 = this.normalizeExchangeDate(_0x1ecfaa.exchangeTime);
        if (_0x50c411) {
          const _0x5642a5 = this.findExchangeDateInput();
          _0x5642a5 ? (_0x5642a5.value = _0x50c411, _0x5642a5.dispatchEvent(new Event("input", {
            bubbles: true
          })), _0x5642a5.dispatchEvent(new Event("change", {
            bubbles: true
          })), console.log("[ABC] 兑换日期填写成功：", _0x50c411)) : console.warn("[ABC] 未找到兑换日期输入框");
        } else {
          console.warn("[ABC] 兑换日期格式不正确：", _0x1ecfaa.exchangeTime);
        }
      }
      if (_0x1ecfaa.quantity) {
        const _0x23ff95 = document.querySelector("input[placeholder*=\"数量\"]") || document.querySelector("input[type=\"number\"]");
        _0x23ff95 && (_0x23ff95.value = String(_0x1ecfaa.quantity), _0x23ff95.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x23ff95.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[ABC] 预约数量填写成功：", _0x1ecfaa.quantity));
      }
      console.log("[ABC] 表单填写完成");
    },
    findInputByKeywords(_0x208eaf) {
      const _0x2d7cab = {
        fullName: ["姓名", "客户姓名", "兑换人姓名", "name"],
        idNumber: ["证件号码", "证件号", "身份证号", "idnumber", "idcard"],
        mobile: ["手机号", "手机号码", "联系电话", "mobile", "联系电话"],
        address: ["地址", "联系地址", "详细地址", "通讯地址"]
      };
      const _0x1f23a5 = _0x2d7cab[_0x208eaf];
      if (!_0x1f23a5) {
        return null;
      }
      const _0x4f0e99 = (_0x1bc894 = "") => _0x1bc894.replace(/[\s:：]/g, "").toLowerCase();
      const _0x2b54d1 = Array.from(document.querySelectorAll("input, textarea"));
      for (const _0x1e86d5 of _0x2b54d1) {
        if (_0x1e86d5.disabled || _0x1e86d5.offsetParent === null) {
          continue;
        }
        const _0x142c85 = [_0x1e86d5.placeholder, _0x1e86d5.getAttribute("aria-label"), _0x1e86d5.name, _0x1e86d5.id];
        const _0x31ddb1 = _0x1e86d5.closest("label");
        _0x31ddb1 && _0x142c85.push(_0x31ddb1.textContent);
        const _0x3aa238 = _0x1e86d5.closest(".el-form-item")?.["querySelector"](".el-form-item__label")?.["textContent"] || _0x1e86d5.parentElement?.["querySelector"](".form-label")?.["textContent"];
        _0x3aa238 && _0x142c85.push(_0x3aa238);
        const _0x1cc43e = _0x4f0e99(_0x142c85.filter(Boolean).join(" "));
        if (!_0x1cc43e) {
          continue;
        }
        if (_0x1f23a5.some(_0x56588d => _0x1cc43e.includes(_0x4f0e99(_0x56588d)))) {
          return _0x1e86d5;
        }
      }
      return null;
    },
    async submit() {
      console.log("[ABC] submit 被调用");
      const _0x47e61d = Array.from(document.querySelectorAll("button, input[type='submit'], a[class*='submit'], a[class*='btn']"));
      const _0x3d45fb = _0x47e61d.find(_0x2d71dd => {
        const _0x109d04 = (_0x2d71dd.textContent || _0x2d71dd.value || _0x2d71dd.innerText || "").trim();
        const _0x1291fa = (_0x2d71dd.className || "").toLowerCase();
        return _0x109d04.includes("提交") || _0x109d04.includes("确认") || _0x109d04.includes("预约") || _0x109d04.includes("提交预约") || _0x1291fa.includes("submit") || _0x1291fa.includes("btn-submit");
      });
      if (_0x3d45fb) {
        _0x3d45fb.click();
        _0x3d45fb.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }));
        console.log("[ABC] 提交按钮已点击");
        return true;
      }
      console.warn("[ABC] 未找到提交按钮");
      return false;
    },
    async verifyResult() {
      const _0x5c69bd = (document.body.innerText || document.body.textContent || "").toLowerCase();
      return /成功|已受理|完成|预约成功|提交成功|操作成功/.test(_0x5c69bd);
    },
    normalizeExchangeDate: function (_0x22714a) {
      if (!_0x22714a) {
        return null;
      }
      if (_0x22714a instanceof Date && !isNaN(_0x22714a)) {
        return _0x22714a.toISOString().slice(0, 10);
      }
      const _0x2d195e = String(_0x22714a).trim();
      if (!_0x2d195e) {
        return null;
      }
      if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(_0x2d195e)) {
        const [_0x1bb21c, _0x20e757, _0x34121c] = _0x2d195e.split("-").map(_0x39e591 => _0x39e591.padStart(2, "0"));
        return [_0x1bb21c, _0x20e757, _0x34121c].join("-");
      }
      if (/^\d{4}[\/.]\d{1,2}[\/.]\d{1,2}$/.test(_0x2d195e)) {
        const _0x58d366 = _0x2d195e.replace(/[/.]/g, "-").split("-");
        const [_0x4d44b4, _0xb2afd8, _0x45e22c] = _0x58d366.map((_0x3a89da, _0x377257) => _0x377257 === 0 ? _0x3a89da : _0x3a89da.padStart(2, "0"));
        return [_0x4d44b4, _0xb2afd8, _0x45e22c].join("-");
      }
      const _0x33b360 = new Date(_0x2d195e);
      if (!isNaN(_0x33b360)) {
        return _0x33b360.toISOString().slice(0, 10);
      }
      return null;
    },
    findExchangeDateInput: function () {
      const _0x217269 = ["input[name*=\"exchangeDate\"]", "input[id*=\"exchangeDate\"]", "input[name*=\"exchangeTime\"]", "input[id*=\"exchangeTime\"]", "input[name*=\"appointmentDate\"]", "input[id*=\"appointmentDate\"]", "input[placeholder*=\"兑换日期\"]", "input[placeholder*=\"预约日期\"]", "input[placeholder*=\"兑换时间\"]", "input[placeholder*=\"日期\"]", ".el-date-editor input.el-input__inner", "input[type=\"date\"]"];
      for (const _0x5bdc55 of _0x217269) {
        const _0x3d5f7c = document.querySelector(_0x5bdc55);
        if (_0x3d5f7c && !_0x3d5f7c.disabled && _0x3d5f7c.offsetParent !== null) {
          return _0x3d5f7c;
        }
      }
      return null;
    }
  };
  window.shuixian.register(_0x50960b);
})();