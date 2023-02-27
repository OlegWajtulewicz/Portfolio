// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');
// const close = document.querySelector('.menu__close');

// burger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// close.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

//burger menu

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu__link'),
          burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('active');
    });

    menuItem.forEach(item => {
      item.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('active');
        })
    })
});