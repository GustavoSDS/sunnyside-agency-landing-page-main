const btnNav = document.querySelector('#btn-menu');
const navMobile = document.querySelector('#nav-mobile');

btnNav.addEventListener('click', ()=> {
  navMobile.classList.toggle('display-block');
});
