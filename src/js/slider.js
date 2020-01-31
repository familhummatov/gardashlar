$(".similar-products .owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: true,
  navText: [
    '<img src="img/left-arrow.png"/>',
    '<img src="img/right-arrow.png"/>'
  ],
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 2
    },
    768: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});

$(".slider-container .owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<img src="img/left-arrow.png"/>',
    '<img src="img/right-arrow.png"/>'
  ],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
});

$(".about-slider-nav .slider-navbar .owl-carousel").owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  dots: true,
  navText: [
    '<img src="img/left-arrow.png"/>',
    '<img src="img/right-arrow.png"/>'
  ],
  autoWidth: true,
  items: 3
});

$(".media-slider-nav .slider-navbar .owl-carousel").owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  dots: true,
  navText: [
    '<img src="img/left-arrow.png"/>',
    '<img src="img/right-arrow.png"/>'
  ],
  autoWidth: true,
  items: 10
});
