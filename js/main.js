$(document).ready(function () {
  const swiper = new Swiper('.swiper', {
    // параметры слайдера
    loop: true,
    slidesPerView: 6,

    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView:2,
      },
      400:{
        slidesPerView:3,
      },
      768:{
        slidesPerView:6,
    }
    }
  });

  const reviewsSlider = new Swiper('.reviews_slider', {
    // параметры слайдера
    loop: true,
    slidesPerView: 1,

    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $("#review_1").on('click', function() {
  
  $.fancybox.open([
    {
      src : 'https://mykaleidoscope.ru/uploads/posts/2022-06/1656043599_63-mykaleidoscope-ru-p-koreiskie-buketi-tsvetov-krasivo-foto-64.jpg' ,
      opts : {
        caption : 'First caption' ,
        thumb : 'https://mykaleidoscope.ru/uploads/posts/2022-06/1656043599_63-mykaleidoscope-ru-p-koreiskie-buketi-tsvetov-krasivo-foto-64.jpg'
      }
    },
    {
      src : 'https://mykaleidoscope.ru/uploads/posts/2021-03/1615344426_56-p-tsvetok-austeriya-obraz-64.jpg' ,
      opts : {
        caption : 'Second caption' ,
        thumb : 'https://mykaleidoscope.ru/uploads/posts/2021-03/1615344426_56-p-tsvetok-austeriya-obraz-64.jpg'
      }
    },  
    {
      src : 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg' ,
      opts : {
        caption : 'Second caption' ,
        thumb : 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg'
      }
    }  
  ] , {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});  
});  

  