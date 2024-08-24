const topMenu = document.querySelector('[data-top-menu-content]');
const topMenuToggle = document.querySelector('[data-top-menu-toggle]');


console.log(topMenu);
console.log(topMenuToggle);

topMenuToggle.addEventListener("click", function (e) {
  if(topMenu.classList.contains('active')) {
    topMenu.classList.remove('active');
  } else {
    topMenu.classList.add('active')
  }
});