//Mon Dec 15 2025 04:32:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
window.shuixian = (() => {
  const _0x1f206b = {};
  return {
    register: function (_0x18f8d3) {
      _0x18f8d3 && _0x18f8d3.id && (_0x1f206b[_0x18f8d3.id] = _0x18f8d3);
    },
    detect: function () {
      const _0x23eeeb = location.hostname;
      const _0x134c3c = location.pathname;
      const _0x3a79f8 = _0x23eeeb + _0x134c3c;
      if (_0x23eeeb.includes("icbc") || _0x3a79f8.includes("icbc")) {
        return _0x1f206b.ICBC;
      } else {
        if (_0x23eeeb.includes("ccb") || _0x3a79f8.includes("ccb")) {
          return _0x1f206b.CCB;
        } else {
          if (_0x23eeeb.includes("boc") || _0x3a79f8.includes("boc")) {
            return _0x1f206b.BOC;
          } else {
            if (_0x23eeeb.includes("abchina") || _0x3a79f8.includes("abchina")) {
              return _0x1f206b.ABC;
            } else {
              if (_0x23eeeb.includes("bankcomm") || _0x23eeeb.includes("bocom") || _0x3a79f8.includes("bankcomm") || _0x3a79f8.includes("bocom")) {
                return _0x1f206b.BOCOM;
              } else {
                if (_0x23eeeb.includes("psbc") || _0x3a79f8.includes("psbc")) {
                  return _0x1f206b.PSBC;
                } else {
                  return _0x23eeeb.includes("hxb") || _0x3a79f8.includes("hxb") ? _0x1f206b.HXB : null;
                }
              }
            }
          }
        }
      }
    },
    get: function (_0x1487da) {
      return _0x1f206b[_0x1487da] || null;
    },
    all: () => ({
      ..._0x1f206b
    })
  };
})();