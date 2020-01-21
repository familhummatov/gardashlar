$(".product-slider .owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  items: 1
});

$(".similar-products .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
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

$(".new-container .owl-carousel").owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  navText: [
    '<img src="img/left-arrow.png"/>',
    '<img src="img/right-arrow.png"/>'
  ],
  autoWidth: true,
  items: 5
});
