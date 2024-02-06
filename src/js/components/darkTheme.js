const headerToogle = document.querySelector('.header_toogle');
const myCheckbox = document.getElementById('myCheckbox');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const localeStorage = window.localStorage.length || null

console.log(localeStorage)
if(localeStorage) {
  console.log(555)
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
    console.log('false')
  }
  if(ev.target === myCheckbox && !ev.target.checked) {
    main.classList.remove('dark')
    footer.classList.remove('dark')
    localStorage.clear()
    console.log(localeStorage)
  }
})
