let swiperFeatures = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1260: {
      slidesPerView: 3,
    },
  },
});

let swiperReviews = new Swiper(".swiper-container-reviews", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1260: {
      slidesPerView: 3,
    },
  },
});

let swiperLogo = new Swiper(".swiper-container-logo", {
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1260: {
      slidesPerView: 5,
    },
  },
});
