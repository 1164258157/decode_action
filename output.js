//Mon Dec 15 2025 04:40:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const originalLog = console.log;
const originalWarn = console.warn;
const originalDebug = console.debug;
const originalInfo = console.info;
console.log = function (..._0x3b05ed) {
  originalLog.apply(console, ["[SX FormFill]", ..._0x3b05ed]);
};
console.warn = function (..._0xad2130) {
  originalWarn.apply(console, ["[SX FormFill WARN]", ..._0xad2130]);
};
console.debug = function (..._0x56cfbe) {
  originalDebug.apply(console, ["[SX FormFill DEBUG]", ..._0x56cfbe]);
};
console.info = function (..._0x146924) {
  originalInfo.apply(console, ["[SX FormFill INFO]", ..._0x146924]);
};
(function () {
  const _0x250850 = "SX_FILL";
  const _0x3459ef = "SX_GET_CONFIG";
  function _0x38ab1e(_0x6366d0, _0x52daaf) {
    _0x6366d0 && (_0x6366d0.value = _0x52daaf, _0x6366d0.dispatchEvent(new Event("input", {
      bubbles: true
    })), _0x6366d0.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function _0x464dc2(_0x512e45) {
    return String(_0x512e45 || "").replace(/\s+/g, "").toLowerCase();
  }
  function _0x42d4c2(_0x283bd6) {
    const _0x7b9e29 = {
      fullName: [{
        label: ["姓名", "客户姓名", "兑换人姓名", "请填写客户姓名", "请输入姓名", "name", "userName", "customerName"]
      }, {
        placeholder: ["请输入姓名", "请输入客户姓名", "请输入兑换人姓名", "name", "姓名"]
      }, {
        name: ["name", "fullName", "userName", "customerName", "realName"]
      }, {
        id: ["name", "fullName", "userName", "customerName", "realName"]
      }],
      idType: [{
        label: ["证件类型", "idType", "certType", "id_type"]
      }, {
        name: ["idType", "certType", "id_type", "cert_type", "idTypeCode"]
      }, {
        id: ["idType", "certType", "id_type", "cert_type"]
      }],
      idNumber: [{
        label: ["证件号码", "证件号", "身份证号", "idNumber", "idNo", "certNo", "certNumber"]
      }, {
        placeholder: ["请输入证件号码", "请输入证件号", "请输入身份证号", "idNumber", "证件号"]
      }, {
        name: ["idNumber", "idNo", "certNo", "certNumber", "id_number", "cert_no"]
      }, {
        id: ["idNumber", "idNo", "certNo", "certNumber", "id_number"]
      }],
      mobile: [{
        label: ["手机号", "手机号码", "联系电话", "mobile", "phone", "mobilePhone", "tel"]
      }, {
        placeholder: ["请输入手机号", "请输入手机号码", "请输入联系电话", "mobile", "手机号"]
      }, {
        name: ["mobile", "phone", "mobilePhone", "tel", "telephone", "contactPhone"]
      }, {
        id: ["mobile", "phone", "mobilePhone", "tel"]
      }],
      address: [{
        label: ["详细地址", "地址", "address", "detailAddress", "fullAddress"]
      }, {
        placeholder: ["请输入详细地址", "请输入地址", "address"]
      }, {
        name: ["address", "detailAddress", "fullAddress", "addr"]
      }, {
        id: ["address", "detailAddress", "fullAddress", "addr"]
      }]
    }[_0x283bd6];
    if (!_0x7b9e29) {
      return null;
    }
    const _0xe86fa2 = Array.from(document.querySelectorAll("tr.el-table__row"));
    for (const _0x117fff of _0xe86fa2) {
      const _0x126e7a = _0x117fff.querySelector("td:first-child");
      const _0x480ab0 = _0x117fff.querySelector("td:last-child, td:nth-child(2)");
      if (_0x126e7a && _0x480ab0) {
        const _0x11f155 = Array.from(_0x126e7a.querySelectorAll("div.information-item"));
        const _0x26a0a6 = Array.from(_0x480ab0.querySelectorAll("div.information-input"));
        for (let _0x86a1de = 0; _0x86a1de < _0x11f155.length; _0x86a1de++) {
          const _0x20fe92 = _0x11f155[_0x86a1de];
          const _0x391815 = _0x464dc2(_0x20fe92.textContent || _0x20fe92.innerText || "").replace(/[：:：\*\s]+$/, "").trim();
          if (!_0x391815.includes("发行计划") && _0x391815 !== "发行计划" || _0x283bd6 !== "idNumber") {
            for (const _0x3a6781 of _0x7b9e29) {
              if (_0x3a6781.label) {
                if (_0x3a6781.label.some(_0x2a809d => {
                  const _0x3cb9e2 = _0x464dc2(_0x2a809d);
                  if (_0x391815 === _0x3cb9e2) {
                    return true;
                  }
                  if (_0x391815.startsWith(_0x3cb9e2)) {
                    return true;
                  }
                  if (_0x3cb9e2.length >= 2 && _0x391815.includes(_0x3cb9e2)) {
                    if (_0x283bd6 !== "idNumber") {
                      return true;
                    }
                    {
                      const _0x4b484c = ["证件号码", "证件号", "身份证号", "idnumber", "idno", "certno"];
                      if (_0x4b484c.some(_0x41d24a => _0x3cb9e2 === _0x464dc2(_0x41d24a))) {
                        if (_0x4b484c.some(_0xf215c7 => _0x391815.includes(_0x464dc2(_0xf215c7)))) {
                          return true;
                        }
                      }
                    }
                  }
                  return false;
                }) && _0x86a1de < _0x26a0a6.length) {
                  const _0x3a8abc = _0x26a0a6[_0x86a1de].querySelector("input, select, textarea");
                  if (_0x3a8abc && _0x3a8abc.offsetParent !== null && !_0x3a8abc.disabled) {
                    console.log("[SX FormFill] Element UI 表格匹配成功: " + _0x283bd6 + " -> 标签\"" + _0x391815 + "\" (索引" + _0x86a1de + ")");
                    return _0x3a8abc;
                  }
                }
              }
            }
          }
        }
      }
    }
    const _0x25f0c2 = Array.from(document.querySelectorAll("input, select, textarea"));
    for (const _0x50b51f of _0x25f0c2) {
      if (_0x50b51f.offsetParent !== null && !_0x50b51f.disabled) {
        for (const _0x2033ba of _0x7b9e29) {
          if (_0x2033ba.label) {
            const _0x4543ae = _0x50b51f.closest("form, div, tr, td, li")?.["querySelector"]("label");
            if (_0x4543ae) {
              const _0x33ec07 = _0x464dc2(_0x4543ae.textContent || _0x4543ae.innerText || "");
              if (_0x2033ba.label.some(_0x10442a => _0x33ec07.includes(_0x464dc2(_0x10442a)))) {
                return _0x50b51f;
              }
            }
            const _0x2d9013 = _0x50b51f.id;
            if (_0x2d9013) {
              const _0x5e1a1f = document.querySelector("label[for=\"" + _0x2d9013 + "\"]");
              if (_0x5e1a1f) {
                const _0x211b6a = _0x464dc2(_0x5e1a1f.textContent || _0x5e1a1f.innerText || "");
                if (_0x2033ba.label.some(_0x29679e => _0x211b6a.includes(_0x464dc2(_0x29679e)))) {
                  return _0x50b51f;
                }
              }
            }
            const _0x14970e = _0x50b51f.parentElement;
            if (_0x14970e) {
              const _0x13bbfa = _0x464dc2(_0x14970e.textContent || _0x14970e.innerText || "");
              if (_0x2033ba.label.some(_0x47b236 => _0x13bbfa.includes(_0x464dc2(_0x47b236)) && _0x13bbfa.length < 200)) {
                return _0x50b51f;
              }
            }
          }
          if (_0x2033ba.placeholder && _0x50b51f.placeholder) {
            const _0x1cf12b = _0x464dc2(_0x50b51f.placeholder);
            if (_0x2033ba.placeholder.some(_0x29a095 => _0x1cf12b.includes(_0x464dc2(_0x29a095)))) {
              return _0x50b51f;
            }
          }
          if (_0x2033ba.name && _0x50b51f.name) {
            const _0x4e2fde = _0x464dc2(_0x50b51f.name);
            if (_0x2033ba.name.some(_0x37e0be => _0x4e2fde === _0x464dc2(_0x37e0be) || _0x4e2fde.includes(_0x464dc2(_0x37e0be)))) {
              return _0x50b51f;
            }
          }
          if (_0x2033ba.id && _0x50b51f.id) {
            const _0x10b001 = _0x464dc2(_0x50b51f.id);
            if (_0x2033ba.id.some(_0xfde7ee => _0x10b001 === _0x464dc2(_0xfde7ee) || _0x10b001.includes(_0x464dc2(_0xfde7ee)))) {
              return _0x50b51f;
            }
          }
        }
      }
    }
    return null;
  }
  window.__SX_SMART_FIND__ = _0x42d4c2;
  function _0x3ac517(_0x37ee4d) {
    if (!_0x37ee4d || !_0x37ee4d.options) {
      return;
    }
    const _0x6df8bf = ["身份证", "居民身份证", "证件号码", "证件号", "身份證", "二代身份证", "二代身份證", "idcard", "identitycard", "id_card", "id-card", "id", "idno", "idnumber", "idtype"];
    const _0x178476 = ["01", "1", "id", "idc"];
    const _0x42298a = Array.from(_0x37ee4d.options);
    for (const _0xa18ff4 of _0x42298a) {
      const _0x40a627 = _0x464dc2(_0xa18ff4.textContent || _0xa18ff4.label || "");
      if (_0x6df8bf.some(_0x10b817 => _0x40a627.includes(_0x464dc2(_0x10b817)))) {
        _0x37ee4d.value = _0xa18ff4.value;
        _0x37ee4d.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        return true;
      }
    }
    for (const _0x38af6f of _0x42298a) {
      const _0x597bb3 = _0x464dc2(_0x38af6f.value || _0x38af6f.label || "");
      if (_0x6df8bf.some(_0x1095c5 => _0x597bb3.includes(_0x464dc2(_0x1095c5))) || _0x178476.some(_0xa6213c => _0x597bb3 === _0x464dc2(_0xa6213c))) {
        _0x37ee4d.value = _0x38af6f.value;
        _0x37ee4d.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        return true;
      }
    }
    return false;
  }
  async function _0x3c612e(_0x1c2eb4) {
    try {
      const _0x21ee2b = await async function () {
        return await new Promise(_0x551d77 => {
          chrome.runtime.sendMessage({
            type: _0x3459ef
          }, _0x551d77);
        });
      }();
      const _0xa151cd = _0x1c2eb4?.["bank"] || function () {
        const _0x56baa2 = window.shuixian?.["detect"]?.();
        return _0x56baa2?.["id"] || "UNKNOWN";
      }();
      const _0x4b1a3b = _0x1c2eb4?.["region"] || "";
      const _0x2e046e = function (_0x4c49d6, _0x23f8e2, _0x5d3a60, _0x546ab7) {
        if (_0x23f8e2) {
          const _0x522731 = (_0x4c49d6.profiles || []).find(_0x17186c => _0x17186c.id === _0x23f8e2);
          if (_0x522731) {
            return _0x522731;
          }
        }
        if (_0x4c49d6.profileSelection?.["rules"]?.["length"]) {
          const _0x11d4a3 = _0x4c49d6.profileSelection.rules.find(_0x3befe2 => !(_0x3befe2.bank && _0x3befe2.bank !== _0x5d3a60 || _0x3befe2.region && _0x3befe2.region !== _0x546ab7));
          if (_0x11d4a3) {
            const _0x1dae7f = (_0x4c49d6.profiles || []).find(_0x3bee4f => _0x3bee4f.id === _0x11d4a3.profileId);
            if (_0x1dae7f) {
              return _0x1dae7f;
            }
          }
        }
        if (_0x4c49d6.defaultProfileId) {
          const _0x2fea92 = (_0x4c49d6.profiles || []).find(_0x1750c9 => _0x1750c9.id === _0x4c49d6.defaultProfileId);
          if (_0x2fea92) {
            return _0x2fea92;
          }
        }
        return null;
      }(_0x21ee2b, _0x1c2eb4?.["profile"], _0xa151cd, _0x4b1a3b);
      if (!_0x2e046e) {
        throw new Error("未找到可用的信息模板，请在扩展选项中配置。");
      }
      const _0x5ec2a9 = window.shuixian?.["get"]?.(_0xa151cd);
      const _0x38bfd6 = _0x5ec2a9?.["getSelectorMap"]?.() || (_0x21ee2b.bankFieldMap || {})[_0xa151cd] || {};
      if (_0x5ec2a9?.["waitForOpen"]) {
        try {
          await _0x5ec2a9.waitForOpen();
        } catch {}
      }
      if (_0x5ec2a9?.["fillForm"]) {
        try {
          await _0x5ec2a9.fillForm({
            profile: _0x2e046e,
            region: _0x4b1a3b,
            payload: _0x1c2eb4
          });
        } catch (_0x5cc5b8) {
          console.warn("适配器填充失败:", _0x5cc5b8);
        }
      }
      (function (_0x3dc358, _0xe11ae4) {
        const _0x33513c = {
          fullName: "fullName",
          idType: "idType",
          idNumber: "idNumber",
          mobile: "mobile",
          address: "address"
        };
        if (_0xe11ae4) {
          for (const [_0x365bec, _0x133472] of Object.entries(_0xe11ae4)) {
            const _0x2d36fe = _0x3dc358[_0x365bec];
            if (_0x2d36fe == null) {
              continue;
            }
            const _0x1fc352 = document.querySelector(_0x133472);
            if (_0x1fc352) {
              if (_0x365bec !== "idType" || _0x1fc352.tagName !== "SELECT" && _0x1fc352.getAttribute("role") !== "listbox") {
                _0x38ab1e(_0x1fc352, _0x2d36fe);
              } else {
                !_0x3ac517(_0x1fc352) && _0x38ab1e(_0x1fc352, _0x2d36fe);
              }
            }
          }
        }
        for (const [_0x1fa48d, _0x687574] of Object.entries(_0x33513c)) {
          const _0x6d49a7 = _0x3dc358[_0x687574];
          if (_0x6d49a7 == null) {
            continue;
          }
          if (_0xe11ae4 && _0xe11ae4[_0x687574]) {
            const _0x3cad50 = document.querySelector(_0xe11ae4[_0x687574]);
            if (_0x3cad50 && _0x3cad50.value) {
              continue;
            }
          }
          const _0x4f858d = _0x42d4c2(_0x1fa48d);
          if (_0x4f858d) {
            if (_0x1fa48d !== "idType" || _0x4f858d.tagName !== "SELECT" && _0x4f858d.getAttribute("role") !== "listbox") {
              _0x38ab1e(_0x4f858d, _0x6d49a7);
            } else {
              !_0x3ac517(_0x4f858d) && _0x38ab1e(_0x4f858d, _0x6d49a7);
            }
          }
        }
      })(_0x2e046e, _0x38bfd6);
      (function (_0x44c2ab, _0x45a2a8) {
        const _0x304352 = [_0x45a2a8?.["province"], _0x45a2a8?.["city"], _0x45a2a8?.["district"]].filter(Boolean);
        const _0x46f279 = [_0x44c2ab.province, _0x44c2ab.city, _0x44c2ab.district].filter(Boolean);
        for (let _0xde811b = 0; _0xde811b < _0x304352.length; _0xde811b++) {
          const _0x3c6007 = _0x304352[_0xde811b];
          const _0xf117d8 = _0x46f279[_0xde811b];
          const _0x27a9bd = document.querySelector(_0x3c6007);
          if (!_0x27a9bd || !_0xf117d8) {
            continue;
          }
          const _0x56b836 = Array.from(_0x27a9bd.options || []).find(_0x206f41 => _0x206f41.textContent.includes(_0xf117d8) || _0x206f41.value.includes(_0xf117d8));
          _0x56b836 && (_0x27a9bd.value = _0x56b836.value, _0x27a9bd.dispatchEvent(new Event("change", {
            bubbles: true
          })));
        }
      })(_0x2e046e, _0x38bfd6);
      if (_0x1c2eb4?.["submit"]) {
        if (_0x5ec2a9?.["submit"]) {
          try {
            await _0x5ec2a9.submit();
          } catch {}
        } else {
          const _0x58474b = _0x38bfd6.submitButton || "button[type='submit'], .submit, .btn-submit";
          const _0x5fd941 = document.querySelector(_0x58474b);
          _0x5fd941 && _0x5fd941.click();
        }
      }
      return {
        ok: true,
        bank: _0xa151cd,
        profileName: _0x2e046e.alias || _0x2e046e.fullName || _0x2e046e.id
      };
    } catch (_0x48ffd1) {
      console.error("填充失败:", _0x48ffd1);
      return {
        ok: false,
        error: _0x48ffd1.message
      };
    }
  }
  window.__SX_FILL_FORM__ = _0x3c612e;
  chrome.runtime.onMessage.addListener((_0x53e50e, _0x5d375a, _0x41a9c6) => _0x53e50e?.["type"] === _0x250850 && (_0x3c612e(_0x53e50e.payload).then(_0x4f197e => {
    _0x41a9c6(_0x4f197e || {
      ok: true
    });
  }).catch(_0x1a29cd => {
    _0x41a9c6({
      ok: false,
      error: _0x1a29cd.message
    });
  }), true));
  const _0x26b4a8 = new URL(location.href).searchParams.get("sx_cmd");
  if (_0x26b4a8) {
    const _0x4c6aa8 = {};
    _0x26b4a8.split(/\s+/).forEach((_0x4465a5, _0x3e64cc) => {
      if (_0x3e64cc === 0) {
        return;
      }
      const _0x38f360 = _0x4465a5.match(/^([\w\-]+)=(.+)$/);
      if (_0x38f360) {
        const _0x27ec38 = _0x38f360[1];
        let _0x94811c = decodeURIComponent(_0x38f360[2]);
        _0x94811c === "true" && (_0x94811c = true);
        _0x94811c === "false" && (_0x94811c = false);
        _0x4c6aa8[_0x27ec38] = _0x94811c;
      }
    });
    _0x3c612e(_0x4c6aa8);
  }
})();