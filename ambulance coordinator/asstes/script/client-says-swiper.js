const clientswiper = new Swiper(".client-says-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".client-says-swiper-btn .next-btn",
      prevEl: ".client-says-swiper-btn .prev-btn",
    },
    
    slidesPerView: 1 ,
    spaceBetween:100,
  });