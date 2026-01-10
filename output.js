//Sat Jan 10 2026 06:56:43 GMT+0000 (Coordinated Universal Time)
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
  const _0x5683f5 = "JP_GET_CONFIG";
  const _0x525230 = "JP_SET_CONFIG";
  async function _0x5c65b4() {
    return await new Promise(_0x3d0367 => {
      chrome.runtime.sendMessage({
        type: _0x5683f5
      }, _0x3d0367);
    });
  }
  async function _0x3e7ab5(_0x24494e) {
    {
      return await new Promise(_0x4815e1 => {
        chrome.runtime.sendMessage({
          type: _0x525230,
          payload: _0x24494e
        }, _0x4815e1);
      });
    }
  }
  function _0xb8fad9(_0x1f9e04, _0x5c2e71 = {}, _0x44ef83 = []) {
    const _0x36446b = document.createElement(_0x1f9e04);
    Object.entries(_0x5c2e71).forEach(([_0x78c165, _0x295461]) => {
      "class" === _0x78c165 ? _0x36446b.className = _0x295461 : "text" === _0x78c165 ? _0x36446b.textContent = _0x295461 : _0x36446b.setAttribute(_0x78c165, _0x295461);
    });
    _0x44ef83.forEach(_0x101286 => _0x36446b.appendChild(_0x101286));
    return _0x36446b;
  }
  function _0x2aa451(_0x3d8349, _0x54c970, _0xda6f3d, _0x2b637b = "text", _0x5dd91e = {}) {
    const _0x2e780c = {
      value: _0x54c970 ?? "",
      type: _0x2b637b,
      class: _0x5dd91e.inputClass || ""
    };
    _0x5dd91e.placeholder && (_0x2e780c.placeholder = _0x5dd91e.placeholder);
    const _0xe62c9a = _0xb8fad9("input", _0x2e780c);
    let _0x56ada1 = null;
    const _0x29dda7 = _0xb8fad9("div", {
      class: "validation-error",
      style: "display: none; color: #ef4444; font-size: 12px; margin-top: 4px;"
    });
    if (null != _0x54c970) {
      if ("date" === _0x2b637b && _0x54c970) {
        const _0x24fb8d = String(_0x54c970);
        if (_0x24fb8d.includes("T") || _0x24fb8d.includes(" ")) {
          const _0x6a5709 = _0x24fb8d.split(/[T\s]/)[0];
          _0xe62c9a.value = _0x6a5709;
        } else {
          _0xe62c9a.value = _0x24fb8d;
        }
      } else {
        if ("time" === _0x2b637b && _0x54c970) {
          {
            const _0xf9a04c = String(_0x54c970);
            if (_0xf9a04c.includes("T") || _0xf9a04c.includes(" ")) {
              const _0x538705 = _0xf9a04c.split(/[T\s]/)[1] || _0xf9a04c.split(/[T\s]/)[0];
              _0xe62c9a.value = _0x538705.substring(0, 5);
            } else {
              _0xe62c9a.value = _0xf9a04c.substring(0, 5);
            }
          }
        } else {
          _0xe62c9a.value = _0x54c970;
        }
      }
    }
    const _0x1cce59 = () => {
      {
        let _0x323cd7 = _0xe62c9a.value;
        if (_0x5dd91e.validateIdNumber) {
          const _0x24ea02 = function (_0xbba3f0) {
            if (!_0xbba3f0 || "" === _0xbba3f0.trim()) {
              return {
                valid: true,
                message: ""
              };
            }
            const _0x46f2ae = _0xbba3f0.trim();
            return /^(\d{15}|\d{18}|(\d{17}[xX]))$/.test(_0x46f2ae) ? {
              valid: true,
              message: ""
            } : {
              valid: false,
              message: "请输入正确的身份证号（15位或18位数字，18位最后一位可以是X）"
            };
          }(_0x323cd7);
          _0x56ada1 = _0x24ea02.valid ? null : _0x24ea02.message;
        } else {
          if (_0x5dd91e.validateMobile) {
            {
              const _0x55d1b4 = function (_0x2068a5) {
                if (!_0x2068a5 || "" === _0x2068a5.trim()) {
                  return {
                    valid: true,
                    message: ""
                  };
                }
                const _0x5aed23 = _0x2068a5.trim();
                return /^1[3-9]\d{9}$/.test(_0x5aed23) ? {
                  valid: true,
                  message: ""
                } : {
                  valid: false,
                  message: "请输入正确的手机号（11位数字，以1开头）"
                };
              }(_0x323cd7);
              _0x56ada1 = _0x55d1b4.valid ? null : _0x55d1b4.message;
            }
          }
        }
        _0x56ada1 ? (_0x29dda7.textContent = _0x56ada1, _0x29dda7.style.display = "block", _0xe62c9a.style.borderColor = "#ef4444", _0xe62c9a.style.backgroundColor = "#fef2f2") : (_0x29dda7.style.display = "none", _0xe62c9a.style.borderColor = "", _0xe62c9a.style.backgroundColor = "");
        return !_0x56ada1;
      }
    };
    _0xe62c9a.oninput = () => {
      {
        let _0x371a10 = _0xe62c9a.value;
        if ("date" === _0x2b637b && _0x371a10 && (_0x371a10.includes("T") || _0x371a10.includes(" ")) && (_0x371a10 = _0x371a10.split(/[T\s]/)[0], _0xe62c9a.value = _0x371a10), "time" === _0x2b637b && _0x371a10 && (_0x371a10.includes("T") || _0x371a10.includes(" "))) {
          const _0xde6977 = _0x371a10.split(/[T\s]/)[1] || _0x371a10.split(/[T\s]/)[0];
          _0x371a10 = _0xde6977.substring(0, 5);
          _0xe62c9a.value = _0x371a10;
        }
        _0x1cce59();
        _0xda6f3d(_0x371a10);
      }
    };
    _0xe62c9a.onblur = () => {
      _0x1cce59();
    };
    (_0x5dd91e.validateIdNumber || _0x5dd91e.validateMobile) && _0x1cce59();
    const _0xf7eafd = _0x7d8098(_0x3d8349, _0xe62c9a);
    (_0x5dd91e.validateIdNumber || _0x5dd91e.validateMobile) && _0xf7eafd.appendChild(_0x29dda7);
    return _0xf7eafd;
  }
  function _0x7d8098(_0x418a21, _0x1c50ee) {
    const _0x582ae1 = _0xb8fad9("div");
    _0x582ae1.appendChild(_0xb8fad9("label", {
      text: _0x418a21
    }));
    _0x582ae1.appendChild(_0x1c50ee);
    return _0x582ae1;
  }
  function _0x2c2909(_0x453659, _0x6dc293) {
    const _0x390d62 = _0xb8fad9("button", {
      class: "btn",
      text: _0x453659
    });
    _0x390d62.onclick = _0x6dc293;
    return _0x390d62;
  }
  function _0x289b1b(_0xee960a) {
    window.__cfg = _0xee960a;
    (function (_0x2366d5) {
      const _0x1253f0 = document.getElementById("profiles");
      _0x1253f0.innerHTML = "";
      const _0x57a2e3 = 20;
      let _0x57ad41 = Array.isArray(_0x2366d5.profiles) ? _0x2366d5.profiles.slice() : [];
      console.log("[Options] 渲染前 profiles 数量:", _0x57ad41.length);
      console.log("[Options] 渲染前 profiles 数据:", _0x57ad41.map(_0x18880c => ({
        id: _0x18880c.id,
        alias: _0x18880c.alias,
        fullName: _0x18880c.fullName,
        hasData: !!(_0x18880c.fullName || _0x18880c.idNumber || _0x18880c.mobile)
      })));
      _0x57ad41.length > _0x57a2e3 && (_0x57ad41 = _0x57ad41.slice(0, _0x57a2e3));
      _0x2366d5.profiles = _0x57ad41;
      console.log("[Options] 渲染后 profiles 数量:", _0x57ad41.length);
      const _0x14488a = document.getElementById("profileCount");
      _0x14488a && (_0x57ad41.filter(_0x3582bf => _0x3582bf.fullName || _0x3582bf.idNumber || _0x3582bf.mobile).length, _0x14488a.textContent = _0x57ad41.length + "/20 人");
      const _0xe46f75 = document.getElementById("addProfile");
      _0xe46f75 && (_0xe46f75.style.display = "flex", _0x57ad41.length >= _0x57a2e3 ? (_0xe46f75.disabled = true, _0xe46f75.title = "最多只能添加 20 个人员", _0xe46f75.style.opacity = "0.5", _0xe46f75.style.cursor = "not-allowed") : (_0xe46f75.disabled = false, _0xe46f75.title = "添加抢单人员", _0xe46f75.style.opacity = "1", _0xe46f75.style.cursor = "pointer"), _0xe46f75.onclick = () => {
        if (_0x2366d5.profiles.length >= _0x57a2e3) {
          return void alert("最多只能添加 20 个人员");
        }
        const _0x3935aa = "p_" + Math.random().toString(36).slice(2, 8);
        _0x2366d5.profiles.push({
          id: _0x3935aa,
          fullName: ""
        });
        _0x289b1b(_0x2366d5);
      });
      _0x57ad41.forEach((_0x4542f8, _0x23669e) => {
        const _0x606a96 = _0xb8fad9("div", {
          class: "card profile-card"
        });
        const _0x4d0a3d = _0xb8fad9("div", {
          class: "profile-name",
          style: "cursor: pointer;"
        });
        const _0x8006eb = _0x4542f8.alias || _0x4542f8.fullName || _0x4542f8.id || "人员 " + (_0x23669e + 1);
        _0x4d0a3d.textContent = _0x8006eb;
        _0x4d0a3d.title = "点击填充 \"" + _0x8006eb + "\" 的信息到当前页面表单";
        const _0x1b9004 = async () => {
          try {
            const _0x2d57e0 = _0x4d0a3d.textContent;
            _0x4d0a3d.textContent = "填充中...";
            _0x4d0a3d.style.color = "#3b82f6";
            const [_0x37c101] = await chrome.tabs.query({
              active: true,
              currentWindow: true
            });
            if (!_0x37c101 || !_0x37c101.id) {
              _0x4d0a3d.textContent = _0x2d57e0;
              _0x4d0a3d.style.color = "";
              return void alert("无法获取当前页面，请确保页面已加载完成。");
            }
            if (!["icbc", "ccb", "boc", "abchina", "bankcomm", "bocom", "psbc", "hxb"].some(_0xd8c410 => _0x37c101.url && (_0x37c101.url.includes(_0xd8c410) || _0x37c101.url.includes("银行"))) && !_0x37c101.url.startsWith("http")) {
              _0x4d0a3d.textContent = _0x2d57e0;
              _0x4d0a3d.style.color = "";
              return void alert("当前页面不是银行预约页面，请先打开银行预约页面后再点击填充。");
            }
            chrome.tabs.sendMessage(_0x37c101.id, {
              type: "JP_FILL",
              payload: {
                profile: _0x4542f8.id,
                bank: null,
                region: "",
                submit: false
              }
            }, _0xe66332 => {
              {
                if (chrome.runtime.lastError) {
                  console.error("填充失败:", chrome.runtime.lastError);
                  _0x4d0a3d.textContent = "✗ 失败";
                  _0x4d0a3d.style.color = "#ef4444";
                  setTimeout(() => {
                    _0x4d0a3d.textContent = _0x2d57e0;
                    _0x4d0a3d.style.color = "";
                  }, 2000);
                  const _0x531fb6 = chrome.runtime.lastError.message;
                  return void (_0x531fb6.includes("Could not establish connection") ? alert("无法连接到页面，请确保：\n1. 页面已完全加载\n2. 刷新页面后重试\n3. 当前页面支持自动填充") : alert("填充失败：" + _0x531fb6));
                }
                if (_0xe66332 && _0xe66332.ok) {
                  _0x4d0a3d.textContent = "✓ 已填充";
                  _0x4d0a3d.style.color = "#10b981";
                  setTimeout(() => {
                    _0x4d0a3d.textContent = _0x2d57e0;
                    _0x4d0a3d.style.color = "";
                  }, 2000);
                } else {
                  const _0x53515a = _0xe66332?.["error"] || "填充失败，请检查页面表单";
                  _0x4d0a3d.textContent = "✗ 失败";
                  _0x4d0a3d.style.color = "#ef4444";
                  setTimeout(() => {
                    {
                      _0x4d0a3d.textContent = _0x2d57e0;
                      _0x4d0a3d.style.color = "";
                    }
                  }, 2000);
                  alert("填充失败：" + _0x53515a);
                }
              }
            });
          } catch (_0x5debf8) {
            console.error("填充错误:", _0x5debf8);
            const _0x1c4c8b = _0x4d0a3d.textContent;
            _0x4d0a3d.textContent = "✗ 错误";
            _0x4d0a3d.style.color = "#ef4444";
            setTimeout(() => {
              _0x4d0a3d.textContent = _0x1c4c8b;
              _0x4d0a3d.style.color = "";
            }, 2000);
            alert("填充失败：" + _0x5debf8.message);
          }
        };
        _0x4542f8.fullName || _0x4542f8.idNumber || _0x4542f8.mobile ? _0x4d0a3d.onclick = _0x1b9004 : (_0x4d0a3d.textContent = "人员 " + (_0x23669e + 1), _0x4d0a3d.style.opacity = "0.6", _0x4d0a3d.style.cursor = "default", _0x4d0a3d.title = "请先填写人员信息", _0x4d0a3d.onclick = null);
        _0x606a96.appendChild(_0x4d0a3d);
        const _0x5b1839 = _0xb8fad9("div", {
          class: "profile-details"
        });
        _0x5b1839.appendChild(_0xb8fad9("div", {
          class: "profile-form-grid"
        }, [_0xb8fad9("div", {
          class: "form-row form-row-2"
        }, [_0x2aa451("别名/备注", _0x4542f8.alias || "", _0x11292d => {
          _0x4542f8.alias = _0x11292d;
          const _0x497ba9 = _0x11292d || _0x4542f8.fullName || "人员 " + (_0x23669e + 1);
          _0x4d0a3d.textContent = _0x497ba9;
          const _0xb6a7e3 = _0x11292d || _0x4542f8.fullName || _0x4542f8.idNumber || _0x4542f8.mobile;
          _0x4d0a3d.style.opacity = _0xb6a7e3 ? "1" : "0.6";
          _0x4d0a3d.style.cursor = _0xb6a7e3 ? "pointer" : "default";
          _0x4d0a3d.title = _0xb6a7e3 ? "点击填充 \"" + _0x497ba9 + "\" 的信息到当前页面表单" : "请先填写人员信息";
          _0x4d0a3d.onclick = _0xb6a7e3 ? _0x1b9004 : null;
          const _0x1c05bd = document.getElementById("profileCount");
          if (_0x1c05bd) {
            const _0x2ee599 = _0x2366d5.profiles.filter(_0x50243c => _0x50243c.fullName || _0x50243c.idNumber || _0x50243c.mobile).length;
            _0x1c05bd.textContent = _0x2ee599 + "/20 人";
          }
        })]), _0xb8fad9("div", {
          class: "form-row form-row-2"
        }, [_0x2aa451("姓名", _0x4542f8.fullName || "", _0x240ea1 => {
          if (_0x4542f8.fullName = _0x240ea1, !_0x4542f8.alias) {
            _0x4d0a3d.textContent = _0x240ea1 || "人员 " + (_0x23669e + 1);
            const _0x176122 = _0x240ea1 || _0x4542f8.idNumber || _0x4542f8.mobile;
            _0x4d0a3d.style.opacity = _0x176122 ? "1" : "0.6";
            _0x4d0a3d.style.cursor = _0x176122 ? "pointer" : "default";
            _0x4d0a3d.title = _0x176122 ? "点击填充 \"" + (_0x240ea1 || "人员 " + (_0x23669e + 1)) + "\" 的信息到当前页面表单" : "请先填写人员信息";
            _0x4d0a3d.onclick = _0x176122 ? _0x1b9004 : null;
          }
          const _0x13e036 = document.getElementById("profileCount");
          if (_0x13e036) {
            const _0x4fb49c = _0x2366d5.profiles.filter(_0x3bd16e => _0x3bd16e.fullName || _0x3bd16e.idNumber || _0x3bd16e.mobile).length;
            _0x13e036.textContent = _0x4fb49c + "/20 人";
          }
        })]), _0xb8fad9("div", {
          class: "form-row form-row-2"
        }, [_0x2aa451("证件号", _0x4542f8.idNumber || "", _0x9f429e => {
          _0x4542f8.idNumber = _0x9f429e;
          const _0x235d76 = _0x4542f8.fullName || _0x9f429e || _0x4542f8.mobile;
          _0x4d0a3d.style.opacity = _0x235d76 ? "1" : "0.6";
          _0x4d0a3d.style.cursor = _0x235d76 ? "pointer" : "default";
          _0x4d0a3d.onclick = _0x235d76 ? _0x1b9004 : null;
          const _0x51a1d3 = document.getElementById("profileCount");
          if (_0x51a1d3) {
            const _0x5e5c24 = _0x2366d5.profiles.filter(_0x3b660d => _0x3b660d.fullName || _0x3b660d.idNumber || _0x3b660d.mobile).length;
            _0x51a1d3.textContent = _0x5e5c24 + "/20 人";
          }
        }, "text", {
          validateIdNumber: true
        })]), _0xb8fad9("div", {
          class: "form-row form-row-2"
        }, [_0x2aa451("手机号", _0x4542f8.mobile || "", _0x515da9 => {
          _0x4542f8.mobile = _0x515da9;
          const _0x5bde85 = _0x4542f8.fullName || _0x4542f8.idNumber || _0x515da9;
          _0x4d0a3d.style.opacity = _0x5bde85 ? "1" : "0.6";
          _0x4d0a3d.style.cursor = _0x5bde85 ? "pointer" : "default";
          _0x4d0a3d.onclick = _0x5bde85 ? _0x1b9004 : null;
          const _0x564d29 = document.getElementById("profileCount");
          if (_0x564d29) {
            const _0x14ba85 = _0x2366d5.profiles.filter(_0x247012 => _0x247012.fullName || _0x247012.idNumber || _0x247012.mobile).length;
            _0x564d29.textContent = _0x14ba85 + "/20 人";
          }
        }, "text", {
          validateMobile: true
        })]), _0xb8fad9("div", {
          class: "form-row form-row-full form-section-title"
        }, [_0xb8fad9("div", {
          class: "section-title",
          text: "兑换地区"
        })]), _0xb8fad9("div", {
          class: "form-row form-row-3"
        }, [_0x2aa451("省", _0x4542f8.province || "", _0x338e62 => _0x4542f8.province = _0x338e62)]), _0xb8fad9("div", {
          class: "form-row form-row-3"
        }, [_0x2aa451("市", _0x4542f8.city || "", _0x462b1a => _0x4542f8.city = _0x462b1a)]), _0xb8fad9("div", {
          class: "form-row form-row-3"
        }, [_0x2aa451("区/县", _0x4542f8.district || "", _0x204c93 => _0x4542f8.district = _0x204c93)]), _0xb8fad9("div", {
          class: "form-row form-row-full"
        }, [_0x2aa451("网点", _0x4542f8.address || "", _0x4e1dd6 => _0x4542f8.address = _0x4e1dd6)]), _0xb8fad9("div", {
          class: "form-row form-row-full form-section-title"
        }, [_0xb8fad9("div", {
          class: "section-title",
          text: "兑换信息"
        })]), _0xb8fad9("div", {
          class: "form-row form-row-2"
        }, [_0x2aa451("兑换日期", _0x4542f8.exchangeDate || "", _0x3ba74e => _0x4542f8.exchangeDate = _0x3ba74e, "date")]), _0xb8fad9("div", {
          class: "form-row form-row-2"
        }, [_0x2aa451("兑换数量", _0x4542f8.exchangeQuantity || "", _0x4373eb => _0x4542f8.exchangeQuantity = _0x4373eb, "number")])]));
        _0x606a96.appendChild(_0x5b1839);
        const _0x2a7c44 = _0xb8fad9("div", {
          class: "profile-actions"
        }, [_0x2c2909("清空", () => {
          Object.assign(_0x4542f8, {
            id: _0x4542f8.id,
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
          _0x289b1b(_0x2366d5);
        }), _0x2c2909("删除", () => {
          _0x2366d5.profiles.splice(_0x23669e, 1);
          _0x289b1b(_0x2366d5);
        })]);
        _0x606a96.appendChild(_0x2a7c44);
        _0x1253f0.appendChild(_0x606a96);
      });
    })(_0xee960a);
    (function (_0x2e7785) {
      {
        const _0x244e55 = document.getElementById("multiOpenBindings");
        if (!_0x244e55) {
          return;
        }
        _0x244e55.innerHTML = "";
        const _0x3f29bb = 15;
        let _0x5c7226 = Array.isArray(_0x2e7785.multiOpenBindings) ? _0x2e7785.multiOpenBindings.slice() : [];
        _0x5c7226.length > _0x3f29bb && (_0x5c7226 = _0x5c7226.slice(0, _0x3f29bb));
        _0x2e7785.multiOpenBindings = _0x5c7226;
        const _0x634fda = document.getElementById("bindingCount");
        _0x634fda && (_0x634fda.textContent = _0x5c7226.length + "/15 个");
        const _0x3091a2 = document.getElementById("addBinding");
        if (_0x3091a2 && (_0x3091a2.style.display = "flex", _0x5c7226.length >= _0x3f29bb ? (_0x3091a2.disabled = true, _0x3091a2.title = "最多只能添加 15 个绑定", _0x3091a2.style.opacity = "0.5", _0x3091a2.style.cursor = "not-allowed") : (_0x3091a2.disabled = false, _0x3091a2.title = "添加多开绑定", _0x3091a2.style.opacity = "1", _0x3091a2.style.cursor = "pointer"), _0x3091a2.onclick = () => {
          {
            if (_0x2e7785.multiOpenBindings.length >= _0x3f29bb) {
              return void alert("最多只能添加 15 个绑定");
            }
            const _0x1124da = (_0x2e7785.profiles || []).filter(_0x1ca6bf => _0x1ca6bf.fullName || _0x1ca6bf.idNumber || _0x1ca6bf.mobile);
            if (0 === _0x1124da.length) {
              return void alert("请先添加至少一个人员信息");
            }
            const _0x4f34da = {
              id: "binding_" + Math.random().toString(36).slice(2, 8),
              profileId: _0x1124da[0].id,
              url: ""
            };
            _0x2e7785.multiOpenBindings.push(_0x4f34da);
            _0x289b1b(_0x2e7785);
          }
        }), _0x5c7226.forEach((_0xed245b, _0x591420) => {
          const _0xfdf3f0 = _0xb8fad9("div", {
            class: "card profile-card binding-card"
          });
          const _0x55f63b = (_0x2e7785.profiles || []).find(_0x163f05 => _0x163f05.id === _0xed245b.profileId);
          const _0x3757c5 = _0x55f63b ? _0x55f63b.alias || _0x55f63b.fullName || "人员 " + (_0x591420 + 1) : "未找到人员";
          const _0x2f9e65 = _0xb8fad9("div", {
            class: "profile-name",
            style: "cursor: default;"
          });
          _0x2f9e65.textContent = "绑定 " + (_0x591420 + 1) + ": " + _0x3757c5;
          _0xfdf3f0.appendChild(_0x2f9e65);
          const _0x58264d = _0xb8fad9("div", {
            class: "profile-details"
          });
          _0x58264d.appendChild(_0xb8fad9("div", {
            class: "profile-form-grid"
          }, [_0xb8fad9("div", {
            class: "form-row form-row-full"
          }, [_0x7d8098("绑定人员", (() => {
            {
              const _0x22614c = _0xb8fad9("select", {
                class: "binding-profile-select"
              });
              const _0x2c43fd = (_0x2e7785.profiles || []).filter(_0xae0b94 => _0xae0b94.fullName || _0xae0b94.idNumber || _0xae0b94.mobile);
              if (_0x2c43fd.forEach(_0x3e017b => {
                const _0x48a602 = _0xb8fad9("option", {
                  value: _0x3e017b.id,
                  text: _0x3e017b.alias || _0x3e017b.fullName || _0x3e017b.id
                });
                _0x3e017b.id === _0xed245b.profileId && _0x48a602.setAttribute("selected", "selected");
                _0x22614c.appendChild(_0x48a602);
              }), 0 === _0x2c43fd.length) {
                const _0x1b8d77 = _0xb8fad9("option", {
                  value: "",
                  text: "请先添加人员信息",
                  disabled: true
                });
                _0x22614c.appendChild(_0x1b8d77);
              }
              _0x22614c.onchange = _0xe2b74 => {
                {
                  _0xed245b.profileId = _0xe2b74.target.value;
                  const _0x451ebb = _0x2c43fd.find(_0xb8cf40 => _0xb8cf40.id === _0xe2b74.target.value);
                  _0x451ebb && (_0x2f9e65.textContent = "绑定 " + (_0x591420 + 1) + ": " + (_0x451ebb.alias || _0x451ebb.fullName || "人员"));
                }
              };
              return _0x22614c;
            }
          })())]), _0xb8fad9("div", {
            class: "form-row form-row-full"
          }, [_0x2aa451("多开网站URL地址", _0xed245b.url || "", _0x502933 => {
            _0xed245b.url = _0x502933;
          }, "text", {
            placeholder: "例如: https://www.example.com"
          })])]));
          _0xfdf3f0.appendChild(_0x58264d);
          const _0x329c8a = _0xb8fad9("div", {
            class: "profile-actions"
          }, [_0x2c2909("删除", () => {
            _0x2e7785.multiOpenBindings.splice(_0x591420, 1);
            _0x289b1b(_0x2e7785);
          })]);
          _0xfdf3f0.appendChild(_0x329c8a);
          _0x244e55.appendChild(_0xfdf3f0);
        }), 0 === _0x5c7226.length) {
          {
            const _0x14ba24 = _0xb8fad9("div", {
              class: "empty-message",
              style: "text-align: center; padding: 40px 20px; color: var(--muted);"
            });
            _0x14ba24.innerHTML = "\n      <svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"margin: 0 auto 16px; opacity: 0.5;\">\n        <rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/>\n        <rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/>\n        <rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/>\n        <rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/>\n      </svg>\n      <p style=\"margin: 0; font-size: 14px;\">暂无绑定，点击\"添加绑定\"开始</p>\n    ";
            _0x244e55.appendChild(_0x14ba24);
          }
        }
      }
    })(_0xee960a);
  }
  !async function () {
    const _0x5a643e = await _0x5c65b4();
    console.log("[Options] 初始化，加载配置:", _0x5a643e);
    _0x5a643e.profiles || (_0x5a643e.profiles = []);
    Array.isArray(_0x5a643e.profiles) || (console.warn("[Options] profiles 不是数组，重置为空数组"), _0x5a643e.profiles = []);
    _0x5a643e.multiOpenBindings || (_0x5a643e.multiOpenBindings = []);
    Array.isArray(_0x5a643e.multiOpenBindings) || (console.warn("[Options] multiOpenBindings 不是数组，重置为空数组"), _0x5a643e.multiOpenBindings = []);
    console.log("[Options] 初始化后 profiles 数量:", _0x5a643e.profiles.length);
    console.log("[Options] 初始化后 multiOpenBindings 数量:", _0x5a643e.multiOpenBindings.length);
    const _0x4761f7 = document.querySelectorAll(".tab-btn");
    const _0x2b097f = document.querySelectorAll(".tab-content");
    _0x4761f7.forEach(_0x1f6d7f => {
      _0x1f6d7f.addEventListener("click", () => {
        const _0x4f7ff2 = _0x1f6d7f.getAttribute("data-tab");
        _0x4761f7.forEach(_0x5f00da => _0x5f00da.classList.remove("active"));
        _0x2b097f.forEach(_0x33443d => _0x33443d.classList.remove("active"));
        _0x1f6d7f.classList.add("active");
        const _0x2d2652 = document.getElementById(_0x4f7ff2);
        _0x2d2652 && _0x2d2652.classList.add("active");
      });
    });
    _0x289b1b(_0x5a643e);
    document.getElementById("save").onclick = async () => {
      const _0x386b23 = window.__cfg;
      console.log("[Options] 保存前 profiles:", _0x386b23.profiles);
      const _0x3859ac = new Set();
      const _0x9139a3 = [];
      const _0x4b8f8f = _0x152b8c => (_0x152b8c || "").toString().replace(/\s+/g, "").toLowerCase();
      (_0x386b23.profiles || []).forEach(_0x2697a3 => {
        if (_0x2697a3.fullName || _0x2697a3.idNumber || _0x2697a3.mobile || _0x2697a3.alias || _0x2697a3.address || _0x2697a3.province || _0x2697a3.city || _0x2697a3.district || _0x2697a3.exchangeDate || _0x2697a3.exchangeQuantity) {
          const _0x2eb627 = _0x4b8f8f(_0x2697a3.fullName) + "|" + _0x4b8f8f(_0x2697a3.idNumber);
          _0x3859ac.has(_0x2eb627) && "|" !== _0x2eb627 || (_0x3859ac.add(_0x2eb627), _0x9139a3.push(_0x2697a3));
        } else {
          const _0x2618ed = "empty_" + _0x2697a3.id;
          _0x3859ac.has(_0x2618ed) || (_0x3859ac.add(_0x2618ed), _0x9139a3.push(_0x2697a3));
        }
      });
      _0x9139a3.length > 20 ? _0x386b23.profiles = _0x9139a3.slice(0, 20) : _0x386b23.profiles = _0x9139a3;
      console.log("[Options] 保存后 profiles:", _0x386b23.profiles);
      console.log("[Options] 保存后 multiOpenBindings:", _0x386b23.multiOpenBindings);
      _0x386b23.multiOpenBindings && _0x386b23.multiOpenBindings.length > 15 && (_0x386b23.multiOpenBindings = _0x386b23.multiOpenBindings.slice(0, 15));
      await _0x3e7ab5(_0x386b23);
      alert("已保存");
      const _0x503c83 = await _0x5c65b4();
      console.log("[Options] 重新加载后 profiles:", _0x503c83.profiles);
      console.log("[Options] 重新加载后 multiOpenBindings:", _0x503c83.multiOpenBindings);
      _0x289b1b(_0x503c83);
    };
    document.getElementById("export").onclick = () => {
      const _0x26add2 = JSON.parse(JSON.stringify(window.__cfg));
      const _0x463d74 = new Blob([JSON.stringify(_0x26add2, null, 2)], {
        type: "application/json"
      });
      const _0x14b860 = URL.createObjectURL(_0x463d74);
      const _0x2d8fca = document.createElement("a");
      _0x2d8fca.href = _0x14b860;
      _0x2d8fca.download = "jinpeng-config.json";
      _0x2d8fca.click();
      URL.revokeObjectURL(_0x14b860);
    };
    document.getElementById("import").onclick = async () => {
      const _0x22d087 = document.createElement("input");
      _0x22d087.type = "file";
      _0x22d087.accept = "application/json";
      _0x22d087.onchange = async () => {
        const _0x3c49e7 = _0x22d087.files?.[0];
        if (!_0x3c49e7) {
          return;
        }
        const _0x303fe7 = await _0x3c49e7.text();
        try {
          const _0x5cbeb5 = JSON.parse(_0x303fe7);
          const _0x24d805 = 20;
          _0x5cbeb5.profiles && _0x5cbeb5.profiles.length > _0x24d805 && (_0x5cbeb5.profiles = _0x5cbeb5.profiles.slice(0, _0x24d805), alert("导入成功，但只保留了前 " + _0x24d805 + " 个人员（最多支持 " + _0x24d805 + " 人）"));
          const _0x545246 = 15;
          _0x5cbeb5.multiOpenBindings && _0x5cbeb5.multiOpenBindings.length > _0x545246 && (_0x5cbeb5.multiOpenBindings = _0x5cbeb5.multiOpenBindings.slice(0, _0x545246), alert("导入成功，但只保留了前 " + _0x545246 + " 个绑定（最多支持 " + _0x545246 + " 个）"));
          _0x5cbeb5.multiOpenBindings || (_0x5cbeb5.multiOpenBindings = []);
          Array.isArray(_0x5cbeb5.multiOpenBindings) || (_0x5cbeb5.multiOpenBindings = []);
          await _0x3e7ab5(_0x5cbeb5);
          _0x289b1b(await _0x5c65b4());
          (!_0x5cbeb5.profiles || _0x5cbeb5.profiles.length <= _0x24d805) && (!_0x5cbeb5.multiOpenBindings || _0x5cbeb5.multiOpenBindings.length <= _0x545246) && alert("导入成功");
        } catch (_0x2c4ed4) {
          {
            alert("导入失败：" + _0x2c4ed4.message);
          }
        }
      };
      _0x22d087.click();
    };
    const _0x5469a7 = document.getElementById("versionBadge");
    if (_0x5469a7) {
      try {
        const _0x32c7c0 = chrome.runtime.getManifest().version || "0.1.0";
        _0x5469a7.textContent = "v" + _0x32c7c0;
      } catch (_0x3200eb) {
        {
          console.error("获取版本号失败:", _0x3200eb);
          _0x5469a7.textContent = "v0.1.0";
        }
      }
    }
  }();
})();