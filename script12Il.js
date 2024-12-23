function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const isVisible = element.style.display !== 'none';
        element.style.display = isVisible ? 'none' : 'block';
    }
}

function updateH1TextFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');

    if (utmTerm) {
        h1.textContent = utmTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

document.addEventListener('DOMContentLoaded', function () {
    showMessage("Скрипт загружен!");

    logCurrentTime();

    resetBackgroundColor();

    changeBackgroundColor("lightblue");

    toggleVisibility('.content');

    updateH1TextFromUrl();
});
    