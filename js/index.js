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
let skill1 = document.querySelector('#skill1');
let skill2 = document.querySelector('#skill2');
let skill3 = document.querySelector('#skill3');
let skill4 = document.querySelector('#skill4');
let skill5 = document.querySelector('#skill5');
let skill6 = document.querySelector('#skill6');
let project1 = document.querySelector('#project1');
let project2 = document.querySelector('#project2');
let project3 = document.querySelector('#project3');
let container = nav.children[0];
//addEvent to window
window.onscroll = navTransition(nav, container, navLinks);


mainObserver.observe(aboutText);
mainObserver.observe(aboutImage);
mainObserver.observe(contactTitle);
mainObserver.observe(contactButton);
mainObserver.observe(skill1);
mainObserver.observe(skill2);
mainObserver.observe(skill3);
mainObserver.observe(skill4);
mainObserver.observe(skill5);
mainObserver.observe(skill6);
mainObserver.observe(project1);
mainObserver.observe(project2);
mainObserver.observe(project3);
