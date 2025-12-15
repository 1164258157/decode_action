//Mon Dec 15 2025 04:21:11 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(() => {
  const _0x19d1f1 = false;
  const _0x345c2c = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 111, 99, 114, 46, 113, 111, 114, 97, 46, 116, 111, 112, 47, 111, 99, 114);
  const _0x56aedd = "[SX OCR]";
  const _0x56be5a = (..._0x194bbb) => {
    _0x19d1f1 && console.log(_0x56aedd, ..._0x194bbb);
  };
  const _0x4790cd = (..._0x24e46f) => {
    _0x19d1f1 && console.warn(_0x56aedd, ..._0x24e46f);
  };
  const _0x1627a3 = (..._0x22acaf) => console.error(_0x56aedd, ..._0x22acaf);
  function _0x5c0a15(_0x2a5c93, _0x3c698b, _0x586dbc) {
    const _0x59513c = {
      type: "SX_OCR_RESULT",
      id: _0x2a5c93 || "unknown",
      text: _0x3c698b || null,
      error: _0x586dbc || null
    };
    try {
      window.postMessage(_0x59513c, "*");
      _0x56be5a("发送 OCR 结果：", _0x59513c);
    } catch (_0xb772d0) {
      _0x1627a3("发送 OCR 结果失败：", _0xb772d0);
    }
  }
  function _0x5703ff() {
    const _0x185d0d = ["script[type=\"application/json\"][id^=\"sx_ocr_config_\"]", "script[type=\"application/json\"][id^=\"jp_ocr_config_\"]"];
    const _0x38bd8f = document.querySelectorAll(_0x185d0d.join(","));
    return _0x38bd8f.length ? _0x38bd8f[_0x38bd8f.length - 1] : null;
  }
  const _0x5a321e = _0x5703ff();
  if (!_0x5a321e) {
    _0x1627a3("未找到 OCR 配置元素");
    _0x5c0a15("unknown", null, "未找到OCR配置元素");
    return;
  }
  let _0x555c8e = null;
  try {
    _0x555c8e = JSON.parse(_0x5a321e.textContent || "{}");
  } catch (_0x48c99e) {
    _0x1627a3("解析 OCR 配置失败：", _0x48c99e);
    _0x5c0a15("unknown", null, "解析OCR配置失败: " + _0x48c99e.message);
    return;
  }
  const {
    messageId: _0x1b6402,
    imageDataUrl: _0x233c9c,
    colorFilterColors: _0x367422,
    pngFix: _0x46a6fd
  } = _0x555c8e || {};
  try {
    _0x5a321e && _0x5a321e.parentNode && _0x5a321e.parentNode.removeChild(_0x5a321e);
  } catch (_0x2ed116) {
    _0x4790cd("移除 OCR 配置元素失败：", _0x2ed116);
  }
  if (!_0x1b6402 || !_0x233c9c) {
    _0x1627a3("OCR 配置不完整：", _0x555c8e);
    _0x5c0a15(_0x1b6402 || "unknown", null, "OCR配置不完整");
    return;
  }
  _0x56be5a("读取到 OCR 配置：", {
    messageId: _0x1b6402
  });
  (async () => {
    try {
      const _0x34ff49 = await _0x25c1c4(_0x233c9c);
      if (!_0x34ff49) {
        throw new Error("无法获取验证码图片 base64");
      }
      _0x56be5a("准备调用 OCR 接口，base64 长度：", _0x34ff49.length);
      const _0x449beb = await _0x48bece(_0x34ff49, {
        colorFilterColors: _0x367422,
        pngFix: _0x46a6fd
      });
      const _0x3b3955 = (_0x449beb || "").replace(/\s+/g, "").trim();
      if (!_0x3b3955) {
        throw new Error("OCR 接口未返回识别结果");
      }
      _0x56be5a("OCR 识别成功：", _0x3b3955);
      _0x5c0a15(_0x1b6402, _0x3b3955, null);
    } catch (_0x1fd532) {
      _0x1627a3("OCR 识别过程失败：", _0x1fd532);
      _0x5c0a15(_0x1b6402, null, _0x1fd532.message || "OCR识别失败");
    }
  })();
  function _0x55c28e(_0x4b9210) {
    if (!_0x4b9210) {
      return "";
    }
    const _0x293238 = _0x4b9210.indexOf(",");
    return _0x293238 === -1 ? _0x4b9210 : _0x4b9210.slice(_0x293238 + 1);
  }
  async function _0x25c1c4(_0x12204b) {
    if (!_0x12204b) {
      return "";
    }
    const _0x3188ef = _0x12204b.trim();
    if (!_0x3188ef) {
      return "";
    }
    if (_0x3188ef.startsWith("data:image")) {
      return _0x55c28e(_0x3188ef);
    }
    try {
      return await _0x4cddba(_0x3188ef);
    } catch (_0x4f514b) {
      _0x4790cd("将图片 URL 转为 base64 失败：", _0x4f514b);
      return "";
    }
  }
  function _0x4cddba(_0x4e272b) {
    return new Promise((_0xbc2e09, _0x58c089) => {
      const _0x3f6159 = new Image();
      _0x3f6159.crossOrigin = "anonymous";
      _0x3f6159.onload = () => {
        try {
          const _0x309ec1 = document.createElement("canvas");
          _0x309ec1.width = _0x3f6159.width;
          _0x309ec1.height = _0x3f6159.height;
          const _0x94f731 = _0x309ec1.getContext("2d");
          _0x94f731.drawImage(_0x3f6159, 0, 0);
          _0xbc2e09(_0x55c28e(_0x309ec1.toDataURL("image/png")));
        } catch (_0x40c671) {
          _0x58c089(_0x40c671);
        }
      };
      _0x3f6159.onerror = _0x58c089;
      _0x3f6159.src = _0x4e272b;
    });
  }
  async function _0x48bece(_0x126456, _0x265a0f = {}) {
    const _0x240452 = _0x4a1d81(_0x265a0f.colorFilterColors);
    const _0x1eb7f2 = {
      image: _0x126456,
      png_fix: typeof _0x265a0f.pngFix === "boolean" ? _0x265a0f.pngFix : false,
      color_filter_colors: _0x240452
    };
    const _0x2468fd = await fetch(_0x345c2c, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
      },
      body: JSON.stringify(_0x1eb7f2)
    });
    if (!_0x2468fd.ok) {
      throw new Error("OCR 接口响应错误：" + _0x2468fd.status + " " + _0x2468fd.statusText);
    }
    const _0x1f227c = await _0x2468fd.json().catch(() => ({}));
    const _0x58bbf7 = _0x1f227c?.["text"] || _0x1f227c?.["data"]?.["text"] || _0x1f227c?.["data"]?.["result"] || _0x1f227c?.["code"] || _0x1f227c?.["message"] || "";
    return typeof _0x58bbf7 === "string" ? _0x58bbf7 : String(_0x58bbf7 || "");
  }
  function _0x4a1d81(_0x2c8557) {
    if (!_0x2c8557) {
      return null;
    }
    if (Array.isArray(_0x2c8557)) {
      const _0x429dc0 = _0x2c8557.map(_0x87cbf9 => String(_0x87cbf9).trim()).filter(Boolean);
      return _0x429dc0.length ? _0x429dc0 : null;
    }
    if (typeof _0x2c8557 === "string") {
      const _0x25e6d3 = _0x2c8557.trim();
      return _0x25e6d3 ? [_0x25e6d3] : null;
    }
    return null;
  }
})();