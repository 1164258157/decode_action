//Mon Dec 15 2025 04:29:05 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function observeCaptchaChanges() {
  if (captchaObserver) {
    return;
  }
  const _0x1f062c = document.body;
  if (!_0x1f062c) {
    return;
  }
  const _0x2534a8 = _0x165d7b => {
    if (!_0x165d7b || _0x165d7b.nodeType !== 1 || typeof _0x165d7b.matches !== "function") {
      return false;
    }
    if (_0x165d7b.matches(".verify-code-container img, .verify-code-container canvas, img.el-image__inner")) {
      return true;
    }
    if (_0x165d7b.closest && _0x165d7b.closest(".verify-code-container")) {
      return _0x165d7b.matches("img, canvas");
    }
    return false;
  };
  ensureCaptchaLoadListener();
  captchaObserver = new MutationObserver(_0x299230 => {
    const _0x3b937d = _0x299230.some(_0x179311 => {
      if (_0x179311.type === "attributes") {
        const _0x4fd7a6 = _0x179311.target;
        if (!_0x4fd7a6 || typeof _0x4fd7a6.matches !== "function") {
          return false;
        }
        if (_0x2534a8(_0x4fd7a6)) {
          return true;
        }
        const _0x336c50 = _0x179311.attributeName || "";
        return _0x336c50 === "src" || _0x336c50 === "data-src";
      }
      if (_0x179311.type === "childList") {
        const _0x189cd8 = Array.from(_0x179311.addedNodes || []).some(_0x490f97 => _0x2534a8(_0x490f97));
        const _0x2b30b0 = Array.from(_0x179311.removedNodes || []).some(_0x11014f => _0x2534a8(_0x11014f));
        return _0x189cd8 || _0x2b30b0;
      }
      return false;
    });
    if (!_0x3b937d) {
      return;
    }
    ensureCaptchaLoadListener();
    handleCaptchaChange("mutation");
  });
  captchaObserver.observe(_0x1f062c, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src", "data-src", "style", "class"]
  });
}
function handleCaptchaChange(_0x1e14ba = "unknown") {
  const _0x454a7c = getCurrentCaptchaSignature(captchaLoadTarget);
  if (!_0x454a7c) {
    return;
  }
  if (!captchaObserverPrimed) {
    captchaObserverPrimed = true;
    lastCaptchaSignature = _0x454a7c;
    return;
  }
  if (_0x454a7c === lastCaptchaSignature) {
    return;
  }
  lastCaptchaSignature = _0x454a7c;
  triggerOcrRecognition({
    reason: _0x1e14ba,
    force: true
  });
}
function ensureCaptchaLoadListener() {
  const _0x96ebb8 = findCaptchaImage();
  if (!_0x96ebb8) {
    captchaLoadTarget && captchaLoadHandler && captchaLoadTarget.removeEventListener("load", captchaLoadHandler, true);
    captchaLoadTarget = null;
    captchaLoadHandler = null;
    return;
  }
  if (captchaLoadTarget === _0x96ebb8) {
    return;
  }
  captchaLoadTarget && captchaLoadHandler && captchaLoadTarget.removeEventListener("load", captchaLoadHandler, true);
  captchaLoadTarget = _0x96ebb8;
  captchaLoadHandler = () => {
    handleCaptchaChange("image-load");
  };
  _0x96ebb8.addEventListener("load", captchaLoadHandler, true);
}
function getCurrentCaptchaSignature(_0x28ac3f = null) {
  const _0x34ee2c = _0x28ac3f || findCaptchaImage();
  if (!_0x34ee2c) {
    return "";
  }
  if (_0x34ee2c.tagName === "SCRIPT" && _0x34ee2c.dataset?.["sxCaptchaBase64"]) {
    return _0x34ee2c.dataset.sxCaptchaBase64.slice(0, 200);
  }
  if (_0x34ee2c.tagName === "CANVAS") {
    if (typeof _0x34ee2c.toDataURL === "function") {
      try {
        return _0x34ee2c.toDataURL("image/png");
      } catch (_0x1ed560) {}
    }
    return _0x34ee2c.outerHTML || "canvas";
  }
  return _0x34ee2c.getAttribute("src") || _0x34ee2c.getAttribute("data-src") || _0x34ee2c.dataset?.["src"] || _0x34ee2c.currentSrc || _0x34ee2c.outerHTML || "";
}
let floatingWindow = null;
let isDragging = false;
let dragOffset = {
  x: 0,
  y: 0
};
let personsData = [];
let ocrListenerRegistered = false;
let pendingOcrResolver = null;
let captchaObserver = null;
let captchaObserverPrimed = false;
let lastCaptchaSignature = "";
let captchaLoadTarget = null;
let captchaLoadHandler = null;
function isSupportedBankPage() {
  try {
    const _0x4d9e4b = window.shuixian?.["detect"]?.();
    return !!_0x4d9e4b;
  } catch (_0x19c12d) {
    console.warn("检测银行页面时出错：", _0x19c12d);
    return false;
  }
}
function loadPersonsData() {
  return new Promise(_0x2fc1be => {
    if (!chrome?.["storage"]?.["local"]) {
      _0x2fc1be([]);
      return;
    }
    chrome.storage.local.get(["userSettings"], _0x367011 => {
      const _0x359c9b = _0x367011.userSettings;
      if (!_0x359c9b) {
        _0x2fc1be([]);
        return;
      }
      try {
        const _0x41d0e1 = typeof _0x359c9b === "string" ? JSON.parse(_0x359c9b) : _0x359c9b;
        if (Array.isArray(_0x41d0e1)) {
          _0x2fc1be(_0x41d0e1);
        } else {
          typeof _0x41d0e1 === "object" && _0x41d0e1.name ? _0x2fc1be([_0x41d0e1]) : _0x2fc1be([]);
        }
      } catch (_0x2a6a14) {
        console.error("加载人员数据失败:", _0x2a6a14);
        _0x2fc1be([]);
      }
    });
  });
}
function openLicensePopupFromContent() {
  try {
    if (!chrome?.["runtime"]) {
      return;
    }
    chrome.runtime.sendMessage({
      type: "OPEN_LICENSE_POPUP"
    }, () => {});
  } catch (_0xe9e64f) {
    console.warn("尝试打开插件面板时出错：", _0xe9e64f);
  }
}
function openSettingsPopupFromContent() {
  if (!chrome?.["storage"]?.["local"] || !chrome?.["runtime"]) {
    openLicensePopupFromContent();
    return;
  }
  chrome.storage.local.set({
    __SX_PENDING_VIEW__: "settings"
  }, () => {
    openLicensePopupFromContent();
  });
}
function ensureLicenseThenInitFloatingWindow() {
  if (floatingWindow) {
    return;
  }
  if (!isSupportedBankPage()) {
    return;
  }
  if (!chrome?.["storage"]?.["local"] || !chrome?.["runtime"]) {
    createFloatingWindow();
    return;
  }
  chrome.storage.local.get(["licenseKey"], _0x2466b9 => {
    const _0x2d38c6 = _0x2466b9.licenseKey;
    if (!_0x2d38c6) {
      showSxToast("请先在插件中输入卡密后再使用自动填表功能。", "warning");
      openLicensePopupFromContent();
      return;
    }
    chrome.runtime.sendMessage({
      type: "VERIFY_LICENSE",
      card_key: _0x2d38c6
    }, _0x2fed58 => {
      if (chrome.runtime.lastError) {
        console.warn("卡密验证请求失败：", chrome.runtime.lastError.message);
        showSxToast("卡密验证失败，请稍后重试或重新输入卡密。", "error");
        openLicensePopupFromContent();
        return;
      }
      if (!_0x2fed58 || !_0x2fed58.ok) {
        showSxToast("卡密验证失败，请在插件中重新输入有效卡密后再试。", "error");
        openLicensePopupFromContent();
        return;
      }
      const _0x3f36d3 = _0x2fed58.data || {};
      if (_0x3f36d3.code === 0 || _0x3f36d3.success === true) {
        createFloatingWindow();
      } else {
        const _0x461d52 = _0x3f36d3.message || (_0x3f36d3.msg ? _0x3f36d3.msg : JSON.stringify(_0x3f36d3));
        showSxToast("卡密已失效或无效，请在插件中重新输入：" + (_0x461d52 || "未知原因"), "error", 4000);
        openLicensePopupFromContent();
      }
    });
  });
}
(function autoInitFloatingWindow() {
  const _0xbf44f2 = () => {
    ensureLicenseThenInitFloatingWindow();
  };
  document.readyState === "complete" || document.readyState === "interactive" ? _0xbf44f2() : window.addEventListener("DOMContentLoaded", _0xbf44f2, {
    once: true
  });
})();
function ensureOcrListener() {
  if (ocrListenerRegistered) {
    return;
  }
  window.addEventListener("message", handleOcrResultEvent);
  ocrListenerRegistered = true;
}
function handleOcrResultEvent(_0x3324bb) {
  if (_0x3324bb.source !== window) {
    return;
  }
  const _0x14b2d9 = _0x3324bb.data;
  if (!_0x14b2d9 || _0x14b2d9.type !== "SX_OCR_RESULT") {
    return;
  }
  const {
    text: _0x2b5704,
    error: _0x2a3187
  } = _0x14b2d9;
  if (_0x2a3187) {
    console.warn("[SX OCR] 识别失败：", _0x2a3187);
    showSxToast("验证码识别失败：" + _0x2a3187, "warning");
    pendingOcrResolver && (pendingOcrResolver({
      success: false,
      error: _0x2a3187
    }), pendingOcrResolver = null);
    return;
  }
  if (!_0x2b5704) {
    console.warn("[SX OCR] 收到空的 OCR 结果");
    return;
  }
  const _0x42e650 = findVerifyCodeInput();
  if (!_0x42e650) {
    console.warn("[SX OCR] 未找到验证码输入框，无法写入结果");
    showSxToast("识别成功，但未找到验证码输入框", "warning");
    pendingOcrResolver && (pendingOcrResolver({
      success: false,
      error: "未找到验证码输入框"
    }), pendingOcrResolver = null);
    return;
  }
  _0x42e650.value = _0x2b5704;
  _0x42e650.dispatchEvent(new Event("input", {
    bubbles: true
  }));
  _0x42e650.dispatchEvent(new Event("change", {
    bubbles: true
  }));
  showSxToast("验证码已自动填入：" + _0x2b5704, "success", 1800);
  pendingOcrResolver && (pendingOcrResolver({
    success: true,
    text: _0x2b5704
  }), pendingOcrResolver = null);
}
function findVerifyCodeInput() {
  const _0x2b3365 = (_0x5b0367 = "") => /图形|图片|图像|image/i.test(_0x5b0367) && /验证码|校验码|附加码|captcha/i.test(_0x5b0367);
  const _0x40bc7f = (_0x2649ab = "") => /短信|手机|动态|手机验证码|短信验证码/.test(_0x2649ab);
  const _0x42c9d9 = ["input[placeholder*=\"图形验证码\"]", "input[placeholder*=\"图形校验码\"]", "input[placeholder*=\"图片验证码\"]", "input[placeholder*=\"附加码\"]", "input[data-type*=\"imageCode\"]", "input[data-type*=\"imgCode\"]"];
  for (const _0x4a879f of _0x42c9d9) {
    const _0x3f2c02 = document.querySelector(_0x4a879f);
    if (_0x3f2c02 && !_0x3f2c02.disabled && _0x3f2c02.offsetParent !== null) {
      return _0x3f2c02;
    }
  }
  const _0x14b9ec = Array.from(document.querySelectorAll(".el-form-item"));
  let _0x3639a5 = null;
  for (const _0x3ed04e of _0x14b9ec) {
    const _0x32c66f = _0x3ed04e.querySelector(".el-form-item__label");
    if (!_0x32c66f) {
      continue;
    }
    const _0x4a9eea = (_0x32c66f.textContent || "").trim();
    if (!_0x4a9eea) {
      continue;
    }
    if (_0x40bc7f(_0x4a9eea)) {
      continue;
    }
    if (!/验证码|校验码|附加码/.test(_0x4a9eea)) {
      continue;
    }
    const _0x15e8cd = _0x3ed04e.querySelector("input.el-input__inner") || _0x3ed04e.querySelector("input");
    if (!_0x15e8cd || _0x15e8cd.disabled || _0x15e8cd.offsetParent === null) {
      continue;
    }
    if (_0x2b3365(_0x4a9eea)) {
      return _0x15e8cd;
    }
    !_0x3639a5 && (_0x3639a5 = _0x15e8cd);
  }
  if (_0x3639a5) {
    return _0x3639a5;
  }
  const _0x1e5827 = ["input[name*=\"verifyCode\"]", "input[id*=\"verifyCode\"]", "input[name*=\"captcha\"]", "input[id*=\"captcha\"]", "input[name*=\"vcode\"]", "input[id*=\"vcode\"]", "input[placeholder*=\"验证码\"]", "input[placeholder*=\"附加码\"]"];
  for (const _0x4ce010 of _0x1e5827) {
    const _0x3e93fc = document.querySelector(_0x4ce010);
    if (_0x3e93fc && !_0x3e93fc.disabled && _0x3e93fc.offsetParent !== null && !_0x40bc7f(_0x3e93fc.closest(".el-form-item")?.["querySelector"](".el-form-item__label")?.["textContent"] || "")) {
      return _0x3e93fc;
    }
  }
  return null;
}
async function triggerOcrRecognition(_0x4608a2 = {}) {
  const {
    force = false
  } = _0x4608a2 || {};
  try {
    observeCaptchaChanges();
    const _0x5310ac = findVerifyCodeInput();
    if (!_0x5310ac) {
      return {
        started: false
      };
    }
    if (!force && (_0x5310ac.value || "").trim()) {
      return {
        started: false,
        skipped: true
      };
    }
    const _0x7e4f8b = findCaptchaImage();
    if (!_0x7e4f8b) {
      console.log("[SX OCR] 未找到验证码图片，跳过自动识别");
      return {
        started: false
      };
    }
    ensureCaptchaLoadListener();
    const _0x293cbb = await getImageBase64(_0x7e4f8b);
    if (!_0x293cbb) {
      console.warn("[SX OCR] 无法获取验证码图片");
      showSxToast("无法获取验证码图片，请手动输入", "warning");
      return {
        started: false
      };
    }
    const _0x17f878 = getCurrentCaptchaSignature(_0x7e4f8b);
    if (!captchaObserverPrimed) {
      captchaObserverPrimed = true;
      lastCaptchaSignature = _0x17f878 || "";
    } else {
      _0x17f878 && (lastCaptchaSignature = _0x17f878);
    }
    showSxToast("正在识别验证码...", "info", 1800);
    const _0x156184 = "sx_ocr_" + Date.now() + "_" + Math.random().toString(16).slice(2);
    const _0x26a88e = getOcrConfigForCurrentBank();
    injectOcrConfigScript(_0x156184, _0x293cbb, _0x26a88e);
    injectOcrWorkerScript();
    return await waitForOcrResult();
  } catch (_0x4adeb8) {
    console.warn("[SX OCR] 触发识别失败：", _0x4adeb8);
    showSxToast("验证码识别失败，请手动输入", "warning");
    return {
      started: false,
      error: _0x4adeb8
    };
  }
}
typeof window !== "undefined" && (window.__SX_TRIGGER_OCR__ = (_0x45f56b = false) => triggerOcrRecognition({
  force: !!_0x45f56b,
  reason: "manual-call"
}), window.__SX_OBSERVE_CAPTCHA__ = () => {
  observeCaptchaChanges();
  return {
    observerActive: !!captchaObserver,
    primed: captchaObserverPrimed,
    lastSignature: lastCaptchaSignature,
    hasLoadListener: !!captchaLoadTarget,
    loadTargetTag: captchaLoadTarget?.["tagName"] || null
  };
});
function waitForOcrResult(_0x36bd52 = 8000) {
  pendingOcrResolver && pendingOcrResolver({
    success: false,
    error: "上一次识别尚未完成"
  });
  return new Promise(_0x22f96b => {
    let _0xa09e81 = false;
    pendingOcrResolver = _0x5c5d64 => {
      if (_0xa09e81) {
        return;
      }
      _0xa09e81 = true;
      _0x22f96b(_0x5c5d64);
    };
    setTimeout(() => {
      if (_0xa09e81) {
        return;
      }
      _0xa09e81 = true;
      pendingOcrResolver && (pendingOcrResolver = null);
      _0x22f96b({
        success: false,
        error: "OCR 超时"
      });
    }, _0x36bd52);
  });
}
function injectOcrConfigScript(_0x4e3592, _0x27a811, _0x3e5141 = {}) {
  const _0x41a5e1 = document.createElement("script");
  _0x41a5e1.type = "application/json";
  _0x41a5e1.id = "sx_ocr_config_" + _0x4e3592;
  const _0x5dbff7 = _0x27a811.startsWith("data:") ? _0x27a811 : "data:image/png;base64," + _0x27a811.replace(/^data:image\/\w+;base64,/, "");
  _0x41a5e1.textContent = JSON.stringify({
    messageId: _0x4e3592,
    imageDataUrl: _0x5dbff7,
    ..._0x3e5141
  });
  (document.documentElement || document.head || document.body).appendChild(_0x41a5e1);
  setTimeout(() => {
    _0x41a5e1.parentNode && _0x41a5e1.parentNode.removeChild(_0x41a5e1);
  }, 4000);
}
function injectOcrWorkerScript() {
  if (!chrome?.["runtime"]?.["getURL"]) {
    return;
  }
  const _0x4be573 = document.createElement("script");
  _0x4be573.src = chrome.runtime.getURL("ocrInject.js");
  _0x4be573.async = true;
  _0x4be573.dataset.sxOcrWorker = Date.now().toString();
  _0x4be573.onload = () => _0x4be573.remove();
  _0x4be573.onerror = () => _0x4be573.remove();
  (document.documentElement || document.head || document.body).appendChild(_0x4be573);
}
function getOcrConfigForCurrentBank() {
  try {
    const _0x2348a8 = window.shuixian?.["detect"]?.();
    if (!_0x2348a8 || !_0x2348a8.id) {
      return {};
    }
    switch (_0x2348a8.id) {
      case "PSBC":
        return {
          colorFilterColors: ["red"]
        };
      default:
        return {};
    }
  } catch (_0x5ae2fd) {
    console.warn("[SX OCR] 获取 OCR 配置失败：", _0x5ae2fd);
    return {};
  }
}
function findCaptchaImage() {
  const _0x2c0e5f = Array.from(document.querySelectorAll(".el-form-item"));
  let _0x445735 = null;
  for (const _0x44cc27 of _0x2c0e5f) {
    const _0x3fb2d0 = _0x44cc27.querySelector(".el-form-item__label");
    if (!_0x3fb2d0) {
      continue;
    }
    const _0x10cabd = (_0x3fb2d0.textContent || "").trim();
    if (!_0x10cabd) {
      continue;
    }
    if (!/验证码|图形码|校验码|附加码/.test(_0x10cabd)) {
      continue;
    }
    const _0x5a60c8 = _0x44cc27.querySelector(".verify-code-container img") || _0x44cc27.querySelector(".verify-code-container canvas");
    if (_0x5a60c8 && _0x5a60c8.offsetParent !== null) {
      return _0x5a60c8;
    }
    const _0x48998f = _0x44cc27.querySelector("img, canvas");
    _0x48998f && _0x48998f.offsetParent !== null && (_0x445735 = _0x48998f);
  }
  if (_0x445735) {
    return _0x445735;
  }
  const _0x420199 = Array.from(document.querySelectorAll(".verify-code-container"));
  for (const _0x335a29 of _0x420199) {
    const _0x3dccf6 = _0x335a29.querySelector("img, canvas");
    if (_0x3dccf6 && _0x3dccf6.offsetParent !== null) {
      return _0x3dccf6;
    }
  }
  const _0x811366 = ["img[src*=\"captcha\"]", "img[id*=\"captcha\"]", "img[class*=\"captcha\"]", "img[src*=\"VerifyCode\"]", "img[src*=\"verifyCode\"]", "img[alt*=\"验证码\"]", "img[alt*=\"校验码\"]", "img[alt*=\"附加码\"]", ".verify-code-container img", ".verify-code-container canvas", "canvas[id*=\"captcha\"]", "canvas[class*=\"captcha\"]", "canvas[alt*=\"验证码\"]", "canvas[alt*=\"附加码\"]"];
  for (const _0x48dcdf of _0x811366) {
    const _0xc582e5 = document.querySelector(_0x48dcdf);
    if (_0xc582e5 && _0xc582e5.offsetParent !== null) {
      return _0xc582e5;
    }
  }
  return document.querySelector("script[data-sx-captcha-base64]") || null;
}
async function getImageBase64(_0x1954ed) {
  try {
    if (!_0x1954ed) {
      return "";
    }
    if (_0x1954ed.tagName === "SCRIPT" && _0x1954ed.dataset.sxCaptchaBase64) {
      return _0x1954ed.dataset.sxCaptchaBase64;
    }
    const _0x30e576 = _0x1954ed.getAttribute("src") || _0x1954ed.dataset?.["src"] || "";
    if (_0x30e576.startsWith("data:image")) {
      return _0x30e576;
    }
    if (_0x1954ed.complete && !_0x1954ed.crossOrigin) {
      const _0x19edff = drawImageToCanvas(_0x1954ed);
      if (_0x19edff) {
        return _0x19edff;
      }
    }
    return await fetchImageAsBase64(_0x30e576);
  } catch (_0x2762bc) {
    console.warn("[SX OCR] 获取验证码图片失败：", _0x2762bc);
    return "";
  }
}
function drawImageToCanvas(_0x2ada72) {
  try {
    const _0x3634eb = document.createElement("canvas");
    _0x3634eb.width = _0x2ada72.naturalWidth || _0x2ada72.width;
    _0x3634eb.height = _0x2ada72.naturalHeight || _0x2ada72.height;
    const _0x2542a5 = _0x3634eb.getContext("2d");
    _0x2542a5.drawImage(_0x2ada72, 0, 0);
    return _0x3634eb.toDataURL("image/png");
  } catch (_0x572b60) {
    return "";
  }
}
async function fetchImageAsBase64(_0x1bbcd0) {
  if (!_0x1bbcd0) {
    return "";
  }
  try {
    const _0xa2b5a1 = await fetch(_0x1bbcd0, {
      mode: "cors"
    });
    if (!_0xa2b5a1.ok) {
      throw new Error("HTTP " + _0xa2b5a1.status);
    }
    const _0x417fc6 = await _0xa2b5a1.blob();
    return await blobToBase64(_0x417fc6);
  } catch (_0x4f4e22) {
    console.warn("[SX OCR] 拉取验证码图片失败：", _0x4f4e22);
    return "";
  }
}
function blobToBase64(_0x22669e) {
  return new Promise((_0x34fce1, _0xc6586e) => {
    const _0x14e293 = new FileReader();
    _0x14e293.onload = () => {
      const _0x52ea22 = _0x14e293.result;
      typeof _0x52ea22 === "string" ? _0x34fce1(_0x52ea22) : _0xc6586e(new Error("无法读取 blob"));
    };
    _0x14e293.onerror = () => _0xc6586e(_0x14e293.error);
    _0x14e293.readAsDataURL(_0x22669e);
  });
}
function createFloatingWindow() {
  floatingWindow && floatingWindow.remove();
  floatingWindow = document.createElement("div");
  floatingWindow.id = "sx-floating-window";
  floatingWindow.innerHTML = "\n    <div class=\"sx-floating-header\">\n      <span class=\"sx-floating-title\">水仙花科技</span>\n      <div class=\"sx-header-actions\">\n        <button class=\"sx-floating-agent\" id=\"sx-agent-btn\" title=\"成为代理\">成为代理</button>\n        <button class=\"sx-floating-settings\" id=\"sx-settings-btn\" title=\"打开设置\">⚙</button>\n        <button class=\"sx-floating-close\" id=\"sx-close-btn\" title=\"关闭\">×</button>\n      </div>\n    </div>\n    <div class=\"sx-floating-content\">\n      <div id=\"sx-person-list\" class=\"sx-person-list\">\n        <div class=\"sx-loading\">加载中...</div>\n      </div>\n    </div>\n  ";
  const _0x5d5f0e = document.createElement("style");
  _0x5d5f0e.textContent = "\n    #sx-floating-window {\n      position: fixed;\n      top: 100px;\n      right: 20px;\n      width: 300px;\n      background: #ffffff;\n      border-radius: 12px;\n      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n      z-index: 999999;\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n      user-select: none;\n      overflow: hidden;\n    }\n    .sx-floating-header {\n      background: linear-gradient(135deg, #2563eb, #1e40af);\n      color: #ffffff;\n      padding: 12px 16px;\n      cursor: move;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .sx-floating-title {\n      font-size: 15px;\n      font-weight: 600;\n    }\n    .sx-header-actions {\n      display: flex;\n      align-items: center;\n      gap: 6px;\n    }\n    .sx-floating-agent {\n      background-image: linear-gradient(135deg, #fbbf24, #f59e0b);\n      border: 1px solid rgba(250, 204, 21, 0.95);\n      color: #78350f;\n      font-size: 12px;\n      font-weight: 600;\n      height: 24px;\n      border-radius: 999px;\n      cursor: pointer;\n      padding: 0 10px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 0 0 1px rgba(250, 204, 21, 0.9), 0 0 12px rgba(251, 191, 36, 0.9);\n      backdrop-filter: blur(4px);\n      transition: transform 0.12s ease, box-shadow 0.18s ease, filter 0.18s ease;\n    }\n    .sx-floating-agent:hover {\n      box-shadow: 0 0 0 1px rgba(250, 204, 21, 1), 0 0 18px rgba(252, 211, 77, 1);\n      transform: translateY(-0.5px);\n      filter: brightness(1.05);\n    }\n    .sx-floating-agent:active {\n      box-shadow: 0 0 0 1px rgba(217, 119, 6, 0.9), 0 0 10px rgba(180, 83, 9, 0.9);\n      transform: translateY(0);\n      filter: brightness(0.98);\n    }\n    .sx-floating-settings {\n      background: rgba(255, 255, 255, 0.2);\n      border: none;\n      color: #ffffff;\n      font-size: 16px;\n      width: 28px;\n      height: 28px;\n      border-radius: 6px;\n      cursor: pointer;\n      transition: background 0.2s;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .sx-floating-settings:hover {\n      background: rgba(255, 255, 255, 0.35);\n    }\n    .sx-floating-settings:active {\n      background: rgba(255, 255, 255, 0.5);\n    }\n    .sx-floating-close {\n      background: transparent;\n      border: none;\n      color: #ffffff;\n      font-size: 24px;\n      line-height: 1;\n      cursor: pointer;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 4px;\n      transition: background 0.2s;\n    }\n    .sx-floating-close:hover {\n      background: rgba(255, 255, 255, 0.2);\n    }\n    .sx-floating-content {\n      padding: 16px;\n      max-height: 500px;\n      overflow-y: auto;\n    }\n    .sx-person-list {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n    }\n    .sx-person-card {\n      background: #f9fafb;\n      border: 1px solid #e5e7eb;\n      border-radius: 8px;\n      padding: 12px;\n      cursor: pointer;\n      transition: all 0.2s;\n    }\n    .sx-person-card:hover {\n      background: #f3f4f6;\n      border-color: #2563eb;\n      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);\n    }\n    .sx-person-card-name {\n      font-size: 14px;\n      font-weight: 600;\n      color: #111827;\n      display: flex;\n      align-items: baseline;\n      gap: 6px;\n    }\n    .sx-person-card-remark {\n      font-size: 12px;\n      color: #9ca3af;\n      font-weight: 400;\n    }\n    .sx-loading {\n      text-align: center;\n      padding: 20px;\n      color: #6b7280;\n      font-size: 14px;\n    }\n    .sx-empty-state {\n      text-align: center;\n      padding: 20px;\n      color: #9ca3af;\n      font-size: 13px;\n    }\n    .sx-empty-footer {\n      margin-top: -6px;\n      padding-bottom: 16px;\n      text-align: center;\n      font-size: 12px;\n      color: #2563eb;\n    }\n    .sx-empty-link {\n      color: #1d4ed8;\n      cursor: pointer;\n      text-decoration: underline;\n    }\n    .sx-empty-link:hover {\n      color: #153e9c;\n    }\n    .sx-btn-primary {\n      width: 100%;\n      padding: 10px;\n      background: #2563eb;\n      color: #ffffff;\n      border: none;\n      border-radius: 6px;\n      font-size: 14px;\n      cursor: pointer;\n      transition: background 0.2s;\n    }\n    .sx-btn-primary:hover {\n      background: #1e40af;\n    }\n    .sx-btn-primary:active {\n      background: #1e3a8a;\n    }\n  ";
  document.head.appendChild(_0x5d5f0e);
  document.body.appendChild(floatingWindow);
  const _0x48d7f1 = floatingWindow.querySelector(".sx-floating-header");
  _0x48d7f1.addEventListener("mousedown", _0x47071b => {
    if (_0x47071b.target.classList.contains("sx-floating-close") || _0x47071b.target.classList.contains("sx-floating-settings") || _0x47071b.target.closest(".sx-header-actions")) {
      return;
    }
    isDragging = true;
    const _0xe37a19 = floatingWindow.getBoundingClientRect();
    dragOffset.x = _0x47071b.clientX - _0xe37a19.left;
    dragOffset.y = _0x47071b.clientY - _0xe37a19.top;
    _0x48d7f1.style.cursor = "grabbing";
  });
  document.addEventListener("mousemove", _0x2d753e => {
    if (!isDragging || !floatingWindow) {
      return;
    }
    let _0x33d69c = _0x2d753e.clientX - dragOffset.x;
    let _0x18aa79 = _0x2d753e.clientY - dragOffset.y;
    const _0x58d690 = window.innerWidth - floatingWindow.offsetWidth;
    const _0x16a03c = window.innerHeight - floatingWindow.offsetHeight;
    _0x33d69c = Math.max(0, Math.min(_0x33d69c, _0x58d690));
    _0x18aa79 = Math.max(0, Math.min(_0x18aa79, _0x16a03c));
    floatingWindow.style.left = _0x33d69c + "px";
    floatingWindow.style.top = _0x18aa79 + "px";
    floatingWindow.style.right = "auto";
  });
  document.addEventListener("mouseup", () => {
    isDragging && (isDragging = false, _0x48d7f1 && (_0x48d7f1.style.cursor = "move"));
  });
  const _0x481ab3 = floatingWindow.querySelector("#sx-close-btn");
  _0x481ab3 && _0x481ab3.addEventListener("click", () => {
    floatingWindow && (floatingWindow.remove(), floatingWindow = null);
  });
  const _0x2ccea3 = floatingWindow.querySelector("#sx-settings-btn");
  _0x2ccea3 && _0x2ccea3.addEventListener("click", _0x45f9e6 => {
    _0x45f9e6.stopPropagation();
    openSettingsPopupFromContent();
  });
  const _0x23ff9a = floatingWindow.querySelector("#sx-agent-btn");
  _0x23ff9a && _0x23ff9a.addEventListener("click", _0x5b3afc => {
    _0x5b3afc.stopPropagation();
    try {
      window.open("https://sxhkj.short.gy/1", "_blank", "noopener,noreferrer");
    } catch (_0x26b73a) {
      location.href = "https://sxhkj.short.gy/1";
    }
  });
  loadPersonsData().then(_0x37fc00 => {
    personsData = _0x37fc00;
    renderPersonList(_0x37fc00);
  });
}
function renderPersonList(_0x25075b) {
  const _0x2e4fbf = floatingWindow?.["querySelector"]("#sx-person-list");
  if (!_0x2e4fbf) {
    return;
  }
  if (_0x25075b.length === 0) {
    _0x2e4fbf.innerHTML = "\n      <div class=\"sx-empty-state\">暂无人员信息<br/>请在设置中添加人员</div>\n      <div class=\"sx-empty-footer\">\n        或 <span class=\"sx-empty-link\" id=\"sx-open-settings-link\">点击这里进行设置</span>\n      </div>\n    ";
    const _0x34a721 = _0x2e4fbf.querySelector("#sx-open-settings-link");
    _0x34a721 && _0x34a721.addEventListener("click", _0x3e4f70 => {
      _0x3e4f70.preventDefault();
      openSettingsPopupFromContent();
    });
    return;
  }
  _0x2e4fbf.innerHTML = _0x25075b.map((_0x10a0f3, _0x500d20) => {
    const _0x4660ce = _0x10a0f3.name || "未命名";
    const _0x5f19d7 = _0x10a0f3.remark || "";
    const _0x20ac7d = _0x4660ce.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const _0x2b3f41 = _0x5f19d7.trim().length > 0 ? _0x5f19d7.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";
    return "\n        <div class=\"sx-person-card\" data-person-index=\"" + _0x500d20 + "\">\n          <div class=\"sx-person-card-name\">\n            <span>" + _0x20ac7d + "</span>\n            " + (_0x2b3f41 ? "<span class=\"sx-person-card-remark\">- " + _0x2b3f41 + "</span>" : "") + "\n          </div>\n        </div>\n      ";
  }).join("");
  _0x2e4fbf.querySelectorAll(".sx-person-card").forEach(_0x2bf856 => {
    _0x2bf856.addEventListener("click", () => {
      const _0x58bb16 = parseInt(_0x2bf856.getAttribute("data-person-index"));
      const _0x4bee0a = personsData[_0x58bb16];
      _0x4bee0a && fillFormWithPerson(_0x4bee0a);
    });
  });
}
chrome?.["storage"]?.["onChanged"] && chrome.storage.onChanged.addListener((_0x388caa, _0x4acdf6) => {
  if (_0x4acdf6 !== "local") {
    return;
  }
  _0x388caa.userSettings && floatingWindow && loadPersonsData().then(_0x238a6b => {
    personsData = _0x238a6b;
    renderPersonList(personsData);
  });
  _0x388caa.licenseKey && !floatingWindow && isSupportedBankPage() && ensureLicenseThenInitFloatingWindow();
});
async function fillFormWithPerson(_0xe06c22) {
  console.log("========== 开始填写表单 ==========");
  console.log("人员信息：", _0xe06c22);
  console.log("当前URL：", location.href);
  console.log("当前hostname：", location.hostname);
  console.log("当前pathname：", location.pathname);
  console.log("检测 window.shuixian 是否存在：", typeof window.shuixian);
  const _0x28b5d6 = window.shuixian?.["detect"]();
  console.log("检测到的银行适配器：", _0x28b5d6);
  console.log("银行适配器ID：", _0x28b5d6?.["id"]);
  if (!_0x28b5d6) {
    console.error("未检测到支持的银行适配器");
    console.log("window.shuixian.detect() 返回：", window.shuixian?.["detect"]());
    showSxToast("未检测到支持的银行，请确保在银行官网页面使用", "error");
    return;
  }
  try {
    console.log("检查 waitForOpen 方法：", typeof _0x28b5d6.waitForOpen);
    _0x28b5d6.waitForOpen && (console.log("调用 waitForOpen..."), await _0x28b5d6.waitForOpen(), console.log("waitForOpen 完成"));
    ensureOcrListener();
    observeCaptchaChanges();
    const _0x4ed7fa = triggerOcrRecognition({
      reason: "parallel-fill"
    });
    console.log("检查 fillForm 方法：", typeof _0x28b5d6.fillForm);
    _0x28b5d6.fillForm ? (console.log("调用适配器的 fillForm 方法..."), await _0x28b5d6.fillForm(_0xe06c22), console.log("fillForm 方法执行完成")) : (console.log("适配器没有 fillForm 方法，使用默认填写逻辑"), await defaultFillForm(_0x28b5d6, _0xe06c22));
    await _0x4ed7fa;
    console.log("检查 submit 方法：", typeof _0x28b5d6.submit);
    _0x28b5d6.submit ? (console.log("调用 submit 方法..."), await _0x28b5d6.submit(), console.log("submit 方法执行完成")) : console.warn("适配器没有 submit 方法");
    console.log("检查 verifyResult 方法：", typeof _0x28b5d6.verifyResult);
    if (_0x28b5d6.verifyResult) {
      console.log("调用 verifyResult 方法...");
      const _0x5a36a7 = await _0x28b5d6.verifyResult();
      console.log("verifyResult 返回：", _0x5a36a7);
      _0x5a36a7 ? showSxToast(_0xe06c22.name + " 的信息填写并提交成功！", "success") : showSxToast(_0xe06c22.name + " 的信息已填写，但提交结果未确认，请手动检查", "warning");
    } else {
      console.warn("适配器没有 verifyResult 方法");
      showSxToast(_0xe06c22.name + " 的信息已填写并提交", "info");
    }
    console.log("========== 填写流程完成 ==========");
  } catch (_0x377488) {
    console.error("========== 填写表单时出错 ==========");
    console.error("错误信息：", _0x377488);
    console.error("错误堆栈：", _0x377488.stack);
    showSxToast("填写表单时出错：" + _0x377488.message, "error");
  }
}
function showSxToast(_0x13b9a3, _0x6abfdd = "info", _0x2bd479 = 3000) {
  try {
    const _0x53d6cd = document.querySelector(".sx-toast-container");
    const _0x28306d = _0x53d6cd || document.createElement("div");
    !_0x53d6cd && (_0x28306d.className = "sx-toast-container", _0x28306d.style.position = "fixed", _0x28306d.style.zIndex = "999999", _0x28306d.style.left = "50%", _0x28306d.style.top = "20px", _0x28306d.style.transform = "translateX(-50%)", _0x28306d.style.display = "flex", _0x28306d.style.flexDirection = "column", _0x28306d.style.gap = "8px", _0x28306d.style.pointerEvents = "none", document.body.appendChild(_0x28306d));
    const _0x12a38a = document.createElement("div");
    _0x12a38a.className = "sx-toast-item";
    _0x12a38a.textContent = _0x13b9a3;
    _0x12a38a.style.maxWidth = "420px";
    _0x12a38a.style.padding = "10px 16px";
    _0x12a38a.style.borderRadius = "6px";
    _0x12a38a.style.color = "#fff";
    _0x12a38a.style.fontSize = "13px";
    _0x12a38a.style.boxShadow = "0 4px 12px rgba(0,0,0,0.18)";
    _0x12a38a.style.opacity = "0";
    _0x12a38a.style.transform = "translateY(-10px)";
    _0x12a38a.style.transition = "opacity 0.25s ease-out, transform 0.25s ease-out";
    _0x12a38a.style.background = _0x6abfdd === "success" ? "linear-gradient(135deg, #4CAF50, #2E7D32)" : _0x6abfdd === "error" ? "linear-gradient(135deg, #F44336, #D32F2F)" : _0x6abfdd === "warning" ? "linear-gradient(135deg, #FF9800, #F57C00)" : "linear-gradient(135deg, #2196F3, #1976D2)";
    _0x12a38a.style.pointerEvents = "auto";
    _0x28306d.appendChild(_0x12a38a);
    requestAnimationFrame(() => {
      _0x12a38a.style.opacity = "1";
      _0x12a38a.style.transform = "translateY(0)";
    });
    setTimeout(() => {
      _0x12a38a.style.opacity = "0";
      _0x12a38a.style.transform = "translateY(-10px)";
      setTimeout(() => {
        _0x12a38a.remove();
        !_0x28306d.childElementCount && _0x28306d.remove();
      }, 300);
    }, _0x2bd479);
  } catch (_0x58802b) {
    alert(_0x13b9a3);
  }
}
async function defaultFillForm(_0x43f2cf, _0x5da773) {
  if (!_0x43f2cf.getSelectorMap) {
    return;
  }
  const _0x107f94 = _0x43f2cf.getSelectorMap();
  if (_0x107f94.fullName && _0x5da773.name) {
    const _0x527bf9 = document.querySelector(_0x107f94.fullName);
    _0x527bf9 && (_0x527bf9.value = _0x5da773.name, _0x527bf9.dispatchEvent(new Event("input", {
      bubbles: true
    })), _0x527bf9.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  if (_0x107f94.idNumber && _0x5da773.idcard) {
    const _0x162f53 = document.querySelector(_0x107f94.idNumber);
    _0x162f53 && (_0x162f53.value = _0x5da773.idcard, _0x162f53.dispatchEvent(new Event("input", {
      bubbles: true
    })), _0x162f53.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  if (_0x107f94.mobile && _0x5da773.phone) {
    const _0x476dac = document.querySelector(_0x107f94.mobile);
    _0x476dac && (_0x476dac.value = _0x5da773.phone, _0x476dac.dispatchEvent(new Event("input", {
      bubbles: true
    })), _0x476dac.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  _0x107f94.province && _0x5da773.province && (await fillSelectField(_0x107f94.province, _0x5da773.province), await new Promise(_0x38e9bf => setTimeout(_0x38e9bf, 300)));
  _0x107f94.city && _0x5da773.city && (await fillSelectField(_0x107f94.city, _0x5da773.city), await new Promise(_0x8ce18a => setTimeout(_0x8ce18a, 300)));
  _0x107f94.district && _0x5da773.district && (await fillSelectField(_0x107f94.district, _0x5da773.district));
}
async function fillSelectField(_0x5345b4, _0x35d666) {
  const _0x33d39f = document.querySelector(_0x5345b4);
  if (!_0x33d39f) {
    return;
  }
  const _0x2a69b3 = _0x33d39f.querySelectorAll("option");
  for (let _0x56e406 of _0x2a69b3) {
    if (_0x56e406.textContent.includes(_0x35d666) || _0x56e406.value.includes(_0x35d666)) {
      _0x33d39f.value = _0x56e406.value;
      _0x33d39f.dispatchEvent(new Event("change", {
        bubbles: true
      }));
      break;
    }
  }
}
chrome.runtime.onMessage.addListener((_0x3bbc56, _0x37958c, _0x275427) => {
  if (_0x3bbc56.type === "ACTIVATE_SCRIPT") {
    try {
      createFloatingWindow();
      _0x275427({
        success: true
      });
    } catch (_0x55f8fd) {
      _0x275427({
        success: false,
        error: _0x55f8fd.message
      });
    }
    return true;
  }
});