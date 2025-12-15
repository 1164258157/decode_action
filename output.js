//Mon Dec 15 2025 04:30:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const API_KEY = String.fromCharCode(54, 56, 50, 52, 99, 50, 50, 50, 49, 56, 54, 52, 102, 48, 55, 57, 53, 54, 48, 49, 54, 54, 56, 98, 56, 48, 102, 48, 48, 99, 99, 98);
const VERIFY_URL = String.fromCharCode(104, 116, 116, 112, 58, 47, 47, 97, 117, 116, 104, 46, 113, 111, 114, 97, 46, 116, 111, 112, 47, 97, 112, 105, 47, 118, 101, 114, 105, 102, 121, 46, 112, 104, 112);
const pendingVerifyMap = new Map();
function verifyLicenseOnce(_0x1a36c2) {
  if (pendingVerifyMap.has(_0x1a36c2)) {
    return pendingVerifyMap.get(_0x1a36c2);
  }
  const _0x36eb79 = getDeviceId().then(_0x508897 => {
    const _0xcdf94d = VERIFY_URL + "?api_key=" + encodeURIComponent(API_KEY) + "&card_key=" + encodeURIComponent(_0x1a36c2) + "&device_id=" + encodeURIComponent(_0x508897);
    return fetch(_0xcdf94d, {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY
      }
    });
  }).then(_0x5f25df => _0x5f25df.json()).finally(() => {
    setTimeout(() => pendingVerifyMap.delete(_0x1a36c2), 2000);
  });
  pendingVerifyMap.set(_0x1a36c2, _0x36eb79);
  return _0x36eb79;
}
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, _0x161d5b => {
    const _0xcdc17f = Math.random() * 16 | 0;
    const _0x2bc557 = _0x161d5b === "x" ? _0xcdc17f : _0xcdc17f & 3 | 8;
    return _0x2bc557.toString(16);
  });
}
function getDeviceId() {
  return new Promise(_0x12eb06 => {
    if (!chrome?.["storage"]?.["local"]) {
      return _0x12eb06(generateUUID());
    }
    chrome.storage.local.get(["deviceId"], _0x19127d => {
      if (_0x19127d.deviceId) {
        _0x12eb06(_0x19127d.deviceId);
      } else {
        const _0xc622ae = generateUUID();
        chrome.storage.local.set({
          deviceId: _0xc622ae
        }, () => {
          _0x12eb06(_0xc622ae);
        });
      }
    });
  });
}
chrome.runtime.onMessage.addListener((_0x17a32c, _0x58f364, _0x34d3b9) => {
  if (!_0x17a32c || !_0x17a32c.type) {
    return;
  }
  if (_0x17a32c.type === "VERIFY_LICENSE") {
    const _0x17a55c = _0x17a32c.card_key;
    if (!_0x17a55c) {
      _0x34d3b9?.({
        ok: false,
        error: "卡密不能为空"
      });
      return true;
    }
    verifyLicenseOnce(_0x17a55c).then(_0xb90d7e => {
      _0x34d3b9?.({
        ok: true,
        data: _0xb90d7e
      });
    }).catch(_0x512009 => {
      _0x34d3b9?.({
        ok: false,
        error: String(_0x512009)
      });
    });
    return true;
  }
  if (_0x17a32c.type === "OPEN_LICENSE_POPUP") {
    try {
      if (chrome?.["action"]?.["openPopup"]) {
        chrome.action.openPopup(() => {
          chrome.runtime.lastError ? (console.warn("尝试打开扩展弹窗失败：", chrome.runtime.lastError.message), _0x34d3b9?.({
            ok: false,
            error: chrome.runtime.lastError.message
          })) : _0x34d3b9?.({
            ok: true
          });
        });
        return true;
      }
      _0x34d3b9?.({
        ok: false,
        error: "当前环境不支持自动打开扩展弹窗"
      });
      return false;
    } catch (_0x5734a5) {
      _0x34d3b9?.({
        ok: false,
        error: String(_0x5734a5)
      });
      return false;
    }
  }
});