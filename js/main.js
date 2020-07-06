$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    dots: true,
    arrows: false,
  });
});

$(document).ready(function () {
  $(".slider-2").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 600,
    dots: false,
    arrows: true,
    prevArrow:
      '<span class="priv_arrow" ><i class="fas fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="next_arrow" ><i class="fas fa-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".menu__btn").click(function (event) {
    $(".menu__btn,.menu,.menu__wrap").toggleClass("active");
  });
});
