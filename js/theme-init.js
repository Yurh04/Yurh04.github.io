(() => {
  try {
    const theme = localStorage.getItem("site-theme");
    if (theme === "dark" || theme === "light") {
      document.documentElement.dataset.theme = theme;
    }
  } catch {
    // Private browsing can disable storage; the light theme remains the safe fallback.
  }
})();
