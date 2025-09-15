//Drop down menu button setup
// Menu + Theme toggle (minimal, safe)
document.addEventListener('DOMContentLoaded', () => {
  // menu toggle (safe checks)
  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('.main-nav ul');
  if (toggle && navMenu) {
    toggle.addEventListener('click', () => navMenu.classList.toggle('active'));
  }

  // theme toggle using data-theme on <html>, persisted in localStorage
  const themeBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');

  root.setAttribute('data-theme', initial);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
});