const menuContainer = document.querySelector('.menu-dropdown-container');
const menuBtn = document.querySelector('.menu-btn');

if (menuBtn && menuContainer) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuContainer.classList.toggle('open');
  });

  menuContainer.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  window.addEventListener('click', () => {
    menuContainer.classList.remove('open');
  });
}