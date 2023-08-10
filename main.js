const menu = document.querySelector('.header .menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
  // alert('hello');
});
