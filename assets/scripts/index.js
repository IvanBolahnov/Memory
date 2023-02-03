let menu = document.querySelector(".menu__wrapper"),
menuButton = document.querySelector(".header__menu-button")

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu--opened");
  menuButton.classList.toggle("header__menu-button--opened");
})