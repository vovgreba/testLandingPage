const headerToogle = document.querySelector('.header_toogle');
const myCheckbox = document.getElementById('myCheckbox');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const localeStorage = window.localStorage.length || null


if(localeStorage) {
  main.classList.add('dark')
  footer.classList.add('dark')
  myCheckbox.checked = true;
}

headerToogle.addEventListener('click', (ev) => {
  if(ev.target === myCheckbox && ev.target.checked === true) {
    main.classList.add('dark')
    footer.classList.add('dark')
    localStorage.setItem('main', 'dark')
    localStorage.setItem('footer', 'dark')

  }
  if(ev.target === myCheckbox && !ev.target.checked) {
    main.classList.remove('dark')
    footer.classList.remove('dark')
    localStorage.clear()

  }
})
