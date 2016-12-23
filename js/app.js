var nav = document.querySelector('.nav');
var header_title = document.querySelector('.header__title');
var button_toggle = document.querySelector('.nav-toggle');
var burger_toggle = document.querySelector('.header__burger');
var cross_toggle = document.querySelector('.header__cross');
button_toggle.addEventListener('click', function (event) {
  event.preventDefault();
  nav.classList.toggle('nav_active');
  header_title.classList.toggle('header__title_active');
  burger_toggle.classList.toggle('header__burger_hidden');
  cross_toggle.classList.toggle('header__cross_hidden');
});
