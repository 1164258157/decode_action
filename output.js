//Wed Dec 24 2025 05:01:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const qs = require("querystring");
const axios = require("axios");
const querystring = require("querystring");
const {
  SocksProxyAgent
} = require("socks-proxy-agent");
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const childProcess = require("child_process");
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function getEnvNumber(_0x2f56c7, _0x356ce6) {
  const _0x5c6072 = parseInt(process.env[_0x2f56c7], 10);
  return isNaN(_0x5c6072) ? _0x356ce6 : _0x5c6072;
}
function getEnvString(_0x4b133f, _0x2722a6) {
  const _0x4e7ad7 = process.env[_0x4b133f];
  return _0x4e7ad7 ? _0x4e7ad7.trim() : _0x2722a6;
}
const KS_TOTAL_TASK_COUNT = getEnvNumber("KS_TOTAL_TASK_COUNT", 99999);
const KS_AD_WATCH_MIN = getEnvNumber("KS_AD_WATCH_MIN", 30);
const KS_AD_WATCH_MAX = getEnvNumber("KS_AD_WATCH_MAX", 40);
const KS_TASK_INTERVAL_MIN = getEnvNumber("KS_TASK_INTERVAL_MIN", 5);
const KS_TASK_INTERVAL_MAX = getEnvNumber("KS_TASK_INTERVAL_MAX", 10);
const KSCOIN_LIMIT = getEnvNumber("KSCOIN_LIMIT", 500000);
const KSLOW_REWARD_THRESHOLD = getEnvNumber("KSLOW_REWARD_THRESHOLD", 20);
const KSLOW_REWARD_LIMIT = getEnvNumber("KSLOW_REWARD_LIMIT", 3);
const KS_MIN_AD_REWARD = getEnvNumber("KS_MIN_AD_REWARD", 30);
const KS_LOW_REWARD_RETRY_MIN = 1;
const KS_LOW_REWARD_RETRY_MAX = 2;
const MAX_CONCURRENCY = getEnvNumber("MAX_CONCURRENCY", 2);
const KS_ALLOW_LIVE_AD = getEnvString("KS_ALLOW_LIVE_AD", "false") === "true";
const KS_ENABLE_FOLLOW_AD = getEnvString("KS_ENABLE_FOLLOW_AD", "true") === "true";
const KS_SIMPLE_LOG = getEnvString("KS_SIMPLE_LOG", "false") === "true";
const KS_EXPORT_CSV = getEnvString("KS_EXPORT_CSV", "false") === "true";
const KS_EXPORT_TXT = getEnvString("KS_EXPORT_TXT", "false") === "true";
const TASK_ORDER = getEnvString("TASK_ORDER", "box,look,food,search,content");
const APP_CONFIG = {
  LOCAL_VERSION: "1.8.0",
  HOT_UPDATE_URL: "http://47.239.198.88:8080/ks-script",
  UPDATE_INFO_URL: "http://47.239.198.88:8080/ks-update-info",
  ENABLE_HOT_UPDATE: true,
  AUTH_SERVER_URL: "http://47.239.198.88:5000/verifyBySha",
  SHA_SECRET: "xhxnb",
  ANNOUNCE_URL: "http://47.239.198.88:8900"
};
let SIGN_API_CONFIG = {
  encsignUrl: "",
  nssigUrl: ""
};
const usedProxies = new Set();
const logger = {
  info: _0x23ebbf => {
    if (!KS_SIMPLE_LOG) {
      {
        console.log("[36m[INFO   ][0m " + _0x23ebbf);
      }
    }
  },
  success: _0x3918df => {
    if (!KS_SIMPLE_LOG) {
      {
        console.log("[32m[SUCCESS][0m " + _0x3918df);
      }
    }
  },
  error: _0x431b9a => {
    if (!KS_SIMPLE_LOG) {
      {
        console.log("[31m[ERROR  ][0m " + _0x431b9a);
      }
    }
  },
  warn: _0x5da6a7 => {
    if (!KS_SIMPLE_LOG) {
      {
        console.log("[33m[WARN   ][0m " + _0x5da6a7);
      }
    }
  },
  debug: _0x3ea735 => {
    if (!KS_SIMPLE_LOG && process.env.DEBUG === "1") {
      {
        console.log("[90m[DEBUG  ][0m " + _0x3ea735);
      }
    }
  },
  simple: _0x220414 => {
    if (KS_SIMPLE_LOG) {
      {
        console.log(_0x220414);
      }
    }
  },
  contentLog: _0x45439b => {
    if (KS_SIMPLE_LOG) {
      {
        console.log(_0x45439b);
      }
    } else {
      {
        console.log("[34m[CONTENT][0m " + _0x45439b);
      }
    }
  },
  contentParam: _0x58a1b7 => {
    if (!KS_SIMPLE_LOG) {
      {
        console.log("[35m[PARAM  ][0m " + _0x58a1b7);
      }
    }
  }
};
function escapeCsvField(_0x534e5d) {
  if (typeof _0x534e5d !== "string") {
    {
      _0x534e5d = String(_0x534e5d);
    }
  }
  if (_0x534e5d.includes(",") || _0x534e5d.includes("\"") || _0x534e5d.includes("\n") || _0x534e5d.includes("\r")) {
    {
      return "\"" + _0x534e5d.replace(/"/g, "\"\"") + "\"";
    }
  }
  return _0x534e5d;
}
async function exportToCsv(_0x391f4e, _0x3ee243 = process.cwd()) {
  try {
    {
      if (!fs.existsSync(_0x3ee243)) {
        {
          fs.mkdirSync(_0x3ee243, {
            recursive: true
          });
        }
      }
      const _0x57687e = ["账号名", "运行前金币", "运行获得金币", "运行后金币"].map(escapeCsvField).join(",");
      const _0x213085 = _0x391f4e.map(_0x2305b8 => {
        {
          let _0x4a765d = Number(_0x2305b8.initialCoin) || 0;
          let _0x38bf91 = _0x2305b8.skipped || _0x2305b8.coinLimitExceeded ? 0 : Number(_0x2305b8.coinChange) || 0;
          let _0x409bb3 = _0x2305b8.skipped || _0x2305b8.coinLimitExceeded ? _0x4a765d : Number(_0x2305b8.finalCoin) || 0;
          return [escapeCsvField(_0x2305b8.nickname), escapeCsvField(_0x4a765d), escapeCsvField(_0x38bf91), escapeCsvField(_0x409bb3)].join(",");
        }
      });
      const _0x3689ab = [_0x57687e, ..._0x213085].join("\r\n");
      const _0x3fe9a3 = new Date().getTime();
      const _0x453f01 = "快手账号金币统计_" + _0x3fe9a3 + ".csv";
      const _0xdec551 = path.join(_0x3ee243, _0x453f01);
      await fsPromises.writeFile(_0xdec551, _0x3689ab, "utf8");
      logger.success("CSV文件已导出至：" + _0xdec551);
    }
  } catch (_0x4d3e9d) {
    {
      logger.error("导出CSV失败：" + _0x4d3e9d.message);
    }
  }
}
function alignText(_0x803913, _0x5b36b3, _0xc3520e = "left") {
  _0x803913 = String(_0x803913);
  if (_0x803913.length >= _0x5b36b3) {
    {
      return _0x803913.substring(0, _0x5b36b3);
    }
  }
  const _0x8c6636 = _0x5b36b3 - _0x803913.length;
  switch (_0xc3520e) {
    case "right":
      return " ".repeat(_0x8c6636) + _0x803913;
    case "center":
      const _0x4e52e3 = Math.floor(_0x8c6636 / 2);
      const _0x456b33 = _0x8c6636 - _0x4e52e3;
      return " ".repeat(_0x4e52e3) + _0x803913 + " ".repeat(_0x456b33);
    default:
      return _0x803913 + " ".repeat(_0x8c6636);
  }
}
async function exportToTxtTable(_0x11125c, _0x326620 = process.cwd()) {
  try {
    {
      if (!fs.existsSync(_0x326620)) {
        {
          fs.mkdirSync(_0x326620, {
            recursive: true
          });
        }
      }
      const _0x7df888 = [{
        key: "nickname",
        name: "账号名",
        width: 20,
        align: "left"
      }, {
        key: "initialCoin",
        name: "运行前金币",
        width: 12,
        align: "right"
      }, {
        key: "earnedCoin",
        name: "运行获得金币",
        width: 12,
        align: "right"
      }, {
        key: "finalCoin",
        name: "运行后金币",
        width: 12,
        align: "right"
      }];
      let _0x5d81c7 = "┌┌";
      _0x7df888.forEach(_0x15f2b5 => {
        {
          _0x5d81c7 += "─".repeat(_0x15f2b5.width) + "┬";
        }
      });
      _0x5d81c7 = _0x5d81c7.slice(0, -1) + "┐┐\n";
      _0x5d81c7 += "│";
      _0x7df888.forEach(_0x514103 => {
        {
          _0x5d81c7 += alignText(_0x514103.name, _0x514103.width, "center") + "│";
        }
      });
      _0x5d81c7 += "\n";
      _0x5d81c7 += "├";
      _0x7df888.forEach(_0x5ad389 => {
        {
          _0x5d81c7 += "─".repeat(_0x5ad389.width) + "┼┼";
        }
      });
      _0x5d81c7 = _0x5d81c7.slice(0, -1) + "┤\n";
      _0x11125c.forEach(_0x1923f1 => {
        {
          let _0x4a876c = Number(_0x1923f1.initialCoin) || 0;
          let _0x4953f0 = _0x1923f1.skipped || _0x1923f1.coinLimitExceeded ? 0 : Number(_0x1923f1.coinChange) || 0;
          let _0xab48d5 = _0x1923f1.skipped || _0x1923f1.coinLimitExceeded ? _0x4a876c : Number(_0x1923f1.finalCoin) || 0;
          _0x5d81c7 += "│";
          _0x7df888.forEach(_0x2ccce0 => {
            {
              let _0x3d122f = _0x1923f1[_0x2ccce0.key] || "";
              if (_0x2ccce0.key === "initialCoin") {
                _0x3d122f = _0x4a876c;
              }
              if (_0x2ccce0.key === "earnedCoin") {
                _0x3d122f = _0x4953f0;
              }
              if (_0x2ccce0.key === "finalCoin") {
                _0x3d122f = _0xab48d5;
              }
              _0x5d81c7 += alignText(_0x3d122f, _0x2ccce0.width, _0x2ccce0.align) + "│";
            }
          });
          _0x5d81c7 += "\n";
        }
      });
      _0x5d81c7 += "└└";
      _0x7df888.forEach(_0x54b89f => {
        {
          _0x5d81c7 += "─".repeat(_0x54b89f.width) + "┴┴";
        }
      });
      _0x5d81c7 = _0x5d81c7.slice(0, -1) + "┘┘\n";
      const _0x5d25b0 = new Date().getTime();
      const _0x248301 = "快手账号金币统计_" + _0x5d25b0 + ".txt";
      const _0x1f68f2 = path.join(_0x326620, _0x248301);
      await fsPromises.writeFile(_0x1f68f2, _0x5d81c7, "utf8");
      logger.success("TXT表格已导出至：" + _0x1f68f2);
    }
  } catch (_0x363db5) {
    {
      logger.error("导出TXT表格失败：" + _0x363db5.message);
    }
  }
}
const sha256Encrypt = _0x1f14f1 => {
  return crypto.createHmac("sha256", APP_CONFIG.SHA_SECRET).update(_0x1f14f1).digest("hex");
};
const getPublicIP = async () => {
  const _0x47ba15 = ["https://api.ipify.org?format=json", "https://jsonip.com", "https://httpbin.org/ip", "https://api.my-ip.io/ip.json"];
  for (let _0xa7a20f of _0x47ba15) {
    {
      try {
        {
          const _0xd39cda = await axios.get(_0xa7a20f, {
            timeout: 8000
          });
          let _0x408c34 = null;
          if (_0xa7a20f.includes("ipify") && _0xd39cda.data?.["ip"]) {
            {
              _0x408c34 = _0xd39cda.data.ip;
            }
          } else {
            if (_0xa7a20f.includes("jsonip") && _0xd39cda.data?.["ip"]) {
              {
                _0x408c34 = _0xd39cda.data.ip;
              }
            } else {
              if (_0xa7a20f.includes("httpbin") && _0xd39cda.data?.["origin"]) {
                {
                  _0x408c34 = _0xd39cda.data.origin.split(",")[0].trim();
                }
              } else {
                if (_0xa7a20f.includes("my-ip") && _0xd39cda.data?.["ip"]) {
                  {
                    _0x408c34 = _0xd39cda.data.ip;
                  }
                } else {
                  if (typeof _0xd39cda.data === "string" && !_0xd39cda.data.includes("<html>")) {
                    {
                      _0x408c34 = _0xd39cda.data.trim();
                    }
                  }
                }
              }
            }
          }
          if (_0x408c34 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x408c34)) {
            {
              const _0x504b95 = _0x408c34.split(".").map(Number);
              if (_0x504b95.every(_0x37d14d => _0x37d14d >= 0 && _0x37d14d <= 255)) {
                {
                  logger.debug("通过 " + new URL(_0xa7a20f).hostname + " 获取到有效IP: " + _0x408c34);
                  return _0x408c34;
                }
              }
            }
          }
        }
      } catch (_0x45d0fa) {
        {
          logger.debug("获取公网IP失败(" + _0xa7a20f + "): " + _0x45d0fa.message);
        }
      }
    }
  }
  logger.warn("所有公网IP接口均失败，使用默认回退IP: 127.0.0.1");
  return "127.0.0.1";
};
const verifyAuth = async () => {
  logger.info("开始授权验证...");
  try {
    {
      const _0x19a07b = Date.now();
      const _0x533b88 = await getPublicIP();
      const _0x36fadf = sha256Encrypt(_0x533b88 + "-" + _0x19a07b);
      logger.info("授权请求参数 → IP：" + _0x533b88);
      const {
        body: _0x23b129
      } = await sendRequest({
        method: "POST",
        url: APP_CONFIG.AUTH_SERVER_URL,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          encryptedData: _0x36fadf,
          ts: _0x19a07b
        })
      }, null, "SHA授权验证");
      if (_0x23b129?.["code"] === 200 && _0x23b129.data?.["isAuthorized"]) {
        {
          logger.success("授权验证通过：" + (_0x23b129.msg || "授权成功"));
          return true;
        }
      } else {
        {
          logger.error("授权失败：" + (_0x23b129?.["msg"] || "服务器返回未知结果"));
          return false;
        }
      }
    }
  } catch (_0x1e7d09) {
    {
      logger.error("授权异常：" + _0x1e7d09.message);
      return false;
    }
  }
};
const hotUpdateScript = async (_0x5d4b3e = false) => {
  logger.info("开始执行版本检测流程");
  const _0x9c0448 = path.resolve(process.argv[1]);
  const _0x53b814 = _0x9c0448 + ".bak";
  const _0x317f5d = _0x9c0448 + ".tmp";
  try {
    {
      logger.info("本地版本：v" + APP_CONFIG.LOCAL_VERSION);
      const {
        body: _0xc17403
      } = await sendRequest({
        method: "GET",
        url: APP_CONFIG.UPDATE_INFO_URL,
        timeout: 15000
      }, null, "获取服务器版本");
      if (!_0xc17403 || !_0xc17403.latestVersion) {
        {
          logger.error("未获取到有效版本信息，脚本终止");
          process.exit(1);
        }
      }
      if (!_0xc17403.encsignUrl || !_0xc17403.nssigUrl) {
        {
          logger.error("服务器发出强制退出指令，脚本终止");
          process.exit(1);
        }
      }
      try {
        {
          new URL(_0xc17403.encsignUrl);
          new URL(_0xc17403.nssigUrl);
        }
      } catch (_0x4e489e) {
        {
          logger.error("签名接口地址格式无效，脚本终止");
          process.exit(1);
        }
      }
      SIGN_API_CONFIG.encsignUrl = _0xc17403.encsignUrl;
      SIGN_API_CONFIG.nssigUrl = _0xc17403.nssigUrl;
      logger.success("签名接口地址获取成功");
      const _0x48ae95 = _0xc17403.latestVersion;
      logger.info("服务器最新版本：v" + _0x48ae95);
      const _0x9531f2 = (_0x2e7080, _0x8eb4e4) => {
        {
          const _0x4a6e74 = _0x2c5e63 => _0x2c5e63.replace(/^v|\-.*$/g, "");
          const _0x2669c4 = _0x4a6e74(_0x2e7080).split(".").map(Number);
          const _0x4927d5 = _0x4a6e74(_0x8eb4e4).split(".").map(Number);
          const _0x29e7d4 = Math.max(_0x2669c4.length, _0x4927d5.length);
          for (let _0x26ae30 = 0; _0x26ae30 < _0x29e7d4; _0x26ae30++) {
            {
              const _0x29350b = _0x2669c4[_0x26ae30] || 0;
              const _0x4b07cb = _0x4927d5[_0x26ae30] || 0;
              if (_0x29350b > _0x4b07cb) {
                return 1;
              }
              if (_0x29350b < _0x4b07cb) {
                return -1;
              }
            }
          }
          return 0;
        }
      };
      const _0x4eb14f = _0x9531f2(_0x48ae95, APP_CONFIG.LOCAL_VERSION);
      const _0x3a3dbc = process.env.UPDATE_OVERRIDE === "1";
      if (_0x5d4b3e) {
        {
          logger.info("签名失败触发，仅更新签名接口");
          return {
            signatureUpdated: true,
            scriptUpdated: false
          };
        }
      }
      if (_0x4eb14f <= 0 && !_0x3a3dbc) {
        {
          logger.success("当前已是最新版本，无需更新");
          return {
            signatureUpdated: true,
            scriptUpdated: false
          };
        }
      }
      if (_0x3a3dbc) {
        {
          logger.info("更新覆盖：忽略版本对比，直接执行更新流程");
        }
      } else {
        {
          logger.info("发现新版本，开始下载...");
        }
      }
      const {
        body: _0x31ffa5
      } = await sendRequest({
        method: "GET",
        url: APP_CONFIG.HOT_UPDATE_URL,
        timeout: 30000
      }, null, "下载最新脚本");
      if (!_0x31ffa5 || typeof _0x31ffa5 !== "string" || _0x31ffa5.length < 1000) {
        {
          logger.error("未获取到有效脚本内容，更新失败");
          return {
            signatureUpdated: true,
            scriptUpdated: false
          };
        }
      }
      try {
        {
          if (fs.existsSync(_0x9c0448)) {
            {
              fs.copyFileSync(_0x9c0448, _0x53b814);
              logger.info("已备份旧版本至：" + _0x53b814);
            }
          }
        }
      } catch (_0xfeeb9d) {
        {
          logger.error("旧版本备份失败：" + _0xfeeb9d.message);
          logger.warn("备份失败，继续执行更新流程...");
        }
      }
      fs.writeFileSync(_0x317f5d, _0x31ffa5, {
        encoding: "utf8"
      });
      logger.info("已写入最新脚本至临时文件");
      try {
        {
          fs.renameSync(_0x317f5d, _0x9c0448);
        }
      } catch (_0x1d3307) {
        {
          logger.warn("直接替换脚本失败，尝试覆盖写入：" + _0x1d3307.message);
          fs.writeFileSync(_0x9c0448, _0x31ffa5, {
            encoding: "utf8"
          });
          if (fs.existsSync(_0x317f5d)) {
            {
              fs.unlinkSync(_0x317f5d);
            }
          }
        }
      }
      const _0xc53149 = _0x3a3dbc ? "更新至 v" + _0x48ae95 + "（覆盖本地版本 v" + APP_CONFIG.LOCAL_VERSION + "）" : "版本已从 v" + APP_CONFIG.LOCAL_VERSION + " 升级至 v" + _0x48ae95;
      logger.success("热更新成功！" + _0xc53149);
      if (_0xc17403.changelog) {
        {
          logger.info("更新内容：");
          console.log(_0xc17403.changelog);
        }
      }
      logger.info("重启脚本以应用更新...");
      childProcess.spawn(process.execPath, [_0x9c0448], {
        stdio: "inherit",
        detached: true,
        shell: true
      });
      process.exit(0);
    }
  } catch (_0x4c136f) {
    {
      logger.error("热更新失败：" + _0x4c136f.message);
      if (fs.existsSync(_0x317f5d)) {
        {
          fs.unlinkSync(_0x317f5d);
        }
      }
      return {
        signatureUpdated: false,
        scriptUpdated: false
      };
    }
  }
};
const fetchAnnouncement = async () => {
  const _0xadf024 = path.join(__dirname, ".ks_announcement_cache");
  const _0x3769f5 = 1800000;
  try {
    {
      if (fs.existsSync(_0xadf024)) {
        {
          const _0x499c78 = fs.statSync(_0xadf024);
          if (Date.now() - _0x499c78.mtimeMs < _0x3769f5) {
            {
              const _0x40ed13 = fs.readFileSync(_0xadf024, "utf8").trim();
              if (_0x40ed13) {
                {
                  if (!KS_SIMPLE_LOG) {
                    {
                      console.log("[INFO   ] ［缓存公告］" + _0x40ed13 + "\n");
                    }
                  }
                  return;
                }
              }
            }
          }
        }
      }
      const {
        body: _0x50faaf
      } = await sendRequest({
        method: "GET",
        url: APP_CONFIG.ANNOUNCE_URL,
        timeout: 5000
      }, null, "拉取服务器公告");
      if (_0x50faaf && typeof _0x50faaf === "string" && _0x50faaf.trim()) {
        {
          const _0x37c46e = _0x50faaf.trim();
          fs.writeFileSync(_0xadf024, _0x37c46e, "utf8");
          if (!KS_SIMPLE_LOG) {
            {
              console.log("[INFO   ] ［最新公告］" + _0x37c46e + "\n");
            }
          }
        }
      } else {
        {
          logger.warn("公告内容为空或格式无效");
        }
      }
    }
  } catch (_0x303249) {
    {
      logger.warn("公告拉取失败（不影响脚本运行）: " + _0x303249.message);
    }
  }
};
function generateRandomInteractionMessage() {
  const _0x153145 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x153145[Math.floor(Math.random() * _0x153145.length)];
}
function generateKuaishouDid() {
  try {
    {
      const _0x12dfb6 = "0123456789abcdef";
      let _0x437a43 = "";
      for (let _0x4bc4bd = 0; _0x4bc4bd < 16; _0x4bc4bd++) {
        {
          _0x437a43 += _0x12dfb6.charAt(Math.floor(Math.random() * _0x12dfb6.length));
        }
      }
      return "ANDROID_" + _0x437a43;
    }
  } catch (_0xc4010c) {
    {
      const _0x5cc933 = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0x5cc933.substring(0, 16);
    }
  }
}
async function sendRequest(_0x5820a8, _0x2152ae = null, _0x175645 = "Unknown Request") {
  let _0x321fa8 = null;
  if (_0x2152ae) {
    {
      try {
        {
          _0x321fa8 = new SocksProxyAgent(_0x2152ae);
        }
      } catch (_0x20b3d2) {
        {
          logger.error(_0x175645 + " 代理URL无效(" + _0x20b3d2.message + ")，尝试直连模式");
        }
      }
    }
  }
  try {
    {
      const axiosConfig = {
        method: _0x5820a8.method || "GET",
        url: _0x5820a8.url,
        headers: _0x5820a8.headers || {},
        data: _0x5820a8.body || _0x5820a8.form,
        timeout: _0x5820a8.timeout || 30000,
        ...(_0x321fa8 && {
          httpAgent: _0x321fa8,
          httpsAgent: _0x321fa8
        })
      };
      const _0xcf565b = await axios(axiosConfig);
      return {
        response: _0xcf565b,
        body: _0xcf565b.data
      };
    }
  } catch (_0x4127aa) {
    {
      if (_0x4127aa.response) {
        {
          return {
            response: _0x4127aa.response,
            body: null
          };
        }
      }
      return {
        response: null,
        body: null
      };
    }
  }
}
function isValidIP(_0x5e1277) {
  if (!_0x5e1277 || typeof _0x5e1277 !== "string") {
    return false;
  }
  if (_0x5e1277.includes("<html>") || _0x5e1277.includes("503") || _0x5e1277.includes("502") || _0x5e1277.includes("504")) {
    return false;
  }
  const _0x4d95f0 = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (_0x4d95f0.test(_0x5e1277)) {
    {
      return _0x5e1277.split(".").every(_0x472228 => {
        {
          const _0x430b77 = parseInt(_0x472228, 10);
          return !isNaN(_0x430b77) && _0x430b77 >= 0 && _0x430b77 <= 255;
        }
      });
    }
  }
  return /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(_0x5e1277);
}
async function testProxyConnectivity(_0x4937c6, _0x2b1c7b = "代理连通性检测") {
  if (!_0x4937c6) {
    {
      logger.error("代理地址为空，脚本终止");
      process.exit(1);
    }
  }
  const _0x30e40c = 5;
  const _0xfc8198 = ["https://api.ipify.org?format=json", "https://jsonip.com", "https://httpbin.org/ip", "https://api.my-ip.io/ip.json"];
  for (let _0x4ce558 = 1; _0x4ce558 <= _0x30e40c; _0x4ce558++) {
    {
      logger.info(_0x2b1c7b + " 第" + _0x4ce558 + "/" + _0x30e40c + "次尝试");
      for (const _0x9b07cf of _0xfc8198) {
        {
          try {
            {
              const {
                body: _0x32db99
              } = await sendRequest({
                method: "GET",
                url: _0x9b07cf,
                headers: {
                  "User-Agent": "ProxyTester/1.0"
                },
                timeout: 15000
              }, _0x4937c6, _0x2b1c7b + " → " + new URL(_0x9b07cf).hostname);
              let _0x5c8286 = null;
              if (_0x9b07cf.includes("httpbin.org") && _0x32db99?.["origin"]) {
                _0x5c8286 = _0x32db99.origin;
              } else {
                if (_0x9b07cf.includes("ipify.org") && _0x32db99?.["ip"]) {
                  _0x5c8286 = _0x32db99.ip;
                } else {
                  if (_0x9b07cf.includes("jsonip.com") && _0x32db99?.["ip"]) {
                    _0x5c8286 = _0x32db99.ip;
                  } else {
                    if (typeof _0x32db99 === "string" && !_0x32db99.includes("<")) {
                      _0x5c8286 = _0x32db99.trim();
                    }
                  }
                }
              }
              if (_0x5c8286 && isValidIP(_0x5c8286)) {
                {
                  const _0x2ef5bd = "代理正常，出口IP: " + _0x5c8286;
                  logger.success(_0x2b1c7b + " " + _0x2ef5bd);
                  return {
                    ok: true,
                    msg: _0x2ef5bd,
                    ip: _0x5c8286
                  };
                }
              }
            }
          } catch (_0x32c3de) {
            {
              logger.debug(_0x2b1c7b + " 第" + _0x4ce558 + "次尝试端点" + _0x9b07cf + "失败：" + _0x32c3de.message);
            }
          }
          await new Promise(_0x137e7a => setTimeout(_0x137e7a, 500));
        }
      }
      if (_0x4ce558 < _0x30e40c) {
        {
          logger.warn(_0x2b1c7b + " 第" + _0x4ce558 + "次尝试失败，1秒后进行下一次重试...");
          await new Promise(_0x48c699 => setTimeout(_0x48c699, 1000));
        }
      }
    }
  }
  logger.error(_0x2b1c7b + " 累计" + _0x30e40c + "次尝试均失败，脚本终止");
  process.exit(1);
}
async function getAccountBasicInfo(_0x4adc4b, _0x5951bd, _0x1a5437 = "?") {
  try {
    {
      const {
        body: _0x51494e
      } = await sendRequest({
        method: "GET",
        url: "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
        headers: {
          Host: "nebula.kuaishou.com",
          "User-Agent": "kwai-android aegon/3.56.0",
          Cookie: _0x4adc4b,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        timeout: 12000
      }, _0x5951bd, "账号[" + _0x1a5437 + "] 获取基本信息");
      if (_0x51494e?.["result"] === 1 && _0x51494e.data) {
        {
          const _0x85c00a = Number(_0x51494e.data.totalCoin) || 0;
          const _0x1bb2ac = Number(_0x51494e.data.allCash) || 0;
          return {
            nickname: _0x51494e.data.userData?.["nickname"] || null,
            totalCoin: _0x85c00a,
            allCash: _0x1bb2ac
          };
        }
      }
    }
  } catch (_0x1466c4) {
    {
      logger.error("账号[" + _0x1a5437 + "] 获取基本信息异常：" + _0x1466c4.message);
    }
  }
  return {
    totalCoin: 0,
    allCash: 0,
    nickname: null
  };
}
function centerAlign(_0x4fe0cf, _0x4882aa) {
  _0x4fe0cf = String(_0x4fe0cf);
  if (_0x4fe0cf.length >= _0x4882aa) {
    return _0x4fe0cf.substring(0, _0x4882aa);
  }
  const _0x340681 = _0x4882aa - _0x4fe0cf.length;
  const _0x5da36a = Math.floor(_0x340681 / 2);
  const _0x1c6b52 = _0x340681 - _0x5da36a;
  return " ".repeat(_0x5da36a) + _0x4fe0cf + " ".repeat(_0x1c6b52);
}
function getTasksToExecute() {
  const _0x7a1c0a = TASK_ORDER.split(",").map(_0x1e9d43 => _0x1e9d43.trim()).filter(_0xbdb7ff => _0xbdb7ff);
  const _0x374dc6 = ["box", "look", "food", "search", "search_follow", "content"];
  const _0x2096a3 = _0x7a1c0a.filter(_0x111915 => _0x374dc6.includes(_0x111915));
  if (_0x2096a3.length === 0) {
    {
      logger.warn("自定义任务列表无效，使用默认任务：box,look,food,search,content");
      return ["box", "look", "food", "search", "content"];
    }
  }
  logger.info("加载自定义任务列表：" + _0x2096a3.join(" → "));
  return _0x2096a3;
}
function waitForLowRewardRetry() {
  const _0x327365 = Math.floor(Math.random() * (KS_LOW_REWARD_RETRY_MAX - KS_LOW_REWARD_RETRY_MIN + 1)) + KS_LOW_REWARD_RETRY_MIN;
  logger.warn("预计奖励低于最低限制(" + KS_MIN_AD_REWARD + "金币)，等待" + _0x327365 + "秒后重新获取广告");
  return new Promise(_0x518e69 => setTimeout(_0x518e69, _0x327365 * 1000));
}
class KuaishouAdTask {
  constructor({
    index: _0x5a8f53,
    salt: _0x5a4c31,
    cookie: _0x3e3777,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = [],
    remark = ""
  }) {
    this.index = _0x5a8f53;
    this.salt = _0x5a4c31;
    this.cookie = _0x3e3777;
    this.nickname = nickname || remark || "账号" + _0x5a8f53;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = KSCOIN_LIMIT;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.adaddnum = 0;
    this.totalRewardCoins = 0;
    this.extractCookieInfo();
    this.headers = {
      Host: "nebula.kuaishou.com",
      Connection: "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      Cookie: this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      box: {
        name: "宝箱广告",
        pageId: 11101,
        businessId: 606,
        posId: 20346,
        subPageId: 100024064,
        requestSceneType: 1,
        taskType: 1
      },
      look: {
        name: "看广告得金币",
        pageId: 11101,
        businessId: 672,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 1,
        taskType: 1
      },
      food: {
        name: "饭补广告",
        pageId: 11101,
        businessId: 9362,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 7,
        taskType: 2
      },
      search: {
        name: "搜索任务",
        pageId: 11014,
        businessId: 7076,
        posId: 216268,
        subPageId: 100161537,
        requestSceneType: 1,
        taskType: 1
      },
      search_follow: {
        name: "搜索任务追加",
        pageId: 11014,
        businessId: 7076,
        posId: 216268,
        subPageId: 100161537,
        requestSceneType: 7,
        taskType: 2
      },
      follow: {
        name: "追加看广告得金币",
        pageId: 11101,
        businessId: 672,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 2,
        taskType: 1
      },
      content: {
        name: "内容任务",
        pageId: 11101,
        businessId: 7054,
        posId: 186550,
        subPageId: 100141480,
        requestSceneType: 1,
        taskType: 1
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x3e984c => {
      {
        if (this.taskConfigs[_0x3e984c]) {
          {
            this.taskStats[_0x3e984c] = {
              success: 0,
              failed: 0,
              totalReward: 0
            };
          }
        }
      }
    });
    this.taskStats.follow = {
      success: 0,
      failed: 0,
      totalReward: 0
    };
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = KSLOW_REWARD_THRESHOLD;
    this.lowRewardLimit = KSLOW_REWARD_LIMIT;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x1552d5 => {
      {
        this.taskLimitReached[_0x1552d5] = false;
      }
    });
    this.taskLimitReached.follow = false;
    this.signatureFailCount = 0;
    this.maxSignatureRetries = 3;
  }
  extractCookieInfo() {
    try {
      {
        const _0x2b051b = this.cookie.match(/egid=([^;]+)/);
        const _0x56e50b = this.cookie.match(/did=([^;]+)/);
        const _0xad2ec4 = this.cookie.match(/userId=([^;]+)/);
        const _0xbd6eb6 = this.cookie.match(/kuaishou\.api_st=([^;]+)/);
        const _0x5aee6a = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x2b051b ? _0x2b051b[1] : "";
        this.did = _0x56e50b ? _0x56e50b[1] : generateKuaishouDid();
        this.userId = _0xad2ec4 ? _0xad2ec4[1] : "";
        this.kuaishouApiSt = _0xbd6eb6 ? _0xbd6eb6[1] : "";
        this.appver = _0x5aee6a ? _0x5aee6a[1] : "13.7.20.10468";
      }
    } catch (_0x304b0c) {
      {
        logger.warn("账号[" + this.nickname + "] 解析cookie失败: " + _0x304b0c.message);
      }
    }
  }
  async checkCoinLimit() {
    try {
      {
        const _0x4dfeef = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
        if (_0x4dfeef?.["totalCoin"] && parseInt(_0x4dfeef.totalCoin) >= this.coinLimit) {
          {
            logger.warn("账号[" + this.nickname + "] 金币已达 " + _0x4dfeef.totalCoin + "，超过 " + this.coinLimit + " 阈值，停止任务");
            this.coinExceeded = true;
            this.stopAllTasks = true;
            return true;
          }
        }
      }
    } catch (_0x18824a) {
      {
        logger.error("账号[" + this.nickname + "] 金币检查异常: " + _0x18824a.message);
      }
    }
    return false;
  }
  getTaskStats() {
    return this.taskStats;
  }
  printTaskStats() {
    if (!KS_SIMPLE_LOG) {
      {
        logger.info("账号[" + this.nickname + "] 任务执行统计:");
        this.tasksToExecute.forEach(_0x2197ce => {
          {
            const _0x1bbd1b = this.taskStats[_0x2197ce];
            const _0x35f98c = this.taskConfigs[_0x2197ce];
            if (_0x1bbd1b && _0x35f98c) {
              {
                console.log("  " + _0x35f98c.name + ": 成功" + _0x1bbd1b.success + "次, 失败" + _0x1bbd1b.failed + "次, 总奖励" + _0x1bbd1b.totalReward + "金币");
              }
            }
          }
        });
        if (KS_ENABLE_FOLLOW_AD) {
          {
            const _0x285df1 = this.taskStats.follow;
            const _0x50e5f7 = this.taskConfigs.follow;
            console.log("  " + _0x50e5f7.name + ": 成功" + _0x285df1.success + "次, 失败" + _0x285df1.failed + "次, 总奖励" + _0x285df1.totalReward + "金币");
          }
        }
      }
    }
  }
  async retryOperation(_0x76fd74, _0x59410c, _0x5afc41 = 3, _0x15d1fd = 2000) {
    for (let _0x367150 = 0; _0x367150 < _0x5afc41; _0x367150++) {
      {
        try {
          {
            const _0x3aeed3 = await _0x76fd74();
            if (_0x3aeed3) {
              return _0x3aeed3;
            }
          }
        } catch (_0x4da608) {
          {
            logger.error("账号[" + this.nickname + "] " + _0x59410c + " 异常: " + _0x4da608.message);
          }
        }
        if (_0x367150 < _0x5afc41 - 1) {
          {
            logger.info("账号[" + this.nickname + "] " + _0x59410c + " 失败，重试 " + (_0x367150 + 1) + "/" + _0x5afc41);
            await new Promise(_0x473be2 => setTimeout(_0x473be2, _0x15d1fd));
          }
        }
      }
    }
    return null;
  }
  async getAdInfo(_0x91a48e) {
    try {
      {
        const _0x10280a = "/rest/e/reward/mixed/ad";
        const _0x585510 = {
          encData: "|encData|",
          sign: "|sign|",
          cs: "false",
          client_key: "2ac2a76d",
          videoModelCrowdTag: "1_23",
          os: "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          uQaTag: "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        };
        const _0x150139 = {
          earphoneMode: "1",
          mod: "Xiaomi(MI 11)",
          appver: this.appver,
          isp: "CUCC",
          language: "zh-cn",
          ud: this.userId,
          did_tag: "0",
          net: "WIFI",
          kcv: "1599",
          app: "0",
          kpf: "ANDROID_PHONE",
          ver: "11.6",
          android_os: "0",
          boardPlatform: "pineapple",
          kpn: "NEBULA",
          androidApiLevel: "35",
          country_code: "cn",
          sys: "ANDROID_15",
          sw: "1080",
          sh: "2400",
          abi: "arm64",
          userRecoBit: "0"
        };
        let _0x26658d = "{}";
        if (_0x91a48e.businessId === 7076 || _0x91a48e.businessId === 7054) {
          {
            const _0x3ce2e6 = _0x91a48e.businessId === 7054 ? "eyJwYWdlSWQiOiAxMTExMSwgInN1YlBhZ2VJZCI6MTAwMTQxNDgwLCJwb3NJZCI6MTg2NTUwLCJidXNpbmVzc0lkIjo3MDU0LCJleHRQYXJhbXMiOiIiLCJjdXN0b21EYXRhIjp7ImV4aXRJbmZvIjp7InRvYXN0RGVzYyI6bnVsbCwidG9hc3RJbWdVcmwiOm51bGx9fSwicGVuZGFudFR5cGUiOjEsImRpc3BsYXlUeXBlIjoyLCJzaW5nbGVQYWdlSWQiOjAsInNpbmdsZVN1YlBhZ2VJZCI6MCwiY2hhbm5lbCI6MCwiY291bnRkb3duUmVwb3J0IjpmYWxzZSwidGhlbWVUeXBlIjowLCJtaXhlZEFkIjp0cnVlLCJmdWxsTWl4ZWQiOnRydWUsImF1dG9SZXBvcnQiOnRydWUsImZyb21UYXNrQ2VudGVyIjp0cnVlLCJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6bnVsbCwiYW1vdW50IjowfQ==" : "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ==";
            _0x26658d = JSON.stringify({
              openH5AdCount: 0,
              sessionLookedCompletedCount: this.adaddnum,
              sessionType: _0x91a48e.requestSceneType === 2 ? "2" : "1",
              searchKey: "短剧小说",
              triggerType: "2",
              disableReportToast: true,
              businessEnterAction: "7",
              neoParams: _0x3ce2e6
            });
          }
        }
        const _0x58b8d8 = {
          appInfo: {
            appId: "kuaishou_nebula",
            name: "快手极速版",
            packageName: "com.kuaishou.nebula",
            version: this.appver,
            versionCode: -1
          },
          deviceInfo: {
            osType: 1,
            osVersion: "15",
            deviceId: this.did,
            screenSize: {
              width: 1080,
              height: 2249
            },
            ftt: ""
          },
          userInfo: {
            userId: this.userId,
            age: 0,
            gender: ""
          },
          impInfo: [{
            pageId: _0x91a48e.pageId || 11101,
            subPageId: _0x91a48e.subPageId,
            action: 0,
            browseType: 3,
            impExtData: _0x26658d,
            mediaExtData: "{}"
          }]
        };
        const _0x78792a = Buffer.from(JSON.stringify(_0x58b8d8)).toString("base64");
        const _0x224b60 = await this.getSign(_0x78792a);
        if (!_0x224b60) {
          return null;
        }
        _0x585510.encData = _0x224b60.encdata;
        _0x585510.sign = _0x224b60.sign;
        const _0x1e22f6 = await this.requestSignService({
          urlpath: _0x10280a,
          reqdata: qs.stringify(_0x585510) + "&" + qs.stringify(_0x150139),
          api_client_salt: this.salt
        });
        if (!_0x1e22f6) {
          return null;
        }
        const _0x5d9b18 = {
          ..._0x150139,
          sig: _0x1e22f6.sig,
          __NS_sig3: _0x1e22f6.__NS_sig3,
          __NS_xfalcon: _0x1e22f6.__NS_xfalcon,
          __NStokensig: _0x1e22f6.__NStokensig
        };
        const _0x33a973 = "https://api.e.kuaishou.com" + _0x10280a + "?" + querystring.stringify(_0x5d9b18);
        const {
          body: _0x543e43
        } = await sendRequest({
          method: "POST",
          url: _0x33a973,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Host: "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            Cookie: "kuaishou_api_st=" + this.kuaishouApiSt
          },
          form: _0x585510,
          timeout: 12000
        }, this.proxyUrl, "账号[" + this.nickname + "] 获取广告");
        if (_0x543e43?.["errorMsg"] === "OK" && _0x543e43.feeds?.[0]?.["ad"]) {
          {
            const _0x28fead = _0x543e43.feeds[0];
            const _0x8d6f8f = _0x28fead.caption || _0x28fead.ad.caption || "";
            const _0x574159 = _0x8d6f8f || "无标题";
            const _0x13433b = _0x8d6f8f.includes("直播") || _0x8d6f8f.includes("LIVE") || _0x28fead.ad?.["liveInfo"] && _0x28fead.ad.liveInfo.isLive || (() => {
              {
                let _0x3e7204 = 0;
                try {
                  {
                    if (_0x28fead.ad?.["adDataV2"]?.["inspirePersonalize"]?.["awardValue"]) {
                      {
                        _0x3e7204 = parseInt(_0x28fead.ad.adDataV2.inspirePersonalize.awardValue) || 0;
                      }
                    } else {
                      if (_0x28fead.ad?.["awardCoin"]) {
                        {
                          _0x3e7204 = parseInt(_0x28fead.ad.awardCoin) || 0;
                        }
                      } else {
                        if (_0x28fead.ad?.["adDataV2"]?.["inspireAdInfo"]?.["neoCount"]) {
                          {
                            _0x3e7204 = parseInt(_0x28fead.ad.adDataV2.inspireAdInfo.neoCount) || 0;
                          }
                        }
                      }
                    }
                  }
                } catch (_0x2cdc63) {
                  {
                    _0x3e7204 = 0;
                  }
                }
                return _0x3e7204 === 0 || _0x3e7204 === 5;
              }
            })();
            if (_0x13433b && !KS_ALLOW_LIVE_AD) {
              {
                logger.simple("账号[" + this.nickname + "] 跳过直播广告（未知金币/5金币）：" + _0x574159.substring(0, 20) + "...");
                if (!KS_SIMPLE_LOG) {
                  {
                    logger.info("账号[" + this.nickname + "] 跳过直播广告（未知金币/5金币）：" + _0x574159.substring(0, 20) + "...");
                  }
                }
                return this.getAdInfo(_0x91a48e);
              }
            }
            let _0x1cf45d = 0;
            try {
              {
                if (_0x28fead.ad?.["adDataV2"]?.["inspirePersonalize"]?.["awardValue"]) {
                  {
                    _0x1cf45d = parseInt(_0x28fead.ad.adDataV2.inspirePersonalize.awardValue) || 0;
                  }
                } else {
                  if (_0x28fead.ad?.["awardCoin"]) {
                    {
                      _0x1cf45d = parseInt(_0x28fead.ad.awardCoin) || 0;
                    }
                  } else {
                    if (_0x28fead.ad?.["adDataV2"]?.["inspireAdInfo"]?.["neoCount"]) {
                      {
                        _0x1cf45d = parseInt(_0x28fead.ad.adDataV2.inspireAdInfo.neoCount) || 0;
                      }
                    }
                  }
                }
              }
            } catch (_0x559a89) {
              {
                logger.debug("账号[" + this.nickname + "] 解析预估金币异常: " + _0x559a89.message);
              }
            }
            if (_0x1cf45d < KS_MIN_AD_REWARD) {
              {
                await waitForLowRewardRetry();
                return this.getAdInfo(_0x91a48e);
              }
            }
            if (KS_SIMPLE_LOG) {
              {
                logger.simple("账号[" + this.nickname + "] 获取到广告：" + _0x574159.substring(0, 20) + " ||| 预计获得 " + (_0x1cf45d || "未知") + " 金币");
              }
            } else {
              {
                if (_0x1cf45d > 0) {
                  {
                    logger.info("账号[" + this.nickname + "] 成功获取广告: " + _0x574159.substring(0, 20) + " ||| 预计获得 " + _0x1cf45d + " 金币");
                  }
                } else {
                  {
                    logger.info("账号[" + this.nickname + "] 成功获取广告: " + _0x574159.substring(0, 20) + " ||| 预计获得未知金币");
                  }
                }
              }
            }
            const _0x27dd1e = _0x28fead.exp_tag || "";
            const _0x5bfaa6 = _0x27dd1e.split("/")[1]?.["split"]("_")?.[0] || "";
            return {
              cid: _0x28fead.ad.creativeId,
              llsid: _0x5bfaa6,
              estimatedCoins: _0x1cf45d
            };
          }
        }
        return null;
      }
    } catch (_0x4c0ca2) {
      {
        logger.error("账号[" + this.nickname + "] 获取广告异常: " + _0x4c0ca2.message);
        return null;
      }
    }
  }
  async getSign(_0xe244ff) {
    try {
      {
        const {
          body: _0x2e907c
        } = await sendRequest({
          method: "POST",
          url: "",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            data: _0xe244ff
          })
        }, null, "账号[" + this.nickname + "] encsign签名");
        if (_0x2e907c?.["status"]) {
          {
            this.signatureFailCount = 0;
            return _0x2e907c.data;
          }
        } else {
          {
            this.signatureFailCount++;
            logger.warn("账号[" + this.nickname + "] encsign签名失败，累计失败 " + this.signatureFailCount + "/" + this.maxSignatureRetries + " 次");
            if (this.signatureFailCount >= this.maxSignatureRetries) {
              {
                logger.error("账号[" + this.nickname + "] 签名连续失败 " + this.signatureFailCount + " 次，触发版本检测");
                const _0x5f2003 = await hotUpdateScript(true);
                if (_0x5f2003.signatureUpdated) {
                  {
                    logger.info("账号[" + this.nickname + "] 签名接口已更新，重置失败计数");
                    this.signatureFailCount = 0;
                  }
                }
              }
            }
          }
        }
        return null;
      }
    } catch (_0x5194c5) {
      {
        this.signatureFailCount++;
        logger.error("账号[" + this.nickname + "] encsign 异常: " + _0x5194c5.message);
        if (this.signatureFailCount >= this.maxSignatureRetries) {
          {
            logger.error("账号[" + this.nickname + "] 签名连续异常 " + this.signatureFailCount + " 次，触发版本检测");
            const _0x5d34ad = await hotUpdateScript(true);
            if (_0x5d34ad.signatureUpdated) {
              {
                logger.info("账号[" + this.nickname + "] 签名接口已更新，重置失败计数");
                this.signatureFailCount = 0;
              }
            }
          }
        }
        return null;
      }
    }
  }
  async requestSignService(_0x1a29f4, _0x3c3ac4) {
    try {
      {
        const {
          body: _0x5ecafd
        } = await sendRequest({
          method: "POST",
          url: "",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0"
          },
          body: JSON.stringify({
            path: _0x1a29f4.urlpath,
            data: _0x1a29f4.reqdata,
            salt: _0x1a29f4.api_client_salt
          }),
          timeout: 15000
        }, null, (_0x3c3ac4 || "账号[" + this.nickname + "]") + "（nssig签名服务）");
        if (_0x5ecafd?.["data"]) {
          {
            this.signatureFailCount = 0;
            return {
              sig: _0x5ecafd.data.sig,
              __NS_sig3: _0x5ecafd.data.nssig3,
              __NStokensig: _0x5ecafd.data.nstokensig,
              __NS_xfalcon: _0x5ecafd.data.nssig4
            };
          }
        } else {
          {
            this.signatureFailCount++;
            logger.warn("账号[" + this.nickname + "] nssig签名失败，累计失败 " + this.signatureFailCount + "/" + this.maxSignatureRetries + " 次");
            if (this.signatureFailCount >= this.maxSignatureRetries) {
              {
                logger.error("账号[" + this.nickname + "] 签名连续失败 " + this.signatureFailCount + " 次，触发版本检测");
                const _0x297374 = await hotUpdateScript(true);
                if (_0x297374.signatureUpdated) {
                  {
                    logger.info("账号[" + this.nickname + "] 签名接口已更新，重置失败计数");
                    this.signatureFailCount = 0;
                  }
                }
              }
            }
          }
        }
        logger.error("账号[" + this.nickname + "] nssig签名失败: " + (_0x5ecafd?.["error"] || "无响应"));
      }
    } catch (_0xf9165d) {
      {
        this.signatureFailCount++;
        logger.error("账号[" + this.nickname + "] nssig签名请求异常: " + _0xf9165d.message);
        if (this.signatureFailCount >= this.maxSignatureRetries) {
          {
            logger.error("账号[" + this.nickname + "] 签名连续异常 " + this.signatureFailCount + " 次，触发版本检测");
            const _0x1abfba = await hotUpdateScript(true);
            if (_0x1abfba.signatureUpdated) {
              {
                logger.info("账号[" + this.nickname + "] 签名接口已更新，重置失败计数");
                this.signatureFailCount = 0;
              }
            }
          }
        }
      }
    }
    return null;
  }
  async generateSignature(_0x7a90b9, _0x45b243, _0x3ae90b, _0x400e4c) {
    try {
      {
        const _0x24365f = JSON.stringify({
          businessId: _0x400e4c.businessId,
          endTime: this.endTime,
          extParams: "",
          mediaScene: "video",
          neoInfos: [{
            creativeId: _0x7a90b9,
            extInfo: "",
            llsid: _0x45b243,
            requestSceneType: _0x400e4c.requestSceneType,
            taskType: _0x400e4c.taskType,
            watchExpId: "",
            watchStage: 0
          }],
          pageId: _0x400e4c.pageId,
          posId: _0x400e4c.posId,
          reportType: 0,
          sessionId: "",
          startTime: this.startTime,
          subPageId: _0x400e4c.subPageId
        });
        const _0x13c52a = "bizStr=" + encodeURIComponent(_0x24365f) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt;
        const _0xbeff6f = this.queryParams + "&" + _0x13c52a;
        const _0x5d29f5 = await this.requestSignService({
          urlpath: this.taskReportPath,
          reqdata: _0xbeff6f,
          api_client_salt: this.salt
        }, "账号[" + this.nickname + "] 生成签名");
        return _0x5d29f5 ? {
          sig: _0x5d29f5.sig,
          sig3: _0x5d29f5.__NS_sig3,
          sigtoken: _0x5d29f5.__NStokensig,
          xfalcon: _0x5d29f5.__NS_xfalcon,
          post: _0x13c52a
        } : null;
      }
    } catch (_0x44e4cf) {
      {
        logger.error("账号[" + this.nickname + "] 生成签名异常: " + _0x44e4cf.message);
        return null;
      }
    }
  }
  async submitReport(_0x468bf7, _0x3c54f8, _0x5acd40, _0xfc0d64, _0x183759, _0x369b1f, _0x4207ce) {
    try {
      {
        const _0x3e991e = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + this.queryParams + "&sig=" + _0x468bf7 + "&__NS_sig3=" + _0x3c54f8 + "&__NS_xfalcon=" + _0xfc0d64 + "&__NStokensig=" + _0x5acd40;
        const {
          body: _0x201ba9
        } = await sendRequest({
          method: "POST",
          url: _0x3e991e,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Host: "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0"
          },
          body: _0x183759,
          timeout: 12000
        }, this.proxyUrl, "账号[" + this.nickname + "] 提交任务");
        if (!_0x201ba9) {
          return {
            success: false,
            reward: 0
          };
        }
        if (_0x201ba9.result === 1) {
          {
            const _0x48df9b = _0x201ba9.data?.["neoAmount"] || 0;
            this.totalRewardCoins += _0x48df9b;
            const _0x506448 = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
            const _0x195fba = Number(_0x506448?.["totalCoin"]) || 0;
            const _0x28b405 = Number(_0x506448?.["allCash"]) || 0;
            const _0x7fd745 = _0x28b405.toFixed(2);
            if (KS_SIMPLE_LOG) {
              {
                logger.simple("账号[" + this.nickname + "] 实际获得 " + _0x48df9b + " 金币，累计获得 " + this.totalRewardCoins + " 金币，账户当前 " + _0x195fba + " 金币（现金余额：" + _0x7fd745 + "）");
              }
            } else {
              {
                logger.success("账号[" + this.nickname + "] " + _0x4207ce.name + " → 本次获得 " + _0x48df9b + " 金币，累积获得 " + this.totalRewardCoins + " 金币，账户当前 " + _0x195fba + " 金币（现金余额：" + _0x7fd745 + "）");
              }
            }
            if (_0x48df9b === 5) {
              {
                if (!KS_SIMPLE_LOG) {
                  {
                    logger.info("这是直播广告，不计入低奖励统计");
                  }
                }
                this.lowRewardStreak = 0;
              }
            } else {
              if (_0x48df9b <= this.lowRewardThreshold && _0x48df9b !== 5) {
                {
                  this.lowRewardStreak++;
                  if (!KS_SIMPLE_LOG) {
                    {
                      logger.warn("账号[" + this.nickname + "] 奖励(" + _0x48df9b + ")低于阈值(" + this.lowRewardThreshold + ")，连续第" + this.lowRewardStreak + "/" + this.lowRewardLimit + "次");
                    }
                  }
                  if (this.lowRewardStreak >= this.lowRewardLimit) {
                    {
                      if (!KS_SIMPLE_LOG) {
                        {
                          logger.error("账号[" + this.nickname + "] 连续低奖励达上限，停止全部任务");
                        }
                      }
                      this.stopAllTasks = true;
                    }
                  }
                }
              } else {
                {
                  this.lowRewardStreak = 0;
                }
              }
            }
            return {
              success: true,
              reward: _0x48df9b
            };
          }
        }
        if ([20107, 20108, 1003, 415].includes(_0x201ba9.result)) {
          {
            if (!KS_SIMPLE_LOG) {
              {
                logger.warn("账号[" + this.nickname + "] " + _0x4207ce.name + " 已达上限");
              }
            }
            this.taskLimitReached[_0x369b1f] = true;
            return {
              success: false,
              reward: 0
            };
          }
        }
        if (!KS_SIMPLE_LOG) {
          {
            logger.error("账号[" + this.nickname + "] " + _0x4207ce.name + " 失败: result=" + _0x201ba9.result);
          }
        }
        return {
          success: false,
          reward: 0
        };
      }
    } catch (_0x19840e) {
      {
        if (KS_SIMPLE_LOG) {
          {
            logger.simple("账号[" + this.nickname + "] 提交任务异常: " + _0x19840e.message);
          }
        } else {
          {
            logger.error("账号[" + this.nickname + "] 提交任务异常: " + _0x19840e.message);
          }
        }
        return {
          success: false,
          reward: 0
        };
      }
    }
  }
  async executeSingleTask(_0x48602f) {
    const _0xf61ea1 = this.taskConfigs[_0x48602f];
    if (!_0xf61ea1 || this.taskLimitReached[_0x48602f]) {
      return false;
    }
    try {
      {
        const _0x1324ea = await this.retryOperation(() => this.getAdInfo(_0xf61ea1), "获取" + _0xf61ea1.name + "信息", 3);
        if (!_0x1324ea) {
          {
            this.taskStats[_0x48602f].failed++;
            return false;
          }
        }
        const _0x5ee85c = Math.floor(Math.random() * (KS_AD_WATCH_MAX - KS_AD_WATCH_MIN + 1)) + KS_AD_WATCH_MIN;
        if (!KS_SIMPLE_LOG) {
          {
            logger.info("账号[" + this.nickname + "] → " + _0xf61ea1.name + " " + generateRandomInteractionMessage() + " " + _0x5ee85c + "秒");
          }
        }
        await new Promise(_0x41e740 => setTimeout(_0x41e740, _0x5ee85c * 1000));
        const _0x5a50ba = await this.retryOperation(() => this.generateSignature(_0x1324ea.cid, _0x1324ea.llsid, _0x48602f, _0xf61ea1), "生成" + _0xf61ea1.name + "签名", 3);
        if (!_0x5a50ba) {
          {
            this.taskStats[_0x48602f].failed++;
            return false;
          }
        }
        const _0x5ad16a = await this.retryOperation(() => this.submitReport(_0x5a50ba.sig, _0x5a50ba.sig3, _0x5a50ba.sigtoken, _0x5a50ba.xfalcon, _0x5a50ba.post, _0x48602f, _0xf61ea1), "提交" + _0xf61ea1.name + "报告", 3);
        if (_0x5ad16a?.["success"]) {
          {
            this.taskStats[_0x48602f].success++;
            this.taskStats[_0x48602f].totalReward += _0x5ad16a.reward || 0;
            return true;
          }
        }
        this.taskStats[_0x48602f].failed++;
        return false;
      }
    } catch (_0x52ba59) {
      {
        if (KS_SIMPLE_LOG) {
          {
            logger.simple("账号[" + this.nickname + "] 任务异常(" + _0x48602f + "): " + _0x52ba59.message);
          }
        } else {
          {
            logger.error("账号[" + this.nickname + "] 任务异常(" + _0x48602f + "): " + _0x52ba59.message);
          }
        }
        this.taskStats[_0x48602f].failed++;
        return false;
      }
    }
  }
  async executeFollowAdOnce() {
    const _0x42900d = "follow";
    const _0x344450 = this.taskConfigs[_0x42900d];
    if (!_0x344450 || this.taskLimitReached[_0x42900d] || this.stopAllTasks) {
      {
        if (!KS_SIMPLE_LOG) {
          {
            logger.info("账号[" + this.nickname + "] 追加广告已达上限或任务停止，跳过");
          }
        }
        return false;
      }
    }
    if (!KS_SIMPLE_LOG) {
      {
        logger.info("账号[" + this.nickname + "] 开始执行追加广告任务（仅一次）");
      }
    }
    return await this.executeSingleTask(_0x42900d);
  }
  async executeAllTasksByPriority() {
    let _0xe958ad = 0;
    let _0x492bdd = 0;
    while (_0xe958ad < KS_TOTAL_TASK_COUNT && !this.stopAllTasks) {
      {
        const _0x2ebb87 = this.tasksToExecute[_0x492bdd % this.tasksToExecute.length];
        const _0x25ab4b = this.taskConfigs[_0x2ebb87];
        if (!_0x25ab4b) {
          {
            _0x492bdd++;
            continue;
          }
        }
        if (this.taskLimitReached[_0x2ebb87]) {
          {
            if (!KS_SIMPLE_LOG) {
              {
                logger.info("跳过已达上限任务: " + _0x25ab4b.name);
              }
            }
            _0x492bdd++;
            continue;
          }
        }
        _0xe958ad++;
        if (!KS_SIMPLE_LOG) {
          {
            logger.info("第" + _0xe958ad + "/" + KS_TOTAL_TASK_COUNT + "次任务 → " + _0x25ab4b.name);
          }
        }
        await this.executeSingleTask(_0x2ebb87);
        if (_0xe958ad < KS_TOTAL_TASK_COUNT && !this.stopAllTasks) {
          {
            const _0x4ded83 = Math.floor(Math.random() * (KS_TASK_INTERVAL_MAX - KS_TASK_INTERVAL_MIN + 1)) + KS_TASK_INTERVAL_MIN;
            if (!KS_SIMPLE_LOG) {
              {
                logger.info("任务间隔休眠 " + _0x4ded83 + " 秒...");
              }
            }
            await new Promise(_0x58c002 => setTimeout(_0x58c002, _0x4ded83 * 1000));
          }
        }
        _0x492bdd++;
      }
    }
    if (KS_ENABLE_FOLLOW_AD && !this.stopAllTasks) {
      {
        await this.executeFollowAdOnce();
        const _0x29abad = Math.floor(Math.random() * (KS_TASK_INTERVAL_MAX - KS_TASK_INTERVAL_MIN + 1)) + KS_TASK_INTERVAL_MIN;
        if (!KS_SIMPLE_LOG) {
          {
            logger.info("追加广告完成，休眠 " + _0x29abad + " 秒...");
          }
        }
        await new Promise(_0x1f39b7 => setTimeout(_0x1f39b7, _0x29abad * 1000));
      }
    }
    return {};
  }
}
function parseAccountConfig(_0x157e43) {
  const _0x46f57c = String(_0x157e43 || "").trim().split("#");
  if (_0x46f57c.length < 2) {
    {
      if (!KS_SIMPLE_LOG) {
        {
          logger.warn("账号配置无效：" + _0x157e43 + "（格式应为cookie#salt或cookie#salt#代理配置）");
        }
      }
      return null;
    }
  }
  let _0x365242 = "";
  let _0x2dc52f = "";
  let _0x3a7aa5 = null;
  let _0x388824 = "local";
  if (_0x46f57c.length === 2) {
    {
      [_0x365242, _0x2dc52f] = _0x46f57c;
      logger.debug("账号配置解析为本地模式：cookie=" + _0x365242.substring(0, 20) + "...，salt=" + _0x2dc52f);
    }
  } else {
    {
      _0x365242 = _0x46f57c[0];
      _0x2dc52f = _0x46f57c[1];
      _0x3a7aa5 = _0x46f57c.slice(2).join("#");
      if (_0x3a7aa5 && /^socks5:\/\//i.test(_0x3a7aa5)) {
        {
          try {
            {
              new URL(_0x3a7aa5);
              _0x388824 = "proxy";
              logger.debug("账号配置解析为代理模式：cookie=" + _0x365242.substring(0, 20) + "...，salt=" + _0x2dc52f + "，proxy=" + _0x3a7aa5);
            }
          } catch (_0x19a5f1) {
            {
              if (!KS_SIMPLE_LOG) {
                {
                  logger.warn("代理URL无效：" + _0x3a7aa5 + "（错误：" + _0x19a5f1.message + "），自动切换为本地模式");
                }
              }
              _0x3a7aa5 = null;
            }
          }
        }
      } else {
        {
          if (!KS_SIMPLE_LOG) {
            {
              logger.warn("代理配置无效：" + _0x3a7aa5 + "（需以socks5://开头），自动切换为本地模式");
            }
          }
          _0x3a7aa5 = null;
        }
      }
    }
  }
  return {
    cookie: _0x365242.trim(),
    salt: _0x2dc52f.trim(),
    proxyUrl: _0x3a7aa5?.["trim"]() || null,
    mode: _0x388824
  };
}
function loadAccountsFromEnv() {
  const _0x486c3b = [];
  const _0x55891e = new Set();
  if (process.env.ksck) {
    {
      process.env.ksck.split("&").map(_0x3f7692 => _0x3f7692.trim()).filter(Boolean).forEach(_0x25c546 => {
        {
          if (!_0x55891e.has(_0x25c546)) {
            {
              _0x486c3b.push(_0x25c546);
              _0x55891e.add(_0x25c546);
            }
          }
        }
      });
    }
  }
  for (let _0x1b3a1b = 1; _0x1b3a1b <= 666; _0x1b3a1b++) {
    {
      const _0x2bb97e = "ksck" + _0x1b3a1b;
      if (process.env[_0x2bb97e]) {
        {
          const _0x4364f0 = process.env[_0x2bb97e].trim();
          if (_0x4364f0 && !_0x55891e.has(_0x4364f0)) {
            {
              _0x486c3b.push(_0x4364f0);
              _0x55891e.add(_0x4364f0);
            }
          }
        }
      }
    }
  }
  return _0x486c3b.map((_0x4fd125, _0x3873bb) => {
    {
      const _0x2e741a = parseAccountConfig(_0x4fd125);
      if (_0x2e741a) {
        {
          _0x2e741a.index = _0x3873bb + 1;
          return _0x2e741a;
        }
      }
      return null;
    }
  }).filter(Boolean);
}
async function concurrentExecute(_0x53fdf2, _0x594c0d, processor) {
  const _0x4515c0 = new Array(_0x53fdf2.length);
  let _0x3a6e79 = 0;
  const _0x2746b3 = [];
  for (let _0x1b1ad7 = 0; _0x1b1ad7 < _0x594c0d; _0x1b1ad7++) {
    _0x2746b3.push((async () => {
      while (true) {
        const _0x3a73fd = _0x3a6e79++;
        if (_0x3a73fd >= _0x53fdf2.length) {
          return;
        }
        const _0x3b378a = _0x53fdf2[_0x3a73fd];
        try {
          {
            _0x4515c0[_0x3a73fd] = await processor(_0x3b378a, _0x3a73fd);
          }
        } catch (_0x2d82af) {
          if (KS_SIMPLE_LOG) {
            {
              logger.simple("并发执行异常（账号" + (_0x3a73fd + 1) + "）：" + _0x2d82af.message);
            }
          } else {
            logger.error("并发执行异常（账号" + (_0x3a73fd + 1) + "）：" + _0x2d82af.message);
          }
          _0x4515c0[_0x3a73fd] = {
            error: _0x2d82af.message,
            skipped: true,
            initialCoin: 0,
            finalCoin: 0,
            nickname: "账号" + (_0x3a73fd + 1),
            coinChange: 0
          };
        }
      }
    })());
  }
  await Promise.all(_0x2746b3);
  return _0x4515c0;
}
async function processAccount(_0x17ba78) {
  const {
    index: _0x5b9eb3,
    cookie: _0x6811b0,
    salt: _0x5611eb,
    proxyUrl: _0x29c6ab,
    mode: _0x2a74d5
  } = _0x17ba78;
  let _0x5dbc02 = "账号" + _0x5b9eb3;
  let _0x19dc3d = 0;
  let _0x4ae6ab = 0;
  let _0x30030d = 0;
  let _0x278318 = false;
  let _0x308637 = false;
  try {
    if (_0x2a74d5 === "proxy") {
      const _0x2e61e7 = await testProxyConnectivity(_0x29c6ab, "账号[" + _0x5dbc02 + "] 代理检测");
      if (!_0x2e61e7.ok) {
        logger.error("账号[" + _0x5dbc02 + "] 代理检测失败，跳过该账号");
        _0x278318 = true;
        return {
          index: _0x5b9eb3,
          nickname: _0x5dbc02,
          initialCoin: _0x19dc3d,
          finalCoin: _0x4ae6ab,
          coinChange: _0x30030d,
          skipped: _0x278318,
          coinLimitExceeded: _0x308637
        };
      }
      const _0x406966 = _0x2e61e7.ip;
      if (usedProxies.has(_0x406966)) {
        logger.warn("账号[" + _0x5dbc02 + "] 代理IP(" + _0x406966 + ")已被使用，跳过该账号");
        _0x278318 = true;
        return {
          index: _0x5b9eb3,
          nickname: _0x5dbc02,
          initialCoin: _0x19dc3d,
          finalCoin: _0x4ae6ab,
          coinChange: _0x30030d,
          skipped: _0x278318,
          coinLimitExceeded: _0x308637
        };
      }
      usedProxies.add(_0x406966);
    }
    const _0x2537d2 = await getAccountBasicInfo(_0x6811b0, _0x29c6ab, _0x5b9eb3);
    if (_0x2537d2.nickname) {
      _0x5dbc02 = _0x2537d2.nickname;
    }
    _0x19dc3d = _0x2537d2.totalCoin;
    logger.info("账号[" + _0x5dbc02 + "] 初始金币：" + _0x19dc3d + "，现金余额：" + _0x2537d2.allCash.toFixed(2));
    if (_0x19dc3d >= KSCOIN_LIMIT) {
      logger.warn("账号[" + _0x5dbc02 + "] 初始金币(" + _0x19dc3d + ")已达上限(" + KSCOIN_LIMIT + ")，跳过任务");
      _0x278318 = true;
      _0x308637 = true;
      _0x4ae6ab = _0x19dc3d;
      return {
        index: _0x5b9eb3,
        nickname: _0x5dbc02,
        initialCoin: _0x19dc3d,
        finalCoin: _0x4ae6ab,
        coinChange: _0x30030d,
        skipped: _0x278318,
        coinLimitExceeded: _0x308637
      };
    }
    const _0x521eb4 = getTasksToExecute();
    const _0x55b615 = new KuaishouAdTask({
      index: _0x5b9eb3,
      salt: _0x5611eb,
      cookie: _0x6811b0,
      nickname: _0x5dbc02,
      proxyUrl: _0x29c6ab,
      tasksToExecute: _0x521eb4
    });
    if (await _0x55b615.checkCoinLimit()) {
      _0x308637 = true;
      _0x4ae6ab = _0x19dc3d;
      return {
        index: _0x5b9eb3,
        nickname: _0x5dbc02,
        initialCoin: _0x19dc3d,
        finalCoin: _0x4ae6ab,
        coinChange: _0x30030d,
        skipped: _0x278318,
        coinLimitExceeded: _0x308637
      };
    }
    await _0x55b615.executeAllTasksByPriority();
    const _0x11bf50 = await getAccountBasicInfo(_0x6811b0, _0x29c6ab, _0x5b9eb3);
    _0x4ae6ab = _0x11bf50.totalCoin;
    _0x30030d = _0x4ae6ab - _0x19dc3d;
    _0x55b615.printTaskStats();
    logger.success("账号[" + _0x5dbc02 + "] 任务执行完成 | 初始：" + _0x19dc3d + " | 最终：" + _0x4ae6ab + " | 收益：" + _0x30030d + " 金币");
  } catch (_0xd2a3dc) {
    logger.error("账号[" + _0x5dbc02 + "] 处理异常：" + _0xd2a3dc.message);
    _0x278318 = true;
    _0x4ae6ab = _0x19dc3d;
  }
  return {
    index: _0x5b9eb3,
    nickname: _0x5dbc02,
    initialCoin: _0x19dc3d,
    finalCoin: _0x4ae6ab,
    coinChange: _0x30030d,
    skipped: _0x278318,
    coinLimitExceeded: _0x308637
  };
}
async function main() {
  try {
    await fetchAnnouncement();
    const _0x4ec04b = await verifyAuth();
    if (!_0x4ec04b) {
      logger.error("授权验证失败，脚本终止");
      process.exit(1);
    }
    if (APP_CONFIG.ENABLE_HOT_UPDATE) {
      await hotUpdateScript();
    }
    const _0x2bb634 = loadAccountsFromEnv();
    if (_0x2bb634.length === 0) {
      logger.error("未配置任何有效账号（请设置ksck或ksck1~ksck666环境变量），脚本终止");
      process.exit(1);
    }
    logger.success("共加载到 " + _0x2bb634.length + " 个有效账号");
    const _0x24a214 = await concurrentExecute(_0x2bb634, MAX_CONCURRENCY, processAccount);
    if (KS_EXPORT_CSV) {
      await exportToCsv(_0x24a214);
    }
    if (KS_EXPORT_TXT) {
      await exportToTxtTable(_0x24a214);
    }
    if (!KS_SIMPLE_LOG) {
      console.log("\n" + "=".repeat(80));
      logger.info("所有账号任务执行完成，总统计：");
      let _0x269134 = 0;
      let _0x59a59a = 0;
      let _0x33cd3b = 0;
      let _0x2300e5 = 0;
      let _0x31356a = 0;
      _0x24a214.forEach(_0x7253ab => {
        _0x269134 += Number(_0x7253ab.initialCoin) || 0;
        _0x59a59a += Number(_0x7253ab.finalCoin) || 0;
        _0x33cd3b += Number(_0x7253ab.coinChange) || 0;
        if (_0x7253ab.skipped) {
          _0x2300e5++;
        }
        if (_0x7253ab.coinLimitExceeded) {
          _0x31356a++;
        }
      });
      console.log("  账号总数：" + _0x24a214.length + " 个");
      console.log("  跳过账号：" + _0x2300e5 + " 个（含代理失败/金币上限/异常）");
      console.log("  金币上限账号：" + _0x31356a + " 个");
      console.log("  总初始金币：" + _0x269134 + " 个");
      console.log("  总最终金币：" + _0x59a59a + " 个");
      console.log("  总收益金币：" + _0x33cd3b + " 个");
      console.log("=".repeat(80) + "\n");
    }
  } catch (_0x58fe43) {
    logger.error("主程序异常：" + _0x58fe43.message);
    process.exit(1);
  }
}
main().catch(_0x3f0c24 => {
  logger.error("脚本启动失败：" + _0x3f0c24.message);
  process.exit(1);
});