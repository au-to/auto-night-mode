// 等待 DOM 加载完成
document.addEventListener("DOMContentLoaded", () => {
  const statusElement = document.getElementById("status") as HTMLElement;
  const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement;

  // 根据状态更新页面显示内容
  function updateStatus(isEnabled: boolean) {
    statusElement.textContent = isEnabled ? "ON" : "OFF";
    if (isEnabled) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }

  // 更新状态文本
  chrome.storage.local.get("nightModeEnabled", (data) => {
    updateStatus(data.nightModeEnabled);
  });

  // 按钮点击事件：切换夜间模式
  toggleButton.addEventListener("click", () => {
    chrome.storage.local.get("nightModeEnabled", (data) => {
      const newStatus = !data.nightModeEnabled;
      chrome.storage.local.set({ nightModeEnabled: newStatus }, () => {
        updateStatus(newStatus);
      });
    });
  });
});
