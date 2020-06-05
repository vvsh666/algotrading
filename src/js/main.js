$(document).ready(function () {
  
  // Переключение меню
/*   $('.nav__item').on('click', function(){
    console.log($('.nav__item'));
    $('.nav__item:focus').addClass('nav__item--activ').sibling().removeClass('nav__item--activ')
  });
 */

var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),

    btnUp = $('.button-up'),

    modalThanks = $('.modal-thanks'),
    closeBtnThanks = $('.modal-thanks__close'),
    linkThanks = $('.modal-thanks__link');

modalBtn.on('click', function() {
modal.toggleClass('modal--visible');
});

closeBtn.on('click', function() {
modal.toggleClass('modal--visible');
});

$(document).on('keydown', function(event) {
if (event.code == 'Escape' && modal.hasClass('modal--visible')) {
modal.removeClass('modal--visible');
}
});

$(document).on('click', function(event) {
if ($(event.target).is('.modal--visible')) {
modal.toggleClass('modal--visible');
}
});

closeBtnThanks.on('click', function() {
modalThanks.toggleClass('modal-thanks--visible');
});

linkThanks.on('click', function() {
modalThanks.toggleClass('modal-thanks--visible');
});


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

  // Слайдер секции Reviews

  var reviewsSwiper = new Swiper('.reviews__swiper-container', {
    speed: 400,
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,
  });

  // Видео в секции Simple

  var player;
  $('.simple__video-play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-simple', {
      // height: '360',
      // width: '640',
      videoId: 'jT8u8cawcsI',
      events: {
        'onReady': onPlayerReady
      }
    });
  });

  $('.reviews__video-play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-reviews', {
      // height: '100%',
      // width: '100%',
      videoId: 'z1CfSiDiTJ4',
      events: {
        'onReady': onPlayerReady
      }
    });
  });

  function onPlayerReady(event) {
    event.target.playVideo();
  };

  // Слайдер секции lessons

  var lessonsPrepSwiper = new Swiper('.lessons-prep__swiper-container', {
    speed: 400,
    loop: false,
    spaceBetween: 100,
    centeredSlides: true,
    controller: {
      control: lessonsSwiper,
      by: 'slide',
    },
    pagination: {
      el: '.lessons__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.lessons__arrow-next',
      prevEl: '.lessons__arrow-prev',
    },
  });

  var lessonsSwiper = new Swiper('.lessons__swiper-container', {
    speed: 400,
    loop: false,
    spaceBetween: 100,
    centeredSlides: true,
    controller: {
      control: lessonsPrepSwiper,
      by: 'slide',
    },
    pagination: {
      el: '.lessons__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.lessons__arrow-next',
      prevEl: '.lessons__arrow-prev',
    },
  });
  
  //Валидация формы freevideo__form

  $('.freevideo__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      userEmail: {
        required: true,
        email: true
      },
    },
    messages: {
      userName: {
        required: "Введите имя",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Введены не все цифры"
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('modal-thanks--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }        
      });
    }
  });

   //Валидация формы modal__form

   $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      userEmail: {
        required: true,
        email: true
      },
    },
    messages: {
      userName: {
        required: "Введите имя",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Введены не все цифры"
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('modal-thanks--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }        
      });
    }
  });

    // Маска для номера телефона

    $('[type=tel]').mask('+7 (000) 000-00-00');

});