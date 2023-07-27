const themeLink = document.querySelector("#themeLink");
const currentTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (currentTheme == null) {
    themeLink.href = "darkTheme.css";
} else {
    themeLink.href = currentTheme+"Theme.css";
}

function swapTheme() {
    if (themeLink.getAttribute("href") == "lightTheme.css") {
        themeLink.href = "darkTheme.css";
        localStorage.setItem("theme","dark");
    } else {
        themeLink.href = "lightTheme.css";
        localStorage.setItem("theme","light");
    }
}

function themeButtonPressed() {
    swapTheme();
}
