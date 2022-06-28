const log = console.log;

const toggleMenu = (ev)=>{
    document.querySelector('.nav_primary').classList.toggle('open');
    
    const Menu_Button_Bars = [...document.querySelectorAll('.menu_button-bar')];
    Menu_Button_Bars.forEach( bar => {
        bar.classList.toggle('open');
    });
};
const closeMenu =(ev)=>{
    document.querySelector('.nav_primary').classList.remove('open');
    const Menu_Button_Bars = [...document.querySelectorAll('.menu_button-bar')];
    Menu_Button_Bars.forEach( bar => {
        bar.classList.remove('open');
    });
}
const MenuButton = document.querySelector('[data-menu-button]');
MenuButton.addEventListener('click', toggleMenu);
const NavLinks = [...document.querySelectorAll('.nav_primary-link')];
NavLinks.forEach( link => {
    link.addEventListener('click', closeMenu)
})

const init = ()=>{
    const header = document.querySelector('.home_header-primary');
    const hh = header.getBoundingClientRect().height;
    log(hh/innerHeight)
};
init();