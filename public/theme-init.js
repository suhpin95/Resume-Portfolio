(() => {
  try {
    const stored = localStorage.getItem('theme');
    const theme = stored === 'dark' ? 'dark' : 'light';
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.add(theme);
    root.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = 'light';
  }
})();
