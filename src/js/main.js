import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


import widget from './components/widget'
import darkTheme from './components/darkTheme'


// burger
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')
const bannerBurgerMenu = document.querySelector('.burger-banner-menu');

burger.addEventListener('click', (ev) => {
  burger.style.display = 'none';
  bannerBurgerMenu.classList.toggle('active-banner');
  close.classList.toggle('active-close');
})

close.addEventListener('click', (ev) => {
  burger.style.display = 'block';
  bannerBurgerMenu.classList.remove('active-banner');
  close.classList.remove('active-close');
})



const widgetBurger = document.querySelector('.widget-burger svg');
const widgetBurgerMenu = document.querySelector('.widget_burger-menu');

widgetBurger.addEventListener('click', (ev) => {
  widgetBurgerMenu.classList.toggle('active-widget');
});

document.addEventListener('click', (ev) => {
  if (
    !widgetBurgerMenu.contains(ev.target) &&
    !widgetBurger.contains(ev.target.closest('svg')) &&
    !ev.target.closest('.widget_burger-menu')
  ) {

    widgetBurgerMenu.classList.remove('active-widget');
  }

  if(ev.target.className === 'nav_link') {
    widgetBurgerMenu.classList.remove('active-widget');
    burger.style.display = 'block';
    bannerBurgerMenu.classList.remove('active-banner');
    close.classList.remove('active-close');
  }
  if(
    !bannerBurgerMenu.contains(ev.target) &&
    !burger.contains(ev.target.closest('svg')) &&
    !ev.target.closest('burger-banner-menu')&&
    bannerBurgerMenu.classList.contains('active-banner')
  ) {

    burger.style.display = 'flex';
    bannerBurgerMenu.classList.remove('active-banner');
    close.classList.remove('active-close');
  }
});

