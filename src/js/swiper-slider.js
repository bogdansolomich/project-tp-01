const swiper = new Swiper('.swiper', {
  
  slidesPerView: 3,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: 4
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  },
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  centeredSlides: false,
  
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ('.swiper-button-next', '.btn-next'),
    prevEl: ('.swiper-button-prev', '.btn-prev')
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});