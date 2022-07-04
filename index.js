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
 const darkModeButton = document.querySelector('.light-mode__container');


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

const toggleDarkMode = (ev)=>{
    const root = getComputedStyle(document.documentElement);
    const lightColor = root.getPropertyValue('--color-primary-light');
    const darkColor = root.getPropertyValue('--color-primary-dark');
    const lightAccentColor = root.getPropertyValue('--color-primary-accent-light');
    const darkAccentColor = root.getPropertyValue('--color-primary-accent-dark');
    const ContactFormTextAreaImageLight = root.getPropertyValue('--contact-form-textarea-image-light');
    const ContactFormTextAreaImageDark = root.getPropertyValue('--contact-form-textarea-image-dark');
    document.documentElement.style.setProperty('--color-primary-dark', lightColor);
    document.documentElement.style.setProperty('--color-primary-light', darkColor);
    document.documentElement.style.setProperty('--color-primary-accent-dark', lightAccentColor);
    document.documentElement.style.setProperty('--color-primary-accent-light', darkAccentColor);
    document.documentElement.style.setProperty('--contact-form-textarea-image-light', ContactFormTextAreaImageDark);
    document.documentElement.style.setProperty('--contact-form-textarea-image-dark', ContactFormTextAreaImageLight);
    

     
    document.querySelector('.sun-decoration1').classList.toggle('change');
    document.querySelector('.sun-decoration2').classList.toggle('change');
    document.querySelector('.sun').classList.toggle('change');
    document.querySelector('.earth-shadow').classList.toggle('change');
}


const init = ()=>{
    
    MenuButton.addEventListener('click', toggleMenu);
    darkModeButton.addEventListener('click', toggleDarkMode);
};
window.addEventListener('load', init);