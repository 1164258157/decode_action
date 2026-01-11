//Sun Jan 11 2026 05:58:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function () {
  "use strict";
  "undefined" != typeof window && "localhost" !== window.location.hostname && "103.39.64.121" !== window.location.hostname && setTimeout(() => {}, 1000);
}();
(() => {
  console.log = function () {};
  console.warn = function () {};
  console.debug = function () {};
  console.info = function () {};
  console.error = function () {};
  const _0x5238d1 = "JP_GET_CONFIG";
  const _0x3a19a4 = "JP_SET_CONFIG";
  async function _0x592b54() {
    {
      return await new Promise(_0x1857cd => {
        chrome.runtime.sendMessage({
          type: _0x5238d1
        }, _0x1857cd);
      });
    }
  }
  async function _0x531a64(_0x43a2e1) {
    return await new Promise(_0x5c3d48 => {
      chrome.runtime.sendMessage({
        type: _0x3a19a4,
        payload: _0x43a2e1
      }, _0x5c3d48);
    });
  }
  function _0x1a5c4d(_0x44f9f0, _0x2d6c62 = {}, _0x8a648b = []) {
    const _0x2180d1 = document.createElement(_0x44f9f0);
    Object.entries(_0x2d6c62).forEach(([_0x3400fe, _0x251977]) => {
      "class" === _0x3400fe ? _0x2180d1.className = _0x251977 : "text" === _0x3400fe ? _0x2180d1.textContent = _0x251977 : _0x2180d1.setAttribute(_0x3400fe, _0x251977);
    });
    _0x8a648b.forEach(_0x1788a0 => _0x2180d1.appendChild(_0x1788a0));
    return _0x2180d1;
  }
  function _0x31bab3(_0x32ab80, _0x47e51a, _0x7e61af, _0x5e9225 = "text", _0x20c5b1 = {}) {
    const _0x4a2e30 = {
      value: _0x47e51a ?? "",
      type: _0x5e9225,
      class: _0x20c5b1.inputClass || ""
    };
    _0x20c5b1.placeholder && (_0x4a2e30.placeholder = _0x20c5b1.placeholder);
    const _0x36d268 = _0x1a5c4d("input", _0x4a2e30);
    let _0x269f35 = null;
    const _0x10ca80 = _0x1a5c4d("div", {
      class: "validation-error",
      style: "display: none; color: #ef4444; font-size: 12px; margin-top: 4px;"
    });
    if (null != _0x47e51a) {
      if ("date" === _0x5e9225 && _0x47e51a) {
        const _0x491fbc = String(_0x47e51a);
        if (_0x491fbc.includes("T") || _0x491fbc.includes(" ")) {
          const _0x256712 = _0x491fbc.split(/[T\s]/)[0];
          _0x36d268.value = _0x256712;
        } else {
          _0x36d268.value = _0x491fbc;
        }
      } else {
        if ("time" === _0x5e9225 && _0x47e51a) {
          const _0x5f1b84 = String(_0x47e51a);
          if (_0x5f1b84.includes("T") || _0x5f1b84.includes(" ")) {
            {
              const _0x585df3 = _0x5f1b84.split(/[T\s]/)[1] || _0x5f1b84.split(/[T\s]/)[0];
              _0x36d268.value = _0x585df3.substring(0, 5);
            }
          } else {
            _0x36d268.value = _0x5f1b84.substring(0, 5);
          }
        } else {
          _0x36d268.value = _0x47e51a;
        }
      }
    }
    const _0x1a8fdb = () => {
      let _0x5a52b2 = _0x36d268.value;
      if (_0x20c5b1.validateIdNumber) {
        const _0x27f4ad = function (_0x3e2a41) {
          if (!_0x3e2a41 || "" === _0x3e2a41.trim()) {
            return {
              valid: true,
              message: ""
            };
          }
          const _0xa18c3c = _0x3e2a41.trim();
          return /^(\d{15}|\d{18}|(\d{17}[xX]))$/.test(_0xa18c3c) ? {
            valid: true,
            message: ""
          } : {
            valid: false,
            message: "请输入正确的身份证号（15位或18位数字，18位最后一位可以是X）"
          };
        }(_0x5a52b2);
        _0x269f35 = _0x27f4ad.valid ? null : _0x27f4ad.message;
      } else {
        if (_0x20c5b1.validateMobile) {
          const _0x202771 = function (_0x5e8aef) {
            if (!_0x5e8aef || "" === _0x5e8aef.trim()) {
              return {
                valid: true,
                message: ""
              };
            }
            const _0x3fea7e = _0x5e8aef.trim();
            return /^1[3-9]\d{9}$/.test(_0x3fea7e) ? {
              valid: true,
              message: ""
            } : {
              valid: false,
              message: "请输入正确的手机号（11位数字，以1开头）"
            };
          }(_0x5a52b2);
          _0x269f35 = _0x202771.valid ? null : _0x202771.message;
        }
      }
      _0x269f35 ? (_0x10ca80.textContent = _0x269f35, _0x10ca80.style.display = "block", _0x36d268.style.borderColor = "#ef4444", _0x36d268.style.backgroundColor = "#fef2f2") : (_0x10ca80.style.display = "none", _0x36d268.style.borderColor = "", _0x36d268.style.backgroundColor = "");
      return !_0x269f35;
    };
    _0x36d268.oninput = () => {
      let _0x149fce = _0x36d268.value;
      if ("date" === _0x5e9225 && _0x149fce && (_0x149fce.includes("T") || _0x149fce.includes(" ")) && (_0x149fce = _0x149fce.split(/[T\s]/)[0], _0x36d268.value = _0x149fce), "time" === _0x5e9225 && _0x149fce && (_0x149fce.includes("T") || _0x149fce.includes(" "))) {
        const _0x3ee80c = _0x149fce.split(/[T\s]/)[1] || _0x149fce.split(/[T\s]/)[0];
        _0x149fce = _0x3ee80c.substring(0, 5);
        _0x36d268.value = _0x149fce;
      }
      _0x1a8fdb();
      _0x7e61af(_0x149fce);
    };
    _0x36d268.onblur = () => {
      _0x1a8fdb();
    };
    (_0x20c5b1.validateIdNumber || _0x20c5b1.validateMobile) && _0x1a8fdb();
    const _0x23f4f3 = function (_0x46230f, _0x2cf002) {
      const _0x11fa08 = _0x1a5c4d("div");
      _0x11fa08.appendChild(_0x1a5c4d("label", {
        text: _0x46230f
      }));
      _0x11fa08.appendChild(_0x2cf002);
      return _0x11fa08;
    }(_0x32ab80, _0x36d268);
    (_0x20c5b1.validateIdNumber || _0x20c5b1.validateMobile) && _0x23f4f3.appendChild(_0x10ca80);
    return _0x23f4f3;
  }
  function _0x45663b(_0x3f42ea, _0x17027d, _0x283f3f = {}) {
    const _0x1bb412 = _0x1a5c4d("button", {
      class: "btn",
      text: _0x3f42ea,
      ..._0x283f3f
    });
    _0x1bb412.onclick = _0x17027d;
    return _0x1bb412;
  }
  function _0x5f0405(_0x104803) {
    window.__cfg = _0x104803;
    (function (_0x5e4fb7) {
      const _0x209942 = document.getElementById("profiles");
      _0x209942.innerHTML = "";
      const _0x1dcdf9 = 30;
      let _0x4db9b2 = Array.isArray(_0x5e4fb7.profiles) ? _0x5e4fb7.profiles.slice() : [];
      console.log("[Options] 渲染前 profiles 数量:", _0x4db9b2.length);
      console.log("[Options] 渲染前 profiles 数据:", _0x4db9b2.map(_0x1b4fe3 => ({
        id: _0x1b4fe3.id,
        alias: _0x1b4fe3.alias,
        fullName: _0x1b4fe3.fullName,
        hasData: !!(_0x1b4fe3.fullName || _0x1b4fe3.idNumber || _0x1b4fe3.mobile)
      })));
      _0x4db9b2.length > _0x1dcdf9 && (_0x4db9b2 = _0x4db9b2.slice(0, _0x1dcdf9));
      _0x5e4fb7.profiles = _0x4db9b2;
      console.log("[Options] 渲染后 profiles 数量:", _0x4db9b2.length);
      const _0x1950a9 = document.getElementById("profileCount");
      _0x1950a9 && (_0x4db9b2.filter(_0x9e1c1a => _0x9e1c1a.fullName || _0x9e1c1a.idNumber || _0x9e1c1a.mobile).length, _0x1950a9.textContent = _0x4db9b2.length + "/30 人");
      const _0x35fbc9 = document.getElementById("addProfile");
      _0x35fbc9 && (_0x35fbc9.style.display = "flex", _0x4db9b2.length >= _0x1dcdf9 ? (_0x35fbc9.disabled = true, _0x35fbc9.title = "最多只能添加 30 个人员", _0x35fbc9.style.opacity = "0.5", _0x35fbc9.style.cursor = "not-allowed") : (_0x35fbc9.disabled = false, _0x35fbc9.title = "添加抢单人员", _0x35fbc9.style.opacity = "1", _0x35fbc9.style.cursor = "pointer"), _0x35fbc9.onclick = () => {
        if (_0x5e4fb7.profiles.length >= _0x1dcdf9) {
          return void alert("最多只能添加 30 个人员");
        }
        const _0x23e51d = "p_" + Math.random().toString(36).slice(2, 8);
        _0x5e4fb7.profiles.push({
          id: _0x23e51d,
          fullName: ""
        });
        _0x5f0405(_0x5e4fb7);
      });
      _0x4db9b2.forEach((_0x2394b9, _0x6aa464) => {
        const _0x1843a0 = _0x1a5c4d("div", {
          class: "card profile-card"
        });
        const _0x53f944 = _0x1a5c4d("div", {
          class: "profile-name",
          style: "cursor: pointer;"
        });
        const _0x23d4aa = _0x2394b9.alias || _0x2394b9.fullName || _0x2394b9.id || "人员 " + (_0x6aa464 + 1);
        _0x53f944.textContent = _0x23d4aa;
        _0x53f944.title = "点击填充 \"" + _0x23d4aa + "\" 的信息到当前页面表单";
        const _0x4b59af = async () => {
          try {
            const _0x4af64c = _0x53f944.textContent;
            _0x53f944.textContent = "填充中...";
            _0x53f944.style.color = "#3b82f6";
            const [_0x3ef04e] = await chrome.tabs.query({
              active: true,
              currentWindow: true
            });
            if (!_0x3ef04e || !_0x3ef04e.id) {
              _0x53f944.textContent = _0x4af64c;
              _0x53f944.style.color = "";
              return void alert("无法获取当前页面，请确保页面已加载完成。");
            }
            if (!["icbc", "ccb", "boc", "abchina", "bankcomm", "bocom", "psbc", "hxb"].some(_0x229939 => _0x3ef04e.url && (_0x3ef04e.url.includes(_0x229939) || _0x3ef04e.url.includes("银行"))) && !_0x3ef04e.url.startsWith("http")) {
              _0x53f944.textContent = _0x4af64c;
              _0x53f944.style.color = "";
              return void alert("当前页面不是银行预约页面，请先打开银行预约页面后再点击填充。");
            }
            chrome.tabs.sendMessage(_0x3ef04e.id, {
              type: "JP_FILL",
              payload: {
                profile: _0x2394b9.id,
                bank: null,
                region: "",
                submit: false
              }
            }, _0x376290 => {
              if (chrome.runtime.lastError) {
                console.error("填充失败:", chrome.runtime.lastError);
                _0x53f944.textContent = "✗ 失败";
                _0x53f944.style.color = "#ef4444";
                setTimeout(() => {
                  _0x53f944.textContent = _0x4af64c;
                  _0x53f944.style.color = "";
                }, 2000);
                const _0x3ca349 = chrome.runtime.lastError.message;
                return void (_0x3ca349.includes("Could not establish connection") ? alert("无法连接到页面，请确保：\n1. 页面已完全加载\n2. 刷新页面后重试\n3. 当前页面支持自动填充") : alert("填充失败：" + _0x3ca349));
              }
              if (_0x376290 && _0x376290.ok) {
                _0x53f944.textContent = "✓ 已填充";
                _0x53f944.style.color = "#10b981";
                setTimeout(() => {
                  _0x53f944.textContent = _0x4af64c;
                  _0x53f944.style.color = "";
                }, 2000);
              } else {
                const _0x579b95 = _0x376290?.["error"] || "填充失败，请检查页面表单";
                _0x53f944.textContent = "✗ 失败";
                _0x53f944.style.color = "#ef4444";
                setTimeout(() => {
                  _0x53f944.textContent = _0x4af64c;
                  _0x53f944.style.color = "";
                }, 2000);
                alert("填充失败：" + _0x579b95);
              }
            });
          } catch (_0x431f14) {
            console.error("填充错误:", _0x431f14);
            const _0x5c9575 = _0x53f944.textContent;
            _0x53f944.textContent = "✗ 错误";
            _0x53f944.style.color = "#ef4444";
            setTimeout(() => {
              _0x53f944.textContent = _0x5c9575;
              _0x53f944.style.color = "";
            }, 2000);
            alert("填充失败：" + _0x431f14.message);
          }
        };
        _0x2394b9.fullName || _0x2394b9.idNumber || _0x2394b9.mobile ? _0x53f944.onclick = _0x4b59af : (_0x53f944.textContent = "人员 " + (_0x6aa464 + 1), _0x53f944.style.opacity = "0.6", _0x53f944.style.cursor = "default", _0x53f944.title = "请先填写人员信息", _0x53f944.onclick = null);
        _0x1843a0.appendChild(_0x53f944);
        const _0x151f96 = _0x1a5c4d("div", {
          class: "profile-details"
        });
        _0x151f96.appendChild(_0x1a5c4d("div", {
          class: "profile-form-grid"
        }, [_0x1a5c4d("div", {
          class: "form-row form-row-2"
        }, [_0x31bab3("别名/备注", _0x2394b9.alias || "", _0x42ac5e => {
          _0x2394b9.alias = _0x42ac5e;
          const _0x4b748a = _0x42ac5e || _0x2394b9.fullName || "人员 " + (_0x6aa464 + 1);
          _0x53f944.textContent = _0x4b748a;
          const _0x4090fa = _0x42ac5e || _0x2394b9.fullName || _0x2394b9.idNumber || _0x2394b9.mobile;
          _0x53f944.style.opacity = _0x4090fa ? "1" : "0.6";
          _0x53f944.style.cursor = _0x4090fa ? "pointer" : "default";
          _0x53f944.title = _0x4090fa ? "点击填充 \"" + _0x4b748a + "\" 的信息到当前页面表单" : "请先填写人员信息";
          _0x53f944.onclick = _0x4090fa ? _0x4b59af : null;
          const _0x80e080 = document.getElementById("profileCount");
          if (_0x80e080) {
            const _0x20075a = _0x5e4fb7.profiles.filter(_0x49fee7 => _0x49fee7.fullName || _0x49fee7.idNumber || _0x49fee7.mobile).length;
            _0x80e080.textContent = _0x20075a + "/30 人";
          }
        })]), _0x1a5c4d("div", {
          class: "form-row form-row-2"
        }, [_0x31bab3("姓名", _0x2394b9.fullName || "", _0x437c43 => {
          if (_0x2394b9.fullName = _0x437c43, !_0x2394b9.alias) {
            _0x53f944.textContent = _0x437c43 || "人员 " + (_0x6aa464 + 1);
            const _0xed1627 = _0x437c43 || _0x2394b9.idNumber || _0x2394b9.mobile;
            _0x53f944.style.opacity = _0xed1627 ? "1" : "0.6";
            _0x53f944.style.cursor = _0xed1627 ? "pointer" : "default";
            _0x53f944.title = _0xed1627 ? "点击填充 \"" + (_0x437c43 || "人员 " + (_0x6aa464 + 1)) + "\" 的信息到当前页面表单" : "请先填写人员信息";
            _0x53f944.onclick = _0xed1627 ? _0x4b59af : null;
          }
          const _0x4a499a = document.getElementById("profileCount");
          if (_0x4a499a) {
            const _0x21efda = _0x5e4fb7.profiles.filter(_0x11fea8 => _0x11fea8.fullName || _0x11fea8.idNumber || _0x11fea8.mobile).length;
            _0x4a499a.textContent = _0x21efda + "/30 人";
          }
        })]), _0x1a5c4d("div", {
          class: "form-row form-row-2"
        }, [_0x31bab3("证件号", _0x2394b9.idNumber || "", _0x1dc55e => {
          _0x2394b9.idNumber = _0x1dc55e;
          const _0x345722 = _0x2394b9.fullName || _0x1dc55e || _0x2394b9.mobile;
          _0x53f944.style.opacity = _0x345722 ? "1" : "0.6";
          _0x53f944.style.cursor = _0x345722 ? "pointer" : "default";
          _0x53f944.onclick = _0x345722 ? _0x4b59af : null;
          const _0x38f7d5 = document.getElementById("profileCount");
          if (_0x38f7d5) {
            const _0x46ffec = _0x5e4fb7.profiles.filter(_0x1f6243 => _0x1f6243.fullName || _0x1f6243.idNumber || _0x1f6243.mobile).length;
            _0x38f7d5.textContent = _0x46ffec + "/30 人";
          }
        }, "text", {
          validateIdNumber: true
        })]), _0x1a5c4d("div", {
          class: "form-row form-row-2"
        }, [_0x31bab3("手机号", _0x2394b9.mobile || "", _0x1072ec => {
          _0x2394b9.mobile = _0x1072ec;
          const _0x329186 = _0x2394b9.fullName || _0x2394b9.idNumber || _0x1072ec;
          _0x53f944.style.opacity = _0x329186 ? "1" : "0.6";
          _0x53f944.style.cursor = _0x329186 ? "pointer" : "default";
          _0x53f944.onclick = _0x329186 ? _0x4b59af : null;
          const _0x90aa55 = document.getElementById("profileCount");
          if (_0x90aa55) {
            const _0x546675 = _0x5e4fb7.profiles.filter(_0x26f6e0 => _0x26f6e0.fullName || _0x26f6e0.idNumber || _0x26f6e0.mobile).length;
            _0x90aa55.textContent = _0x546675 + "/30 人";
          }
        }, "text", {
          validateMobile: true
        })]), _0x1a5c4d("div", {
          class: "form-row form-row-full form-section-title"
        }, [_0x1a5c4d("div", {
          class: "section-title",
          text: "兑换地区"
        })]), _0x1a5c4d("div", {
          class: "form-row form-row-3"
        }, [_0x31bab3("省", _0x2394b9.province || "", _0x20e608 => _0x2394b9.province = _0x20e608)]), _0x1a5c4d("div", {
          class: "form-row form-row-3"
        }, [_0x31bab3("市", _0x2394b9.city || "", _0x384106 => _0x2394b9.city = _0x384106)]), _0x1a5c4d("div", {
          class: "form-row form-row-3"
        }, [_0x31bab3("区/县", _0x2394b9.district || "", _0x597fbd => _0x2394b9.district = _0x597fbd)]), _0x1a5c4d("div", {
          class: "form-row form-row-full"
        }, [_0x31bab3("网点", _0x2394b9.address || "", _0x8c9252 => _0x2394b9.address = _0x8c9252)]), _0x1a5c4d("div", {
          class: "form-row form-row-full form-section-title"
        }, [_0x1a5c4d("div", {
          class: "section-title",
          text: "兑换信息"
        })]), _0x1a5c4d("div", {
          class: "form-row form-row-2"
        }, [_0x31bab3("兑换日期", _0x2394b9.exchangeDate || "", _0x2a7686 => _0x2394b9.exchangeDate = _0x2a7686, "date")]), _0x1a5c4d("div", {
          class: "form-row form-row-2"
        }, [_0x31bab3("兑换数量", _0x2394b9.exchangeQuantity || "", _0x2b7698 => _0x2394b9.exchangeQuantity = _0x2b7698, "number")])]));
        _0x1843a0.appendChild(_0x151f96);
        const _0x2194f2 = _0x1a5c4d("div", {
          class: "profile-actions"
        }, [_0x45663b("清空", () => {
          {
            Object.assign(_0x2394b9, {
              id: _0x2394b9.id,
              fullName: "",
              alias: "",
              idNumber: "",
              mobile: "",
              province: "",
              city: "",
              district: "",
              address: "",
              exchangeDate: "",
              exchangeQuantity: ""
            });
            _0x5f0405(_0x5e4fb7);
          }
        }), _0x45663b("删除", () => {
          _0x5e4fb7.profiles.splice(_0x6aa464, 1);
          _0x5f0405(_0x5e4fb7);
        })]);
        _0x1843a0.appendChild(_0x2194f2);
        _0x209942.appendChild(_0x1843a0);
      });
    })(_0x104803);
    (function (_0x3b032b) {
      {
        const _0x24a7de = document.getElementById("multiOpenGroups");
        if (!_0x24a7de) {
          return;
        }
        _0x24a7de.innerHTML = "";
        let _0x1ad284 = Array.isArray(_0x3b032b.multiOpenGroups) ? _0x3b032b.multiOpenGroups.slice() : [];
        _0x1ad284.forEach(_0x3a52fd => {
          _0x3a52fd.profileIds && Array.isArray(_0x3a52fd.profileIds) ? _0x3a52fd.profileIds = _0x3a52fd.profileIds.filter(_0x497d83 => _0x497d83 && _0x497d83.trim && "" !== _0x497d83.trim() && null != _0x497d83) : (_0x3a52fd.profileIds, _0x3a52fd.profileIds = []);
        });
        _0x1ad284.length > 5 && (_0x1ad284 = _0x1ad284.slice(0, 5));
        _0x3b032b.multiOpenGroups = _0x1ad284;
        const _0x62291c = document.getElementById("groupCount");
        _0x62291c && (_0x62291c.textContent = _0x1ad284.length + "/5 组");
        const _0x303845 = document.getElementById("addGroup");
        if (_0x303845 && (_0x303845.style.display = "flex", _0x1ad284.length >= 5 ? (_0x303845.disabled = true, _0x303845.title = "最多只能添加 5 组", _0x303845.style.opacity = "0.5", _0x303845.style.cursor = "not-allowed") : (_0x303845.disabled = false, _0x303845.title = "添加多开组", _0x303845.style.opacity = "1", _0x303845.style.cursor = "pointer"), _0x303845.onclick = () => {
          if (_0x3b032b.multiOpenGroups.length >= 5) {
            return void alert("最多只能添加 5 组");
          }
          const _0x42f2d2 = {
            id: "group_" + Math.random().toString(36).slice(2, 8),
            name: "组 " + (_0x1ad284.length + 1),
            url: "",
            profileIds: []
          };
          _0x3b032b.multiOpenGroups.push(_0x42f2d2);
          _0x5f0405(_0x3b032b);
        }), _0x1ad284.forEach((_0x3f2225, _0x5b8980) => {
          {
            const _0x3d538b = _0x1a5c4d("div", {
              class: "card profile-card binding-card"
            });
            const _0x3ffb8b = _0x1a5c4d("div", {
              class: "profile-name",
              style: "cursor: default; margin-bottom: 12px;"
            });
            _0x3ffb8b.textContent = (_0x3f2225.name || "组 " + (_0x5b8980 + 1)) + " (" + _0x3f2225.profileIds.length + "/6 人)";
            _0x3d538b.appendChild(_0x3ffb8b);
            const _0x3c4e9b = _0x1a5c4d("div", {
              class: "profile-details"
            });
            const _0x502325 = _0x1a5c4d("div", {
              class: "form-row form-row-full"
            }, [_0x31bab3("组名称", _0x3f2225.name || "组 " + (_0x5b8980 + 1), _0x2a174b => {
              _0x3f2225.name = _0x2a174b || "组 " + (_0x5b8980 + 1);
              _0x3ffb8b.textContent = _0x3f2225.name + " (" + _0x3f2225.profileIds.length + "/6 人)";
            }, "text", {
              placeholder: "例如: 组 1"
            })]);
            const _0x17ba89 = _0x1a5c4d("div", {
              class: "form-row form-row-full"
            }, [_0x31bab3("多开网站URL地址", _0x3f2225.url || "", _0x4ecaf4 => {
              _0x3f2225.url = _0x4ecaf4;
            }, "text", {
              placeholder: "例如: https://www.example.com"
            })]);
            _0x3c4e9b.appendChild(_0x1a5c4d("div", {
              class: "profile-form-grid"
            }, [_0x502325, _0x17ba89]));
            const _0x3ab2f = _0x1a5c4d("div", {
              class: "form-row form-row-full",
              style: "margin-top: 16px;"
            });
            const _0x482a03 = _0x1a5c4d("label", {
              style: "display: block; margin-bottom: 8px; font-weight: 500; color: var(--text-primary);"
            });
            _0x482a03.textContent = "绑定人员 (" + _0x3f2225.profileIds.length + "/6)";
            _0x3ab2f.appendChild(_0x482a03);
            const _0xc85b03 = _0x1a5c4d("div", {
              style: "display: flex; flex-direction: column; gap: 8px;"
            });
            if (_0x3f2225.profileIds.forEach((_0x415ef0, _0x2cfba9) => {
              const _0x4a3dc7 = _0x1a5c4d("div", {
                style: "display: flex; gap: 8px; align-items: center;"
              });
              const _0x435ed3 = _0x1a5c4d("select", {
                class: "binding-profile-select",
                style: "flex: 1;"
              });
              const _0x40996a = (_0x3b032b.profiles || []).filter(_0x45e0cb => _0x45e0cb.fullName || _0x45e0cb.idNumber || _0x45e0cb.mobile);
              if (_0x40996a.forEach(_0x4ed773 => {
                const _0x17e0bd = _0x1a5c4d("option", {
                  value: _0x4ed773.id,
                  text: _0x4ed773.alias || _0x4ed773.fullName || _0x4ed773.id
                });
                _0x4ed773.id === _0x415ef0 && _0x17e0bd.setAttribute("selected", "selected");
                _0x435ed3.appendChild(_0x17e0bd);
              }), 0 === _0x40996a.length) {
                {
                  const _0x44c1c0 = _0x1a5c4d("option", {
                    value: "",
                    text: "请先添加人员信息",
                    disabled: true
                  });
                  _0x435ed3.appendChild(_0x44c1c0);
                }
              }
              _0x435ed3.onchange = _0x416a46 => {
                {
                  const _0x11876e = _0x416a46.target.value;
                  _0x11876e && "" !== _0x11876e.trim() ? _0x3f2225.profileIds[_0x2cfba9] = _0x11876e : _0x3f2225.profileIds.splice(_0x2cfba9, 1);
                  _0x5f0405(_0x3b032b);
                }
              };
              const _0xe48add = _0x45663b("删除", () => {
                _0x3f2225.profileIds.splice(_0x2cfba9, 1);
                _0x3ffb8b.textContent = (_0x3f2225.name || "组 " + (_0x5b8980 + 1)) + " (" + _0x3f2225.profileIds.length + "/6 人)";
                _0x5f0405(_0x3b032b);
              }, {
                style: "padding: 6px 12px; font-size: 12px;"
              });
              _0x4a3dc7.appendChild(_0x435ed3);
              _0x4a3dc7.appendChild(_0xe48add);
              _0xc85b03.appendChild(_0x4a3dc7);
            }), _0x3f2225.profileIds.length < 6) {
              const _0x4e0cc3 = _0x45663b("+ 添加人员", () => {
                const _0x30457c = (_0x3b032b.profiles || []).filter(_0x1877a1 => _0x1877a1.fullName || _0x1877a1.idNumber || _0x1877a1.mobile);
                0 !== _0x30457c.length ? (_0x3f2225.profileIds.push(_0x30457c[0].id), _0x3ffb8b.textContent = (_0x3f2225.name || "组 " + (_0x5b8980 + 1)) + " (" + _0x3f2225.profileIds.length + "/6 人)", _0x5f0405(_0x3b032b)) : alert("请先添加至少一个人员信息");
              }, {
                style: "padding: 6px 12px; font-size: 12px; margin-top: 8px;"
              });
              _0xc85b03.appendChild(_0x4e0cc3);
            } else {
              const _0x1ac580 = _0x1a5c4d("div", {
                style: "padding: 8px; background: var(--bg-secondary); border-radius: 4px; color: var(--muted); font-size: 12px; text-align: center;"
              });
              _0x1ac580.textContent = "已达到最大人数限制 (6 人)";
              _0xc85b03.appendChild(_0x1ac580);
            }
            _0x3ab2f.appendChild(_0xc85b03);
            _0x3c4e9b.appendChild(_0x3ab2f);
            _0x3d538b.appendChild(_0x3c4e9b);
            const _0x1fb39a = _0x1a5c4d("div", {
              class: "profile-actions"
            }, [_0x45663b("删除组", () => {
              _0x3b032b.multiOpenGroups.splice(_0x5b8980, 1);
              _0x5f0405(_0x3b032b);
            })]);
            _0x3d538b.appendChild(_0x1fb39a);
            _0x24a7de.appendChild(_0x3d538b);
          }
        }), 0 === _0x1ad284.length) {
          const _0x2c7f40 = _0x1a5c4d("div", {
            class: "empty-message",
            style: "text-align: center; padding: 40px 20px; color: var(--muted);"
          });
          _0x2c7f40.innerHTML = "\n      <svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"margin: 0 auto 16px; opacity: 0.5;\">\n        <rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/>\n        <rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/>\n        <rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/>\n        <rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/>\n      </svg>\n      <p style=\"margin: 0; font-size: 14px;\">暂无组，点击\"添加组\"开始</p>\n    ";
          _0x24a7de.appendChild(_0x2c7f40);
        }
      }
    })(_0x104803);
  }
  !async function () {
    const _0x1d69f1 = await _0x592b54();
    console.log("[Options] 初始化，加载配置:", _0x1d69f1);
    _0x1d69f1.profiles || (_0x1d69f1.profiles = []);
    Array.isArray(_0x1d69f1.profiles) || (console.warn("[Options] profiles 不是数组，重置为空数组"), _0x1d69f1.profiles = []);
    _0x1d69f1.multiOpenGroups || (_0x1d69f1.multiOpenGroups = []);
    Array.isArray(_0x1d69f1.multiOpenGroups) || (console.warn("[Options] multiOpenGroups 不是数组，重置为空数组"), _0x1d69f1.multiOpenGroups = []);
    _0x1d69f1.multiOpenBindings && (console.log("[Options] 检测到旧数据 multiOpenBindings，已清除（请手动重新创建多开组）"), delete _0x1d69f1.multiOpenBindings, await _0x531a64(_0x1d69f1));
    console.log("[Options] 初始化后 profiles 数量:", _0x1d69f1.profiles.length);
    console.log("[Options] 初始化后 multiOpenGroups 数量:", _0x1d69f1.multiOpenGroups.length);
    const _0x1ab076 = document.querySelectorAll(".tab-btn");
    const _0xe45fd1 = document.querySelectorAll(".tab-content");
    _0x1ab076.forEach(_0xecbc45 => {
      _0xecbc45.addEventListener("click", () => {
        const _0x5ad4db = _0xecbc45.getAttribute("data-tab");
        _0x1ab076.forEach(_0x5510f9 => _0x5510f9.classList.remove("active"));
        _0xe45fd1.forEach(_0x4dccd3 => _0x4dccd3.classList.remove("active"));
        _0xecbc45.classList.add("active");
        const _0x54e80d = document.getElementById(_0x5ad4db);
        _0x54e80d && _0x54e80d.classList.add("active");
      });
    });
    _0x5f0405(_0x1d69f1);
    document.getElementById("save").onclick = async () => {
      const _0x5ebc14 = window.__cfg;
      console.log("[Options] 保存前 profiles:", _0x5ebc14.profiles);
      const _0x5f27d7 = new Set();
      const _0xb6b959 = [];
      const _0x530ad3 = _0x337490 => (_0x337490 || "").toString().replace(/\s+/g, "").toLowerCase();
      (_0x5ebc14.profiles || []).forEach(_0x36f3bc => {
        if (_0x36f3bc.fullName || _0x36f3bc.idNumber || _0x36f3bc.mobile || _0x36f3bc.alias || _0x36f3bc.address || _0x36f3bc.province || _0x36f3bc.city || _0x36f3bc.district || _0x36f3bc.exchangeDate || _0x36f3bc.exchangeQuantity) {
          const _0x418fee = _0x530ad3(_0x36f3bc.fullName) + "|" + _0x530ad3(_0x36f3bc.idNumber);
          _0x5f27d7.has(_0x418fee) && "|" !== _0x418fee || (_0x5f27d7.add(_0x418fee), _0xb6b959.push(_0x36f3bc));
        } else {
          const _0x23b01f = "empty_" + _0x36f3bc.id;
          _0x5f27d7.has(_0x23b01f) || (_0x5f27d7.add(_0x23b01f), _0xb6b959.push(_0x36f3bc));
        }
      });
      _0xb6b959.length > 30 ? _0x5ebc14.profiles = _0xb6b959.slice(0, 30) : _0x5ebc14.profiles = _0xb6b959;
      console.log("[Options] 保存后 profiles:", _0x5ebc14.profiles);
      console.log("[Options] 保存后 multiOpenGroups:", _0x5ebc14.multiOpenGroups);
      _0x5ebc14.multiOpenGroups && _0x5ebc14.multiOpenGroups.length > 5 && (_0x5ebc14.multiOpenGroups = _0x5ebc14.multiOpenGroups.slice(0, 5));
      _0x5ebc14.multiOpenGroups && _0x5ebc14.multiOpenGroups.forEach(_0x456a19 => {
        _0x456a19.profileIds && Array.isArray(_0x456a19.profileIds) && (_0x456a19.profileIds = _0x456a19.profileIds.filter(_0x20fe01 => _0x20fe01 && _0x20fe01.trim && "" !== _0x20fe01.trim() && null != _0x20fe01));
      });
      _0x5ebc14.multiOpenGroups && _0x5ebc14.multiOpenGroups.forEach(_0x39cf3a => {
        _0x39cf3a.profileIds && _0x39cf3a.profileIds.length > 6 && (_0x39cf3a.profileIds = _0x39cf3a.profileIds.slice(0, 6));
      });
      await _0x531a64(_0x5ebc14);
      alert("已保存");
      const _0x59528b = await _0x592b54();
      console.log("[Options] 重新加载后 profiles:", _0x59528b.profiles);
      console.log("[Options] 重新加载后 multiOpenGroups:", _0x59528b.multiOpenGroups);
      _0x5f0405(_0x59528b);
    };
    document.getElementById("export").onclick = () => {
      const _0x4a6ef1 = JSON.parse(JSON.stringify(window.__cfg));
      const _0x3e3733 = new Blob([JSON.stringify(_0x4a6ef1, null, 2)], {
        type: "application/json"
      });
      const _0x495d01 = URL.createObjectURL(_0x3e3733);
      const _0x208695 = document.createElement("a");
      _0x208695.href = _0x495d01;
      _0x208695.download = "jinpeng-config.json";
      _0x208695.click();
      URL.revokeObjectURL(_0x495d01);
    };
    document.getElementById("import").onclick = async () => {
      const _0x318bf3 = document.createElement("input");
      _0x318bf3.type = "file";
      _0x318bf3.accept = "application/json";
      _0x318bf3.onchange = async () => {
        const _0x559466 = _0x318bf3.files?.[0];
        if (!_0x559466) {
          return;
        }
        const _0x4a8281 = await _0x559466.text();
        try {
          {
            const _0x30ea92 = JSON.parse(_0x4a8281);
            const _0x52e6df = 30;
            _0x30ea92.profiles && _0x30ea92.profiles.length > _0x52e6df && (_0x30ea92.profiles = _0x30ea92.profiles.slice(0, _0x52e6df), alert("导入成功，但只保留了前 " + _0x52e6df + " 个人员（最多支持 " + _0x52e6df + " 人）"));
            _0x30ea92.multiOpenBindings && _0x30ea92.multiOpenBindings.length > 0 && (!_0x30ea92.multiOpenGroups || 0 === _0x30ea92.multiOpenGroups.length) && (_0x30ea92.multiOpenGroups = _0x30ea92.multiOpenBindings.map((_0x593ef1, _0x20980f) => ({
              id: _0x593ef1.id || "group_" + Math.random().toString(36).slice(2, 8),
              name: "组 " + (_0x20980f + 1),
              url: _0x593ef1.url || "",
              profileIds: _0x593ef1.profileId ? [_0x593ef1.profileId] : []
            })), delete _0x30ea92.multiOpenBindings);
            const _0x402bd8 = 5;
            _0x30ea92.multiOpenGroups && _0x30ea92.multiOpenGroups.length > _0x402bd8 && (_0x30ea92.multiOpenGroups = _0x30ea92.multiOpenGroups.slice(0, _0x402bd8), alert("导入成功，但只保留了前 " + _0x402bd8 + " 组（最多支持 " + _0x402bd8 + " 组）"));
            const _0x2dfad6 = 6;
            _0x30ea92.multiOpenGroups && _0x30ea92.multiOpenGroups.forEach(_0x3ca54b => {
              _0x3ca54b.profileIds && _0x3ca54b.profileIds.length > _0x2dfad6 && (_0x3ca54b.profileIds = _0x3ca54b.profileIds.slice(0, _0x2dfad6));
              _0x3ca54b.profileIds && Array.isArray(_0x3ca54b.profileIds) && (_0x3ca54b.profileIds = _0x3ca54b.profileIds.filter(_0x360384 => _0x360384 && _0x360384.trim && "" !== _0x360384.trim() && null != _0x360384));
            });
            _0x30ea92.multiOpenGroups || (_0x30ea92.multiOpenGroups = []);
            Array.isArray(_0x30ea92.multiOpenGroups) || (_0x30ea92.multiOpenGroups = []);
            _0x30ea92.multiOpenBindings && _0x30ea92.multiOpenBindings.length > 0 && (!_0x30ea92.multiOpenGroups || 0 === _0x30ea92.multiOpenGroups.length) && (console.log("[Options] 导入的数据包含旧格式 multiOpenBindings，需要手动重新创建多开组"), delete _0x30ea92.multiOpenBindings);
            await _0x531a64(_0x30ea92);
            _0x5f0405(await _0x592b54());
            (!_0x30ea92.profiles || _0x30ea92.profiles.length <= _0x52e6df) && (!_0x30ea92.multiOpenGroups || _0x30ea92.multiOpenGroups.length <= _0x402bd8) && alert("导入成功");
          }
        } catch (_0x17070e) {
          {
            alert("导入失败：" + _0x17070e.message);
          }
        }
      };
      _0x318bf3.click();
    };
    const _0x4904a7 = document.getElementById("versionBadge");
    if (_0x4904a7) {
      try {
        const _0x13e6c2 = chrome.runtime.getManifest().version || "0.1.0";
        _0x4904a7.textContent = "v" + _0x13e6c2;
      } catch (_0x3fe158) {
        console.error("获取版本号失败:", _0x3fe158);
        _0x4904a7.textContent = "v0.1.0";
      }
    }
  }();
})();