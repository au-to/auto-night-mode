chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ nightModeEnabled: false });
});

// 切换模式
function toggleNightMode() {
  chrome.storage.local.get("nightModeEnabled", (data) => {
    const newStatus = !data.nightModeEnabled;
    chrome.storage.local.set({ nightModeEnabled: newStatus });
  });
}