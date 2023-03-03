// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');
// const close = document.querySelector('.menu__close');

// burger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

//  close.addEventListener('click', () => {
//      menu.classList.remove('active');
//  });

//burger menu

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu__link'),
          burger = document.querySelector('.burger');
          close = document.querySelector('.menu__overlay');
          social = document.querySelector('.menu__social');
          closeAnimate = document.querySelector('.close');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('active');
    });

    menuItem.forEach(item => {
      item.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('active');
        });
    close.addEventListener('click', () => {
            burger.classList.remove('burger_active');
            menu.classList.remove('active');
        }); 
    social.addEventListener('click', () => {
            burger.classList.remove('burger_active');
            menu.classList.remove('active');
        });  
        closeAnimate.addEventListener('click', () => {
            burger.classList.remove('burger_active');
            menu.classList.remove('active');
         });     
    })
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines   = document.querySelectorAll('.skills__ratings-line span');
      
    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
});      