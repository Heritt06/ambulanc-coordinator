const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".features-swiper-btn .next-btn",
      prevEl: ".features-swiper-btn .prev-btn",
    },
    
    slidesPerView: 1 ,
    breakpoints: {
      1680: {
        slidesPerView: 6,
      },
      1440: {
        slidesPerView: 5,
      },
      786: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      420: {
        slidesPerView: 2,
      },
    },
  });