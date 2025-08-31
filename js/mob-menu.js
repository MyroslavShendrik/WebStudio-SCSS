(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob-menu-open-btn'),
    closeMenuBtn: document.querySelector('.mob-menu-close-btn'),
    menu: document.querySelector('.mob-menu-box'),
  };

  function toggleMenu() {
    if (window.innerWidth <= 480) {
      refs.menu.classList.toggle('is-hidden');
    }
  }

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 480) {
      refs.menu.classList.add('is-hidden');
    }
  });
})();