var nav = document.querySelector('.nav');
var header_title = document.querySelector('.header__title');
var button_toggle = document.querySelector('.nav-toggle');
var burger_toggle = document.querySelector('.header__burger');
var cross_toggle = document.querySelector('.header__cross');

nav.classList.remove('nav_active');
burger_toggle.classList.remove('header__burger_hidden');
header_title.classList.remove('header__title_active');
cross_toggle.classList.add('header__cross_hidden');

button_toggle.addEventListener('click', function (event) {
  event.preventDefault();
  nav.classList.toggle('nav_active');
  header_title.classList.toggle('header__title_active');
  burger_toggle.classList.toggle('header__burger_hidden');
  cross_toggle.classList.toggle('header__cross_hidden');
});
