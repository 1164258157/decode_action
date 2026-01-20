//Tue Jan 20 2026 05:22:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const querystring = require("querystring");
const axios = require("axios");
const util = require("util");
const fs = require("fs");
const path = require("path");
const {
  promisify
} = require("util");
const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);
const CURRENT_VERSION = "1.8.2";
const UPDATE_CHECK_URL = "http://47.239.198.88:8080/ks-update-info";
const ENV_CONFIG = {
  SEARCH_KEYWORDS: process.env.KS_SEARCH_KEYWORDS?.["split"](",") || ["短剧小说", "热门视频", "美食教程"],
  SEARCH_MODE: process.env.KS_SEARCH_MODE || "cycle",
  DEFAULT_TASKS: process.env.KS_DEFAULT_TASKS?.["split"](",") || ["box", "look", "food", "search"],
  CYCLE_ROUNDS: parseInt(process.env.KS_CYCLE_ROUNDS || 0),
  TASK_ORDER: process.env.KS_TASK_ORDER?.["split"](",") || [],
  WATCH_MIN: parseInt(process.env.KS_WATCH_MIN || 30),
  WATCH_MAX: parseInt(process.env.KS_WATCH_MAX || 40),
  AD_FAIL_LIMIT: parseInt(process.env.KS_AD_FAIL_LIMIT || 10),
  STOP_THRESHOLD: parseInt(process.env.KS_STOP_THRESHOLD || 5),
  LOW_REWARD_THRESHOLD: parseInt(process.env.KS_LOW_REWARD_THRESHOLD || 10),
  LOW_REWARD_LIMIT: parseInt(process.env.KS_LOW_REWARD_LIMIT || 3),
  APPEND_REST_INTERVAL: parseInt(process.env.KS_APPEND_INTERVAL || 5),
  APPEND_REST_MIN: parseInt(process.env.KS_APPEND_MIN || 5000),
  APPEND_REST_MAX: parseInt(process.env.KS_APPEND_MAX || 10000),
  MAX_AUTH_ERRORS: parseInt(process.env.KS_MAX_AUTH_ERRORS || 5),
  PHP_PROXY_URL: process.env.PHP_PROXY_URL || "http://101.43.37.172:54188/signature_proxy.php",
  PHP_PROXY_KEY: process.env.KS_CARD_KEY || "",
  PLATFORM_CONFIG: {
    KUAISHOU: {
      name: "KS",
      accountInfoUrl: "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo",
      host: "encourage.kuaishou.com",
      appId: "kuaishou",
      packageName: "com.smile.gifmaker",
      appName: "快手",
      kpn: "KUAISHOU"
    },
    NEBULA: {
      name: "jsb",
      accountInfoUrl: "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
      host: "nebula.kuaishou.com",
      appId: "kuaishou_nebula",
      packageName: "com.kuaishou.nebula",
      appName: "快手极速版",
      kpn: "NEBULA"
    }
  },
  LOG_TARGET: process.env.KS_LOG_TARGET || "USER",
  LOG_LEVEL: process.env.KS_LOG_LEVEL || "normal"
};
let updateInfo = null;
function logUser(_0x1ec09d, _0x4f9c92 = "info") {
  const _0x44bff8 = {
    info: "ℹ️",
    success: "✅",
    warn: "⚠️",
    error: "❌"
  };
  const _0x85db48 = _0x44bff8[_0x4f9c92] || "ℹ️";
  console.log(_0x85db48 + " " + _0x1ec09d);
}
function logDev(_0xaee211, _0x278c5d = null) {
  if (ENV_CONFIG.LOG_TARGET !== "DEV") {
    return;
  }
  console.log("\n🔧 [开发者日志] " + _0xaee211);
  _0x278c5d && console.log("   详情: " + util.inspect(_0x278c5d, {
    depth: ENV_CONFIG.LOG_LEVEL === "detail" ? 5 : 2
  }));
}
function logError(_0x589666, _0x755aa0, _0x381f10 = "") {
  logUser(_0x589666, "error");
  if (ENV_CONFIG.LOG_TARGET === "DEV") {
    console.log("\n❌ [开发者日志-错误详情] " + (_0x381f10 || "未知上下文"));
    console.log("   错误信息: " + _0x755aa0.message);
    ENV_CONFIG.LOG_LEVEL === "detail" && console.log("   错误堆栈: " + _0x755aa0.stack.substring(0, 500));
    _0x755aa0.config && console.log("   请求配置: " + util.inspect(_0x755aa0.config, {
      depth: 2
    }));
    _0x755aa0.response && (console.log("   响应状态: " + _0x755aa0.response.status), console.log("   响应数据: " + util.inspect(_0x755aa0.response.data, {
      depth: 2
    })));
    console.log("----------------------------------------");
  }
}
function compareVersions(_0x29ec5c, _0x200873) {
  const _0x4b8b7b = _0x29ec5c.split(".").map(Number);
  const _0x987a81 = _0x200873.split(".").map(Number);
  const _0x4e5710 = Math.max(_0x4b8b7b.length, _0x987a81.length);
  for (let _0x439945 = 0; _0x439945 < _0x4e5710; _0x439945++) {
    const _0x502053 = _0x4b8b7b[_0x439945] || 0;
    const _0x2fc746 = _0x987a81[_0x439945] || 0;
    if (_0x502053 > _0x2fc746) {
      return 1;
    }
    if (_0x502053 < _0x2fc746) {
      return -1;
    }
  }
  return 0;
}
async function checkForUpdates() {
  logUser("🔍 正在检查脚本更新... 当前版本: " + CURRENT_VERSION, "info");
  try {
    const _0x119fe8 = await axios.get(UPDATE_CHECK_URL, {
      timeout: 10000,
      validateStatus: _0x5d011a => _0x5d011a === 200
    });
    updateInfo = _0x119fe8.data;
    logDev("更新检查返回信息", updateInfo);
    if (!updateInfo.latestVersion || !updateInfo.scriptUrl) {
      logUser("⚠️ 更新检查返回数据格式异常，跳过更新", "warn");
      return false;
    }
    const _0xa249d8 = compareVersions(CURRENT_VERSION, updateInfo.latestVersion);
    if (_0xa249d8 === 0) {
      logUser("✅ 当前已是最新版本 (" + CURRENT_VERSION + ")", "success");
      return false;
    } else {
      if (_0xa249d8 === 1) {
        logUser("ℹ️ 当前版本(" + CURRENT_VERSION + ")高于最新版本(" + updateInfo.latestVersion + ")，可能是测试版本", "info");
        return false;
      }
    }
    logUser("🚀 检测到新版本: " + updateInfo.latestVersion + " (当前: " + CURRENT_VERSION + ")", "success");
    updateInfo.changelog && logUser("📝 更新日志: " + updateInfo.changelog, "info");
    const _0x4d69eb = await downloadAndUpdateScript(updateInfo.scriptUrl);
    return _0x4d69eb;
  } catch (_0x1904ff) {
    logError("❌ 检查更新失败", _0x1904ff, "检查脚本更新");
    return false;
  }
}
async function downloadAndUpdateScript(_0x40865b) {
  logUser("📥 开始下载新版本脚本...", "info");
  try {
    const _0x1ace2b = process.argv[1];
    const _0x3c8388 = _0x1ace2b + ".bak." + Date.now();
    logUser("📦 正在备份原脚本到: " + _0x3c8388, "info");
    await copyFile(_0x1ace2b, _0x3c8388);
    const _0x5a2816 = await axios.get(_0x40865b, {
      timeout: 30000,
      responseType: "text",
      validateStatus: _0x292910 => _0x292910 === 200
    });
    logUser("✍️ 正在写入新版本脚本...", "info");
    await writeFile(_0x1ace2b, _0x5a2816.data, "utf8");
    logUser("✅ 脚本更新完成！新版本: " + updateInfo.latestVersion, "success");
    logUser("🔄 请重启脚本以应用新版本", "info");
    process.exit(0);
  } catch (_0x5b5326) {
    logError("❌ 脚本更新失败", _0x5b5326, "下载并更新脚本");
    logUser("⚠️ 尝试回滚到原脚本", "warn");
    try {
      const _0x5b4f93 = process.argv[1];
      const _0x11183f = fs.readdirSync(path.dirname(_0x5b4f93)).filter(_0x9b20a5 => _0x9b20a5.startsWith(path.basename(_0x5b4f93) + ".bak."));
      if (_0x11183f.length > 0) {
        const _0x159179 = _0x11183f.sort().pop();
        const _0x4c82f9 = path.join(path.dirname(_0x5b4f93), _0x159179);
        await copyFile(_0x4c82f9, _0x5b4f93);
        logUser("✅ 原脚本已回滚成功", "success");
      }
    } catch (_0x2f1ead) {
      logError("❌ 回滚失败，请手动恢复原脚本", _0x2f1ead, "脚本更新回滚");
    }
    return false;
  }
}
function cleanHeaderValue(_0x324286) {
  typeof _0x324286 !== "string" && (_0x324286 = String(_0x324286 || ""));
  const _0x6d61b6 = _0x324286.replace(/[\x00-\x1F\x7F\u2000-\u200F\u3000]/g, "").trim();
  return _0x6d61b6.replace(/[^\x20-\x7E]/g, "");
}
async function request(_0x4de1b9, _0x367373 = null, _0xe16dee = "请求") {
  try {
    const _0x5f095d = {
      method: _0x4de1b9.method || "GET",
      url: _0x4de1b9.url,
      headers: {},
      data: _0x4de1b9.body || _0x4de1b9.form,
      timeout: _0x4de1b9.timeout || 12000,
      proxy: _0x367373 ? {
        host: new URL(_0x367373).hostname,
        port: parseInt(new URL(_0x367373).port) || 80
      } : false,
      validateStatus: () => true
    };
    if (_0x4de1b9.headers) {
      for (const [_0x34e6e5, _0x355c4e] of Object.entries(_0x4de1b9.headers)) {
        _0x5f095d.headers[_0x34e6e5] = cleanHeaderValue(_0x355c4e);
      }
    }
    _0x4de1b9.form && _0x4de1b9.method === "POST" && !_0x5f095d.headers["Content-Type"] && (_0x5f095d.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8", _0x5f095d.data = querystring.stringify(_0x4de1b9.form));
    logDev(_0xe16dee + " - 请求配置", {
      url: _0x5f095d.url,
      method: _0x5f095d.method,
      headers: _0x5f095d.headers,
      data: _0x5f095d.data
    });
    const _0x1ce7e4 = await axios(_0x5f095d);
    logDev(_0xe16dee + " - 响应结果", {
      status: _0x1ce7e4.status,
      headers: _0x1ce7e4.headers,
      data: _0x1ce7e4.data
    });
    return {
      body: _0x1ce7e4.data,
      status: _0x1ce7e4.status
    };
  } catch (_0x367317) {
    logError(_0xe16dee + " 执行失败: " + _0x367317.message, _0x367317, _0xe16dee);
    return {
      body: null,
      status: 0
    };
  }
}
function getPlatformFromCookie(_0x2fb29b) {
  const _0x155fad = _0x2fb29b.match(/kpn=([^;]+)/);
  const _0x7e83e3 = _0x155fad ? _0x155fad[1].toUpperCase() : "NEBULA";
  return ENV_CONFIG.PLATFORM_CONFIG[_0x7e83e3] || ENV_CONFIG.PLATFORM_CONFIG.NEBULA;
}
async function getAdConfigFromPHP(_0x4a95ff, _0x57c6a3, _0xcbd811, _0x55238f, _0x67376f) {
  try {
    logUser("[" + _0x4a95ff.name + "] 正在获取" + _0x57c6a3 + "广告配置");
    logDev("请求PHP中转站参数", {
      phpUrl: ENV_CONFIG.PHP_PROXY_URL,
      kpn: _0x4a95ff.kpn,
      taskType: _0x57c6a3,
      salt: _0xcbd811.substring(0, 10) + "...",
      clientIP: _0x67376f
    });
    const {
      body: _0x5e66bc
    } = await request({
      method: "POST",
      url: ENV_CONFIG.PHP_PROXY_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: cleanHeaderValue(ENV_CONFIG.PHP_PROXY_KEY)
      },
      body: JSON.stringify({
        action: "get_ad_config",
        key: cleanHeaderValue(ENV_CONFIG.PHP_PROXY_KEY),
        kpn: _0x4a95ff.kpn,
        task_type: _0x57c6a3,
        salt: _0xcbd811,
        ck: _0x55238f,
        ip: _0x67376f
      }),
      timeout: 15000
    }, null, "[" + _0x4a95ff.name + "] 获取" + _0x57c6a3 + "广告配置");
    logDev("PHP中转站返回结果", _0x5e66bc);
    return _0x5e66bc && _0x5e66bc.code === 200 && _0x5e66bc.data?.["request_config"] ? (logUser("[" + _0x4a95ff.name + "] 成功获取" + _0x57c6a3 + "广告配置", "success"), {
      requestConfig: _0x5e66bc.data.request_config,
      taskParams: _0x5e66bc.data.task_params
    }) : (logUser("[" + _0x4a95ff.name + "] 获取" + _0x57c6a3 + "广告配置失败: " + (_0x5e66bc?.["msg"] || "未知错误"), "error"), null);
  } catch (_0x301308) {
    logError("[" + _0x4a95ff.name + "] 获取" + _0x57c6a3 + "广告配置异常", _0x301308, "获取" + _0x57c6a3 + "广告配置");
    return null;
  }
}
async function getReportConfigFromPHP(_0x539e68, _0x264852, _0x4f241c, _0x262ee6, _0x15242b, _0x456cc9) {
  try {
    const _0x524370 = ["creativeId", "llsid", "startTime", "endTime"];
    const _0x40d604 = _0x524370.filter(_0x550ff4 => !_0x456cc9[_0x550ff4]);
    if (_0x40d604.length > 0) {
      logUser("[" + _0x539e68.name + "] 报告参数缺失: " + _0x40d604.join(", "), "error");
      return null;
    }
    logUser("[" + _0x539e68.name + "] 正在获取" + _0x264852 + "报告签名配置");
    logDev("请求PHP报告配置参数", {
      phpUrl: ENV_CONFIG.PHP_PROXY_URL,
      taskType: _0x264852,
      reportParams: {
        creativeId: _0x456cc9.creativeId,
        llsid: _0x456cc9.llsid.substring(0, 10) + "...",
        startTime: new Date(_0x456cc9.startTime),
        endTime: new Date(_0x456cc9.endTime)
      }
    });
    const {
      body: _0x2e64fd
    } = await request({
      method: "POST",
      url: ENV_CONFIG.PHP_PROXY_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: cleanHeaderValue(ENV_CONFIG.PHP_PROXY_KEY)
      },
      body: JSON.stringify({
        action: "get_report_config",
        key: cleanHeaderValue(ENV_CONFIG.PHP_PROXY_KEY),
        kpn: _0x539e68.kpn,
        task_type: _0x264852,
        salt: _0x4f241c,
        ck: _0x262ee6,
        ip: _0x15242b,
        creativeId: _0x456cc9.creativeId,
        llsid: _0x456cc9.llsid,
        startTime: _0x456cc9.startTime,
        endTime: _0x456cc9.endTime
      }),
      timeout: 15000
    }, null, "[" + _0x539e68.name + "] 获取" + _0x264852 + "报告配置");
    logDev("PHP报告配置返回结果", _0x2e64fd);
    if (!_0x2e64fd || _0x2e64fd.code !== 200) {
      logUser("[" + _0x539e68.name + "] 获取" + _0x264852 + "报告配置失败: 状态码=" + (_0x2e64fd?.["code"] || "无"), "error");
      return null;
    }
    if (!_0x2e64fd.data?.["request_config"]) {
      logUser("[" + _0x539e68.name + "] 获取" + _0x264852 + "报告配置失败: 无签名配置", "error");
      return null;
    }
    logUser("[" + _0x539e68.name + "] 成功获取" + _0x264852 + "报告签名配置", "success");
    return _0x2e64fd.data.request_config;
  } catch (_0x25c14b) {
    logError("[" + _0x539e68.name + "] 获取" + _0x264852 + "报告配置异常", _0x25c14b, "获取" + _0x264852 + "报告配置");
    return null;
  }
}
async function getAccountBasicInfo(_0x1942ba, _0x15599e, _0x402ce6) {
  logUser("[" + _0x15599e.name + "] 正在获取账户信息");
  logDev("账户信息请求参数", {
    url: _0x15599e.accountInfoUrl,
    cookieLength: _0x1942ba.length,
    proxyUrl: _0x402ce6 || "无"
  });
  try {
    const {
      body: _0x24d4d1
    } = await request({
      method: "GET",
      url: _0x15599e.accountInfoUrl,
      headers: {
        Host: _0x15599e.host,
        "User-Agent": "kwai-android aegon/3.56.0",
        Cookie: _0x1942ba,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      timeout: 12000
    }, _0x402ce6, "[" + _0x15599e.name + "] 账户信息请求");
    logDev("账户信息返回结果", _0x24d4d1);
    if (_0x15599e.kpn === "KUAISHOU") {
      if (_0x24d4d1 && _0x24d4d1.result === 1 && _0x24d4d1.data) {
        const _0x1fb823 = Number(_0x24d4d1.data.coinAmount) || 0;
        const _0x4e2d37 = Number(_0x24d4d1.data.cashAmountDisplay) || 0;
        logUser("[" + _0x15599e.name + "] 账户信息：金币=" + _0x1fb823 + "，现金=" + _0x4e2d37.toFixed(2), "success");
        return {
          nickname: _0x24d4d1.data.userData?.["nickname"] || null,
          totalCoin: _0x1fb823,
          allCash: _0x4e2d37,
          success: true,
          ckExpired: false
        };
      }
    } else {
      if (_0x15599e.kpn === "NEBULA") {
        if (_0x24d4d1 && _0x24d4d1.result === 1 && _0x24d4d1.data) {
          const _0x34af19 = Number(_0x24d4d1.data.totalCoin) || 0;
          const _0x3a54bb = Number(_0x24d4d1.data.allCash) || 0;
          logUser("[" + _0x15599e.name + "] 账户信息：金币=" + _0x34af19 + "，现金=" + _0x3a54bb.toFixed(2), "success");
          return {
            nickname: _0x24d4d1.data.userData?.["nickname"] || null,
            totalCoin: _0x34af19,
            allCash: _0x3a54bb,
            success: true,
            ckExpired: false
          };
        }
      }
    }
    logUser("[" + _0x15599e.name + "] 账户信息获取失败，Cookie可能已过期", "error");
    return {
      nickname: null,
      totalCoin: 0,
      allCash: 0,
      success: false,
      ckExpired: true
    };
  } catch (_0x34b3df) {
    logError("[" + _0x15599e.name + "] 账户信息请求异常", _0x34b3df, "[" + _0x15599e.name + "] 账户信息请求");
    return {
      nickname: null,
      totalCoin: 0,
      allCash: 0,
      success: false,
      ckExpired: true
    };
  }
}
class KuaishouAccount {
  constructor({
    index: _0x95c9fb,
    salt: _0x24be79,
    cookie: _0x75861b,
    remark = "未命名",
    proxyUrl = null,
    tasksToExecute = ENV_CONFIG.DEFAULT_TASKS
  }) {
    this.index = _0x95c9fb || 1;
    this.salt = _0x24be79;
    this.cookie = _0x75861b;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.platform = getPlatformFromCookie(_0x75861b);
    logUser("[" + this.getAccountDisplayName() + "] 初始化账号", "info");
    logDev("账号初始化详情", {
      index: this.index,
      platform: this.platform.kpn,
      tasksToExecute: tasksToExecute,
      proxyUrl: proxyUrl || "无",
      cookieLength: _0x75861b.length,
      remark: this.remark
    });
    this.tasksToExecute = tasksToExecute.filter(_0x4a1205 => !!_0x4a1205);
    this.searchKeywords = ENV_CONFIG.SEARCH_KEYWORDS;
    this.searchKeywordsMode = ENV_CONFIG.SEARCH_MODE;
    this.currentKeywordIndex = 0;
    this.lowRewardCount = 0;
    this.maxLowRewardCount = 30;
    this.adInfoFailCount = 0;
    this.maxAdInfoFailCount = ENV_CONFIG.AD_FAIL_LIMIT;
    this.taskLowRewardCount = {};
    this.tasksToExecute.forEach(_0x1353da => this.taskLowRewardCount[_0x1353da] = 0);
    this.extractCookieInfo();
    this.clientIP = "127.0.0.1";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.taskStats = {};
    this.taskLimitReached = {};
    this.taskDisabled = {};
    this.taskLowRewardFlags = {};
    this.tasksToExecute.forEach(_0x3eb039 => {
      this.taskStats[_0x3eb039] = {
        success: 0,
        failed: 0,
        totalReward: 0
      };
      this.taskLimitReached[_0x3eb039] = false;
      this.taskDisabled[_0x3eb039] = false;
      this.taskLowRewardFlags[_0x3eb039] = false;
    });
    this.stopAllTasks = false;
    this.lowRewardStreak = 0;
    this.immediateStopThreshold = ENV_CONFIG.STOP_THRESHOLD;
    this.lowRewardThreshold = ENV_CONFIG.LOW_REWARD_THRESHOLD;
    this.lowRewardLimit = ENV_CONFIG.LOW_REWARD_LIMIT;
    this.isSingleTaskMode = this.tasksToExecute.length === 1;
    this.isCycleMode = ENV_CONFIG.CYCLE_ROUNDS > 0;
    this.cycleRounds = ENV_CONFIG.CYCLE_ROUNDS;
    this.currentCycleRound = 0;
    this.currentTaskIndex = 0;
    this.taskExecutionOrder = ENV_CONFIG.TASK_ORDER.length > 0 ? ENV_CONFIG.TASK_ORDER : this.tasksToExecute;
    logUser("[" + this.getAccountDisplayName() + "] 账号初始化完成", "success");
  }
  getAccountDisplayName() {
    return this.platform.name + "---" + this.remark;
  }
  extractCookieInfo() {
    try {
      const _0x4be292 = this.cookie.match(/mod=([^;]+)/);
      const _0x4f3c02 = this.cookie.match(/egid=([^;]+)/);
      const _0x279ff1 = this.cookie.match(/did=([^;]+)/);
      const _0x395c3d = this.cookie.match(/userId=([^;]+)/);
      const _0x3a5f6f = this.cookie.match(/kuaishou\.api_st=([^;]+)/);
      const _0x1fa259 = this.cookie.match(/appver=([^;]+)/);
      const _0x2400fb = this.cookie.match(/region_ticket=([^;]+)/);
      const _0x4dc8b2 = this.cookie.match(/token=([^;]+)/);
      this.token = _0x4dc8b2 ? _0x4dc8b2[1] : "";
      this.customRegionTicket = _0x2400fb ? _0x2400fb[1] : "RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7";
      this.mod = _0x4be292 ? _0x4be292[1] : "Xiaomi(23116PN5BC)";
      this.egid = _0x4f3c02 ? _0x4f3c02[1] : "";
      this.did = _0x279ff1 ? _0x279ff1[1] : "";
      this.userId = _0x395c3d ? _0x395c3d[1] : "";
      this.kuaishouApiSt = _0x3a5f6f ? _0x3a5f6f[1] : "";
      this.appver = _0x1fa259 ? _0x1fa259[1] : "13.7.20.10468";
      logDev("Cookie解析结果", {
        egid: this.egid || "未找到",
        did: this.did || "未找到",
        userId: this.userId || "未找到",
        token: this.token.substring(0, 20) + "..."
      });
      (!this.egid || !this.did) && logUser("[" + this.getAccountDisplayName() + "] Cookie可能缺少egid或did，继续尝试", "warn");
    } catch (_0x33f8ab) {
      logError("[" + this.getAccountDisplayName() + "] 解析Cookie失败", _0x33f8ab, "[" + this.getAccountDisplayName() + "] Cookie解析");
    }
  }
  getSearchKeyword() {
    if (this.searchKeywords.length === 0) {
      return "短剧小说";
    }
    if (this.searchKeywords.length === 1) {
      return this.searchKeywords[0];
    }
    if (this.searchKeywordsMode === "random") {
      const _0x345a69 = Math.floor(Math.random() * this.searchKeywords.length);
      return this.searchKeywords[_0x345a69];
    } else {
      const _0x1f8a86 = this.searchKeywords[this.currentKeywordIndex];
      this.currentKeywordIndex = (this.currentKeywordIndex + 1) % this.searchKeywords.length;
      return _0x1f8a86;
    }
  }
  async retryOperation(_0x175a22, _0xbdda2c, _0x2a869f = 5, _0x1a707e = 2000) {
    let _0x3e3831 = 0;
    let _0x82bb06 = null;
    while (_0x3e3831 < _0x2a869f) {
      try {
        const _0x54a8d6 = await _0x175a22();
        if (_0x54a8d6) {
          return _0x54a8d6;
        }
        _0x82bb06 = new Error(_0xbdda2c + " 返回空结果");
      } catch (_0x2a9b8c) {
        _0x82bb06 = _0x2a9b8c;
        logDev(_0xbdda2c + " 第" + (_0x3e3831 + 1) + "次尝试失败", _0x2a9b8c);
      }
      _0x3e3831++;
      if (_0x3e3831 < _0x2a869f) {
        let _0x3a7ce6 = "[" + this.getAccountDisplayName() + "] " + _0xbdda2c + " 失败，重试 " + _0x3e3831 + "/" + _0x2a869f;
        _0xbdda2c.includes("获取广告信息") && (_0x3a7ce6 += " (建议：1.重抓CK/Salt 2.更换代理 3.检查PHP中转站)");
        logUser(_0x3a7ce6, "warn");
        await new Promise(_0x36d325 => setTimeout(_0x36d325, _0x1a707e));
      }
    }
    logUser("[" + this.getAccountDisplayName() + "] " + _0xbdda2c + " 失败，已重试" + _0x2a869f + "次", "error");
    return null;
  }
  async getAdInfo(_0x1434ed) {
    logUser("[" + this.getAccountDisplayName() + "] 开始获取" + _0x1434ed + "广告信息");
    try {
      const _0x53be6e = await this.retryOperation(() => getAdConfigFromPHP(this.platform, _0x1434ed, this.salt, this.cookie, this.clientIP), "获取" + _0x1434ed + "广告配置", 3);
      if (!_0x53be6e) {
        this.adInfoFailCount++;
        logUser("[" + this.getAccountDisplayName() + "] 未获取到" + _0x1434ed + "广告配置，累计失败: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount, "warn");
        return null;
      }
      logDev(_0x1434ed + "广告配置详情", {
        url: _0x53be6e.requestConfig.url,
        method: _0x53be6e.requestConfig.method,
        headersCount: Object.keys(_0x53be6e.requestConfig.headers || {}).length,
        formCount: Object.keys(_0x53be6e.requestConfig.form || {}).length
      });
      const {
        body: _0x2fb7e9
      } = await request({
        method: _0x53be6e.requestConfig.method,
        url: _0x53be6e.requestConfig.url,
        headers: _0x53be6e.requestConfig.headers,
        form: _0x53be6e.requestConfig.form,
        timeout: _0x53be6e.requestConfig.timeout || 12000
      }, this.proxyUrl, this.getAccountDisplayName() + " 请求" + _0x1434ed + "广告");
      if (!_0x2fb7e9) {
        this.adInfoFailCount++;
        logUser("[" + this.getAccountDisplayName() + "] 获取广告内容失败，累计失败: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount, "warn");
        this.adInfoFailCount >= this.maxAdInfoFailCount && (logUser("[" + this.getAccountDisplayName() + "] 广告获取失败次数达上限，停止任务", "error"), this.stopAllTasks = true);
        return null;
      }
      logDev(_0x1434ed + "广告响应解析", {
        errorMsg: _0x2fb7e9.errorMsg || "未知",
        feedCount: _0x2fb7e9.feeds ? _0x2fb7e9.feeds.length : 0
      });
      if (_0x2fb7e9.errorMsg === "OK" && _0x2fb7e9.feeds && _0x2fb7e9.feeds[0] && _0x2fb7e9.feeds[0].ad) {
        const _0x1d0f15 = _0x2fb7e9.feeds[0];
        const _0x3f0b3e = _0x1d0f15.caption || _0x1d0f15.ad.caption || "";
        logUser("[" + this.getAccountDisplayName() + "] 成功获取广告：" + _0x3f0b3e.substring(0, 30), "success");
        const _0x53ed26 = _0x1d0f15.exp_tag || "";
        const _0x346ba7 = _0x53ed26.split("/")[1]?.["split"]("_")?.[0] || "";
        let _0x23eb88 = false;
        try {
          const _0x5b6719 = _0x1d0f15.ad.adDataV2;
          _0x23eb88 = _0x5b6719?.["onceAgainRewardInfo"]?.["hasMore"] || false;
          if (_0x23eb88) {
            logUser("[" + this.getAccountDisplayName() + "] 检测到追加广告", "info");
          }
        } catch (_0x3af47a) {}
        let _0x384d6b = 0;
        try {
          if (_0x1d0f15.ad.extData) {
            const _0x5526ca = JSON.parse(_0x1d0f15.ad.extData);
            _0x384d6b = Number(_0x5526ca.awardCoin) || 0;
          }
          _0x384d6b === 0 && (_0x384d6b = parseInt(_0x1d0f15.ad.adDataV2?.["inspirePersonalize"]?.["awardValue"] || _0x1d0f15.ad.adDataV2?.["inspireAdInfo"]?.["inspirePersonalize"]?.["neoValue"] || _0x1d0f15.ad.awardCoin || 0) || 0);
        } catch (_0x42b64c) {
          logError("[" + this.getAccountDisplayName() + "] 解析预计金币失败", _0x42b64c, "解析" + _0x1434ed + "广告金币");
        }
        logUser("[" + this.getAccountDisplayName() + "] 预计获得" + _0x384d6b + "金币", "info");
        if (_0x384d6b === 5) {
          logUser("[" + this.getAccountDisplayName() + "] 检测到直播广告，自动跳过", "warn");
          return null;
        }
        return {
          cid: _0x1d0f15.ad.creativeId,
          llsid: _0x346ba7,
          hasRewardEnd: _0x23eb88 || false,
          expectedCoins: _0x384d6b,
          taskParams: _0x53be6e.taskParams
        };
      }
      this.adInfoFailCount++;
      logUser("[" + this.getAccountDisplayName() + "] 获取广告信息失败，累计失败: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount, "warn");
      this.adInfoFailCount >= this.maxAdInfoFailCount && (logUser("[" + this.getAccountDisplayName() + "] 广告获取失败次数达上限，停止任务", "error"), this.stopAllTasks = true);
      return null;
    } catch (_0x11d899) {
      logError("[" + this.getAccountDisplayName() + "] 获取广告异常", _0x11d899, "获取" + _0x1434ed + "广告");
      this.adInfoFailCount++;
      logUser("[" + this.getAccountDisplayName() + "] 累计广告失败: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount, "error");
      this.adInfoFailCount >= this.maxAdInfoFailCount && (this.stopAllTasks = true);
      return null;
    }
  }
  async submitReport(_0x5c0879, _0xfa7918, _0x17065e, _0x23dfcc) {
    logUser("[" + this.getAccountDisplayName() + "] 开始提交" + _0x17065e + "任务报告");
    logDev("提交" + _0x17065e + "报告参数", {
      creativeId: _0x5c0879,
      llsid: _0xfa7918.substring(0, 10) + "...",
      startTime: new Date(this.startTime),
      endTime: new Date(this.endTime)
    });
    try {
      const _0x301a0f = {
        creativeId: _0x5c0879,
        llsid: _0xfa7918,
        startTime: this.startTime,
        endTime: this.endTime
      };
      const _0x319276 = await this.retryOperation(() => getReportConfigFromPHP(this.platform, _0x17065e, this.salt, this.cookie, this.clientIP, _0x301a0f), "获取" + _0x17065e + "报告配置（nssig签名）", 3);
      if (!_0x319276) {
        logUser("[" + this.getAccountDisplayName() + "] 获取" + _0x17065e + "报告签名配置失败，无法提交奖励", "error");
        return {
          success: false,
          reward: 0
        };
      }
      logDev(_0x17065e + "报告签名配置详情", {
        url: _0x319276.url,
        sig: _0x319276.url.includes("sig=") ? _0x319276.url.split("sig=")[1].split("&")[0].substring(0, 10) + "..." : "无",
        body: _0x319276.body || "无"
      });
      const _0x5f3146 = {
        method: _0x319276.method,
        url: _0x319276.url,
        headers: _0x319276.headers,
        timeout: _0x319276.timeout || 12000
      };
      if (_0x319276.body) {
        _0x5f3146.form = querystring.parse(_0x319276.body);
      } else {
        _0x319276.form && (_0x5f3146.form = _0x319276.form);
      }
      const {
        body: _0x1dcf99
      } = await request(_0x5f3146, this.proxyUrl, this.getAccountDisplayName() + " 提交" + _0x17065e + "任务报告（带nssig签名）");
      if (!_0x1dcf99) {
        logUser("[" + this.getAccountDisplayName() + "] " + _0x17065e + "报告提交无响应", "error");
        return {
          success: false,
          reward: 0
        };
      }
      logDev(_0x17065e + "报告响应解析", {
        result: _0x1dcf99.result,
        reward: _0x1dcf99.data?.["neoAmount"] || 0,
        errorMsg: _0x1dcf99.errorMsg || "无"
      });
      if (_0x1dcf99.result === 1) {
        const _0x40d474 = Number(_0x1dcf99.data?.["neoAmount"]) || 0;
        this.taskStats[_0x17065e].totalReward += _0x40d474;
        logUser("[" + this.getAccountDisplayName() + "] " + _0x17065e + "任务提交成功，获得" + _0x40d474 + "金币！", "success");
        return {
          success: true,
          reward: _0x40d474
        };
      }
      const _0x251914 = [20107, 20108, 1003, 415];
      if (_0x251914.includes(_0x1dcf99.result)) {
        logUser("[" + this.getAccountDisplayName() + "] " + _0x17065e + "任务已达上限（错误码:" + _0x1dcf99.result + "），停止该任务", "warn");
        this.taskLimitReached[_0x17065e] = true;
        return {
          success: false,
          reward: 0,
          limitReached: true
        };
      }
      logUser("[" + this.getAccountDisplayName() + "] " + _0x17065e + "报告提交失败: 错误码=" + _0x1dcf99.result + ", 消息=" + (_0x1dcf99.errorMsg || "未知"), "error");
      return {
        success: false,
        reward: 0
      };
    } catch (_0x131efb) {
      logError("[" + this.getAccountDisplayName() + "] 提交" + _0x17065e + "任务异常", _0x131efb, "提交" + _0x17065e + "任务报告");
      return {
        success: false,
        reward: 0
      };
    }
  }
  checkLowReward(_0x39fb87, _0x58100c, _0x25b055) {
    if (_0x39fb87 === 5) {
      logUser("[" + this.getAccountDisplayName() + "] " + _0x25b055 + " 获得5金币（直播广告）", "info");
      return false;
    }
    if (_0x39fb87 <= this.lowRewardThreshold && _0x39fb87 !== 5) {
      this.taskLowRewardCount[_0x58100c]++;
      logUser("[" + this.getAccountDisplayName() + "] " + _0x25b055 + " 低金币累计: " + this.taskLowRewardCount[_0x58100c] + "/" + this.lowRewardLimit + "次", "warn");
      if (this.taskLowRewardCount[_0x58100c] >= this.lowRewardLimit) {
        logUser("[" + this.getAccountDisplayName() + "] " + _0x25b055 + " 低金币次数达上限，禁用该任务", "error");
        this.taskDisabled[_0x58100c] = true;
        return true;
      }
    }
    return false;
  }
  checkLowRewardAndStop(_0x47674e, _0x5533b4) {
    if (_0x47674e === 5) {
      return false;
    }
    if (_0x47674e <= this.lowRewardThreshold && _0x47674e !== 5) {
      this.lowRewardCount++;
      logUser("[" + this.getAccountDisplayName() + "] 低奖励累计: " + this.lowRewardCount + "/30次", "warn");
      if (this.lowRewardCount >= 30) {
        logUser("[" + this.getAccountDisplayName() + "] 低奖励次数达上限，停止任务", "error");
        this.stopAllTasks = true;
        return true;
      }
    }
    return false;
  }
  async executeTask(_0xbe66c9, _0x61b6a0 = 1, _0x3dc629 = false, _0x75e2ba = 0) {
    const _0x2f1c48 = _0x3dc629 ? _0xbe66c9 + "(追加第" + _0x75e2ba + "次)" : _0xbe66c9;
    if (this.taskDisabled[_0xbe66c9] || this.taskLimitReached[_0xbe66c9]) {
      logUser("[" + this.getAccountDisplayName() + "] " + _0xbe66c9 + "任务已禁用/达上限，跳过", "warn");
      return {
        success: false,
        reward: 0,
        hasRewardEnd: false
      };
    }
    logUser("[" + this.getAccountDisplayName() + "] 执行" + _0x2f1c48 + "任务");
    try {
      let _0x41612f = null;
      let _0xcb638e = 0;
      while (!_0x41612f && !this.stopAllTasks) {
        _0xcb638e++;
        _0x41612f = await this.getAdInfo(_0xbe66c9);
        if (_0x41612f) {
          break;
        }
        !_0x41612f && !this.stopAllTasks && (logUser("[" + this.getAccountDisplayName() + "] 等待3秒后重新获取广告...", "info"), await new Promise(_0x5a3ee3 => setTimeout(_0x5a3ee3, 3000)));
      }
      if (!_0x41612f) {
        this.taskStats[_0xbe66c9].failed++;
        logUser("[" + this.getAccountDisplayName() + "] " + _0xbe66c9 + "任务广告获取失败", "error");
        return {
          success: false,
          reward: 0,
          hasRewardEnd: false
        };
      }
      const _0x226225 = Math.floor(Math.random() * (ENV_CONFIG.WATCH_MAX - ENV_CONFIG.WATCH_MIN) + ENV_CONFIG.WATCH_MIN) * 1000;
      logUser("[" + this.getAccountDisplayName() + "] " + _0x2f1c48 + " 浏览中 " + Math.round(_0x226225 / 1000) + "秒", "info");
      await new Promise(_0x330093 => setTimeout(_0x330093, _0x226225));
      this.endTime = Date.now();
      this.startTime = this.endTime - _0x226225;
      const _0x301271 = await this.submitReport(_0x41612f.cid, _0x41612f.llsid, _0xbe66c9, _0x41612f.taskParams);
      if (_0x301271?.["success"]) {
        this.taskStats[_0xbe66c9].success++;
        const _0x1f5330 = _0x301271.reward || 0;
        this.checkLowReward(_0x1f5330, _0xbe66c9, _0xbe66c9);
        const _0x220c8f = this.checkLowRewardAndStop(_0x1f5330, _0xbe66c9);
        return {
          success: true,
          reward: _0x1f5330,
          hasRewardEnd: _0x41612f.hasRewardEnd || false,
          limitReached: _0x301271.limitReached || false,
          lowRewardStopped: _0x220c8f
        };
      }
      if (_0x301271?.["limitReached"]) {
        this.taskLimitReached[_0xbe66c9] = true;
      }
      this.taskStats[_0xbe66c9].failed++;
      logUser("[" + this.getAccountDisplayName() + "] " + _0xbe66c9 + "任务执行失败", "error");
      return {
        success: false,
        reward: 0,
        hasRewardEnd: false,
        limitReached: _0x301271?.["limitReached"] || false
      };
    } catch (_0x1e791b) {
      logError("[" + this.getAccountDisplayName() + "] " + _0xbe66c9 + "任务异常", _0x1e791b, "执行" + _0xbe66c9 + "任务");
      this.taskStats[_0xbe66c9].failed++;
      return {
        success: false,
        reward: 0,
        hasRewardEnd: false
      };
    }
  }
  getNextAvailableTask() {
    const _0x1aef21 = this.taskExecutionOrder.length;
    if (_0x1aef21 === 0) {
      return null;
    }
    const _0x3d3698 = this.taskExecutionOrder.filter(_0x3924b0 => this.tasksToExecute.includes(_0x3924b0) && !this.taskLowRewardFlags[_0x3924b0] && !this.taskLimitReached[_0x3924b0] && !this.taskDisabled[_0x3924b0]);
    if (_0x3d3698.length === 0) {
      logUser("[" + this.getAccountDisplayName() + "] 无可用任务，终止当前账号任务", "warn");
      return null;
    }
    if (_0x3d3698.length === 1) {
      return _0x3d3698[0];
    }
    this.currentTaskIndex = (this.currentTaskIndex + 1) % _0x3d3698.length;
    const _0x502226 = _0x3d3698[this.currentTaskIndex];
    logUser("[" + this.getAccountDisplayName() + "] 选择下一个任务: " + _0x502226, "info");
    return _0x502226;
  }
  async appendAdRest(_0x5968df) {
    if (_0x5968df > 0 && _0x5968df % ENV_CONFIG.APPEND_REST_INTERVAL === 0) {
      const _0x32d379 = Math.floor(Math.random() * (ENV_CONFIG.APPEND_REST_MAX - ENV_CONFIG.APPEND_REST_MIN)) + ENV_CONFIG.APPEND_REST_MIN;
      logUser("[" + this.getAccountDisplayName() + "] 已追加" + _0x5968df + "次广告，休息" + Math.round(_0x32d379 / 1000) + "秒", "info");
      await new Promise(_0x4ac776 => setTimeout(_0x4ac776, _0x32d379));
    }
  }
  printTaskStats() {
    logUser("[" + this.getAccountDisplayName() + "] 任务统计:");
    for (const [_0x4e6b2d, _0x4ff5d1] of Object.entries(this.taskStats)) {
      logUser("  " + _0x4e6b2d + ": 成功" + _0x4ff5d1.success + "次, 失败" + _0x4ff5d1.failed + "次, 奖励" + _0x4ff5d1.totalReward + "金币");
    }
    logUser("  广告获取失败次数: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount);
  }
  async executeTaskLoop() {
    logUser("[" + this.getAccountDisplayName() + "] 开始任务循环（上限" + (ENV_CONFIG.CYCLE_ROUNDS || "无限") + "轮）", "success");
    const _0x3c9b40 = await getAccountBasicInfo(this.cookie, this.platform, this.proxyUrl);
    if (!_0x3c9b40.success || _0x3c9b40.ckExpired) {
      logUser("[" + this.getAccountDisplayName() + "] Cookie已过期或无效，停止当前账号任务", "error");
      return {
        success: false,
        remark: this.remark,
        platform: this.platform.name,
        taskCount: 0,
        totalReward: 0,
        ckExpired: true
      };
    }
    const _0x4b2f62 = Number(_0x3c9b40.allCash) || 0;
    logUser("[" + this.getAccountDisplayName() + "] 初始金币: " + _0x3c9b40.totalCoin + "，现金余额: " + _0x4b2f62.toFixed(2), "info");
    let _0x6a81cc = 0;
    let _0x4ca35d = 0;
    while (!this.stopAllTasks) {
      if (this.isCycleMode && this.currentCycleRound >= this.cycleRounds) {
        logUser("[" + this.getAccountDisplayName() + "] 已完成" + this.cycleRounds + "轮任务，停止当前账号循环", "info");
        break;
      }
      const _0x3c2367 = this.getNextAvailableTask();
      if (!_0x3c2367) {
        this.stopAllTasks = true;
        break;
      }
      const _0x2b128d = await this.executeTask(_0x3c2367);
      _0x6a81cc++;
      if (_0x2b128d.hasRewardEnd && !_0x2b128d.lowRewardStopped) {
        _0x4ca35d++;
        await this.appendAdRest(_0x4ca35d);
        const _0x30f8cb = await this.executeTask(_0x3c2367, 2, true, _0x4ca35d);
        _0x30f8cb.lowRewardStopped && (this.stopAllTasks = true);
      }
      const _0x523334 = this.getNextAvailableTask();
      if (_0x523334) {
        const _0x15154a = Math.floor(Math.random() * 5 + 5) * 1000;
        logUser("[" + this.getAccountDisplayName() + "] 任务间隔休息" + Math.round(_0x15154a / 1000) + "秒", "info");
        await new Promise(_0x4c9792 => setTimeout(_0x4c9792, _0x15154a));
      }
      this.isCycleMode && this.currentTaskIndex === this.taskExecutionOrder.length - 1 && (this.currentCycleRound++, logUser("[" + this.getAccountDisplayName() + "] 已完成第" + this.currentCycleRound + "/" + this.cycleRounds + "轮任务", "info"));
    }
    this.printTaskStats();
    logUser("[" + this.getAccountDisplayName() + "] 当前账号任务循环结束", "success");
    return {
      success: true,
      remark: this.remark,
      platform: this.platform.name,
      taskCount: _0x6a81cc,
      appendCount: _0x4ca35d,
      totalReward: Object.values(this.taskStats).reduce((_0x1a5209, _0x23b4cb) => _0x1a5209 + _0x23b4cb.totalReward, 0),
      ckExpired: false
    };
  }
}
async function runSerialTasks(_0x4e7e04) {
  logUser("开始串行执行任务，账号总数: " + _0x4e7e04.length, "info");
  const _0x3666c6 = [];
  for (let _0x3dc537 = 0; _0x3dc537 < _0x4e7e04.length; _0x3dc537++) {
    const _0x3ae2cb = _0x4e7e04[_0x3dc537];
    const _0x129ffb = {
      ..._0x3ae2cb,
      index: _0x3dc537 + 1
    };
    logUser("\n=========================================", "info");
    logUser("开始执行第 " + (_0x3dc537 + 1) + "/" + _0x4e7e04.length + " 个账号: " + _0x3ae2cb.remark, "info");
    logUser("=========================================", "info");
    const _0x54b857 = new KuaishouAccount(_0x129ffb);
    const _0x53629d = await _0x54b857.executeTaskLoop();
    _0x3666c6.push(_0x53629d);
    logUser("\n=========================================", "info");
    logUser("第 " + (_0x3dc537 + 1) + "/" + _0x4e7e04.length + " 个账号任务执行完毕", "info");
    logUser("=========================================\n", "info");
  }
  return _0x3666c6;
}
function loadAccountsFromEnv() {
  const _0x4e7bcf = [];
  const _0x456b28 = new Set();
  logUser("开始加载账号配置", "info");
  if (process.env.ksck) {
    const _0x1e16ac = process.env.ksck.split("&");
    logUser("检测到ksck配置，共" + _0x1e16ac.length + "个账号", "info");
    _0x1e16ac.forEach(_0x26b294 => {
      _0x26b294 = _0x26b294.trim();
      if (_0x26b294 && !_0x456b28.has(_0x26b294)) {
        const _0x4342fd = parseAccountConfig(_0x26b294);
        _0x4342fd && (_0x4e7bcf.push(_0x4342fd), logUser("加载账号: " + _0x4342fd.remark, "success"));
        _0x456b28.add(_0x26b294);
      }
    });
  }
  let _0x2f66c3 = 0;
  for (let _0x41535f = 1; _0x41535f <= 666; _0x41535f++) {
    const _0x57593f = "ksck" + _0x41535f;
    if (process.env[_0x57593f]) {
      _0x2f66c3++;
      const _0x3bc384 = process.env[_0x57593f].trim();
      if (_0x3bc384 && !_0x456b28.has(_0x3bc384)) {
        const _0x94b220 = parseAccountConfig(_0x3bc384);
        _0x94b220 && (_0x4e7bcf.push(_0x94b220), logUser("加载账号" + _0x41535f + ": " + _0x94b220.remark, "success"));
        _0x456b28.add(_0x3bc384);
      }
    }
  }
  logUser("检测到ksck1-666配置，共" + _0x2f66c3 + "个账号", "info");
  logUser("总计加载有效账号: " + _0x4e7bcf.length + "个", "success");
  logDev("账号加载详情", {
    total: _0x4e7bcf.length
  });
  return _0x4e7bcf;
}
function parseAccountConfig(_0x25e583) {
  if (!_0x25e583 || typeof _0x25e583 !== "string") {
    logUser("账号配置为空或非字符串", "error");
    return null;
  }
  const _0x5cba7e = _0x25e583.split("#");
  if (_0x5cba7e.length < 3) {
    logUser("账号格式错误（需 备注#ck#salt）: " + _0x25e583.substring(0, 20) + "...", "error");
    logDev("错误账号配置", _0x25e583.substring(0, 50) + "...");
    return null;
  }
  const _0x35b2c7 = _0x5cba7e[0].trim() || "未命名";
  const _0x4cdde8 = _0x5cba7e[1].trim();
  const _0x30255f = _0x5cba7e[2].trim();
  if (!_0x4cdde8) {
    logUser("账号[" + _0x35b2c7 + "] 缺少CK", "error");
    return null;
  }
  if (!_0x30255f) {
    logUser("账号[" + _0x35b2c7 + "] 缺少Salt", "error");
    return null;
  }
  return {
    cookie: _0x4cdde8,
    salt: _0x30255f,
    remark: _0x35b2c7
  };
}
async function main() {
  logUser("启动时间: " + new Date().toLocaleString(), "info");
  logUser("本程序仅供学习参考，使用者非法牟利将由使用者承担所有后果，如果不慎启动请立即关闭删除本程序", "info");
  logUser("=========================================\n", "info");
  (!process.env.KS_CARD_KEY || process.env.KS_CARD_KEY.trim() === "") && (logUser("❌ 错误：环境变量 KS_CARD_KEY 未配置或为空！", "error"), logUser("ℹ️ 请先配置密钥后再运行脚本", "info"), process.exit(1));
  await checkForUpdates();
  logDev("环境变量关键配置", {
    tasks: ENV_CONFIG.DEFAULT_TASKS,
    cycleRounds: ENV_CONFIG.CYCLE_ROUNDS || "无限",
    watchTime: ENV_CONFIG.WATCH_MIN + "-" + ENV_CONFIG.WATCH_MAX + "秒"
  });
  const _0x534a54 = loadAccountsFromEnv();
  _0x534a54.length === 0 && (logUser("未检测到任何账号配置（ksck/ksck1-666），停止脚本", "error"), process.exit(1));
  logUser("成功加载" + _0x534a54.length + "个账号", "success");
  const _0x3ed3d1 = await runSerialTasks(_0x534a54);
  const _0x40f7a0 = _0x3ed3d1.filter(_0x4de41a => !_0x4de41a.ckExpired);
  const _0x305f75 = _0x3ed3d1.filter(_0x4beaa0 => _0x4beaa0.ckExpired).length;
  const _0x5795c4 = _0x40f7a0.reduce((_0x584ad7, _0x39d49a) => _0x584ad7 + _0x39d49a.taskCount, 0);
  const _0x54a543 = _0x40f7a0.reduce((_0x10bd3e, _0x577819) => _0x10bd3e + _0x577819.totalReward, 0);
  logUser("\n=========================================", "info");
  logUser("全局汇总统计", "info");
  logUser("  有效账号: " + _0x40f7a0.length + "/" + _0x534a54.length, "info");
  logUser("  过期账号: " + _0x305f75, "info");
  logUser("  总执行任务: " + _0x5795c4 + "次", "info");
  logUser("  总获得奖励: " + _0x54a543 + "金币", "info");
  _0x40f7a0.length > 0 && (logUser("\n各账号详细统计", "info"), _0x40f7a0.forEach((_0x3e3214, _0x4a3ac8) => {
    logUser("  " + (_0x4a3ac8 + 1) + ". [" + _0x3e3214.platform + "---" + _0x3e3214.remark + "]: 执行" + _0x3e3214.taskCount + "次，获得" + _0x3e3214.totalReward + "金币", "info");
  }));
  logUser("=========================================", "info");
  logUser("🎉 脚本执行完毕！", "success");
  process.exit(0);
}
main().catch(_0x755771 => {
  logError("脚本主函数异常", _0x755771, "脚本主函数");
  process.exit(1);
});