"use strict";
function isNightTime() {
    const hours = new Date().getHours();
    return hours >= 19 || hours <= 7;
}
function applyNightMode() {
    if (isNightTime()) {
        document.body.classList.add('night-mode');
    }
    else {
        document.body.classList.remove('night-mode');
    }
}
applyNightMode();
//# sourceMappingURL=content.js.map