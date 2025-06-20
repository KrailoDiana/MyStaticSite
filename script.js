'use strict';

/*navbar toggle in modile*/

const /**{NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /**{NodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

const /**{NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
   $header.classList [window.scrollY > 50 ? "add" : "remove"]("active");
})