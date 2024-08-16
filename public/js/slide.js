var swiper = new Swiper(".slider-wrapper", {
    loop:true,
    grabCursor:true,
    spaceBetween:30,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*ScrollReveal*/
ScrollReveal({reset:true,distance:'40px',duration:2500,delay:200});

ScrollReveal().reveal('.destaque .card',{origin:'bottom',interval:200});
ScrollReveal().reveal('.desconto',{origin:'left',delay:200});
ScrollReveal().reveal('.visitados',{origin:'right',delay:300});
ScrollReveal().reveal('.guias',{origin:'bottom',delay:400});
