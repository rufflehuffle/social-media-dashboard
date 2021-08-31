function switchDarkMode() {
    const page = document.querySelector('.js-page');
    page.classList.remove('light');
    page.classList.add('dark');
}

function switchLightMode() {
    const page = document.querySelector('.js-page');
    page.classList.remove('dark');
    page.classList.add('light');
}

function toggleTheme() {
    const page = document.querySelector('.js-page');
    lightMode = page.classList.contains('light');

    if (lightMode) {
        switchDarkMode();
        lightMode = false;
    } else {
        switchLightMode();
        lightMode = true;
    }
}

document.querySelector('.js-switch').addEventListener('change', toggleTheme);