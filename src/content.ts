function isNightTime(): boolean {
  const hours = new Date().getHours();
  return hours >= 19 || hours <= 7;
}

function applyNightMode(): void {
  if (isNightTime()) {
    document.body.classList.add('night-mode');
  } else {
    document.body.classList.remove('night-mode');
  }
}

applyNightMode();
