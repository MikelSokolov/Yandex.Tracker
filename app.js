const appVersion = "1.3";

function showVersion() {
  console.log(`Текущая версия приложения: ${appVersion}`);
}

function initializeApplication() {
  console.log("Интерфейс успешно загружен");
  console.log("Стабильность работы приложения улучшена");
  showVersion();
}

initializeApplication();
const systemStatus = {
  version: "1.3",
  status: "stable",
  lastUpdate: "2026-10-05"
};

function checkSystemStatus() {
  if (systemStatus.status === "stable") {
    return `Версия ${systemStatus.version} работает стабильно`;
  }

  return "Обнаружены проблемы в работе системы";
}

console.log(checkSystemStatus());
