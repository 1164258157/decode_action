//Sat Jan 10 2026 07:01:05 GMT+0000 (Coordinated Universal Time)
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
    const _0x5e51ac = "undefined" != typeof self ? self : this;
    if (_0x5e51ac.__JP_BG_ANTI_INJECT_INIT__) {
      return;
    }
    _0x5e51ac.__JP_BG_ANTI_INJECT_INIT__ = true;
    const _0x2cdc6f = "[JP Anti-Inject BG]";
    function _0x4cc767(_0x3ad849, _0x5368f0) {
      if ("function" != typeof _0x3ad849) {
        return false;
      }
      try {
        const _0x3741e0 = Function.prototype.toString.call(_0x3ad849);
        return _0x3741e0.includes("[native code]") && _0x3741e0.includes(_0x5368f0);
      } catch (_0x7ea567) {
        {
          return false;
        }
      }
    }
    function _0x17a04f() {
      const _0x2154fc = [];
      if (_0x4cc767(_0x5e51ac.fetch, "fetch") || _0x2154fc.push("fetch"), _0x4cc767(_0x5e51ac.Request, "Request") || _0x2154fc.push("Request"), _0x4cc767(_0x5e51ac.Response, "Response") || _0x2154fc.push("Response"), _0x4cc767(_0x5e51ac.Headers, "Headers") || _0x2154fc.push("Headers"), _0x4cc767(_0x5e51ac.Function, "Function") || _0x2154fc.push("Function"), _0x4cc767(_0x5e51ac.eval, "eval") || _0x2154fc.push("eval"), _0x2154fc.length) {
        try {
          _0x5e51ac.fetch = _0x5e51ac.fetch;
          _0x5e51ac.Request = _0x5e51ac.Request;
          _0x5e51ac.Response = _0x5e51ac.Response;
          _0x5e51ac.Headers = _0x5e51ac.Headers;
          _0x5e51ac.Function = _0x5e51ac.Function;
          _0x5e51ac.eval = _0x5e51ac.eval;
          console.warn(_0x2cdc6f + " Detected and restored hooked APIs:", _0x2154fc);
        } catch (_0x442553) {
          console.warn(_0x2cdc6f + " Detected hooked APIs but failed to restore all", {
            suspects: _0x2154fc,
            err: _0x442553
          });
        }
      }
    }
    _0x17a04f();
    setInterval(_0x17a04f, 2000);
  })();
  importScripts("libs/logger.js", "libs/notifier.js", "libs/scheduler.js");
  const _0x23987d = "JP_FILL";
  const _0x754c48 = "JP_GET_CONFIG";
  const _0x361250 = "JP_SET_CONFIG";
  const _0x38e068 = "JP_RUN_AT";
  const _0x51b609 = "JP_OPEN_OPTIONS";
  const _0x47a7e4 = "JP_OCR_RECOGNIZE";
  const _0x390ff0 = "JP_AUTH_VERIFY";
  const _0x5d25ef = "JP_AUTH_CHECK";
  const _0x171968 = "JP_AUTH_GET";
  const _0x47126f = "JP_AUTH_CLEAR";
  const _0xe27f18 = "JP_CARD_EXPIRE_DATE";
  const _0x4e392e = "JP_MULTI_OPEN_CREATE_WINDOW";
  const _0x2489e6 = "JP_MULTI_OPEN_CLOSE_WINDOW";
  const _0x58e90d = "JP_MULTI_OPEN_QUERY_TABS";
  const _0x54e0af = "JP_MULTI_OPEN_SEND_MESSAGE";
  const _0x24252d = "JP_MULTI_OPEN_FOCUS_WINDOW";
  const _0x3da1ee = "JP_WS_CONNECT";
  const _0x4c7935 = "JP_WS_SEND";
  const _0x1db686 = "JP_WS_CLOSE";
  const _0x442079 = "JP_CARD_AUTH_WS_CONNECT";
  const _0x203a30 = "JP_CARD_AUTH_WS_SEND";
  const _0x47ee07 = "JP_CARD_AUTH_WS_CLOSE";
  const _0x4cd19f = "http://103.39.64.121:8080";
  const _0xd55f9c = 3600000;
  const _0x392b7b = 259200000;
  const _0x321ea1 = 259200000;
  const _0x166cdf = 3;
  const _0x466b67 = new Map();
  let _0x52a9a7 = {
    lastCheckTime: 0,
    lastCheckResult: null,
    offlineRetries: 0,
    expireWarningSent: false
  };
  const _0x219082 = {
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
  async function _0x537e0d() {
    {
      const {
        jpConfig: _0x33e20c
      } = await chrome.storage.local.get(["jpConfig"]);
      return {
        ..._0x219082,
        ...(_0x33e20c || {})
      };
    }
  }
  async function _0x1b43fa() {
    const {
      jpMachineCode: _0x4a9ef2
    } = await chrome.storage.local.get(["jpMachineCode"]);
    if (_0x4a9ef2) {
      return _0x4a9ef2;
    }
    const _0x30dcbf = new Uint8Array(16);
    crypto.getRandomValues(_0x30dcbf);
    const _0x3ed4d2 = Array.from(_0x30dcbf, _0x938bf5 => _0x938bf5.toString(16).padStart(2, "0")).join("").toUpperCase();
    await chrome.storage.local.set({
      jpMachineCode: _0x3ed4d2
    });
    return _0x3ed4d2;
  }
  async function _0x277720() {
    const {
      jpAuth: _0x57f5f6
    } = await chrome.storage.local.get(["jpAuth"]);
    if (!_0x57f5f6) {
      return null;
    }
    if (!_0x57f5f6.savedAt) {
      const _0x8dfc88 = {
        ..._0x57f5f6,
        savedAt: Date.now()
      };
      await chrome.storage.local.set({
        jpAuth: _0x8dfc88
      });
      return _0x8dfc88;
    }
    return Date.now() - _0x57f5f6.savedAt >= _0x321ea1 ? (await _0x3c537e(), null) : _0x57f5f6;
  }
  async function _0x4fbbd7(_0x243aa2) {
    {
      const _0x42dfca = {
        ..._0x243aa2,
        savedAt: Date.now()
      };
      await chrome.storage.local.set({
        jpAuth: _0x42dfca
      });
    }
  }
  async function _0x3c537e() {
    await chrome.storage.local.remove(["jpAuth"]);
  }
  async function _0x20eb1b(_0x30f867, _0x21cc08 = false) {
    {
      const _0x47e820 = Date.now();
      if (!_0x21cc08 && _0x52a9a7.lastCheckTime > 0 && _0x47e820 - _0x52a9a7.lastCheckTime < _0xd55f9c && _0x52a9a7.lastCheckResult) {
        console.log("[JP Background] 使用认证缓存，距上次检查:", (_0x47e820 - _0x52a9a7.lastCheckTime) / 1000, "秒");
        return _0x52a9a7.lastCheckResult;
      }
      const _0x76e7e5 = await _0x1b43fa();
      try {
        const _0x2fab0b = await fetch(_0x4cd19f + "/api/v1/cards/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            cardCode: _0x30f867,
            machineCode: _0x76e7e5
          }),
          timeout: 5000
        });
        if (!_0x2fab0b.ok) {
          throw new Error("服务器响应错误: " + _0x2fab0b.status);
        }
        const _0x3c6ebc = await _0x2fab0b.json();
        if (console.log("[JP Background] 检查绑定响应:", _0x3c6ebc), 200 !== _0x3c6ebc.code) {
          _0x52a9a7.lastCheckTime = _0x47e820;
          _0x52a9a7.lastCheckResult = null;
          _0x52a9a7.offlineRetries = 0;
          return null;
        }
        if (_0x52a9a7.lastCheckTime = _0x47e820, _0x52a9a7.lastCheckResult = _0x3c6ebc.data, _0x52a9a7.offlineRetries = 0, _0x3c6ebc.data && _0x3c6ebc.data.expireDate) {
          const _0x52f5c4 = (new Date(_0x3c6ebc.data.expireDate).getTime() - _0x47e820) / 86400000;
          _0x52f5c4 <= 7 && _0x52f5c4 > 0 && !_0x52a9a7.expireWarningSent && (chrome.notifications.create({
            type: "basic",
            iconUrl: "public/eagle.svg",
            title: "金鹏鸟助手 - 卡密即将过期",
            message: "您的卡密将在 " + Math.ceil(_0x52f5c4) + " 天后过期，请及时续费。",
            priority: 2
          }), _0x52a9a7.expireWarningSent = true);
        }
        return _0x3c6ebc.data;
      } catch (_0x509798) {
        if (console.error("[JP Background] 检查绑定失败:", _0x509798), _0x52a9a7.offlineRetries++, _0x52a9a7.offlineRetries >= _0x166cdf) {
          throw console.warn("[JP Background] 离线重试次数超限，清除认证缓存"), _0x52a9a7.lastCheckResult = null, new Error("网络连接失败次数过多，请检查网络后重新认证");
        }
        if (_0x52a9a7.lastCheckResult && _0x52a9a7.lastCheckTime > 0 && _0x47e820 - _0x52a9a7.lastCheckTime < _0x392b7b) {
          console.log("[JP Background] 网络错误，使用宽限期内的认证缓存");
          return _0x52a9a7.lastCheckResult;
        }
        throw _0x509798;
      }
    }
  }
  async function _0x47551c(_0x17ae91) {
    const [_0x5889b3] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    _0x5889b3 && _0x5889b3.id && (await chrome.tabs.sendMessage(_0x5889b3.id, _0x17ae91).catch(() => {}));
  }
  const _0x271581 = new Map();
  const _0x985cff = new Map();
  chrome.runtime.onMessage.addListener((_0x41e68e, _0x43d467, _0x4aa894) => ((async () => {
    {
      switch (_0x41e68e?.["type"]) {
        case _0x754c48:
          _0x4aa894(await _0x537e0d());
          break;
        case _0x361250:
          {
            {
              const _0x2f1bcf = await async function (_0x265718) {
                const _0x1a5bd5 = {
                  ...(await _0x537e0d()),
                  ..._0x265718
                };
                await chrome.storage.local.set({
                  jpConfig: _0x1a5bd5
                });
                return _0x1a5bd5;
              }(_0x41e68e.payload || {});
              _0x4aa894(_0x2f1bcf);
              break;
            }
          }
        case "GET_MACHINE_CODE":
          try {
            const _0x4fdf8a = await _0x1b43fa();
            _0x4aa894({
              machineCode: _0x4fdf8a
            });
          } catch (_0x11c3b7) {
            _0x4aa894({
              error: _0x11c3b7.message
            });
          }
          break;
        case _0x23987d:
          try {
            const _0x242921 = await _0x277720();
            if (!_0x242921 || !_0x242921.cardCode) {
              _0x4aa894({
                ok: false,
                error: "未认证，请先绑定卡密"
              });
              break;
            }
            const _0x54126e = await _0x20eb1b(_0x242921.cardCode, true);
            if (!_0x54126e || !_0x54126e.valid) {
              await _0x3c537e();
              _0x4aa894({
                ok: false,
                error: "认证已失效，请重新验证卡密"
              });
              break;
            }
            if (_0x54126e.expireDate && new Date(_0x54126e.expireDate).getTime() < Date.now()) {
              await _0x3c537e();
              _0x4aa894({
                ok: false,
                error: "卡密已过期，请重新购买"
              });
              break;
            }
          } catch (_0x3bdcba) {
            if (!(_0x52a9a7.lastCheckResult && _0x52a9a7.lastCheckTime > 0)) {
              _0x4aa894({
                ok: false,
                error: "认证验证失败：" + _0x3bdcba.message
              });
              break;
            }
            {
              const _0x9138d2 = Date.now() - _0x52a9a7.lastCheckTime;
              if (_0x9138d2 >= _0x392b7b) {
                _0x4aa894({
                  ok: false,
                  error: "无法验证认证状态，请检查网络连接"
                });
                break;
              }
              console.warn("[JP Background] 离线模式执行填表操作，缓存年龄:", _0x9138d2 / 1000, "秒");
            }
          }
          await _0x47551c({
            type: _0x23987d,
            payload: _0x41e68e.payload
          });
          _0x4aa894({
            ok: true
          });
          break;
        case _0x38e068:
          {
            const {
              when: _0x555e8a,
              payload: _0x40c2e5
            } = _0x41e68e.payload || {};
            if (!_0x555e8a) {
              _0x4aa894({
                ok: false,
                error: "missing when"
              });
              break;
            }
            const _0xd0344b = new Date(_0x555e8a).getTime();
            const _0x5a83b1 = Date.now();
            const _0x2bf63c = Math.max(0, _0xd0344b - _0x5a83b1);
            Scheduler.setTimeout(async () => {
              await _0x47551c({
                type: _0x23987d,
                payload: _0x40c2e5
              });
            }, _0x2bf63c);
            _0x4aa894({
              ok: true,
              delayMs: _0x2bf63c
            });
            break;
          }
        case _0x51b609:
          chrome.runtime.openOptionsPage();
          _0x4aa894({
            ok: true
          });
          break;
        case _0x47a7e4:
          try {
            const {
              imageBase64: _0x494bf3,
              ocrMode: _0x49f5db
            } = _0x41e68e.payload || {};
            if (!_0x494bf3) {
              {
                _0x4aa894({
                  ok: false,
                  error: "missing imageBase64"
                });
                break;
              }
            }
            const _0x392540 = await async function (_0x21cd6e, _0x1f7827 = "normal") {
              try {
                console.log("[JP Background] 开始调用后端OCR识别接口...", {
                  ocrMode: _0x1f7827
                });
                const _0x5c2c03 = await _0x277720();
                if (!_0x5c2c03 || !_0x5c2c03.cardCode) {
                  throw new Error("未认证，请先绑定卡密");
                }
                const _0x18a533 = await _0x1b43fa();
                const _0x43e709 = {
                  base64Image: _0x21cd6e,
                  cardCode: _0x5c2c03.cardCode,
                  machineCode: _0x18a533,
                  ocrMode: _0x1f7827 || "normal"
                };
                console.log("[JP Background] 发送OCR识别请求:", {
                  cardCode: _0x5c2c03.cardCode,
                  machineCode: _0x18a533,
                  imageSize: _0x21cd6e ? _0x21cd6e.length : 0
                });
                const _0x93135e = await fetch(_0x4cd19f + "/api/v1/captcha/recognize", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(_0x43e709)
                });
                if (!_0x93135e.ok) {
                  let _0x5be058 = "后端OCR API响应错误: " + _0x93135e.status + " " + _0x93135e.statusText;
                  try {
                    const _0x13cef3 = await _0x93135e.json();
                    _0x13cef3.message ? _0x5be058 = _0x13cef3.message : _0x13cef3.msg && (_0x5be058 = _0x13cef3.msg);
                  } catch (_0x1f050b) {
                    const _0x26b650 = await _0x93135e.text();
                    if (_0x26b650) {
                      try {
                        const _0x58956c = JSON.parse(_0x26b650);
                        _0x58956c.message ? _0x5be058 = _0x58956c.message : _0x58956c.msg && (_0x5be058 = _0x58956c.msg);
                      } catch (_0x5b7bf7) {
                        _0x5be058 = _0x26b650 || _0x5be058;
                      }
                    }
                  }
                  throw new Error(_0x5be058);
                }
                const _0x45a18c = await _0x93135e.json();
                if (console.log("[JP Background] 后端OCR API响应:", _0x45a18c), 200 !== _0x45a18c.code) {
                  {
                    const _0x17e205 = _0x45a18c.message || _0x45a18c.msg || "OCR识别失败";
                    throw new Error(_0x17e205);
                  }
                }
                const _0x4c9d4a = _0x45a18c.data;
                if (!_0x4c9d4a) {
                  throw new Error("后端OCR API返回格式异常: data字段为空");
                }
                if (!_0x4c9d4a.success) {
                  const _0xe24ea7 = _0x4c9d4a.message || "OCR识别失败";
                  throw new Error(_0xe24ea7);
                }
                const _0x6b7d3a = _0x4c9d4a.result;
                if (!_0x6b7d3a) {
                  throw new Error("后端OCR API未返回识别结果");
                }
                console.log("[JP Background] 识别到的文字:", _0x6b7d3a);
                const _0x570e0e = _0x4c9d4a.remainingUsage || _0x4c9d4a.remainingNormalUsage || (undefined !== _0x4c9d4a.remainingSenselessUsage ? _0x4c9d4a.remainingSenselessUsage : null);
                console.log("[JP Background] 剩余使用次数:", _0x570e0e);
                return {
                  text: _0x6b7d3a,
                  result: _0x6b7d3a,
                  remainingUsage: _0x570e0e,
                  remainingNormalUsage: _0x4c9d4a.remainingNormalUsage,
                  remainingSenselessUsage: _0x4c9d4a.remainingSenselessUsage
                };
              } catch (_0x5d1dca) {
                throw console.error("[JP Background] 调用后端OCR API失败:", _0x5d1dca), _0x5d1dca;
              }
            }(_0x494bf3, _0x49f5db);
            if ("string" == typeof _0x392540) {
              _0x4aa894({
                ok: true,
                result: _0x392540,
                text: _0x392540
              });
            } else {
              const _0x5e984b = _0x392540.text || _0x392540.result || "";
              _0x4aa894({
                ok: true,
                result: _0x5e984b,
                text: _0x5e984b,
                remainingUsage: _0x392540.remainingUsage
              });
            }
          } catch (_0x5566a5) {
            _0x4aa894({
              ok: false,
              error: _0x5566a5.message
            });
          }
          break;
        case _0x390ff0:
          try {
            const {
              cardCode: _0x10fac6
            } = _0x41e68e.payload || {};
            if (!_0x10fac6) {
              _0x4aa894({
                ok: false,
                error: "请输入卡密"
              });
              break;
            }
            const _0x400763 = await async function (_0x2096ec) {
              {
                const _0x4bbf23 = await _0x1b43fa();
                const _0x504f27 = await fetch(_0x4cd19f + "/api/v1/cards/verify", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    cardCode: _0x2096ec,
                    machineCode: _0x4bbf23
                  })
                });
                if (!_0x504f27.ok) {
                  throw new Error("服务器响应错误: " + _0x504f27.status);
                }
                const _0xcaa3e4 = await _0x504f27.json();
                if (console.log("[JP Background] 卡密验证响应:", _0xcaa3e4), 200 !== _0xcaa3e4.code) {
                  throw new Error(_0xcaa3e4.msg || "验证失败");
                }
                return _0xcaa3e4.data;
              }
            }(_0x10fac6);
            if (_0x400763.valid) {
              const _0x226948 = {
                cardCode: _0x10fac6,
                expireDate: _0x400763.expireDate,
                verifyTime: new Date().toISOString()
              };
              await _0x4fbbd7(_0x226948);
              _0x4aa894({
                ok: true,
                data: _0x226948
              });
            } else {
              _0x4aa894({
                ok: false,
                error: _0x400763.message || "验证失败"
              });
            }
          } catch (_0x2b7a4f) {
            _0x4aa894({
              ok: false,
              error: _0x2b7a4f.message || "验证失败"
            });
          }
          break;
        case _0x5d25ef:
          try {
            {
              const _0x5544c6 = await _0x277720();
              if (!_0x5544c6 || !_0x5544c6.cardCode) {
                _0x4aa894({
                  ok: false,
                  error: "未认证"
                });
                break;
              }
              const _0x24216a = _0x41e68e.payload?.["forceCheck"] || false;
              const _0x1acb46 = await _0x20eb1b(_0x5544c6.cardCode, _0x24216a);
              if (_0x1acb46 && _0x1acb46.valid) {
                if (_0x1acb46.expireDate && new Date(_0x1acb46.expireDate).getTime() < Date.now()) {
                  {
                    await _0x3c537e();
                    _0x52a9a7 = {
                      lastCheckTime: 0,
                      lastCheckResult: null,
                      offlineRetries: 0,
                      expireWarningSent: false
                    };
                    _0x4aa894({
                      ok: false,
                      error: "卡密已过期，请重新购买"
                    });
                    break;
                  }
                }
                _0x5544c6.lastVerifyTime = new Date().toISOString();
                await _0x4fbbd7(_0x5544c6);
                _0x4aa894({
                  ok: true,
                  data: _0x5544c6,
                  fromCache: !_0x24216a && null !== _0x52a9a7.lastCheckResult,
                  cacheAge: _0x24216a ? 0 : (Date.now() - _0x52a9a7.lastCheckTime) / 1000
                });
              } else {
                await _0x3c537e();
                _0x52a9a7 = {
                  lastCheckTime: 0,
                  lastCheckResult: null,
                  offlineRetries: 0,
                  expireWarningSent: false
                };
                _0x4aa894({
                  ok: false,
                  error: "认证已失效，请重新验证"
                });
              }
            }
          } catch (_0x1e0cbe) {
            const _0x2c91f7 = await _0x277720();
            if (_0x2c91f7 && _0x2c91f7.cardCode && _0x52a9a7.lastCheckResult) {
              const _0x915bde = Date.now() - _0x52a9a7.lastCheckTime;
              if (_0x915bde < _0x392b7b) {
                {
                  _0x4aa894({
                    ok: true,
                    data: _0x2c91f7,
                    offline: true,
                    offlineRetries: _0x52a9a7.offlineRetries,
                    maxRetries: _0x166cdf,
                    cacheAge: _0x915bde / 1000
                  });
                  break;
                }
              }
            }
            _0x4aa894({
              ok: false,
              error: _0x1e0cbe.message || "检查认证失败"
            });
          }
          break;
        case _0x171968:
          {
            const _0xb2b9b7 = await _0x277720();
            _0x4aa894({
              ok: !!_0xb2b9b7,
              data: _0xb2b9b7
            });
            break;
          }
        case _0xe27f18:
          try {
            const {
              cardCode: _0x21d011,
              forceCheck: _0x55ca2c
            } = _0x41e68e.payload || {};
            if (!_0x21d011) {
              _0x4aa894({
                ok: false,
                error: "缺少卡密参数"
              });
              break;
            }
            const _0x42d11b = await async function (_0x2eca8f, _0xf4909 = {}) {
              const _0xf064a7 = true === _0xf4909.forceCheck;
              const _0x38e8dc = _0x466b67.get(_0x2eca8f);
              const _0x26ffe1 = Date.now();
              if (!_0xf064a7 && _0x38e8dc && _0x26ffe1 - _0x38e8dc.ts < 259200000) {
                return _0x38e8dc.data;
              }
              const _0x65f465 = await fetch(_0x4cd19f + "/api/v1/cards/" + encodeURIComponent(_0x2eca8f) + "/expire-date", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
              if (!_0x65f465.ok) {
                throw new Error("服务器响应错误: " + _0x65f465.status);
              }
              const _0xbd5e88 = await _0x65f465.json();
              if (console.log("[JP Background] 卡密有效期响应:", _0xbd5e88), 200 !== _0xbd5e88.code) {
                throw new Error(_0xbd5e88.msg || "查询失败");
              }
              _0x466b67.set(_0x2eca8f, {
                data: _0xbd5e88.data,
                ts: _0x26ffe1
              });
              return _0xbd5e88.data;
            }(_0x21d011, {
              forceCheck: _0x55ca2c
            });
            _0x4aa894({
              ok: true,
              data: _0x42d11b
            });
          } catch (_0x2cc967) {
            _0x4aa894({
              ok: false,
              error: _0x2cc967.message || "查询有效期失败"
            });
          }
          break;
        case _0x47126f:
          await _0x3c537e();
          _0x4aa894({
            ok: true
          });
          break;
        case _0x4e392e:
          {
            const {
              url: _0x34a0e9,
              width: _0x151c1e,
              height: _0x276909,
              left: _0x5d49e9,
              top: _0x35fdc2,
              focused: _0x4a7255
            } = _0x41e68e.payload || {};
            if (!_0x34a0e9) {
              _0x4aa894({
                ok: false,
                error: "缺少URL参数"
              });
              break;
            }
            try {
              const _0x13c2bd = {
                url: _0x34a0e9,
                type: "normal",
                width: _0x151c1e || 800,
                height: _0x276909 || 600,
                focused: undefined !== _0x4a7255 && _0x4a7255
              };
              undefined !== _0x5d49e9 && undefined !== _0x35fdc2 && (_0x13c2bd.left = _0x5d49e9, _0x13c2bd.top = _0x35fdc2);
              chrome.windows.create(_0x13c2bd, _0x39fea1 => {
                chrome.runtime.lastError ? (console.error("[JP Background] 创建窗口失败:", chrome.runtime.lastError, "URL:", _0x34a0e9, "Options:", _0x13c2bd), _0x4aa894({
                  ok: false,
                  error: chrome.runtime.lastError.message
                })) : _0x39fea1 && _0x39fea1.id ? (console.log("[JP Background] 窗口创建成功:", _0x39fea1.id, "URL:", _0x34a0e9.substring(0, 100), "Position:", {
                  left: _0x5d49e9,
                  top: _0x35fdc2
                }), _0x4aa894({
                  ok: true,
                  window: _0x39fea1
                })) : (console.error("[JP Background] 窗口创建返回无效对象:", _0x39fea1, "URL:", _0x34a0e9), _0x4aa894({
                  ok: false,
                  error: "窗口创建返回无效对象"
                }));
              });
              return true;
            } catch (_0x212a6f) {
              console.error("[JP Background] 创建窗口异常:", _0x212a6f, "URL:", _0x34a0e9);
              _0x4aa894({
                ok: false,
                error: _0x212a6f.message
              });
            }
            break;
          }
        case _0x24252d:
          try {
            const {
              windowId: _0x504f44
            } = _0x41e68e.payload || {};
            return _0x504f44 ? (chrome.windows.update(_0x504f44, {
              focused: true
            }, _0x1f2837 => {
              chrome.runtime.lastError ? (console.error("[JP Background] 聚焦窗口失败:", chrome.runtime.lastError, "WindowId:", _0x504f44), _0x4aa894({
                ok: false,
                error: chrome.runtime.lastError.message
              })) : _0x1f2837 ? (console.log("[JP Background] 窗口聚焦成功:", _0x504f44), _0x4aa894({
                ok: true,
                window: _0x1f2837
              })) : _0x4aa894({
                ok: false,
                error: "窗口聚焦失败"
              });
            }), true) : void _0x4aa894({
              ok: false,
              error: "缺少窗口ID"
            });
          } catch (_0x365982) {
            console.error("[JP Background] 聚焦窗口异常:", _0x365982);
            _0x4aa894({
              ok: false,
              error: _0x365982.message
            });
          }
          break;
        case _0x2489e6:
          try {
            const {
              windowId: _0x5600a0
            } = _0x41e68e.payload || {};
            return _0x5600a0 ? (chrome.windows.remove(_0x5600a0, () => {
              chrome.runtime.lastError ? _0x4aa894({
                ok: false,
                error: chrome.runtime.lastError.message
              }) : _0x4aa894({
                ok: true
              });
            }), true) : void _0x4aa894({
              ok: false,
              error: "缺少窗口ID"
            });
          } catch (_0x4092c9) {
            _0x4aa894({
              ok: false,
              error: _0x4092c9.message
            });
          }
          break;
        case _0x58e90d:
          try {
            {
              const {
                windowId: _0xe62dc5
              } = _0x41e68e.payload || {};
              return undefined === _0xe62dc5 ? void _0x4aa894({
                ok: false,
                error: "缺少窗口ID"
              }) : (chrome.tabs.query({
                windowId: _0xe62dc5
              }, _0x3f945e => {
                {
                  chrome.runtime.lastError ? _0x4aa894({
                    ok: false,
                    error: chrome.runtime.lastError.message
                  }) : _0x4aa894({
                    ok: true,
                    tabs: _0x3f945e
                  });
                }
              }), true);
            }
          } catch (_0x71f958) {
            _0x4aa894({
              ok: false,
              error: _0x71f958.message
            });
          }
          break;
        case _0x54e0af:
          try {
            const {
              tabId: _0x4f8cdd,
              message: _0x1e1676
            } = _0x41e68e.payload || {};
            return undefined !== _0x4f8cdd && _0x1e1676 ? (chrome.tabs.sendMessage(_0x4f8cdd, _0x1e1676, _0x20d5c6 => {
              chrome.runtime.lastError ? _0x4aa894({
                ok: false,
                error: chrome.runtime.lastError.message
              }) : _0x4aa894({
                ok: true,
                response: _0x20d5c6
              });
            }), true) : void _0x4aa894({
              ok: false,
              error: "缺少标签页ID或消息"
            });
          } catch (_0x55494c) {
            _0x4aa894({
              ok: false,
              error: _0x55494c.message
            });
          }
          break;
        case _0x3da1ee:
          try {
            const {
              url: _0x24e48d,
              tabId: _0x5f1bb2
            } = _0x41e68e.payload || {};
            if (!_0x24e48d) {
              return void _0x4aa894({
                ok: false,
                error: "缺少WebSocket URL"
              });
            }
            const _0x1bb91f = _0x5f1bb2 || _0x43d467?.["tab"]?.["id"];
            const _0x51716d = function (_0x412171) {
              return "tab_" + (_0x412171 || "default");
            }(_0x1bb91f);
            if (_0x271581.has(_0x51716d)) {
              const _0x48f15f = _0x271581.get(_0x51716d);
              _0x48f15f && _0x48f15f.readyState !== WebSocket.CLOSED && _0x48f15f.close();
              _0x271581.delete(_0x51716d);
              _0x985cff.delete(_0x51716d);
            }
            const _0x373938 = new WebSocket(_0x24e48d);
            _0x1bb91f && _0x985cff.set(_0x51716d, _0x1bb91f);
            _0x373938.onopen = () => {
              console.log("[JP Background] WebSocket连接成功:", _0x24e48d);
              const _0x10d821 = _0x985cff.get(_0x51716d);
              _0x10d821 && chrome.tabs.sendMessage(_0x10d821, {
                type: "JP_WS_EVENT",
                event: "open",
                connectionKey: _0x51716d
              }).catch(() => {});
            };
            _0x373938.onmessage = _0x59bd9c => {
              console.log("[JP Background] WebSocket收到消息:", _0x59bd9c.data);
              const _0x20a3dc = _0x985cff.get(_0x51716d);
              _0x20a3dc && chrome.tabs.sendMessage(_0x20a3dc, {
                type: "JP_WS_EVENT",
                event: "message",
                data: _0x59bd9c.data,
                connectionKey: _0x51716d
              }).catch(() => {});
            };
            _0x373938.onerror = _0x37e587 => {
              const _0x3a4ea7 = _0x37e587 instanceof Error ? _0x37e587.message : _0x37e587?.["message"] || _0x37e587?.["type"] || "WebSocket连接错误";
              const _0x45d2f2 = _0x985cff.get(_0x51716d);
              _0x45d2f2 && chrome.tabs.sendMessage(_0x45d2f2, {
                type: "JP_WS_EVENT",
                event: "error",
                error: _0x3a4ea7,
                connectionKey: _0x51716d
              }).catch(() => {});
            };
            _0x373938.onclose = _0x58802b => {
              {
                console.log("[JP Background] WebSocket连接已关闭:", {
                  code: _0x58802b.code,
                  reason: _0x58802b.reason,
                  wasClean: _0x58802b.wasClean
                });
                const _0x5ad5ac = _0x985cff.get(_0x51716d);
                _0x5ad5ac && chrome.tabs.sendMessage(_0x5ad5ac, {
                  type: "JP_WS_EVENT",
                  event: "close",
                  code: _0x58802b.code,
                  reason: _0x58802b.reason,
                  wasClean: _0x58802b.wasClean,
                  connectionKey: _0x51716d
                }).catch(() => {});
                _0x271581.delete(_0x51716d);
                _0x985cff.delete(_0x51716d);
              }
            };
            _0x271581.set(_0x51716d, _0x373938);
            _0x4aa894({
              ok: true,
              connectionKey: _0x51716d
            });
          } catch (_0x438fdc) {
            console.error("[JP Background] WebSocket连接失败:", _0x438fdc);
            _0x4aa894({
              ok: false,
              error: _0x438fdc.message
            });
          }
          break;
        case _0x4c7935:
          try {
            {
              const {
                connectionKey: _0x49bf38,
                message: _0x410504
              } = _0x41e68e.payload || {};
              if (!_0x49bf38 || !_0x410504) {
                return void _0x4aa894({
                  ok: false,
                  error: "缺少连接标识或消息"
                });
              }
              const _0x405a11 = _0x271581.get(_0x49bf38);
              if (!_0x405a11) {
                return void _0x4aa894({
                  ok: false,
                  error: "WebSocket连接不存在"
                });
              }
              if (_0x405a11.readyState !== WebSocket.OPEN) {
                return void _0x4aa894({
                  ok: false,
                  error: "WebSocket连接未打开"
                });
              }
              _0x405a11.send("string" == typeof _0x410504 ? _0x410504 : JSON.stringify(_0x410504));
              _0x4aa894({
                ok: true
              });
            }
          } catch (_0x47ed05) {
            console.error("[JP Background] WebSocket发送消息失败:", _0x47ed05);
            _0x4aa894({
              ok: false,
              error: _0x47ed05.message
            });
          }
          break;
        case _0x1db686:
          try {
            {
              const {
                connectionKey: _0x58d0bd
              } = _0x41e68e.payload || {};
              if (!_0x58d0bd) {
                return void _0x4aa894({
                  ok: false,
                  error: "缺少连接标识"
                });
              }
              const _0x4c689c = _0x271581.get(_0x58d0bd);
              _0x4c689c ? (_0x4c689c.close(), _0x271581.delete(_0x58d0bd), _0x4aa894({
                ok: true
              })) : _0x4aa894({
                ok: false,
                error: "WebSocket连接不存在"
              });
            }
          } catch (_0x451f98) {
            {
              console.error("[JP Background] WebSocket关闭失败:", _0x451f98);
              _0x4aa894({
                ok: false,
                error: _0x451f98.message
              });
            }
          }
          break;
        case _0x442079:
          try {
            const {
              url: _0x244fdb
            } = _0x41e68e.payload || {};
            if (!_0x244fdb) {
              return void _0x4aa894({
                ok: false,
                error: "缺少WebSocket URL"
              });
            }
            const _0x43d280 = "card_auth_ws";
            if (_0x271581.has(_0x43d280)) {
              const _0x35b437 = _0x271581.get(_0x43d280);
              _0x35b437 && _0x35b437.readyState !== WebSocket.CLOSED && _0x35b437.close();
              _0x271581.delete(_0x43d280);
            }
            const _0x2569d6 = new WebSocket(_0x244fdb);
            _0x2569d6.onopen = () => {
              console.log("[JP Background] 卡密认证WebSocket连接成功:", _0x244fdb);
              chrome.tabs.query({}, _0x3dfdd0 => {
                _0x3dfdd0.forEach(_0x34d837 => {
                  {
                    chrome.tabs.sendMessage(_0x34d837.id, {
                      type: "JP_CARD_AUTH_WS_EVENT",
                      event: "open",
                      connectionKey: _0x43d280
                    }).catch(() => {});
                  }
                });
              });
            };
            _0x2569d6.onmessage = _0x37d49e => {
              console.log("[JP Background] 卡密认证WebSocket收到消息:", _0x37d49e.data);
              chrome.tabs.query({}, _0x542d32 => {
                _0x542d32.forEach(_0x53e3d9 => {
                  chrome.tabs.sendMessage(_0x53e3d9.id, {
                    type: "JP_CARD_AUTH_WS_EVENT",
                    event: "message",
                    data: _0x37d49e.data,
                    connectionKey: _0x43d280
                  }).catch(() => {});
                });
              });
            };
            _0x2569d6.onerror = _0x94bb60 => {
              const _0x544c5a = _0x94bb60 instanceof Error ? _0x94bb60.message : _0x94bb60?.["message"] || _0x94bb60?.["type"] || "卡密认证WebSocket连接错误";
              chrome.tabs.query({}, _0x5dadb8 => {
                _0x5dadb8.forEach(_0x1fbc27 => {
                  chrome.tabs.sendMessage(_0x1fbc27.id, {
                    type: "JP_CARD_AUTH_WS_EVENT",
                    event: "error",
                    error: _0x544c5a,
                    connectionKey: _0x43d280
                  }).catch(() => {});
                });
              });
            };
            _0x2569d6.onclose = _0x8ba42b => {
              console.log("[JP Background] 卡密认证WebSocket连接已关闭:", {
                code: _0x8ba42b.code,
                reason: _0x8ba42b.reason,
                wasClean: _0x8ba42b.wasClean
              });
              chrome.tabs.query({}, _0x38bad6 => {
                _0x38bad6.forEach(_0x1a1c07 => {
                  chrome.tabs.sendMessage(_0x1a1c07.id, {
                    type: "JP_CARD_AUTH_WS_EVENT",
                    event: "close",
                    code: _0x8ba42b.code,
                    reason: _0x8ba42b.reason,
                    wasClean: _0x8ba42b.wasClean,
                    connectionKey: _0x43d280
                  }).catch(() => {});
                });
              });
              _0x271581.delete(_0x43d280);
            };
            _0x271581.set(_0x43d280, _0x2569d6);
            _0x4aa894({
              ok: true,
              connectionKey: _0x43d280
            });
          } catch (_0x2b858c) {
            console.error("[JP Background] 卡密认证WebSocket连接失败:", _0x2b858c);
            _0x4aa894({
              ok: false,
              error: _0x2b858c.message
            });
          }
          break;
        case _0x203a30:
          try {
            {
              const {
                message: _0x3009be
              } = _0x41e68e.payload || {};
              if (!_0x3009be) {
                return void _0x4aa894({
                  ok: false,
                  error: "缺少消息"
                });
              }
              const _0x4319f0 = "card_auth_ws";
              const _0x15735f = _0x271581.get(_0x4319f0);
              if (!_0x15735f) {
                return void _0x4aa894({
                  ok: false,
                  error: "卡密认证WebSocket连接不存在"
                });
              }
              if (_0x15735f.readyState !== WebSocket.OPEN) {
                return void _0x4aa894({
                  ok: false,
                  error: "卡密认证WebSocket连接未打开"
                });
              }
              _0x15735f.send("string" == typeof _0x3009be ? _0x3009be : JSON.stringify(_0x3009be));
              _0x4aa894({
                ok: true
              });
            }
          } catch (_0x28a01c) {
            console.error("[JP Background] 卡密认证WebSocket发送消息失败:", _0x28a01c);
            _0x4aa894({
              ok: false,
              error: _0x28a01c.message
            });
          }
          break;
        case _0x47ee07:
          try {
            const _0x5259cd = "card_auth_ws";
            const _0x148536 = _0x271581.get(_0x5259cd);
            _0x148536 ? (_0x148536.close(), _0x271581.delete(_0x5259cd), _0x4aa894({
              ok: true
            })) : _0x4aa894({
              ok: false,
              error: "卡密认证WebSocket连接不存在"
            });
          } catch (_0x2c38d6) {
            console.error("[JP Background] 卡密认证WebSocket关闭失败:", _0x2c38d6);
            _0x4aa894({
              ok: false,
              error: _0x2c38d6.message
            });
          }
      }
    }
  })(), true));
  chrome.runtime.onInstalled.addListener(async () => {
    const _0x268e5a = await _0x537e0d();
    Logger.info("金鹏鸟助手已安装/更新", _0x268e5a);
    chrome.alarms.create("periodicAuthCheck", {
      periodInMinutes: _0xd55f9c / 60000
    });
  });
  chrome.alarms.onAlarm.addListener(async _0x26ad42 => {
    if ("periodicAuthCheck" === _0x26ad42.name) {
      console.log("[JP Background] 执行定期认证检查...");
      const _0x18df3b = await _0x277720();
      if (!_0x18df3b || !_0x18df3b.cardCode) {
        return void console.log("[JP Background] 未绑定卡密，跳过定期检查");
      }
      try {
        {
          const _0x35c6da = await _0x20eb1b(_0x18df3b.cardCode, true);
          _0x35c6da && _0x35c6da.valid ? _0x35c6da.expireDate && (new Date(_0x35c6da.expireDate).getTime() < Date.now() ? (await _0x3c537e(), _0x52a9a7 = {
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
          }), console.warn("[JP Background] 定期检查：卡密已过期")) : console.log("[JP Background] 定期检查：认证有效")) : (await _0x3c537e(), _0x52a9a7 = {
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
        }
      } catch (_0x58eb9f) {
        {
          console.error("[JP Background] 定期认证检查失败:", _0x58eb9f);
        }
      }
    }
  });
})();