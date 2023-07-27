const themeLink = document.querySelector("#themeLink");
const currentTheme = localStorage.getItem("theme") || "dark";
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const darkThemeIcon = document.getElementById("darkThemeIcon");
const lightThemeIcon = document.getElementById("lightThemeIcon");
const systemThemeIcon = document.getElementById("systemThemeIcon");

function loadSystemTheme(){
    // if(prefersDarkScheme.matches) {
    //     themeLink.href = "darkTheme.css";
    // } else {
    //     themeLink.href = "lightTheme.css";
    // }
    themeLink.href = "systemTheme.css";
}

function swapTheme() {
    if (themeLink.getAttribute("href") == "darkTheme.css") {
        themeLink.href = "lightTheme.css";
        localStorage.setItem("theme","light");
    } else if (themeLink.getAttribute("href") == "lightTheme.css") {
        loadSystemTheme();
        localStorage.setItem("theme","system");
    } else {
        themeLink.href = "darkTheme.css";
        localStorage.setItem("theme","dark");
    }
}

function themeButtonPressed() {
    swapTheme();
}

if(currentTheme == "system") {
    loadSystemTheme();
} else {
    themeLink.href = currentTheme+"Theme.css";
}