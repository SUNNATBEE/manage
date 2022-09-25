var elBtn = document.querySelector(".btn");
var elNav = document.querySelector(".sitenav")


elBtn.addEventListener("click", function () {
elBtn.closest(".header").classList.toggle("show");
});

$(".responsive").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// $(".multiple-items").slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
// });
// $(".autoplay").slick({
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   autoplay: true,
//   autoplaySpeed: 2000,
  
// });