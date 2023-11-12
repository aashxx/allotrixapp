import {createHeroSection, whyChooseContainer, features, pricing, lifeTimeOffer, footer,
showLoadingScreen, hideLoadingScreen, createLoadingScreen} from "./index.js"
const res_nav = document.getElementById('mobile-menu-button');
const navbar = document.getElementById('navbar');

document.addEventListener("DOMContentLoaded", loadLandingpage)


async function loadLandingpage(){
    //showLoadingScreen();
   // try{
        //await delay(2000);
        createHeroSection();
        whyChooseContainer();
        features();
        pricing();
        lifeTimeOffer();
        footer();
    //}
    //finally{
        //hideLoadingScreen()
    //}
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Responsive Nav
let state = 1;
function showNav() {
  if(state == 1) {
    navbar.style.width='100%';
    state = 0;
  } else {
    navbar.style.width='0%';
    state = 1;
  }
}
