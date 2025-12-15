//Mon Dec 15 2025 04:37:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const _0x1885c4 = {
    id: "BOC",
    detect: () => {
      const _0x45d665 = location.hostname || "";
      const _0x40d799 = location.pathname || "";
      return _0x45d665.includes("boc") || _0x45d665.includes("bankofchina") || _0x40d799.includes("中国银行") || _0x40d799.includes("bankofchina");
    },
    async waitForOpen() {},
    getSelectorMap: () => ({
      fullName: ["input[name*=\"name\"]", "input[id*=\"name\"]", "input[placeholder*=\"姓名\"]", "input[placeholder*=\"客户姓名\"]", "input[name*=\"custName\"]", "input[id*=\"custName\"]"].join(", "),
      idType: ["select[name*=\"idType\"]", "select[id*=\"idType\"]", "select[name*=\"certType\"]", "select[id*=\"certType\"]", "select[name*=\"idtype\"]", "select[id*=\"idtype\"]"].join(", "),
      idNumber: ["input[name*=\"idNumber\"]", "input[id*=\"idNumber\"]", "input[name*=\"idNo\"]", "input[id*=\"idNo\"]", "input[name*=\"certNo\"]", "input[id*=\"certNo\"]", "input[name*=\"certNumber\"]", "input[id*=\"certNumber\"]", "input[placeholder*=\"证件号码\"]", "input[placeholder*=\"证件号\"]", "input[placeholder*=\"身份证号\"]"].join(", "),
      mobile: ["input[name*=\"mobile\"]", "input[id*=\"mobile\"]", "input[name*=\"phone\"]", "input[id*=\"phone\"]", "input[placeholder*=\"手机号码\"]", "input[placeholder*=\"手机号\"]", "input[name*=\"tel\"]", "input[id*=\"tel\"]"].join(", "),
      address: ["textarea[name*=\"address\"]", "textarea[id*=\"address\"]", "input[name*=\"address\"]", "input[id*=\"address\"]", "input[placeholder*=\"地址\"]", "textarea[placeholder*=\"地址\"]"].join(", "),
      province: ["select[name*=\"province\"]", "select[id*=\"province\"]", "select[name*=\"Province\"]", "select[id*=\"Province\"]"].join(", "),
      city: ["select[name*=\"city\"]", "select[id*=\"city\"]", "select[name*=\"City\"]", "select[id*=\"City\"]"].join(", "),
      district: ["select[name*=\"district\"]", "select[id*=\"district\"]", "select[name*=\"county\"]", "select[id*=\"county\"]", "select[name*=\"area\"]", "select[id*=\"area\"]"].join(", "),
      branch: ["input[name*=\"branch\"]", "input[id*=\"branch\"]", "input[placeholder*=\"网点\"]", ".el-cascader input.el-input__inner"].join(", "),
      submitButton: ["button[type=\"submit\"]", "input[type=\"submit\"]", "button.el-button--primary"].join(", ")
    }),
    async fillForm(_0x533d79 = {}) {
      console.log("[BOC] 开始填充表单：", _0x533d79);
      const _0x6506f9 = this.getSelectorMap();
      const _0x255448 = window.__SX_SMART_FIND__;
      const _0x2940f0 = (_0x53c0fb, _0x5f7fe5, _0x529543) => {
        if (!_0x5f7fe5) {
          console.log("[BOC] 跳过 " + _0x529543 + "，值为空");
          return;
        }
        let _0x12b130 = null;
        typeof _0x255448 === "function" && (_0x12b130 = _0x255448(_0x53c0fb));
        !_0x12b130 && _0x6506f9[_0x53c0fb] && (_0x12b130 = document.querySelector(_0x6506f9[_0x53c0fb]));
        !_0x12b130 && (_0x12b130 = this.findInputByKeywords(_0x53c0fb));
        _0x12b130 ? (_0x12b130.value = _0x5f7fe5, _0x12b130.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x12b130.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[BOC] " + _0x529543 + " 填写成功：", _0x5f7fe5)) : console.warn("[BOC] 未找到 " + _0x529543 + " 输入框");
      };
      _0x2940f0("fullName", _0x533d79.name, "姓名");
      _0x2940f0("idNumber", _0x533d79.idcard, "证件号码");
      _0x2940f0("mobile", _0x533d79.phone, "手机号");
      const _0x720787 = [_0x533d79.province, _0x533d79.city, _0x533d79.district, _0x533d79.address].filter(Boolean).join("");
      _0x720787 && _0x2940f0("address", _0x720787, "联系地址");
      _0x6506f9.idType && this.setIdTypeValue(_0x6506f9.idType);
      this.fillRegionSelects(_0x533d79, _0x6506f9);
      await this.fillBranch(_0x533d79);
      if (_0x533d79.exchangeTime) {
        const _0x1e34c3 = this.normalizeExchangeDate(_0x533d79.exchangeTime);
        if (_0x1e34c3) {
          const _0x462194 = this.findExchangeDateInput();
          _0x462194 ? (_0x462194.value = _0x1e34c3, _0x462194.dispatchEvent(new Event("input", {
            bubbles: true
          })), _0x462194.dispatchEvent(new Event("change", {
            bubbles: true
          })), console.log("[BOC] 兑换日期填写成功：", _0x1e34c3)) : console.warn("[BOC] 未找到兑换日期输入框");
        } else {
          console.warn("[BOC] 兑换日期格式不正确：", _0x533d79.exchangeTime);
        }
      }
      if (_0x533d79.quantity) {
        const _0x2c6845 = document.querySelector("input[placeholder*=\"数量\"]") || document.querySelector("input[type=\"number\"]");
        _0x2c6845 && (_0x2c6845.value = String(_0x533d79.quantity), _0x2c6845.dispatchEvent(new Event("input", {
          bubbles: true
        })), _0x2c6845.dispatchEvent(new Event("change", {
          bubbles: true
        })), console.log("[BOC] 预约数量填写成功：", _0x533d79.quantity));
      }
      this.autoCheckAgreementCheckboxes();
      console.log("[BOC] 表单填写完成");
    },
    setIdTypeValue(_0xfadce2) {
      const _0x34f14b = document.querySelector(_0xfadce2);
      if (!_0x34f14b) {
        return;
      }
      const _0xc49a98 = Array.from(_0x34f14b.options || []);
      const _0xcb33f = _0xc49a98.find(_0x5a2730 => /身份证|IDCARD|1010/.test((_0x5a2730.textContent || _0x5a2730.value || "").toUpperCase())) || _0xc49a98[0];
      _0xcb33f && (_0x34f14b.value = _0xcb33f.value, _0x34f14b.dispatchEvent(new Event("change", {
        bubbles: true
      })), console.log("[BOC] 证件类型选择：", _0xcb33f.textContent || _0xcb33f.value));
    },
    fillRegionSelects(_0x513b0d, _0x30cba0) {
      const _0xf734c2 = (_0x1c2de5, _0x592bc6) => {
        if (!_0x592bc6 || !_0x30cba0[_0x1c2de5]) {
          return;
        }
        const _0x232989 = document.querySelector(_0x30cba0[_0x1c2de5]);
        if (!_0x232989) {
          return;
        }
        this.setSelectValue(_0x232989, _0x592bc6);
      };
      _0xf734c2("province", _0x513b0d.province);
      _0xf734c2("city", _0x513b0d.city);
      _0xf734c2("district", _0x513b0d.district);
    },
    setSelectValue(_0x29a4b8, _0x21bd21) {
      if (!_0x29a4b8 || !_0x21bd21) {
        return false;
      }
      const _0x2b301e = Array.from(_0x29a4b8.options || []);
      const _0x17aead = _0x27d8ce => _0x27d8ce.replace(/省|市|区|县|分行|支行|营业部|网点/g, "").trim();
      const _0x22a489 = _0x17aead(_0x21bd21);
      let _0x3ebf1b = _0x2b301e.find(_0x17c7af => (_0x17c7af.textContent || _0x17c7af.value || "").includes(_0x21bd21)) || _0x2b301e.find(_0x11792e => _0x17aead(_0x11792e.textContent || _0x11792e.value || "") === _0x22a489);
      if (_0x3ebf1b) {
        _0x29a4b8.value = _0x3ebf1b.value;
        _0x29a4b8.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        console.log("[BOC] 下拉选择：", _0x3ebf1b.textContent || _0x3ebf1b.value);
        return true;
      }
      return false;
    },
    async fillBranch(_0x1a01a7) {
      const _0x542176 = [];
      if (_0x1a01a7.branchPath) {
        _0x542176.push(..._0x1a01a7.branchPath.split("/").map(_0x525a54 => _0x525a54.trim()).filter(Boolean));
      } else {
        if (_0x1a01a7.province) {
          _0x542176.push(_0x1a01a7.province);
        }
        if (_0x1a01a7.city) {
          _0x542176.push(_0x1a01a7.city);
        }
        if (_0x1a01a7.district) {
          _0x542176.push(_0x1a01a7.district);
        }
        if (_0x1a01a7.branch) {
          _0x542176.push(_0x1a01a7.branch);
        }
      }
      const _0x42169f = _0x542176.join("/");
      if (!_0x42169f) {
        console.log("[BOC] 未提供网点路径，跳过网点选择");
        return;
      }
      if (window.__branchFinder__?.["autoFillBranch"]) {
        try {
          const _0x3c7965 = await window.__branchFinder__.autoFillBranch(_0x42169f, {
            enableLog: false
          });
          console.log("[BOC] BranchFinder 填写结果：", _0x3c7965);
          if (_0x3c7965?.["success"]) {
            return;
          }
        } catch (_0x143c43) {
          console.warn("[BOC] BranchFinder 执行失败：", _0x143c43);
        }
      }
      const _0x2582de = document.querySelector(this.getSelectorMap().branch);
      _0x2582de && (_0x2582de.value = _0x42169f, _0x2582de.dispatchEvent(new Event("input", {
        bubbles: true
      })), _0x2582de.dispatchEvent(new Event("change", {
        bubbles: true
      })), console.log("[BOC] 直接写入网点：", _0x42169f));
    },
    findInputByKeywords(_0x242be4) {
      const _0xcbaa1b = {
        fullName: ["姓名", "客户姓名", "兑换人"],
        idNumber: ["证件号码", "证件号", "身份证"],
        mobile: ["手机号", "手机号码", "联系电话"],
        address: ["地址", "联系地址", "详细地址", "通讯地址"],
        branch: ["网点", "兑换网点", "预约网点"]
      };
      const _0x35884f = _0xcbaa1b[_0x242be4];
      if (!_0x35884f) {
        return null;
      }
      const _0x52c058 = (_0x37c503 = "") => _0x37c503.replace(/[\s:：]/g, "").toLowerCase();
      const _0x2b2b2d = Array.from(document.querySelectorAll("input, textarea"));
      for (const _0x4ce756 of _0x2b2b2d) {
        if (_0x4ce756.disabled || _0x4ce756.offsetParent === null) {
          continue;
        }
        const _0xa1f3f7 = [_0x4ce756.placeholder, _0x4ce756.getAttribute("aria-label"), _0x4ce756.name, _0x4ce756.id];
        const _0x5a7914 = _0x4ce756.closest("label");
        _0x5a7914 && _0xa1f3f7.push(_0x5a7914.textContent);
        const _0x7b12d3 = _0x4ce756.closest(".el-form-item")?.["querySelector"](".el-form-item__label")?.["textContent"] || _0x4ce756.parentElement?.["querySelector"](".form-label")?.["textContent"];
        _0x7b12d3 && _0xa1f3f7.push(_0x7b12d3);
        const _0x46ec57 = _0x52c058(_0xa1f3f7.filter(Boolean).join(" "));
        if (!_0x46ec57) {
          continue;
        }
        if (_0x35884f.some(_0x23c534 => _0x46ec57.includes(_0x52c058(_0x23c534)))) {
          return _0x4ce756;
        }
      }
      return null;
    },
    normalizeExchangeDate(_0x473293) {
      if (!_0x473293) {
        return null;
      }
      if (_0x473293 instanceof Date && !isNaN(_0x473293)) {
        return _0x473293.toISOString().slice(0, 10);
      }
      const _0x494d1f = String(_0x473293).trim();
      if (!_0x494d1f) {
        return null;
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(_0x494d1f)) {
        return _0x494d1f;
      }
      if (/^\d{4}[/.]\d{1,2}[/.]\d{1,2}$/.test(_0x494d1f)) {
        return _0x494d1f.replace(/[/.]/g, "-");
      }
      const _0x19a72e = new Date(_0x494d1f);
      if (!isNaN(_0x19a72e)) {
        return _0x19a72e.toISOString().slice(0, 10);
      }
      return null;
    },
    findExchangeDateInput() {
      const _0x10f9d7 = ["input[name*=\"exchangeDate\"]", "input[id*=\"exchangeDate\"]", "input[name*=\"exchangeTime\"]", "input[id*=\"exchangeTime\"]", "input[name*=\"appointmentDate\"]", "input[id*=\"appointmentDate\"]", "input[placeholder*=\"兑换日期\"]", "input[placeholder*=\"预约日期\"]", ".el-date-editor input.el-input__inner", "input[type=\"date\"]"];
      for (const _0x513fd8 of _0x10f9d7) {
        const _0x827bb9 = document.querySelector(_0x513fd8);
        if (_0x827bb9 && !_0x827bb9.disabled && _0x827bb9.offsetParent !== null) {
          return _0x827bb9;
        }
      }
      return null;
    },
    autoCheckAgreementCheckboxes() {
      try {
        const _0x21c918 = ["阅读", "同意", "协议", "声明", "须知", "知悉", "约定"];
        const _0x58ce28 = new Set();
        const _0x1df86e = _0x3d03be => {
          if (!_0x3d03be || _0x3d03be.disabled) {
            return;
          }
          const _0x3229ba = _0x3d03be.closest(".el-checkbox") || _0x3d03be.parentElement || _0x3d03be;
          const _0x1401e2 = _0x3229ba.querySelector(".el-checkbox__input") || _0x3229ba;
          const _0x1c7239 = _0x3229ba.querySelector(".el-checkbox__label");
          if (_0x3d03be.checked || _0x1401e2.classList.contains("is-checked")) {
            return;
          }
          const _0x5f281d = _0x1c7239 || _0x1401e2;
          _0x5f281d.click();
          _0x58ce28.add(_0x3d03be);
        };
        const _0x24746e = Array.from(document.querySelectorAll("label, [role='label'], .label, [class*='label']"));
        for (const _0x38ca85 of _0x24746e) {
          const _0xa8834e = (_0x38ca85.textContent || "").trim();
          if (!_0xa8834e) {
            continue;
          }
          if (!_0x21c918.some(_0x4ddc64 => _0xa8834e.includes(_0x4ddc64))) {
            continue;
          }
          let _0x5a3055 = null;
          const _0x883d7a = _0x38ca85.getAttribute("for");
          if (_0x883d7a) {
            const _0xd296ac = document.getElementById(_0x883d7a);
            _0xd296ac && _0xd296ac.type === "checkbox" && (_0x5a3055 = _0xd296ac);
          }
          if (!_0x5a3055) {
            const _0x1749d2 = _0x38ca85.closest(".el-form-item, .el-checkbox, .el-col, .el-row") || _0x38ca85.parentElement;
            _0x1749d2 && (_0x5a3055 = _0x1749d2.querySelector("input[type='checkbox']") || _0x1749d2.querySelector(".el-checkbox input[type='checkbox']"));
          }
          _0x5a3055 && !_0x5a3055.disabled && !_0x58ce28.has(_0x5a3055) && (console.log("[BOC] 自动勾选协议勾选框（label 匹配）：", _0xa8834e), _0x1df86e(_0x5a3055));
        }
        const _0x4cd06a = Array.from(document.querySelectorAll("input[type='checkbox']"));
        for (const _0x1eec22 of _0x4cd06a) {
          if (_0x58ce28.has(_0x1eec22) || _0x1eec22.disabled) {
            continue;
          }
          const _0x941219 = _0x1eec22.closest(".el-checkbox, .el-form-item, .el-col, .el-row") || _0x1eec22.parentElement;
          let _0x15d230 = "";
          _0x941219 && (_0x15d230 = (_0x941219.textContent || "").trim());
          if (!_0x15d230) {
            continue;
          }
          if (!_0x21c918.some(_0x4b7120 => _0x15d230.includes(_0x4b7120))) {
            continue;
          }
          console.log("[BOC] 自动勾选协议勾选框（文本匹配）：", _0x15d230);
          _0x1df86e(_0x1eec22);
        }
      } catch (_0x5ed259) {
        console.warn("[BOC] 自动勾选协议勾选框出错：", _0x5ed259);
      }
    },
    async submit() {
      console.log("[BOC] submit 被调用");
      const _0x25438f = this.getSelectorMap();
      let _0xcc1780 = document.querySelector(_0x25438f.submitButton);
      if (!_0xcc1780) {
        const _0x5c550c = Array.from(document.querySelectorAll("button, input[type='submit'], .el-button, [role='button']"));
        const _0x3828ec = ["提交", "确认", "下一步", "预约", "立即提交", "完成"];
        _0xcc1780 = _0x5c550c.find(_0x177efe => {
          const _0x44fd4a = (_0x177efe.textContent || _0x177efe.value || "").trim();
          if (!_0x44fd4a) {
            return false;
          }
          return _0x3828ec.some(_0x12f690 => _0x44fd4a.includes(_0x12f690));
        });
      }
      if (_0xcc1780) {
        _0xcc1780.click();
        _0xcc1780.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }));
        console.log("[BOC] 提交按钮已点击");
        return true;
      }
      console.warn("[BOC] 未找到提交按钮");
      return false;
    },
    async verifyResult() {
      const _0x148a0a = (document.body.innerText || document.body.textContent || "").toLowerCase();
      return /成功|已受理|完成|预约成功|提交成功|操作成功/.test(_0x148a0a);
    }
  };
  window.shuixian.register(_0x1885c4);
})();