//главный баннер
$(".banner__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  autoplay: false,
  draggable: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
      },
    },
  ],
});

//карта с метками
$(".location__list").on("click", ".location__item", function () {
  $(".location__item.active").removeClass("active");
  $(".location__marker.active").removeClass("active");
  $(this).addClass("active");
  $("#marker-" + $(this).attr("id")).addClass("active");
});

//табы
$(".flot__tab").click(function () {
  var tabId = $(this).data("tab");

  $(".flot__tab").removeClass("active");
  $(".flot__item").removeClass("active");

  $(this).addClass("active");
  $('.flot__item[id="' + tabId + '"]').addClass("active");
});

//вопрос-ответ
$(".faq-question").not(":first").find(".item-question__content").hide();

$(".faq-question:first-child")
  .addClass("active")
  .find(".item-question__content")
  .slideDown(400);

$(".item-question__head").click(function () {
  var parent = $(this).parent();

  if (parent.hasClass("active")) {
    parent.removeClass("active");
    $(this).siblings(".item-question__content").slideUp(400);
  } else {
    $(".faq-question").removeClass("active");
    $(".item-question__content").slideUp(400);

    parent.addClass("active");
    $(this).siblings(".item-question__content").slideDown(400);
  }
});

//бургер меню
$(".sandwich").click(function () {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".header__content").slideDown().addClass("active");
  } else {
    $(".header__content").slideUp().removeClass("active");
  }
});

//маска номера телефона
$(".input-phone").mask("+7 (999) 999-99-99");


//анимация header
var lastScrollTop = 0;
var $headerTop = $(".header__top");
var $headerBottom = $(".header__bottom");

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  var scrollDirection = scrollTop > lastScrollTop ? "down" : "up";
  lastScrollTop = scrollTop;

  if (scrollDirection === "down") {
    $headerTop.slideUp();
  } else {
    $headerTop.slideDown();
  }
});
