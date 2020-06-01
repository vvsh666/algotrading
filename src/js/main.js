$(document).ready(function () {
  
  // Переключение меню
  $('.nav__item').on('click', function(){
    console.log($('.nav__item'));
    $('.nav__item:focus').addClass('nav__item--activ').sibling().removeClass('nav__item--activ')
  });




});