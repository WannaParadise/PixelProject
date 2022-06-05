
$(document).ready(function() {

  $(".icons_slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: '90px',
    useTransform: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 2000,

      pauseOnHover: true,

    responsive: [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }

]


  }); 
});


  // FAQ Fade

$('document').ready(() => {
  $(".faq_item-1").click(() => {
    $(".faq_text-1").slideToggle("slow");
    $(".faq_item-1").toggleClass("faq_open");
    $(".faq_text-1").css("display", "block");
    $(".elem-1").toggleClass("elem_open")
  })

  $(".faq_item-2").click(() => {
    $(".faq_text-2").slideToggle("slow");
    $(".faq_item-2").toggleClass("faq_open");
    $(".faq_text-2").css("display", "block");
    $(".elem-2").toggleClass("elem_open")
  })

  $(".faq_item-3").click(() => {
    $(".faq_text-3").slideToggle("slow");
    $(".faq_item-3").toggleClass("faq_open");
    $(".faq_text-3").css("display", "block");
    $(".elem-3").toggleClass("elem_open")
  })

  $(".faq_item-4").click(() => {
    $(".faq_text-4").slideToggle("slow");
    $(".faq_item-4").toggleClass("faq_open");
    $(".faq_text-4").css("display", "block");
    $(".elem-4").toggleClass("elem_open")
  })
})


// Adaptive settings

window.addEventListener(`resize`, event => {
  if (window.screen.width < 1024){
    $('.bg_main').addClass("bg_mini");
    $('.hero_button').css("zoom", "4");
    $('.header_row').css("justify-content", "center");
    $('.header_row').css("zoom", "5");
    $('.nav').css("margin-left", "195px");
    $('.nav').css("padding", "10px 0px");
    $('.nav').css("background", "rgba(0, 0, 0, 0.35)");
    $('.header_button').css("background", "transparent");
    $('.header_button').css("margin-left", "0px");
    $('.nav img').css("width", "30px");
    $('.nav li').css("margin", "8px");
    $('.header_button').css("margin-left", "0px");
    $('.header_button').css("padding", "17px 25px 13px 18px");
    $('.panda-4').css("display", "none");
    $('.panda-2').css("top", "1287px");
  } else{
    $('.bg_main').removeClass("bg_mini");
    $('.hero_button').css("zoom", "0");
    $('.header_logo h1').removeClass("header_big");
    $('.header_row').css("justify-content", "space-between");
    $('.header_row').css("zoom", "0");
    $('.nav').css("margin-left", "0");
    $('.nav').css("padding", "0px");
    $('.nav').css("background", "transparent");
    $('.header_button').css("background", "rgba(19, 16, 16, 0.31)");
    $('.nav img').css("width", "50px");
    $('.nav li').css("margin", "0px 18px");
    $('.header_button').css("margin-left", "8px");
    $('.header_button').css("padding", "20px 32px 16px 32px");
    $('.panda-4').css("display", "block");
    $('.panda-2').css("top", "2000px");
  }
}, false);


// Footer buttons

$('.home_btn').on("click", function() {
  $("html, body").animate({
    scrollTop: 0
  }, "slow")
})


$('.faq_btn').on("click", function() {
  $("html, body").animate({
    scrollTop: $("#faq").offset().top
  }, "slow")
})

$('.roadmap_btn').on("click", function() {
  $("html, body").animate({
    scrollTop: $("#roadmap").offset().top
  }, "slow")
})

$('.team_btn').on("click", function() {
  $("html, body").animate({
    scrollTop: $("#team").offset().top
  }, "slow")
})

