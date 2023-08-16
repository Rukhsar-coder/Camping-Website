// -----------SHOW MENU---------------
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ----------- MENU SHOW ---------------
// check if the contant exsist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ----------- MENU HIDDEN ---------------
// check if the contant exsist
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ----------- REMOVE MENU MOBILE ---------------
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => {
  n.addEventListener("click", linkAction);
});

// ----------- CHANGE BACKGROUND HEADER ---------------
const bgHearder = () => {
  const header = document.getElementById("header");
  //When the bg is greater then 50 viewpoints height, add the bg-header class to the header tag
  this.screenY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHearder);
