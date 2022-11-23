const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 900,
  initialSlide: 5,
  direction: 'horizontal',
  slidesPerView: 'auto',
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});