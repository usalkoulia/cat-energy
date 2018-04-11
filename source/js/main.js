var header = document.querySelector(".header");
var header_toggle = document.querySelector(".header__menu-toggle");

header.classList.remove("header--active");
// header_toggle.classList.add("header__menu-toggle--active");

header_toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (header.classList.contains("header--active")) {
    header.classList.remove("header--active");
  } else {
    header.classList.add("header--active");
  }
});
