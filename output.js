//Sun Jan 11 2026 06:00:35 GMT+0000 (Coordinated Universal Time)
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
  (function () {
    const _0xb39d1f = "undefined" != typeof self ? self : this;
    if (_0xb39d1f.__JP_BG_ANTI_INJECT_INIT__) {
      return;
    }
    _0xb39d1f.__JP_BG_ANTI_INJECT_INIT__ = true;
    const _0x1fdc8b = "[JP Anti-Inject BG]";
    function _0x49120e(_0x167962, _0x59e44d) {
      if ("function" != typeof _0x167962) {
        return false;
      }
      try {
        const _0x12ac2b = Function.prototype.toString.call(_0x167962);
        return _0x12ac2b.includes("[native code]") && _0x12ac2b.includes(_0x59e44d);
      } catch (_0x179909) {
        return false;
      }
    }
    function _0x2fa40d() {
      const _0x1aa1e2 = [];
      if (_0x49120e(_0xb39d1f.fetch, "fetch") || _0x1aa1e2.push("fetch"), _0x49120e(_0xb39d1f.Request, "Request") || _0x1aa1e2.push("Request"), _0x49120e(_0xb39d1f.Response, "Response") || _0x1aa1e2.push("Response"), _0x49120e(_0xb39d1f.Headers, "Headers") || _0x1aa1e2.push("Headers"), _0x49120e(_0xb39d1f.Function, "Function") || _0x1aa1e2.push("Function"), _0x49120e(_0xb39d1f.eval, "eval") || _0x1aa1e2.push("eval"), _0x1aa1e2.length) {
        try {
          _0xb39d1f.fetch = _0xb39d1f.fetch;
          _0xb39d1f.Request = _0xb39d1f.Request;
          _0xb39d1f.Response = _0xb39d1f.Response;
          _0xb39d1f.Headers = _0xb39d1f.Headers;
          _0xb39d1f.Function = _0xb39d1f.Function;
          _0xb39d1f.eval = _0xb39d1f.eval;
          console.warn(_0x1fdc8b + " Detected and restored hooked APIs:", _0x1aa1e2);
        } catch (_0x650867) {
          console.warn(_0x1fdc8b + " Detected hooked APIs but failed to restore all", {
            suspects: _0x1aa1e2,
            err: _0x650867
          });
        }
      }
    }
    _0x2fa40d();
    setInterval(_0x2fa40d, 2000);
  })();
  importScripts("libs/logger.js", "libs/notifier.js", "libs/scheduler.js");
  const _0x2445c5 = "JP_FILL";
  const _0x1e175a = "JP_GET_CONFIG";
  const _0x25ef19 = "JP_SET_CONFIG";
  const _0x277bb4 = "JP_RUN_AT";
  const _0x130d9c = "JP_OPEN_OPTIONS";
  const _0x287bbd = "JP_OCR_RECOGNIZE";
  const _0x5c426d = "JP_AUTH_VERIFY";
  const _0xaab538 = "JP_AUTH_CHECK";
  const _0x90c5ea = "JP_AUTH_GET";
  const _0x54f0d5 = "JP_AUTH_CLEAR";
  const _0xa622f7 = "JP_CARD_EXPIRE_DATE";
  const _0x26bd37 = "JP_MULTI_OPEN_CREATE_WINDOW";
  const _0x51e017 = "JP_MULTI_OPEN_CLOSE_WINDOW";
  const _0x40afd9 = "JP_MULTI_OPEN_QUERY_TABS";
  const _0x5e4505 = "JP_MULTI_OPEN_SEND_MESSAGE";
  const _0x5371b2 = "JP_MULTI_OPEN_FOCUS_WINDOW";
  const _0x212588 = "JP_MULTI_OPEN_SYNC_ACTION";
  const _0x13fc9c = "JP_MULTI_OPEN_SYNC_TOGGLE";
  const _0x9f0747 = "JP_WS_CONNECT";
  const _0x282155 = "JP_WS_SEND";
  const _0x1bae41 = "JP_WS_CLOSE";
  const _0x4177f6 = "JP_CARD_AUTH_WS_CONNECT";
  const _0x5ca61e = "JP_CARD_AUTH_WS_SEND";
  const _0x36e930 = "JP_CARD_AUTH_WS_CLOSE";
  const _0x5e85ba = "http://103.39.64.121:8080";
  const _0x30c086 = 3600000;
  const _0xe21974 = 259200000;
  const _0x348562 = 259200000;
  const _0xda7b0d = 3;
  const _0x44350d = new Map();
  let _0x483534 = {
    lastCheckTime: 0,
    lastCheckResult: null,
    offlineRetries: 0,
    expireWarningSent: false
  };
  const _0x58059d = {
    profiles: [],
    defaultProfileId: null,
    profileSelection: {
      mode: "manual",
      rules: []
    },
    bankFieldMap: {},
    schedule: {
      startAt: null,
      ntpOffsetMs: 0,
      prewarmSeconds: 10
    },
    features: {
      autoFill: true,
      autoSubmit: false,
      retryOnFail: true,
      maxRetries: 2
    },
    notifications: {
      sound: true,
      desktop: true
    },
    smsMode: "cloud"
  };
  async function _0x4da41d() {
    const {
      jpConfig: _0x447b7c
    } = await chrome.storage.local.get(["jpConfig"]);
    return {
      ..._0x58059d,
      ...(_0x447b7c || {})
    };
  }
  async function _0x2039bd() {
    const {
      jpMachineCode: _0x25bbb5
    } = await chrome.storage.local.get(["jpMachineCode"]);
    if (_0x25bbb5) {
      return _0x25bbb5;
    }
    const _0x2c9a5f = new Uint8Array(16);
    crypto.getRandomValues(_0x2c9a5f);
    const _0x2ce75d = Array.from(_0x2c9a5f, _0x550148 => _0x550148.toString(16).padStart(2, "0")).join("").toUpperCase();
    await chrome.storage.local.set({
      jpMachineCode: _0x2ce75d
    });
    return _0x2ce75d;
  }
  async function _0x567f7d() {
    const {
      jpAuth: _0xde3640
    } = await chrome.storage.local.get(["jpAuth"]);
    if (!_0xde3640) {
      return null;
    }
    if (!_0xde3640.savedAt) {
      const _0x71fdcb = {
        ..._0xde3640,
        savedAt: Date.now()
      };
      await chrome.storage.local.set({
        jpAuth: _0x71fdcb
      });
      return _0x71fdcb;
    }
    return Date.now() - _0xde3640.savedAt >= _0x348562 ? (await _0x238512(), null) : _0xde3640;
  }
  async function _0x481acd(_0xfed91) {
    const _0x41846b = {
      ..._0xfed91,
      savedAt: Date.now()
    };
    await chrome.storage.local.set({
      jpAuth: _0x41846b
    });
  }
  async function _0x238512() {
    {
      await chrome.storage.local.remove(["jpAuth"]);
    }
  }
  async function _0xd6db7c(_0x5cb0eb, _0x3f3a62 = false) {
    const _0x245035 = Date.now();
    if (!_0x3f3a62 && _0x483534.lastCheckTime > 0 && _0x245035 - _0x483534.lastCheckTime < _0x30c086 && _0x483534.lastCheckResult) {
      console.log("[JP Background] 使用认证缓存，距上次检查:", (_0x245035 - _0x483534.lastCheckTime) / 1000, "秒");
      return _0x483534.lastCheckResult;
    }
    const _0x464dc0 = await _0x2039bd();
    try {
      const _0x33c413 = await fetch(_0x5e85ba + "/api/v1/cards/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cardCode: _0x5cb0eb,
          machineCode: _0x464dc0
        }),
        timeout: 5000
      });
      if (!_0x33c413.ok) {
        throw new Error("服务器响应错误: " + _0x33c413.status);
      }
      const _0x4f2b30 = await _0x33c413.json();
      if (console.log("[JP Background] 检查绑定响应:", _0x4f2b30), 200 !== _0x4f2b30.code) {
        _0x483534.lastCheckTime = _0x245035;
        _0x483534.lastCheckResult = null;
        _0x483534.offlineRetries = 0;
        return null;
      }
      if (_0x483534.lastCheckTime = _0x245035, _0x483534.lastCheckResult = _0x4f2b30.data, _0x483534.offlineRetries = 0, _0x4f2b30.data && _0x4f2b30.data.expireDate) {
        const _0x43f0fd = (new Date(_0x4f2b30.data.expireDate).getTime() - _0x245035) / 86400000;
        _0x43f0fd <= 7 && _0x43f0fd > 0 && !_0x483534.expireWarningSent && (chrome.notifications.create({
          type: "basic",
          iconUrl: "public/eagle.svg",
          title: "金鹏鸟助手 - 卡密即将过期",
          message: "您的卡密将在 " + Math.ceil(_0x43f0fd) + " 天后过期，请及时续费。",
          priority: 2
        }), _0x483534.expireWarningSent = true);
      }
      return _0x4f2b30.data;
    } catch (_0x47922a) {
      if (console.error("[JP Background] 检查绑定失败:", _0x47922a), _0x483534.offlineRetries++, _0x483534.offlineRetries >= _0xda7b0d) {
        throw console.warn("[JP Background] 离线重试次数超限，清除认证缓存"), _0x483534.lastCheckResult = null, new Error("网络连接失败次数过多，请检查网络后重新认证");
      }
      if (_0x483534.lastCheckResult && _0x483534.lastCheckTime > 0 && _0x245035 - _0x483534.lastCheckTime < _0xe21974) {
        console.log("[JP Background] 网络错误，使用宽限期内的认证缓存");
        return _0x483534.lastCheckResult;
      }
      throw _0x47922a;
    }
  }
  async function _0x5df0fa(_0x3d7aaa) {
    const [_0x529469] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    _0x529469 && _0x529469.id && (await chrome.tabs.sendMessage(_0x529469.id, _0x3d7aaa).catch(() => {}));
  }
  const _0x4917e9 = {
    data: new Map(),
    TTL: 2000,
    get(_0x5f3a64, _0x556781) {
      {
        const _0x322d99 = this.data.get(_0x5f3a64);
        return _0x322d99 && Date.now() - _0x322d99.timestamp < this.TTL ? _0x322d99.tabs : null;
      }
    },
    set(_0xfb1864, _0x13c6cb) {
      {
        if (this.data.set(_0xfb1864, {
          tabs: _0x13c6cb,
          timestamp: Date.now()
        }), this.data.size > 50) {
          const _0x5e9785 = Date.now();
          for (const [_0x3ecfd9, _0x4deb50] of this.data) _0x5e9785 - _0x4deb50.timestamp > 5 * this.TTL && this.data.delete(_0x3ecfd9);
        }
      }
    },
    invalidate(_0x3fff05) {
      this.data.delete(_0x3fff05);
    }
  };
  function _0x30fc9c(_0x447245, _0x2aaff4, _0x4ab68d, _0x231454) {
    const _0x4a516b = _0x447245.windowIds;
    const _0xc7677b = _0x447245.groupId;
    const _0x33872a = _0x4917e9.get(_0xc7677b, _0x4a516b);
    _0x33872a ? _0x3a27cf(_0x33872a, _0x2aaff4, _0x4ab68d, _0x231454) : chrome.tabs.query({}, _0x24f1ff => {
      const _0x588494 = [];
      _0x4a516b.forEach(_0x458eca => {
        const _0x265db4 = _0x24f1ff.filter(_0x18f13e => _0x18f13e.windowId === _0x458eca);
        _0x588494.push(..._0x265db4);
      });
      _0x4917e9.set(_0xc7677b, _0x588494);
      _0x3a27cf(_0x588494, _0x2aaff4, _0x4ab68d, _0x231454);
    });
  }
  function _0x3a27cf(_0x296b5d, _0x41381a, _0x64a422, _0x542244) {
    const _0x2df29d = _0x296b5d.filter(_0x4f4715 => _0x4f4715.id !== _0x64a422);
    if (0 === _0x2df29d.length) {
      return void _0x542244({
        ok: true,
        synced: 0
      });
    }
    let _0x4e349a = 0;
    let _0x2598f3 = 0;
    _0x2df29d.forEach(_0x434c1e => {
      chrome.tabs.sendMessage(_0x434c1e.id, {
        type: "JP_MULTI_OPEN_SYNC_ACTION",
        payload: {
          action: _0x41381a
        }
      }, _0xdca434 => {
        chrome.runtime.lastError ? _0x2598f3++ : _0x4e349a++;
        _0x4e349a + _0x2598f3 === _0x2df29d.length && _0x542244({
          ok: true,
          synced: _0x4e349a,
          failed: _0x2598f3
        });
      });
    });
  }
  function _0x5b4acf(_0x378b77, _0x41726e, _0x45ef28, _0xe24533) {
    {
      const _0x204f6a = _0x378b77.windowIds;
      const _0x43a2fe = _0x378b77.groupId;
      const _0x2263aa = _0x4917e9.get(_0x43a2fe, _0x204f6a);
      _0x2263aa ? _0x2be9a4(_0x2263aa, _0x41726e, _0x45ef28, _0xe24533) : chrome.tabs.query({}, _0x58ca44 => {
        {
          const _0x295295 = [];
          _0x204f6a.forEach(_0x2cf05c => {
            const _0x18586a = _0x58ca44.filter(_0x443867 => _0x443867.windowId === _0x2cf05c);
            _0x295295.push(..._0x18586a);
          });
          _0x4917e9.set(_0x43a2fe, _0x295295);
          _0x2be9a4(_0x295295, _0x41726e, _0x45ef28, _0xe24533);
        }
      });
    }
  }
  function _0x2be9a4(_0x52c735, _0x562180, _0x36624f, _0x36c0a2) {
    const _0x565e86 = _0x52c735.filter(_0x1b4508 => _0x1b4508.id !== _0x36624f);
    if (0 === _0x565e86.length) {
      return void _0x36c0a2({
        ok: true,
        synced: 0
      });
    }
    let _0x402d27 = 0;
    let _0x3a19f2 = 0;
    _0x565e86.forEach(_0x5d2710 => {
      chrome.tabs.sendMessage(_0x5d2710.id, {
        type: "JP_MULTI_OPEN_SYNC_TOGGLE",
        payload: {
          enabled: _0x562180
        }
      }, _0x34b7ac => {
        chrome.runtime.lastError ? _0x3a19f2++ : _0x402d27++;
        _0x402d27 + _0x3a19f2 === _0x565e86.length && _0x36c0a2({
          ok: true,
          synced: _0x402d27,
          failed: _0x3a19f2
        });
      });
    });
  }
  const _0x5caa4d = new Map();
  const _0x4c7610 = new Map();
  chrome.runtime.onMessage.addListener((_0x196e30, _0x559416, _0x5e4278) => ((async () => {
    {
      switch (_0x196e30?.["type"]) {
        case _0x1e175a:
          _0x5e4278(await _0x4da41d());
          break;
        case _0x25ef19:
          {
            const _0x357d55 = await async function (_0x39abe5) {
              const _0x25e06a = {
                ...(await _0x4da41d()),
                ..._0x39abe5
              };
              await chrome.storage.local.set({
                jpConfig: _0x25e06a
              });
              try {
                {
                  chrome.tabs.query({}, _0x1c851d => {
                    _0x1c851d && _0x1c851d.length > 0 && _0x1c851d.forEach(_0x1a37f3 => {
                      _0x1a37f3.id && chrome.tabs.sendMessage(_0x1a37f3.id, {
                        type: "JP_CONFIG_UPDATED",
                        payload: _0x39abe5
                      }).catch(() => {});
                    });
                  });
                }
              } catch (_0x261707) {}
              return _0x25e06a;
            }(_0x196e30.payload || {});
            _0x5e4278(_0x357d55);
            break;
          }
        case "GET_MACHINE_CODE":
          try {
            const _0x130479 = await _0x2039bd();
            _0x5e4278({
              machineCode: _0x130479
            });
          } catch (_0x36b916) {
            _0x5e4278({
              error: _0x36b916.message
            });
          }
          break;
        case _0x2445c5:
          try {
            const _0x37be92 = await _0x567f7d();
            if (!_0x37be92 || !_0x37be92.cardCode) {
              _0x5e4278({
                ok: false,
                error: "未认证，请先绑定卡密"
              });
              break;
            }
            const _0x324063 = await _0xd6db7c(_0x37be92.cardCode, true);
            if (!_0x324063 || !_0x324063.valid) {
              await _0x238512();
              _0x5e4278({
                ok: false,
                error: "认证已失效，请重新验证卡密"
              });
              break;
            }
            if (_0x324063.expireDate && new Date(_0x324063.expireDate).getTime() < Date.now()) {
              await _0x238512();
              _0x5e4278({
                ok: false,
                error: "卡密已过期，请重新购买"
              });
              break;
            }
          } catch (_0x2d511f) {
            if (!(_0x483534.lastCheckResult && _0x483534.lastCheckTime > 0)) {
              {
                _0x5e4278({
                  ok: false,
                  error: "认证验证失败：" + _0x2d511f.message
                });
                break;
              }
            }
            {
              const _0x4d7f77 = Date.now() - _0x483534.lastCheckTime;
              if (_0x4d7f77 >= _0xe21974) {
                {
                  _0x5e4278({
                    ok: false,
                    error: "无法验证认证状态，请检查网络连接"
                  });
                  break;
                }
              }
              console.warn("[JP Background] 离线模式执行填表操作，缓存年龄:", _0x4d7f77 / 1000, "秒");
            }
          }
          await _0x5df0fa({
            type: _0x2445c5,
            payload: _0x196e30.payload
          });
          _0x5e4278({
            ok: true
          });
          break;
        case _0x277bb4:
          {
            {
              const {
                when: _0x4f1fe5,
                payload: _0x24a161
              } = _0x196e30.payload || {};
              if (!_0x4f1fe5) {
                {
                  _0x5e4278({
                    ok: false,
                    error: "missing when"
                  });
                  break;
                }
              }
              const _0x1ccc72 = new Date(_0x4f1fe5).getTime();
              const _0x1f1b32 = Date.now();
              const _0x59a49c = Math.max(0, _0x1ccc72 - _0x1f1b32);
              Scheduler.setTimeout(async () => {
                await _0x5df0fa({
                  type: _0x2445c5,
                  payload: _0x24a161
                });
              }, _0x59a49c);
              _0x5e4278({
                ok: true,
                delayMs: _0x59a49c
              });
              break;
            }
          }
        case _0x130d9c:
          chrome.runtime.openOptionsPage();
          _0x5e4278({
            ok: true
          });
          break;
        case _0x287bbd:
          try {
            {
              const {
                imageBase64: _0x486066,
                ocrMode: _0x481e14
              } = _0x196e30.payload || {};
              if (!_0x486066) {
                _0x5e4278({
                  ok: false,
                  error: "missing imageBase64"
                });
                break;
              }
              const _0xddd405 = await async function (_0x1eda56, _0x3af2b9 = "normal") {
                try {
                  {
                    console.log("[JP Background] 开始调用后端OCR识别接口...", {
                      ocrMode: _0x3af2b9
                    });
                    const _0x3b1ed4 = await _0x567f7d();
                    if (!_0x3b1ed4 || !_0x3b1ed4.cardCode) {
                      throw new Error("未认证，请先绑定卡密");
                    }
                    const _0x5a9ad1 = await _0x2039bd();
                    const _0xbd3316 = {
                      base64Image: _0x1eda56,
                      cardCode: _0x3b1ed4.cardCode,
                      machineCode: _0x5a9ad1,
                      ocrMode: _0x3af2b9 || "normal"
                    };
                    console.log("[JP Background] 发送OCR识别请求:", {
                      cardCode: _0x3b1ed4.cardCode,
                      machineCode: _0x5a9ad1,
                      imageSize: _0x1eda56 ? _0x1eda56.length : 0
                    });
                    const _0x2c375a = await fetch(_0x5e85ba + "/api/v1/captcha/recognize", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(_0xbd3316)
                    });
                    if (!_0x2c375a.ok) {
                      let _0xd134ff = "后端OCR API响应错误: " + _0x2c375a.status + " " + _0x2c375a.statusText;
                      try {
                        const _0x102f44 = await _0x2c375a.json();
                        _0x102f44.message ? _0xd134ff = _0x102f44.message : _0x102f44.msg && (_0xd134ff = _0x102f44.msg);
                      } catch (_0x276414) {
                        const _0x3fa7d4 = await _0x2c375a.text();
                        if (_0x3fa7d4) {
                          try {
                            const _0x5d036e = JSON.parse(_0x3fa7d4);
                            _0x5d036e.message ? _0xd134ff = _0x5d036e.message : _0x5d036e.msg && (_0xd134ff = _0x5d036e.msg);
                          } catch (_0x25c071) {
                            _0xd134ff = _0x3fa7d4 || _0xd134ff;
                          }
                        }
                      }
                      throw new Error(_0xd134ff);
                    }
                    const _0x8e90a4 = await _0x2c375a.json();
                    if (console.log("[JP Background] 后端OCR API响应:", _0x8e90a4), 200 !== _0x8e90a4.code) {
                      {
                        const _0x100ecd = _0x8e90a4.message || _0x8e90a4.msg || "OCR识别失败";
                        throw new Error(_0x100ecd);
                      }
                    }
                    const _0x200ca8 = _0x8e90a4.data;
                    if (!_0x200ca8) {
                      throw new Error("后端OCR API返回格式异常: data字段为空");
                    }
                    if (!_0x200ca8.success) {
                      const _0x2940cc = _0x200ca8.message || "OCR识别失败";
                      throw new Error(_0x2940cc);
                    }
                    const _0x87e413 = _0x200ca8.result;
                    if (!_0x87e413) {
                      throw new Error("后端OCR API未返回识别结果");
                    }
                    console.log("[JP Background] 识别到的文字:", _0x87e413);
                    const _0x214852 = _0x200ca8.remainingUsage || _0x200ca8.remainingNormalUsage || (undefined !== _0x200ca8.remainingSenselessUsage ? _0x200ca8.remainingSenselessUsage : null);
                    console.log("[JP Background] 剩余使用次数:", _0x214852);
                    return {
                      text: _0x87e413,
                      result: _0x87e413,
                      remainingUsage: _0x214852,
                      remainingNormalUsage: _0x200ca8.remainingNormalUsage,
                      remainingSenselessUsage: _0x200ca8.remainingSenselessUsage
                    };
                  }
                } catch (_0x4d29fe) {
                  throw console.error("[JP Background] 调用后端OCR API失败:", _0x4d29fe), _0x4d29fe;
                }
              }(_0x486066, _0x481e14);
              if ("string" == typeof _0xddd405) {
                _0x5e4278({
                  ok: true,
                  result: _0xddd405,
                  text: _0xddd405
                });
              } else {
                const _0x3913e5 = _0xddd405.text || _0xddd405.result || "";
                _0x5e4278({
                  ok: true,
                  result: _0x3913e5,
                  text: _0x3913e5,
                  remainingUsage: _0xddd405.remainingUsage
                });
              }
            }
          } catch (_0x5225f8) {
            _0x5e4278({
              ok: false,
              error: _0x5225f8.message
            });
          }
          break;
        case _0x5c426d:
          try {
            const {
              cardCode: _0x2b386c
            } = _0x196e30.payload || {};
            if (!_0x2b386c) {
              _0x5e4278({
                ok: false,
                error: "请输入卡密"
              });
              break;
            }
            const _0x1b89d0 = await async function (_0x2ef6d2) {
              const _0x564f64 = await _0x2039bd();
              const _0x24d6eb = await fetch(_0x5e85ba + "/api/v1/cards/verify", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  cardCode: _0x2ef6d2,
                  machineCode: _0x564f64
                })
              });
              if (!_0x24d6eb.ok) {
                throw new Error("服务器响应错误: " + _0x24d6eb.status);
              }
              const _0x4ee2fa = await _0x24d6eb.json();
              if (console.log("[JP Background] 卡密验证响应:", _0x4ee2fa), 200 !== _0x4ee2fa.code) {
                throw new Error(_0x4ee2fa.msg || "验证失败");
              }
              return _0x4ee2fa.data;
            }(_0x2b386c);
            if (_0x1b89d0.valid) {
              const _0x3d1301 = {
                cardCode: _0x2b386c,
                expireDate: _0x1b89d0.expireDate,
                verifyTime: new Date().toISOString()
              };
              await _0x481acd(_0x3d1301);
              _0x5e4278({
                ok: true,
                data: _0x3d1301
              });
            } else {
              _0x5e4278({
                ok: false,
                error: _0x1b89d0.message || "验证失败"
              });
            }
          } catch (_0x2d8d4a) {
            _0x5e4278({
              ok: false,
              error: _0x2d8d4a.message || "验证失败"
            });
          }
          break;
        case _0xaab538:
          try {
            const _0x526707 = await _0x567f7d();
            if (!_0x526707 || !_0x526707.cardCode) {
              _0x5e4278({
                ok: false,
                error: "未认证"
              });
              break;
            }
            const _0x1e79e4 = _0x196e30.payload?.["forceCheck"] || false;
            const _0x80e60e = await _0xd6db7c(_0x526707.cardCode, _0x1e79e4);
            if (_0x80e60e && _0x80e60e.valid) {
              if (_0x80e60e.expireDate && new Date(_0x80e60e.expireDate).getTime() < Date.now()) {
                await _0x238512();
                _0x483534 = {
                  lastCheckTime: 0,
                  lastCheckResult: null,
                  offlineRetries: 0,
                  expireWarningSent: false
                };
                _0x5e4278({
                  ok: false,
                  error: "卡密已过期，请重新购买"
                });
                break;
              }
              _0x526707.lastVerifyTime = new Date().toISOString();
              await _0x481acd(_0x526707);
              _0x5e4278({
                ok: true,
                data: _0x526707,
                fromCache: !_0x1e79e4 && null !== _0x483534.lastCheckResult,
                cacheAge: _0x1e79e4 ? 0 : (Date.now() - _0x483534.lastCheckTime) / 1000
              });
            } else {
              await _0x238512();
              _0x483534 = {
                lastCheckTime: 0,
                lastCheckResult: null,
                offlineRetries: 0,
                expireWarningSent: false
              };
              _0x5e4278({
                ok: false,
                error: "认证已失效，请重新验证"
              });
            }
          } catch (_0x5d3f65) {
            const _0x22c0fd = await _0x567f7d();
            if (_0x22c0fd && _0x22c0fd.cardCode && _0x483534.lastCheckResult) {
              const _0x35f0af = Date.now() - _0x483534.lastCheckTime;
              if (_0x35f0af < _0xe21974) {
                _0x5e4278({
                  ok: true,
                  data: _0x22c0fd,
                  offline: true,
                  offlineRetries: _0x483534.offlineRetries,
                  maxRetries: _0xda7b0d,
                  cacheAge: _0x35f0af / 1000
                });
                break;
              }
            }
            _0x5e4278({
              ok: false,
              error: _0x5d3f65.message || "检查认证失败"
            });
          }
          break;
        case _0x90c5ea:
          {
            const _0x1bb3ff = await _0x567f7d();
            _0x5e4278({
              ok: !!_0x1bb3ff,
              data: _0x1bb3ff
            });
            break;
          }
        case _0xa622f7:
          try {
            const {
              cardCode: _0x5abdcd,
              forceCheck: _0x3925b6
            } = _0x196e30.payload || {};
            if (!_0x5abdcd) {
              _0x5e4278({
                ok: false,
                error: "缺少卡密参数"
              });
              break;
            }
            const _0xb84280 = await async function (_0x4cc668, _0x8345a1 = {}) {
              const _0x5da778 = true === _0x8345a1.forceCheck;
              const _0x2b503b = _0x44350d.get(_0x4cc668);
              const _0x321ae1 = Date.now();
              if (!_0x5da778 && _0x2b503b && _0x321ae1 - _0x2b503b.ts < 259200000) {
                return _0x2b503b.data;
              }
              const _0x3daaec = await fetch(_0x5e85ba + "/api/v1/cards/" + encodeURIComponent(_0x4cc668) + "/expire-date", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
              if (!_0x3daaec.ok) {
                throw new Error("服务器响应错误: " + _0x3daaec.status);
              }
              const _0x4dec1a = await _0x3daaec.json();
              if (console.log("[JP Background] 卡密有效期响应:", _0x4dec1a), 200 !== _0x4dec1a.code) {
                throw new Error(_0x4dec1a.msg || "查询失败");
              }
              _0x44350d.set(_0x4cc668, {
                data: _0x4dec1a.data,
                ts: _0x321ae1
              });
              return _0x4dec1a.data;
            }(_0x5abdcd, {
              forceCheck: _0x3925b6
            });
            _0x5e4278({
              ok: true,
              data: _0xb84280
            });
          } catch (_0x5ca94a) {
            _0x5e4278({
              ok: false,
              error: _0x5ca94a.message || "查询有效期失败"
            });
          }
          break;
        case _0x54f0d5:
          await _0x238512();
          _0x5e4278({
            ok: true
          });
          break;
        case _0x26bd37:
          {
            const {
              url: _0x48f47f,
              width: _0xb2c050,
              height: _0x2d6c23,
              left: _0x2436ee,
              top: _0x301d39,
              focused: _0x2d9371
            } = _0x196e30.payload || {};
            if (!_0x48f47f) {
              _0x5e4278({
                ok: false,
                error: "缺少URL参数"
              });
              break;
            }
            try {
              const _0x22b45c = {
                url: _0x48f47f,
                type: "normal",
                width: _0xb2c050 || 800,
                height: _0x2d6c23 || 600,
                focused: undefined !== _0x2d9371 && _0x2d9371
              };
              undefined !== _0x2436ee && undefined !== _0x301d39 && (_0x22b45c.left = _0x2436ee, _0x22b45c.top = _0x301d39);
              chrome.windows.create(_0x22b45c, _0x4d1875 => {
                chrome.runtime.lastError ? (console.error("[JP Background] 创建窗口失败:", chrome.runtime.lastError, "URL:", _0x48f47f, "Options:", _0x22b45c), _0x5e4278({
                  ok: false,
                  error: chrome.runtime.lastError.message
                })) : _0x4d1875 && _0x4d1875.id ? (console.log("[JP Background] 窗口创建成功:", _0x4d1875.id, "URL:", _0x48f47f.substring(0, 100), "Position:", {
                  left: _0x2436ee,
                  top: _0x301d39
                }), _0x5e4278({
                  ok: true,
                  window: _0x4d1875
                })) : (console.error("[JP Background] 窗口创建返回无效对象:", _0x4d1875, "URL:", _0x48f47f), _0x5e4278({
                  ok: false,
                  error: "窗口创建返回无效对象"
                }));
              });
              return true;
            } catch (_0x2a11bd) {
              console.error("[JP Background] 创建窗口异常:", _0x2a11bd, "URL:", _0x48f47f);
              _0x5e4278({
                ok: false,
                error: _0x2a11bd.message
              });
            }
            break;
          }
        case _0x5371b2:
          try {
            const {
              windowId: _0x592e49
            } = _0x196e30.payload || {};
            return _0x592e49 ? (chrome.windows.update(_0x592e49, {
              focused: true
            }, _0xf0d307 => {
              chrome.runtime.lastError ? (console.error("[JP Background] 聚焦窗口失败:", chrome.runtime.lastError, "WindowId:", _0x592e49), _0x5e4278({
                ok: false,
                error: chrome.runtime.lastError.message
              })) : _0xf0d307 ? (console.log("[JP Background] 窗口聚焦成功:", _0x592e49), _0x5e4278({
                ok: true,
                window: _0xf0d307
              })) : _0x5e4278({
                ok: false,
                error: "窗口聚焦失败"
              });
            }), true) : void _0x5e4278({
              ok: false,
              error: "缺少窗口ID"
            });
          } catch (_0x41628b) {
            console.error("[JP Background] 聚焦窗口异常:", _0x41628b);
            _0x5e4278({
              ok: false,
              error: _0x41628b.message
            });
          }
          break;
        case _0x51e017:
          try {
            const {
              windowId: _0x4d5daf
            } = _0x196e30.payload || {};
            return _0x4d5daf ? (chrome.windows.remove(_0x4d5daf, () => {
              chrome.runtime.lastError ? _0x5e4278({
                ok: false,
                error: chrome.runtime.lastError.message
              }) : _0x5e4278({
                ok: true
              });
            }), true) : void _0x5e4278({
              ok: false,
              error: "缺少窗口ID"
            });
          } catch (_0x8a0a2) {
            _0x5e4278({
              ok: false,
              error: _0x8a0a2.message
            });
          }
          break;
        case _0x40afd9:
          try {
            const {
              windowId: _0x2499e6
            } = _0x196e30.payload || {};
            return undefined === _0x2499e6 ? void _0x5e4278({
              ok: false,
              error: "缺少窗口ID"
            }) : (chrome.tabs.query({
              windowId: _0x2499e6
            }, _0x152a64 => {
              chrome.runtime.lastError ? _0x5e4278({
                ok: false,
                error: chrome.runtime.lastError.message
              }) : _0x5e4278({
                ok: true,
                tabs: _0x152a64
              });
            }), true);
          } catch (_0x638cfd) {
            {
              _0x5e4278({
                ok: false,
                error: _0x638cfd.message
              });
            }
          }
          break;
        case _0x5e4505:
          try {
            const {
              tabId: _0x43936e,
              message: _0x1a059b
            } = _0x196e30.payload || {};
            return undefined !== _0x43936e && _0x1a059b ? (chrome.tabs.sendMessage(_0x43936e, _0x1a059b, _0xc1a153 => {
              chrome.runtime.lastError ? _0x5e4278({
                ok: false,
                error: chrome.runtime.lastError.message
              }) : _0x5e4278({
                ok: true,
                response: _0xc1a153
              });
            }), true) : void _0x5e4278({
              ok: false,
              error: "缺少标签页ID或消息"
            });
          } catch (_0x4dabf9) {
            _0x5e4278({
              ok: false,
              error: _0x4dabf9.message
            });
          }
          break;
        case _0x212588:
          try {
            const {
              groupId: _0x3cca0a,
              action: _0x1a316c
            } = _0x196e30.payload || {};
            if (!_0x3cca0a || !_0x1a316c) {
              return void _0x5e4278({
                ok: false,
                error: "缺少窗口组ID或操作"
              });
            }
            const _0x144df4 = _0x559416?.["tab"]?.["id"];
            const _0x2a6174 = "multiOpenGroups:";
            const _0x3c87df = _0x2a6174 + _0x3cca0a;
            chrome.storage.local.get([_0x3c87df], _0x53765d => {
              let _0x15b9dc = _0x53765d[_0x3c87df];
              if (!_0x15b9dc || !_0x15b9dc.windowIds || 0 === _0x15b9dc.windowIds.length) {
                chrome.storage.local.get(null, _0x45773e => {
                  const _0x58673f = Object.keys(_0x45773e).filter(_0x5c0f90 => _0x5c0f90.startsWith(_0x2a6174));
                  for (const _0xb0d395 of _0x58673f) {
                    {
                      const _0x20a32b = _0x45773e[_0xb0d395];
                      if (_0x20a32b) {
                        {
                          if (_0x20a32b.groupId === _0x3cca0a) {
                            _0x15b9dc = _0x20a32b;
                            break;
                          }
                          if (_0x20a32b.groupIdPrefix && _0x3cca0a.startsWith(_0x20a32b.groupIdPrefix)) {
                            _0x15b9dc = _0x20a32b;
                            break;
                          }
                          if (_0x20a32b.pageGroupIds && _0x20a32b.pageGroupIds.includes(_0x3cca0a)) {
                            _0x15b9dc = _0x20a32b;
                            break;
                          }
                        }
                      }
                    }
                  }
                  _0x15b9dc && _0x15b9dc.windowIds && 0 !== _0x15b9dc.windowIds.length ? _0x30fc9c(_0x15b9dc, _0x1a316c, _0x144df4, _0x5e4278) : _0x5e4278({
                    ok: false,
                    error: "找不到窗口组信息"
                  });
                });
                return true;
              }
              _0x30fc9c(_0x15b9dc, _0x1a316c, _0x144df4, _0x5e4278);
            });
            return true;
          } catch (_0x973968) {
            _0x5e4278({
              ok: false,
              error: _0x973968.message
            });
          }
          break;
        case _0x13fc9c:
          try {
            const {
              groupId: _0x131713,
              enabled: _0x534f4e
            } = _0x196e30.payload || {};
            if (!_0x131713 || undefined === _0x534f4e) {
              return void _0x5e4278({
                ok: false,
                error: "缺少窗口组ID或状态"
              });
            }
            const _0x336a49 = _0x559416?.["tab"]?.["id"];
            const _0x361db1 = "multiOpenGroups:";
            const _0x3802fb = _0x361db1 + _0x131713;
            chrome.storage.local.get([_0x3802fb], _0x5a52d8 => {
              {
                let _0xe78a6d = _0x5a52d8[_0x3802fb];
                if (!_0xe78a6d || !_0xe78a6d.windowIds || 0 === _0xe78a6d.windowIds.length) {
                  chrome.storage.local.get(null, _0x566d1b => {
                    const _0x4f7e00 = Object.keys(_0x566d1b).filter(_0x1726db => _0x1726db.startsWith(_0x361db1));
                    for (const _0x21dc11 of _0x4f7e00) {
                      const _0x4c3f8e = _0x566d1b[_0x21dc11];
                      if (_0x4c3f8e) {
                        if (_0x4c3f8e.groupId === _0x131713) {
                          {
                            _0xe78a6d = _0x4c3f8e;
                            break;
                          }
                        }
                        if (_0x4c3f8e.groupIdPrefix && _0x131713.startsWith(_0x4c3f8e.groupIdPrefix)) {
                          _0xe78a6d = _0x4c3f8e;
                          break;
                        }
                        if (_0x4c3f8e.pageGroupIds && _0x4c3f8e.pageGroupIds.includes(_0x131713)) {
                          _0xe78a6d = _0x4c3f8e;
                          break;
                        }
                      }
                    }
                    _0xe78a6d && _0xe78a6d.windowIds && 0 !== _0xe78a6d.windowIds.length ? _0x5b4acf(_0xe78a6d, _0x534f4e, _0x336a49, _0x5e4278) : _0x5e4278({
                      ok: false,
                      error: "找不到窗口组信息"
                    });
                  });
                  return true;
                }
                _0x5b4acf(_0xe78a6d, _0x534f4e, _0x336a49, _0x5e4278);
              }
            });
            return true;
          } catch (_0x5e6787) {
            _0x5e4278({
              ok: false,
              error: _0x5e6787.message
            });
          }
          break;
        case _0x9f0747:
          try {
            const {
              url: _0xc18e09,
              tabId: _0x6c7fdb
            } = _0x196e30.payload || {};
            if (!_0xc18e09) {
              return void _0x5e4278({
                ok: false,
                error: "缺少WebSocket URL"
              });
            }
            const _0x112275 = _0x6c7fdb || _0x559416?.["tab"]?.["id"];
            const _0x46eeb1 = function (_0x580530) {
              return "tab_" + (_0x580530 || "default");
            }(_0x112275);
            if (_0x5caa4d.has(_0x46eeb1)) {
              {
                const _0x116ba3 = _0x5caa4d.get(_0x46eeb1);
                _0x116ba3 && _0x116ba3.readyState !== WebSocket.CLOSED && _0x116ba3.close();
                _0x5caa4d.delete(_0x46eeb1);
                _0x4c7610.delete(_0x46eeb1);
              }
            }
            const _0x36bab7 = new WebSocket(_0xc18e09);
            _0x112275 && _0x4c7610.set(_0x46eeb1, _0x112275);
            _0x36bab7.onopen = () => {
              console.log("[JP Background] WebSocket连接成功:", _0xc18e09);
              const _0x103dec = _0x4c7610.get(_0x46eeb1);
              _0x103dec && chrome.tabs.sendMessage(_0x103dec, {
                type: "JP_WS_EVENT",
                event: "open",
                connectionKey: _0x46eeb1
              }).catch(() => {});
            };
            _0x36bab7.onmessage = _0x3df077 => {
              console.log("[JP Background] WebSocket收到消息:", _0x3df077.data);
              const _0x3a42aa = _0x4c7610.get(_0x46eeb1);
              _0x3a42aa && chrome.tabs.sendMessage(_0x3a42aa, {
                type: "JP_WS_EVENT",
                event: "message",
                data: _0x3df077.data,
                connectionKey: _0x46eeb1
              }).catch(() => {});
            };
            _0x36bab7.onerror = _0x584486 => {
              const _0x4a7345 = _0x584486 instanceof Error ? _0x584486.message : _0x584486?.["message"] || _0x584486?.["type"] || "WebSocket连接错误";
              const _0x9b16dd = _0x4c7610.get(_0x46eeb1);
              _0x9b16dd && chrome.tabs.sendMessage(_0x9b16dd, {
                type: "JP_WS_EVENT",
                event: "error",
                error: _0x4a7345,
                connectionKey: _0x46eeb1
              }).catch(() => {});
            };
            _0x36bab7.onclose = _0x416612 => {
              console.log("[JP Background] WebSocket连接已关闭:", {
                code: _0x416612.code,
                reason: _0x416612.reason,
                wasClean: _0x416612.wasClean
              });
              const _0x2dfb07 = _0x4c7610.get(_0x46eeb1);
              _0x2dfb07 && chrome.tabs.sendMessage(_0x2dfb07, {
                type: "JP_WS_EVENT",
                event: "close",
                code: _0x416612.code,
                reason: _0x416612.reason,
                wasClean: _0x416612.wasClean,
                connectionKey: _0x46eeb1
              }).catch(() => {});
              _0x5caa4d.delete(_0x46eeb1);
              _0x4c7610.delete(_0x46eeb1);
            };
            _0x5caa4d.set(_0x46eeb1, _0x36bab7);
            _0x5e4278({
              ok: true,
              connectionKey: _0x46eeb1
            });
          } catch (_0x2ac306) {
            {
              console.error("[JP Background] WebSocket连接失败:", _0x2ac306);
              _0x5e4278({
                ok: false,
                error: _0x2ac306.message
              });
            }
          }
          break;
        case _0x282155:
          try {
            const {
              connectionKey: _0x670e13,
              message: _0x33a634
            } = _0x196e30.payload || {};
            if (!_0x670e13 || !_0x33a634) {
              return void _0x5e4278({
                ok: false,
                error: "缺少连接标识或消息"
              });
            }
            const _0x16a076 = _0x5caa4d.get(_0x670e13);
            if (!_0x16a076) {
              return void _0x5e4278({
                ok: false,
                error: "WebSocket连接不存在"
              });
            }
            if (_0x16a076.readyState !== WebSocket.OPEN) {
              return void _0x5e4278({
                ok: false,
                error: "WebSocket连接未打开"
              });
            }
            _0x16a076.send("string" == typeof _0x33a634 ? _0x33a634 : JSON.stringify(_0x33a634));
            _0x5e4278({
              ok: true
            });
          } catch (_0xb808d2) {
            console.error("[JP Background] WebSocket发送消息失败:", _0xb808d2);
            _0x5e4278({
              ok: false,
              error: _0xb808d2.message
            });
          }
          break;
        case _0x1bae41:
          try {
            {
              const {
                connectionKey: _0x4d0507
              } = _0x196e30.payload || {};
              if (!_0x4d0507) {
                return void _0x5e4278({
                  ok: false,
                  error: "缺少连接标识"
                });
              }
              const _0x4a8bf9 = _0x5caa4d.get(_0x4d0507);
              _0x4a8bf9 ? (_0x4a8bf9.close(), _0x5caa4d.delete(_0x4d0507), _0x5e4278({
                ok: true
              })) : _0x5e4278({
                ok: false,
                error: "WebSocket连接不存在"
              });
            }
          } catch (_0x46b192) {
            console.error("[JP Background] WebSocket关闭失败:", _0x46b192);
            _0x5e4278({
              ok: false,
              error: _0x46b192.message
            });
          }
          break;
        case _0x4177f6:
          try {
            {
              const {
                url: _0x33337f
              } = _0x196e30.payload || {};
              if (!_0x33337f) {
                return void _0x5e4278({
                  ok: false,
                  error: "缺少WebSocket URL"
                });
              }
              const _0x47d7ce = "card_auth_ws";
              if (_0x5caa4d.has(_0x47d7ce)) {
                const _0x41d929 = _0x5caa4d.get(_0x47d7ce);
                _0x41d929 && _0x41d929.readyState !== WebSocket.CLOSED && _0x41d929.close();
                _0x5caa4d.delete(_0x47d7ce);
              }
              const _0x242a6b = new WebSocket(_0x33337f);
              _0x242a6b.onopen = () => {
                console.log("[JP Background] 卡密认证WebSocket连接成功:", _0x33337f);
                chrome.tabs.query({}, _0x2bfd3b => {
                  _0x2bfd3b.forEach(_0x2cde65 => {
                    chrome.tabs.sendMessage(_0x2cde65.id, {
                      type: "JP_CARD_AUTH_WS_EVENT",
                      event: "open",
                      connectionKey: _0x47d7ce
                    }).catch(() => {});
                  });
                });
              };
              _0x242a6b.onmessage = _0x51b8ec => {
                console.log("[JP Background] 卡密认证WebSocket收到消息:", _0x51b8ec.data);
                chrome.tabs.query({}, _0x30451a => {
                  _0x30451a.forEach(_0x9cc787 => {
                    chrome.tabs.sendMessage(_0x9cc787.id, {
                      type: "JP_CARD_AUTH_WS_EVENT",
                      event: "message",
                      data: _0x51b8ec.data,
                      connectionKey: _0x47d7ce
                    }).catch(() => {});
                  });
                });
              };
              _0x242a6b.onerror = _0x3390db => {
                const _0x5d44ad = _0x3390db instanceof Error ? _0x3390db.message : _0x3390db?.["message"] || _0x3390db?.["type"] || "卡密认证WebSocket连接错误";
                chrome.tabs.query({}, _0x1c839e => {
                  _0x1c839e.forEach(_0x4a9d66 => {
                    chrome.tabs.sendMessage(_0x4a9d66.id, {
                      type: "JP_CARD_AUTH_WS_EVENT",
                      event: "error",
                      error: _0x5d44ad,
                      connectionKey: _0x47d7ce
                    }).catch(() => {});
                  });
                });
              };
              _0x242a6b.onclose = _0x5c7bb6 => {
                console.log("[JP Background] 卡密认证WebSocket连接已关闭:", {
                  code: _0x5c7bb6.code,
                  reason: _0x5c7bb6.reason,
                  wasClean: _0x5c7bb6.wasClean
                });
                chrome.tabs.query({}, _0x5d62d4 => {
                  _0x5d62d4.forEach(_0x1d25b0 => {
                    chrome.tabs.sendMessage(_0x1d25b0.id, {
                      type: "JP_CARD_AUTH_WS_EVENT",
                      event: "close",
                      code: _0x5c7bb6.code,
                      reason: _0x5c7bb6.reason,
                      wasClean: _0x5c7bb6.wasClean,
                      connectionKey: _0x47d7ce
                    }).catch(() => {});
                  });
                });
                _0x5caa4d.delete(_0x47d7ce);
              };
              _0x5caa4d.set(_0x47d7ce, _0x242a6b);
              _0x5e4278({
                ok: true,
                connectionKey: _0x47d7ce
              });
            }
          } catch (_0x2f50df) {
            console.error("[JP Background] 卡密认证WebSocket连接失败:", _0x2f50df);
            _0x5e4278({
              ok: false,
              error: _0x2f50df.message
            });
          }
          break;
        case _0x5ca61e:
          try {
            const {
              message: _0x1a003f
            } = _0x196e30.payload || {};
            if (!_0x1a003f) {
              return void _0x5e4278({
                ok: false,
                error: "缺少消息"
              });
            }
            const _0x4574c0 = "card_auth_ws";
            const _0x2d2534 = _0x5caa4d.get(_0x4574c0);
            if (!_0x2d2534) {
              return void _0x5e4278({
                ok: false,
                error: "卡密认证WebSocket连接不存在"
              });
            }
            if (_0x2d2534.readyState !== WebSocket.OPEN) {
              return void _0x5e4278({
                ok: false,
                error: "卡密认证WebSocket连接未打开"
              });
            }
            _0x2d2534.send("string" == typeof _0x1a003f ? _0x1a003f : JSON.stringify(_0x1a003f));
            _0x5e4278({
              ok: true
            });
          } catch (_0x67231e) {
            console.error("[JP Background] 卡密认证WebSocket发送消息失败:", _0x67231e);
            _0x5e4278({
              ok: false,
              error: _0x67231e.message
            });
          }
          break;
        case _0x36e930:
          try {
            {
              const _0x165bf2 = "card_auth_ws";
              const _0x1241f1 = _0x5caa4d.get(_0x165bf2);
              _0x1241f1 ? (_0x1241f1.close(), _0x5caa4d.delete(_0x165bf2), _0x5e4278({
                ok: true
              })) : _0x5e4278({
                ok: false,
                error: "卡密认证WebSocket连接不存在"
              });
            }
          } catch (_0x3b53b2) {
            console.error("[JP Background] 卡密认证WebSocket关闭失败:", _0x3b53b2);
            _0x5e4278({
              ok: false,
              error: _0x3b53b2.message
            });
          }
      }
    }
  })(), true));
  chrome.runtime.onInstalled.addListener(async () => {
    const _0x2e09b5 = await _0x4da41d();
    Logger.info("金鹏鸟助手已安装/更新", _0x2e09b5);
    chrome.alarms.create("periodicAuthCheck", {
      periodInMinutes: _0x30c086 / 60000
    });
  });
  chrome.alarms.onAlarm.addListener(async _0x2c7fcb => {
    if ("periodicAuthCheck" === _0x2c7fcb.name) {
      console.log("[JP Background] 执行定期认证检查...");
      const _0x2bec29 = await _0x567f7d();
      if (!_0x2bec29 || !_0x2bec29.cardCode) {
        return void console.log("[JP Background] 未绑定卡密，跳过定期检查");
      }
      try {
        const _0x529d4d = await _0xd6db7c(_0x2bec29.cardCode, true);
        _0x529d4d && _0x529d4d.valid ? _0x529d4d.expireDate && (new Date(_0x529d4d.expireDate).getTime() < Date.now() ? (await _0x238512(), _0x483534 = {
          lastCheckTime: 0,
          lastCheckResult: null,
          offlineRetries: 0,
          expireWarningSent: false
        }, chrome.notifications.create({
          type: "basic",
          iconUrl: "public/eagle.svg",
          title: "金鹏鸟助手 - 卡密已过期",
          message: "您的卡密已过期，请重新购买。",
          priority: 2
        }), console.warn("[JP Background] 定期检查：卡密已过期")) : console.log("[JP Background] 定期检查：认证有效")) : (await _0x238512(), _0x483534 = {
          lastCheckTime: 0,
          lastCheckResult: null,
          offlineRetries: 0,
          expireWarningSent: false
        }, chrome.notifications.create({
          type: "basic",
          iconUrl: "public/eagle.svg",
          title: "金鹏鸟助手 - 认证失效",
          message: "您的卡密认证已失效，请重新验证。",
          priority: 2
        }), console.warn("[JP Background] 定期检查：认证已失效"));
      } catch (_0x27f8ac) {
        console.error("[JP Background] 定期认证检查失败:", _0x27f8ac);
      }
    }
  });
})();