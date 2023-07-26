
const theme = document.querySelector("#themeLink");

function themeButtonPressed() {
    // If the current URL contains "light-theme.css"
    if (theme.getAttribute("href") == "lightTheme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "darkTheme.css";
    // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "lightTheme.css";
    }
}