var header = document.querySelector(".header");
var header_toggle = document.querySelector(".header__menu-toggle");

var search_form = document.querySelector(".programs__form");
var form_name = search_form.querySelector("#form-name");
var form_weight = search_form.querySelector("#form-weight");
var form_email = search_form.querySelector("#form-email");
var form_phone = search_form.querySelector("#form-phone");

header.classList.remove("header--active");

header_toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (header.classList.contains("header--active")) {
    header.classList.remove("header--active");
  } else {
    header.classList.add("header--active");
  }
});

search_form.addEventListener("submit", function(evt) {

  if (!form_phone.value) {
    evt.preventDefault();
    form_phone.classList.add("picking-form__text-input--error");
    form_phone.focus();
  }

  if (!form_email.value) {
    evt.preventDefault();
    form_email.classList.add("picking-form__text-input--error");
    form_email.focus();
  }

  if (!form_weight.value) {
    evt.preventDefault();
    form_weight.classList.add("picking-form__text-input--error");
    form_weight.focus();
  }

  if (!form_name.value) {
    evt.preventDefault();
    form_name.classList.add("picking-form__text-input--error");
    form_name.focus();
  }
});
