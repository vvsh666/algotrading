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

// Вызов модального окна    
modalBtn.on('click', function() {
modal.toggleClass('modal--visible');
});

// Закрытие модального окна по кнопке close
closeBtn.on('click', function() {
modal.toggleClass('modal--visible');
});

// Закрытие модального окна по кнопке Esc
$(document).on('keydown', function(event) {
if (event.code == 'Escape' && modal.hasClass('modal--visible')) {
modal.removeClass('modal--visible');
}
});

// Закрытие модального окна по клику вне модального окна
$(document).on('click', function(event) {
if ($(event.target).is('.modal--visible')) {
modal.removeClass('modal--visible');
}
});

//Закрытие модального окна благодарности по кнопке Esc
$(document).on('keydown', function(event) {
if (event.code == 'Escape' && modalThanks.hasClass('modal-thanks--visible')) {
modalThanks.removeClass('modal-thanks--visible');
}
});

// Закрытие модального окна благодарности по клику вне модального окна
$(document).on('click', function(event) {
if ($(event.target).is('.modal-thanks--visible')) {
modalThanks.removeClass('modal-thanks--visible');
}
});

// Закрытие модального окна благодарности по кнопке close
closeBtnThanks.on('click', function() {
modalThanks.toggleClass('modal-thanks--visible');
});

// Закрытие модального окна благодарности по кнопке перехода в ВК
linkThanks.on('click', function() {
modalThanks.toggleClass('modal-thanks--visible');
});

modalThanksSpam = $('.modal-thanks-spam'),
closeBtnThanksSpam = $('.modal-thanks-spam__close');

//Закрытие модального окна благодарности по кнопке Esc
$(document).on('keydown', function(event) {
  if (event.code == 'Escape' && modalThanks.hasClass('modal-thanks-spam--visible')) {
  modalThanksSpam.removeClass('modal-thanks-spam--visible');
  }
  });
  
  // Закрытие модального окна благодарности по клику вне модального окна
  $(document).on('click', function(event) {
  if ($(event.target).is('.modal-thanks-spam--visible')) {
  modalThanksSpam.removeClass('modal-thanks-spam--visible');
  }
  });
  
  // Закрытие модального окна благодарности по кнопке close
  closeBtnThanksSpam.on('click', function() {
  modalThanksSpam.toggleClass('modal-thanks-spam--visible');
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
    // centeredSlides: true,
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
  });

  // Видео в секции Simple

  var player;
  $('.simple__video-play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-simple', {
      height: '100%',
      width: '100%',
      videoId: 'jT8u8cawcsI',
      events: {
        'onReady': onPlayerReady
      }
    });
  });

   // Видео в секции reviews

  $('.reviews__video-play-1').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-reviews-1', {
      height: '100%',
      width: '100%',
      videoId: 'z1CfSiDiTJ4',
      events: {
        'onReady': onPlayerReady
      }
    });
  });

  $('.reviews__video-play-2').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-reviews-2', {
      height: '100%',
      width: '100%',
      videoId: '5feSiJDOsfY',
      events: {
        'onReady': onPlayerReady
      }
    });
  });

  $('.reviews__video-play-3').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-reviews-3', {
      height: '100%',
      width: '100%',
      videoId: '5feSiJDOsfY',
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
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
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

  //Валидация формы questions__form

  $('.questions__form').validate({
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
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
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
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
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

  // Валидация формы footer__form

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userEmail: {
        required: true,
        email: true
      },
    },
    messages: {
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
          modalThanksSpam.toggleClass('modal-thanks-spam--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }        
      });
    }
  });

    // Валидация формы create__form

    $('.create__form').validate({
      errorClass: "error",
      errorElement: "div",
      rules: {
        numTool: {
          required: true,
          number: true
        },
        profit: {
          required: true,
          number: true
        },
        numToolBroker: {
          required: true,
          number: true
        },
        sum: {
          required: true,
          // number: true
        },
      },
      messages: {
        numTool: {
          required: "Введите данные",
          number: "Только цифры"
        },
        profit: {
          required: "Введите данные",
          number: "Только цифры"
        },
        numToolBroker: {
          required: "Введите данные",
          number: "Только цифры"
        },
        sum: {
          required: "Введите данные",
          // number: "Только цифры"
        },
      },
/*       submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            $(form)[0].reset();
            modalThanksSpam.toggleClass('modal-thanks-spam--visible');
          },
          error: function(response) {
            console.error('Ошибка запроса ' + response);
          }        
        });
      } */
    });

    // Маска для номера телефона

    $('[type=tel]').mask('+7 (000) 000-00-00');

    // Маска для поля Сумма депозита

    $('#sum').mask('### ### ###000 000 000', { reverse: true });

});