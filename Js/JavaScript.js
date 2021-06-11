`use strict`;

// var mySwiper = new Swiper('.swiper-container', {
// });

// var mySwiper = new Swiper('.swiper-container', {
// navigation: {
// nextEl: '.swiper-button-next',
// prevEl: '.swiper-button-prev'
// }
// });

// var mySwiper = new Swiper('.swiper-container', {
// pagination: {
// el: '.swiper-pagination',
// type: 'bullets',
// clickable: true
// }
// });

// var mySwiper = new Swiper('.swiper-container', {
// autoHeight: true,
// navigation: {
// nextEl: '.swiper-button-next',
// prevEl: '.swiper-button-prev'
// },
// pagination: {
// el: '.swiper-pagination',
// type: 'bullets',
// clickable: true
// }
// });

// window.addEventListener('DOMContentLoaded', function() {
//   var swiper = new Swiper('.sample02 .swiper-container', {
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     loop: true,
//     speed: 1000,
//     autoplay: 3000,
//     spaceBetween: 10,
//     effect: 'coverflow'
//   });
// }, false);


// var mySwiper = new Swiper('.swiper-container', {
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	}
// });

let mySwiper3 = new Swiper ('#swiper03', {
 
  autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',  //fraction タイプ
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
  speed: 800,
	slidesPerView: 1.3,

  centeredSlides : true

  
 
})



