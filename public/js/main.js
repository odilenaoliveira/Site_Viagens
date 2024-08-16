const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.onclick = function(){
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
}