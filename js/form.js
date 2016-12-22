var link = document.querySelector(".form__send");
var form = document.querySelector("form");
var popup_wrapper = document.querySelector(".form-alert");
var popup_fail = popup_wrapper.querySelector(".popup-fail");
var popup_success = popup_wrapper.querySelector(".popup-success");
var close_success = popup_wrapper.querySelector(".popup-success__send");
var close_fail = popup_wrapper.querySelector(".popup-fail__send");
var username = form.querySelector("[name=name]");
var userfamily = form.querySelector("[name=family]");
var email = form.querySelector("[name=email]");
var storage = localStorage.getItem("username");

close_success.addEventListener("click", function (a) {
  a.preventDefault();
  close();
});
close_fail.addEventListener("click", function (a) {
  a.preventDefault();
  close();
});
form.addEventListener("submit", function (a) {

  a.preventDefault();

  email.classList.remove("required");
  username.classList.remove("required");
  userfamily.classList.remove("required");

  if (userfamily.value && username.value && email.value) {
    popup_wrapper.classList.add("form-alert_active");
    popup_success.classList.add("popup-success_active");
    popup_fail.classList.remove("popup-fail_active");

    localStorage.setItem("username", username.value);
  } else {
    popup_wrapper.classList.add("form-alert_active");
    popup_success.classList.remove("popup-success_active");
    popup_fail.classList.add("popup-fail_active");

    if (!userfamily.value) {
      console.log('family empty');
      userfamily.classList.add("required");
    } else userfamily.classList.remove("required");
    if (!username.value) {
      console.log('name empty');
      username.classList.add("required");
    } else username.classList.remove("required");
    if (!email.value) {
      console.log('email empty');
      email.classList.add("required");
    } else email.classList.remove("required");
  }
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {

    close();
  }
});

function close() {

  if (popup_wrapper.classList.contains("form-alert_active")) {
    popup_wrapper.classList.remove("form-alert_active");
    popup_success.classList.remove("popup-success_active");
    popup_fail.classList.remove("popup-fail_active");

  }
}
