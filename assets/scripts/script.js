const mainMenu = document.querySelector('[data-main-menu-content]');
const mainMenuToggle = document.querySelector('[data-main-menu-toggle]');

mainMenuToggle.addEventListener("click", function (e) {
  if(mainMenu.classList.contains('active')) {
    mainMenu.classList.remove('active');
  } else {
    mainMenu.classList.add('active')
  }
});