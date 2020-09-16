//bootstrap
$(function () {
    $('[data-toggle="popover"]').popover()
    $('[data-toggle="tooltip"]').tooltip()
})
//IMPORTS
import { navTransition } from './transitions.js';
import observer from './observer.js';
let mainObserver = observer();
//DOM
let nav = document.getElementById('nav')
let navLinks = document.getElementsByClassName('nav-link');
let aboutText = document.getElementById('aboutText');
let aboutImage = document.getElementById('aboutImage');
let contactTitle = document.getElementById('contactTitle');
let contactButton = document.getElementById('contactButton');
let container = nav.children[0];
//addEvent to window
window.onscroll = navTransition(nav, container, navLinks);


mainObserver.observe(aboutText);
mainObserver.observe(aboutImage);
mainObserver.observe(contactTitle);
mainObserver.observe(contactButton);
    