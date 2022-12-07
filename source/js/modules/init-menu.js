const initMainNav = () => {
  const mainNav = document.querySelector('.main-nav');
  const menuBtn = document.querySelector('.main-nav__toggle');

  if (!menuBtn) {
    return;
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('main-nav--open');
    });
  };
}

export { initMainNav };
