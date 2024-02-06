const widgetRating = document.querySelector('.hero_rating-num');
const widgetNumber = document.querySelectorAll('.hero_widget_rating-link');



widgetNumber.forEach(el=> {
  el.addEventListener('click', (ev) => {
    const innerText = ev.target.innerText
    widgetRating.innerText = innerText;
  })
})





















//щоб курсор не стрибав
