// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');
// const close = document.querySelector('.menu__close');

// burger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

//  close.addEventListener('click', () => {
//      menu.classList.remove('active');
//  });

//burger menu - sclroll

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu__link'),
          burger = document.querySelector('.burger'),
          close = document.querySelector('.menu__overlay'),
          social = document.querySelector('.menu__social'),
          closeAnimate = document.querySelector('.close');

    // const btnOff = document.querySelector('.scroll-off');
    // const btnOn = document.querySelector('.scroll-on');      

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });

    menuItem.forEach(item => {
      item.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('active');
            body.classList.toggle('lock');
        });
    close.addEventListener('click', () => {
            burger.classList.remove('burger_active');
            menu.classList.remove('active');
            body.classList.remove('lock');
        }); 
    social.addEventListener('click', () => {
            burger.classList.remove('burger_active');
            menu.classList.remove('active');
            body.classList.remove('lock');
        });  
    closeAnimate.addEventListener('click', () => {
            burger.classList.remove('burger_active');
            menu.classList.remove('active');
            body.classList.remove('lock');
         }); 



    // btnOff.addEventListener('click', () => {
    //       body.classList.add('lock');
    //   });
    // btnOn.addEventListener('click', () => {
    //     body.classList.remove('lock');
    // });    
    })
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines   = document.querySelectorAll('.skills__ratings-line span');
      
    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;       
});      



  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
    } else {
    $('.pageup').fadeOut();
    }
});           
         

        //modal-policy

$('[data-modal=policy]').on('click', function() {
    $('.overlay-modal, #policy').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay-modal, #policy').fadeOut('slow');
  });
          
//scroll-on-off
const btnOff = document.querySelector('.scroll-off');
const btnOn = document.querySelector('.scroll-on'),
	body = document.body;

let disableScroll = function () {
	let pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
}

btnOff.addEventListener('click', (e) => {
	disableScroll();
	e.currentTarget.style.pointerEvents = 'none';
	btnOn.style.pointerEvents = 'auto';
});

btnOn.addEventListener('click', (e) => {
	enableScroll();
	e.currentTarget.style.pointerEvents = 'none';
	btnOff.style.pointerEvents = 'auto';
});


  /* <button class="scroll-off">Disable scroll/выключить</button>
	<button class="scroll-on">Enable scroll/включить</button> */


  //простой бургер js с блокировкой прокрутки
  $(document).ready(function() {
    $('header__burger').click(function(event) {
      $('header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

  $(window).on('load', function() {
    $('#preloader').delay(1).fadeOut(2000, function() {
        $('body').css('overflow','visible');
        $(this).remove();
    });
});