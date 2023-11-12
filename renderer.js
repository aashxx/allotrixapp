import {createHeroSection, whyChooseContainer, features, pricing, lifeTimeOffer, footer,
showLoadingScreen, hideLoadingScreen, createLoadingScreen} from "./index.js"
const res_nav = document.getElementById('mobile-menu-button');
const navbar = document.getElementById('navbar');

document.addEventListener("DOMContentLoaded", loadLandingpage)


async function loadLandingpage(){
  
        createHeroSection();
        whyChooseContainer();
        features();
        pricing();
        lifeTimeOffer();
        footer();
    }



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const mobileNav = document.getElementById("mobile-menu-button")

if(mobileNav){
  mobileNav.addEventListener("click", showNav)

  
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
