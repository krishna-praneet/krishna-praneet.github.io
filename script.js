var darkModeEnabled = false;
function toggleDarkMode() {
  const element = document.getElementsByTagName("html").item(0)
  if (darkModeEnabled) {
    element.removeAttribute("data-bs-theme")
  } else {
    element.setAttribute("data-bs-theme", "dark")
  }
  darkModeEnabled = !darkModeEnabled 
}
