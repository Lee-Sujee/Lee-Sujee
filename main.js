const toggleBtn = document.querySelector('.bar-nav__toggleBtn');
const menu = document.querySelector('.menu-bar');
const util = document.querySelector('.util');


toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    util.classList.toggle('active');
});