function isNightTime(): boolean {
  const hours = new Date().getHours();
  // return hours >= 19 || hours <= 7;
  return hours <= 19;
}

function applyNightMode(): void {
  if (isNightTime()) {
    console.log("Night mode enabled");
    document.body.classList.add('night-mode');
  } else {
    document.body.classList.remove('night-mode');
  }
}

applyNightMode();
