const DETAILS = {
    title: `Ana's Axe Throwing`,
    author: 'Clayton McDaniel',
    date: 'June-2022'
}

const log = console.log;

/**
 *      GLOBAL DOM ELEMENT VARIABLES
 */
 const MenuButton = document.querySelector('.js-menu-button');



// Opening and closing the navigation menu

const closeMenu =(ev)=>{
    document.querySelector('.js-navigation-primary').classList.remove('open');
    const Menu_Button_Bars = [...document.querySelectorAll('.menu-button__bar')];
    Menu_Button_Bars.forEach( bar => {
        bar.classList.remove('open');
    });
}

const toggleMenu = (ev)=>{
    const nav = document.querySelector('.js-navigation-primary');
    // opening and closing
    nav.classList.toggle('open');
    // toggling animation on menu button bars
    const Menu_Button_Bars = [...document.querySelectorAll('.menu-button__bar')];
    Menu_Button_Bars.forEach( bar => {
        bar.classList.toggle('open');
    });

    // closing menu when link is clicked
    const NavLinks = [...document.querySelectorAll('.js-navigation-primary_link')];
    NavLinks.forEach( link => {
        if(nav.classList.contains('open')){
            link.addEventListener('click', closeMenu);
        }else{
            link.removeEventListener('click', closeMenu);
        }
        
    });
    
};




const init = ()=>{
    
    MenuButton.addEventListener('click', toggleMenu);
};
window.addEventListener('load', init);