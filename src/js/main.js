$(document).ready(function () {
  
  // Переключение меню
/*   $('.nav__item').on('click', function(){
    console.log($('.nav__item'));
    $('.nav__item:focus').addClass('nav__item--activ').sibling().removeClass('nav__item--activ')
  });
 */
  // Слайдер секции Benefit

  var benefitSwiperPrev = new Swiper('.benefit__swiper-container-prev', {
    speed: 400,
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,
    controller: {
      control: benefitSwiper,
      by: 'slide',
    },
    navigation: {
      nextEl: '.benefit__button-next',
      prevEl: '.benefit__button-prev',
    },
  });

  var benefitSwiperNext = new Swiper('.benefit__swiper-container-next', {
    speed: 400,
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,
    controller: {
      control: benefitSwiperPrev,
      by: 'slide',
    },
    navigation: {
      nextEl: '.benefit__button-next',
      prevEl: '.benefit__button-prev',
    },
  });

  var benefitSwiper = new Swiper('.benefit__swiper-container', {
    speed: 400,
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,
    controller: {
      control: benefitSwiperNext,
      by: 'slide',
    },
    navigation: {
      nextEl: '.benefit__button-next',
      prevEl: '.benefit__button-prev',
    },
  });

  // Видео в секции Simple

  var player;
  $('.simple__video-play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'jT8u8cawcsI',
      events: {
        'onReady': onPlayerReady
      }
    });
  });

  function onPlayerReady(event) {
    event.target.playVideo();
  };


  

});