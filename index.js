const menuToggle = document.querySelector(".menu-toggle input");
const navBar = document.querySelector("ul");

menuToggle.addEventListener("click", function () {
  navBar.classList.toggle("slide");
});
