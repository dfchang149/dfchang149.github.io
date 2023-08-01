const themeLink = document.querySelector('#themeLink')
const currentTheme = localStorage.getItem('theme') || 'dark'
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

function swapTheme () {
  if (themeLink.getAttribute('href') == 'darkTheme.css') {
    themeLink.href = 'lightTheme.css'
    localStorage.setItem('theme', 'light')
  } else if (themeLink.getAttribute('href') == 'lightTheme.css') {
    themeLink.href = 'systemTheme.css'
    localStorage.setItem('theme', 'system')
  } else {
    themeLink.href = 'darkTheme.css'
    localStorage.setItem('theme', 'dark')
  }
}

function themeButtonPressed () {
  swapTheme()
}

themeLink.href = currentTheme + 'Theme.css'
