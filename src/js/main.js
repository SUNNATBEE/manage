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
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 4,
      },
    },
  ],
});

// $(".multiple-items").slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
// });
$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  
});