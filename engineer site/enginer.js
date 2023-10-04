const menu = document.querySelector('.menu')
const navlink = document.querySelector('.nav-link')
const close =document.querySelector('.close');
const body = document.querySelector('body')
const img = document.querySelector('.myimg')
const ancor = document.querySelectorAll('a')

close.addEventListener('click', ()=>{
    navlink.style.display= 'none';
    menu.style.display='flex'
    

})



menu.addEventListener('click', ()=> {
    navlink.style.display="flex";
    menu.style.display='none'
    gsap.from('.nav-link', {opacity: 0, duration: 1, x: -80})
})



gsap.from('.menudiv', {opacity: 0, duration: 1, y: -150, })
