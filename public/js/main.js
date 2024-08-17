const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

menu.onclick = function(){
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
    logo.classList.toggle("active");
}