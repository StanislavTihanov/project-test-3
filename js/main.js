"use strict"

//------------------------------------------------------------------------Меню-Бургер
const burgerMenu = document.querySelector('.header__burger');
const menuBody= document.querySelector('.menu');

if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}


 

