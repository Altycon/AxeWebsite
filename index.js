const log = console.log;

const toggleMenu = (ev)=>{
    const nav = document.querySelector('.nav_primary');
    nav.classList.toggle('open')
}
const MenuButton = document.querySelector('[data-menu-button]');
MenuButton.addEventListener('click', toggleMenu)

const init = ()=>{
    log('Connected')
    log('A Random number confirming tools connection',random(10,1000,true))
};
init();