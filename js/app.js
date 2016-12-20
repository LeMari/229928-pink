var nav = document.querySelector('.nav');
var header_title = document.querySelector('.header__title');
var button_toggle = document.querySelector('.nav-toggle');
button_toggle.addEventListener('click', function (event) {
  event.preventDefault();
  nav.classList.toggle('nav_active');
  header_title.classList.toggle('header__title_active');
});
