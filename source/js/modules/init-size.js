const initSize = () => {
  const sizeBtn = document.querySelector('.order__card-size');

  if (!sizeBtn) {
    return
  }

  if (sizeBtn) {
    sizeBtn.addEventListener('onclick', () => {
      if (sizeBtn.classList.contains('active')) {
        sizeBtn.classList.remove('active');
      }
      else {
        sizeBtn.classList.add('active');
      };
    });
  };
}

export {initSize};
