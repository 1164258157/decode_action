//Mon Dec 15 2025 04:26:28 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const licenseInput = document.getElementById("license-input");
const saveLicenseBtn = document.getElementById("save-license-btn");
const toastEl = document.getElementById("toast");
const authSection = document.getElementById("auth-section");
const featureSection = document.getElementById("feature-section");
const settingsSection = document.getElementById("settings-section");
const loadingMask = document.getElementById("loading-mask");
let toastTimer = null;
const nameInput = document.getElementById("name-input");
const remarkInput = document.getElementById("remark-input");
const phoneInput = document.getElementById("phone-input");
const idcardInput = document.getElementById("idcard-input");
const provinceInput = document.getElementById("province-input");
const cityInput = document.getElementById("city-input");
const districtInput = document.getElementById("district-input");
const branchInput = document.getElementById("branch-input");
const exchangeTimeInput = document.getElementById("exchange-time-input");
const quantityInput = document.getElementById("quantity-input");
const settingsBtn = document.getElementById("settings-btn");
const backBtn = document.getElementById("back-btn");
const personList = document.getElementById("person-list");
const addFormContainer = document.getElementById("add-form-container");
const addPersonBtn = document.getElementById("add-person-btn");
const savePersonBtn = document.getElementById("save-person-btn");
const cancelFormBtn = document.getElementById("cancel-form-btn");
const formTitle = document.getElementById("form-title");
let editingIndex = -1;
let persons = [];
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
function formatExchangeDateForInput(_0x224cc7) {
  if (!_0x224cc7) {
    return "";
  }
  const _0x452571 = _0x224cc7.trim();
  if (!_0x452571) {
    return "";
  }
  if (DATE_PATTERN.test(_0x452571)) {
    return _0x452571;
  }
  const _0x79c401 = _0x452571.match(/^(\d{4}-\d{2}-\d{2})/);
  if (_0x79c401) {
    return _0x79c401[1];
  }
  return "";
}
function normalizeExchangeDateValue(_0x99e78c) {
  if (!_0x99e78c) {
    return "";
  }
  const _0x4b31da = _0x99e78c.trim();
  if (!_0x4b31da) {
    return "";
  }
  if (DATE_PATTERN.test(_0x4b31da)) {
    return _0x4b31da;
  }
  const _0x10bdf1 = _0x4b31da.match(/^(\d{4}-\d{2}-\d{2})/);
  if (_0x10bdf1) {
    return _0x10bdf1[1];
  }
  return "";
}
function showToast(_0x1bf252, _0x5701c3 = "info", _0x4c2519 = 2500) {
  if (!toastEl) {
    return;
  }
  toastTimer && (clearTimeout(toastTimer), toastTimer = null);
  toastEl.textContent = _0x1bf252;
  toastEl.classList.remove("error");
  _0x5701c3 === "error" && toastEl.classList.add("error");
  toastEl.classList.add("show");
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, _0x4c2519);
}
function setLoading(_0x1f9dc7) {
  if (!loadingMask) {
    return;
  }
  _0x1f9dc7 ? loadingMask.classList.add("show") : loadingMask.classList.remove("show");
}
function showAuthSection() {
  if (authSection) {
    authSection.style.display = "block";
  }
  if (featureSection) {
    featureSection.style.display = "none";
  }
  if (settingsSection) {
    settingsSection.style.display = "none";
  }
}
function showFeatureSection() {
  if (authSection) {
    authSection.style.display = "none";
  }
  if (featureSection) {
    featureSection.style.display = "block";
  }
  if (settingsSection) {
    settingsSection.style.display = "none";
  }
}
function showSettingsSection() {
  if (authSection) {
    authSection.style.display = "none";
  }
  if (featureSection) {
    featureSection.style.display = "none";
  }
  if (settingsSection) {
    settingsSection.style.display = "block";
  }
  loadPersons(() => {
    renderPersonList();
    hideAddForm();
  });
}
function handlePendingView() {
  if (!chrome?.["storage"]?.["local"]) {
    return;
  }
  chrome.storage.local.get(["__SX_PENDING_VIEW__"], _0x1dea57 => {
    const _0x8f3ca = _0x1dea57.__SX_PENDING_VIEW__;
    if (!_0x8f3ca) {
      return;
    }
    chrome.storage.local.remove(["__SX_PENDING_VIEW__"]);
    _0x8f3ca === "settings" && showSettingsSection();
  });
}
function autoVerifyLicenseOnOpen() {
  if (!chrome?.["storage"]?.["local"] || !chrome?.["runtime"]) {
    return;
  }
  setLoading(true);
  chrome.storage.local.get(["licenseKey"], _0xec6166 => {
    const _0x27dd32 = _0xec6166.licenseKey;
    if (!_0x27dd32) {
      setLoading(false);
      showAuthSection();
      return;
    }
    licenseInput && (licenseInput.value = _0x27dd32);
    chrome.runtime.sendMessage({
      type: "VERIFY_LICENSE",
      card_key: _0x27dd32
    }, _0x1321ec => {
      setLoading(false);
      if (chrome.runtime.lastError) {
        showAuthSection();
        showToast("自动验证失败：" + chrome.runtime.lastError.message, "error");
        return;
      }
      if (!_0x1321ec || !_0x1321ec.ok) {
        showAuthSection();
        _0x1321ec && _0x1321ec.error && showToast("自动验证失败：" + _0x1321ec.error, "error");
        return;
      }
      const _0x49fb2e = _0x1321ec.data || {};
      if (_0x49fb2e.code === 0 || _0x49fb2e.success === true) {
        showFeatureSection();
        const _0x378892 = _0x49fb2e.data || {};
        if (_0x378892.card_type === "time") {
          const _0x28bb85 = (_0x378892.duration === 0 || _0x378892.duration == null) && (_0x378892.expire_time === null || _0x378892.expire_time === "" || _0x378892.expire_time === undefined);
          const _0x29ad80 = _0x28bb85 ? "永久" : _0x378892.expire_time || "未知";
          showToast("已自动验证成功，到期时间：" + _0x29ad80, "info", 2500);
        } else {
          if (_0x378892.card_type === "count") {
            const _0x1dbf9c = _0x378892.remaining_count;
            const _0x42ee61 = _0x378892.total_count;
            showToast("已自动验证成功，剩余次数：" + (_0x1dbf9c ?? "未知") + "/" + (_0x42ee61 ?? "未知"), "info", 2500);
          } else {
            showToast("已自动验证成功", "info", 2200);
          }
        }
        handlePendingView();
      } else {
        showAuthSection();
        const _0x5061a3 = _0x49fb2e.message || (_0x49fb2e.msg ? _0x49fb2e.msg : JSON.stringify(_0x49fb2e));
        showToast("自动验证失败，请更换卡密重试：" + (_0x5061a3 || "未知原因"), "error", 3500);
      }
    });
  });
}
autoVerifyLicenseOnOpen();
saveLicenseBtn.addEventListener("click", () => {
  const _0x1ee374 = licenseInput.value.trim();
  if (!_0x1ee374) {
    showToast("请输入卡密后再保存。", "error");
    return;
  }
  if (!chrome?.["storage"]?.["local"] || !chrome?.["runtime"]) {
    showToast("当前环境不支持扩展存储/通信，仅作界面预览使用。", "error");
    return;
  }
  chrome.storage.local.set({
    licenseKey: _0x1ee374
  }, () => {
    chrome.runtime.sendMessage({
      type: "VERIFY_LICENSE",
      card_key: _0x1ee374
    }, _0x3814eb => {
      if (chrome.runtime.lastError) {
        showToast("验证失败：" + chrome.runtime.lastError.message, "error");
        return;
      }
      if (!_0x3814eb) {
        showToast("验证失败：无响应", "error");
        return;
      }
      if (!_0x3814eb.ok) {
        showToast("验证失败：" + (_0x3814eb.error || "未知错误"), "error");
        return;
      }
      const _0xc1059 = _0x3814eb.data || {};
      if (_0xc1059.code === 0 || _0xc1059.success === true) {
        showFeatureSection();
        if (_0xc1059.data && _0xc1059.data.card_type === "time") {
          const _0x137d40 = _0xc1059.data;
          const _0x168b2a = (_0x137d40.duration === 0 || _0x137d40.duration == null) && (_0x137d40.expire_time === null || _0x137d40.expire_time === "" || _0x137d40.expire_time === undefined);
          const _0x57e8f0 = _0x168b2a ? "永久" : _0x137d40.expire_time || "未知";
          let _0x2913bf = _0xc1059.message && _0xc1059.message.trim() ? _0xc1059.message.trim() : "时间卡验证成功";
          _0x2913bf.includes("重复验证") && (_0x2913bf = "时间卡验证成功");
          const _0x315186 = _0x2913bf + "，到期时间：" + _0x57e8f0;
          showToast(_0x315186, "info", 3500);
        } else {
          if (_0xc1059.data && _0xc1059.data.card_type === "count") {
            const _0x291c88 = _0xc1059.data;
            const _0x51ac7c = _0x291c88.remaining_count;
            const _0xb23655 = _0x291c88.total_count;
            const _0xbe60c0 = _0xc1059.message || "次数卡验证成功，剩余次数：" + (_0x51ac7c ?? "未知") + "/" + (_0xb23655 ?? "未知");
            showToast(_0xbe60c0, "info", 3200);
          } else {
            showToast(_0xc1059.message || "卡密验证成功", "info", 3000);
          }
        }
        handlePendingView();
      } else {
        const _0x5c0fdf = _0xc1059.message || (_0xc1059.msg ? _0xc1059.msg : JSON.stringify(_0xc1059));
        showAuthSection();
        showToast("卡密验证失败，请更换卡密重试：" + _0x5c0fdf, "error", 3500);
      }
    });
  });
});
const activateScriptBtn = document.getElementById("activate-script-btn");
activateScriptBtn && activateScriptBtn.addEventListener("click", () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, _0x30dcb6 => {
    if (_0x30dcb6.length === 0) {
      showToast("无法获取当前页面", "error");
      return;
    }
    const _0x255f07 = _0x30dcb6[0].id;
    chrome.tabs.sendMessage(_0x255f07, {
      type: "ACTIVATE_SCRIPT"
    }, _0x114ecf => {
      if (chrome.runtime.lastError) {
        showToast("激活失败：" + chrome.runtime.lastError.message, "error");
        return;
      }
      _0x114ecf && _0x114ecf.success ? showToast("脚本已激活", "info") : showToast(_0x114ecf?.["error"] || "激活失败，请刷新页面后重试", "error");
    });
  });
});
function loadPersons(_0x2b8195) {
  if (!chrome?.["storage"]?.["local"]) {
    persons = [];
    if (_0x2b8195) {
      _0x2b8195();
    }
    return;
  }
  chrome.storage.local.get(["userSettings"], _0x13d306 => {
    const _0x48c1bf = _0x13d306.userSettings;
    if (!_0x48c1bf) {
      persons = [];
      if (_0x2b8195) {
        _0x2b8195();
      }
      return;
    }
    try {
      const _0x2c657a = typeof _0x48c1bf === "string" ? JSON.parse(_0x48c1bf) : _0x48c1bf;
      if (Array.isArray(_0x2c657a)) {
        persons = _0x2c657a;
      } else {
        typeof _0x2c657a === "object" && _0x2c657a.name ? persons = [_0x2c657a] : persons = [];
      }
    } catch (_0x2d9d95) {
      console.error("加载设置失败:", _0x2d9d95);
      persons = [];
    }
    if (_0x2b8195) {
      _0x2b8195();
    }
  });
}
function savePersons() {
  if (!chrome?.["storage"]?.["local"]) {
    showToast("当前环境不支持扩展存储", "error");
    return;
  }
  const _0x46f18b = JSON.stringify(persons, null, 2);
  chrome.storage.local.set({
    userSettings: _0x46f18b
  }, () => {
    showToast("保存成功", "info");
  });
}
function renderPersonList() {
  if (!personList) {
    return;
  }
  if (persons.length === 0) {
    personList.innerHTML = "<div class=\"empty-state\">暂无人员信息<br/>点击\"添加人员\"开始添加</div>";
    addPersonBtn && (addPersonBtn.textContent = "+ 添加人员", addPersonBtn.disabled = false);
    return;
  }
  addPersonBtn && (persons.length >= 20 ? (addPersonBtn.textContent = "已达上限（20人）", addPersonBtn.disabled = true, addPersonBtn.style.opacity = "0.6") : (addPersonBtn.textContent = "+ 添加人员 (" + persons.length + "/20)", addPersonBtn.disabled = false, addPersonBtn.style.opacity = "1"));
  personList.innerHTML = persons.map((_0x15611f, _0x5472fb) => {
    const _0x55da95 = editingIndex === _0x5472fb;
    return "\n      <div class=\"person-card-wrapper\" data-index=\"" + _0x5472fb + "\">\n        <div class=\"person-card\">\n          <div class=\"person-card-header " + (_0x55da95 ? "editing" : "") + "\">\n            <div class=\"person-card-name\">" + (_0x15611f.name || "未命名") + "</div>\n            <div class=\"person-card-actions\">\n              <button class=\"btn-small btn-edit\" data-index=\"" + _0x5472fb + "\" data-action=\"edit\">" + (_0x55da95 ? "取消" : "编辑") + "</button>\n              <button class=\"btn-small btn-delete\" data-index=\"" + _0x5472fb + "\" data-action=\"delete\">删除</button>\n            </div>\n          </div>\n          " + (_0x55da95 ? createInlineEditForm(_0x5472fb, _0x15611f) : "") + "\n        </div>\n      </div>\n    ";
  }).join("");
  personList.querySelectorAll("[data-action]").forEach(_0x2a3270 => {
    _0x2a3270.addEventListener("click", _0x43c9b2 => {
      const _0xbd116d = parseInt(_0x43c9b2.target.getAttribute("data-index"));
      const _0x589e66 = _0x43c9b2.target.getAttribute("data-action");
      if (_0x589e66 === "edit") {
        editPerson(_0xbd116d);
      } else {
        _0x589e66 === "delete" && deletePerson(_0xbd116d);
      }
    });
  });
  personList.querySelectorAll(".inline-save-btn").forEach(_0x366379 => {
    _0x366379.addEventListener("click", _0x516049 => {
      const _0x5c0517 = parseInt(_0x516049.target.getAttribute("data-index"));
      saveInlineEdit(_0x5c0517);
    });
  });
  personList.querySelectorAll(".inline-cancel-btn").forEach(_0x30e5a1 => {
    _0x30e5a1.addEventListener("click", _0x50d0a2 => {
      const _0x3aec13 = parseInt(_0x50d0a2.target.getAttribute("data-index"));
      cancelInlineEdit(_0x3aec13);
    });
  });
}
function showAddForm() {
  if (persons.length >= 20) {
    showToast("最多只能添加20人", "error");
    return;
  }
  editingIndex >= 0 && (editingIndex = -1, renderPersonList());
  addFormContainer && (addFormContainer.style.display = "block");
  addPersonBtn && (addPersonBtn.style.display = "none");
  clearForm();
  editingIndex = -1;
  formTitle && (formTitle.textContent = "添加人员");
}
function hideAddForm() {
  addFormContainer && (addFormContainer.style.display = "none");
  addPersonBtn && (addPersonBtn.style.display = "block");
  clearForm();
  editingIndex = -1;
}
function clearForm() {
  if (nameInput) {
    nameInput.value = "";
  }
  if (remarkInput) {
    remarkInput.value = "";
  }
  if (phoneInput) {
    phoneInput.value = "";
  }
  if (idcardInput) {
    idcardInput.value = "";
  }
  if (provinceInput) {
    provinceInput.value = "";
  }
  if (cityInput) {
    cityInput.value = "";
  }
  if (districtInput) {
    districtInput.value = "";
  }
  if (branchInput) {
    branchInput.value = "";
  }
  if (exchangeTimeInput) {
    exchangeTimeInput.value = "";
  }
  if (quantityInput) {
    quantityInput.value = "";
  }
}
function createInlineEditForm(_0x2a232d, _0x3531f8) {
  const _0x4d140a = formatExchangeDateForInput(_0x3531f8.exchangeTime || "");
  return "\n    <div class=\"edit-form-inline\" data-edit-index=\"" + _0x2a232d + "\">\n      <div class=\"field-label\">姓名</div>\n      <input class=\"inline-edit-name\" type=\"text\" placeholder=\"请输入姓名\" value=\"" + (_0x3531f8.name || "").replace(/"/g, "&quot;") + "\" />\n\n      <div class=\"field-label\" style=\"margin-top: 10px\">备注（仅用于显示）</div>\n      <input class=\"inline-edit-remark\" type=\"text\" placeholder=\"例如：工行，家属账户等\" value=\"" + (_0x3531f8.remark || "").replace(/"/g, "&quot;") + "\" />\n      \n      <div class=\"field-label\" style=\"margin-top: 10px\">手机号码</div>\n      <input class=\"inline-edit-phone\" type=\"tel\" placeholder=\"请输入手机号码\" value=\"" + (_0x3531f8.phone || "").replace(/"/g, "&quot;") + "\" />\n      \n      <div class=\"field-label\" style=\"margin-top: 10px\">身份证号码</div>\n      <input class=\"inline-edit-idcard\" type=\"text\" placeholder=\"请输入身份证号码\" value=\"" + (_0x3531f8.idcard || "").replace(/"/g, "&quot;") + "\" />\n      \n      <div class=\"field-label\" style=\"margin-top: 10px\">省份</div>\n      <input class=\"inline-edit-province\" type=\"text\" placeholder=\"请输入省份\" value=\"" + (_0x3531f8.province || "").replace(/"/g, "&quot;") + "\" />\n      \n      <div class=\"field-label\" style=\"margin-top: 10px\">城市</div>\n      <input class=\"inline-edit-city\" type=\"text\" placeholder=\"请输入城市\" value=\"" + (_0x3531f8.city || "").replace(/"/g, "&quot;") + "\" />\n      \n      <div class=\"field-label\" style=\"margin-top: 10px\">区/县</div>\n      <input class=\"inline-edit-district\" type=\"text\" placeholder=\"请输入区/县\" value=\"" + (_0x3531f8.district || "").replace(/"/g, "&quot;") + "\" />\n      \n      <div class=\"field-label\" style=\"margin-top: 10px\">网点</div>\n      <input class=\"inline-edit-branch\" type=\"text\" placeholder=\"请输入网点\" value=\"" + (_0x3531f8.branch || "").replace(/"/g, "&quot;") + "\" />\n      \n      <div class=\"field-label\" style=\"margin-top: 10px\">兑换日期</div>\n      <input class=\"inline-edit-exchange-time\" type=\"date\" placeholder=\"请选择兑换日期\" value=\"" + _0x4d140a + "\" />\n      \n      <div class=\"field-label\" style=\"margin-top: 10px\">预约数量</div>\n      <input class=\"inline-edit-quantity\" type=\"number\" placeholder=\"请输入预约数量\" min=\"1\" value=\"" + (_0x3531f8.quantity || "") + "\" />\n      \n      <div class=\"form-buttons\" style=\"margin-top: 12px\">\n        <button class=\"btn inline-save-btn\" data-index=\"" + _0x2a232d + "\">保存</button>\n        <button class=\"btn btn-cancel inline-cancel-btn\" data-index=\"" + _0x2a232d + "\">取消</button>\n      </div>\n    </div>\n  ";
}
function editPerson(_0x4c6569) {
  if (_0x4c6569 < 0 || _0x4c6569 >= persons.length) {
    return;
  }
  if (editingIndex === _0x4c6569) {
    editingIndex = -1;
    renderPersonList();
    return;
  }
  hideAddForm();
  editingIndex = _0x4c6569;
  renderPersonList();
  const _0x506c05 = personList.querySelector("[data-index=\"" + _0x4c6569 + "\"]");
  _0x506c05 && _0x506c05.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}
function deletePerson(_0x57ddba) {
  if (_0x57ddba < 0 || _0x57ddba >= persons.length) {
    return;
  }
  confirm("确定要删除这条人员信息吗？") && (persons.splice(_0x57ddba, 1), savePersons(), renderPersonList(), showToast("已删除", "info"));
}
function saveInlineEdit(_0x349524) {
  if (_0x349524 < 0 || _0x349524 >= persons.length) {
    return;
  }
  const _0x3f6bf0 = personList.querySelector("[data-edit-index=\"" + _0x349524 + "\"]");
  if (!_0x3f6bf0) {
    return;
  }
  const _0x317c81 = {
    name: _0x3f6bf0.querySelector(".inline-edit-name")?.["value"]["trim"]() || "",
    remark: _0x3f6bf0.querySelector(".inline-edit-remark")?.["value"]["trim"]() || "",
    phone: _0x3f6bf0.querySelector(".inline-edit-phone")?.["value"]["trim"]() || "",
    idcard: _0x3f6bf0.querySelector(".inline-edit-idcard")?.["value"]["trim"]() || "",
    province: _0x3f6bf0.querySelector(".inline-edit-province")?.["value"]["trim"]() || "",
    city: _0x3f6bf0.querySelector(".inline-edit-city")?.["value"]["trim"]() || "",
    district: _0x3f6bf0.querySelector(".inline-edit-district")?.["value"]["trim"]() || "",
    branch: _0x3f6bf0.querySelector(".inline-edit-branch")?.["value"]["trim"]() || "",
    exchangeTime: normalizeExchangeDateValue(_0x3f6bf0.querySelector(".inline-edit-exchange-time")?.["value"] || ""),
    quantity: _0x3f6bf0.querySelector(".inline-edit-quantity")?.["value"]["trim"]() || ""
  };
  if (!_0x317c81.name) {
    showToast("请输入姓名", "error");
    return;
  }
  persons[_0x349524] = _0x317c81;
  savePersons();
  editingIndex = -1;
  renderPersonList();
  showToast("更新成功", "info");
}
function cancelInlineEdit(_0x11b331) {
  editingIndex = -1;
  renderPersonList();
}
function savePerson() {
  const _0xeeaef4 = {
    name: nameInput?.["value"]["trim"]() || "",
    remark: remarkInput?.["value"]["trim"]() || "",
    phone: phoneInput?.["value"]["trim"]() || "",
    idcard: idcardInput?.["value"]["trim"]() || "",
    province: provinceInput?.["value"]["trim"]() || "",
    city: cityInput?.["value"]["trim"]() || "",
    district: districtInput?.["value"]["trim"]() || "",
    branch: branchInput?.["value"]["trim"]() || "",
    exchangeTime: normalizeExchangeDateValue(exchangeTimeInput?.["value"] || ""),
    quantity: quantityInput?.["value"]["trim"]() || ""
  };
  if (!_0xeeaef4.name) {
    showToast("请输入姓名", "error");
    return;
  }
  if (editingIndex >= 0) {
    persons[editingIndex] = _0xeeaef4;
    showToast("更新成功", "info");
  } else {
    if (persons.length >= 20) {
      showToast("最多只能添加20人", "error");
      return;
    }
    persons.push(_0xeeaef4);
    showToast("添加成功", "info");
  }
  savePersons();
  renderPersonList();
  hideAddForm();
}
settingsBtn && settingsBtn.addEventListener("click", () => {
  showSettingsSection();
});
backBtn && backBtn.addEventListener("click", () => {
  hideAddForm();
  showFeatureSection();
});
addPersonBtn && addPersonBtn.addEventListener("click", () => {
  showAddForm();
});
savePersonBtn && savePersonBtn.addEventListener("click", () => {
  savePerson();
});
cancelFormBtn && cancelFormBtn.addEventListener("click", () => {
  hideAddForm();
});