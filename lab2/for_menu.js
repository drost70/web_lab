const OPEN_CLASSNAME = "open";

const navLinks = document.getElementById("nav_links");

function toggleMenu() {
    const menu = document.querySelector(".header__nav");
    const burger = document.querySelector(".header__menu");

    menu.classList.toggle("open");
    burger.classList.toggle("open");
}

