import {
  createHeroSection,
  whyChooseContainer,
  features,
  testimonials,
  pricing,
  lifeTimeOffer,
  footer,
  showLoadingScreen,
  hideLoadingScreen,
  createLoadingScreen,
  downloadPage,
  createLoginPage,
  createPopup,
} from "./index.js";

const resNav = document.getElementById('mobile-menu-button');
const navbar = document.getElementById('navbar');
const workingContainer = document.querySelector('#working-container');
const mobileNav = document.getElementById("mobile-menu-button");

// Nav items
const home = document.getElementById("homepage");
const updates = document.getElementById("updates");
const sponsorship = document.getElementById("sponsorship");
const testimonial = document.getElementById("nav-testimonials");
const faqs = document.getElementById("faqs");
const download = document.getElementById("download");

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  workingContainer.innerHTML = "";
  loadLandingPage();
});

home.addEventListener("click", () => {
  console.log("Home clicked");
  workingContainer.innerHTML = "";
  loadLandingPage();
});

testimonial.addEventListener("click", () => {
  console.log("Testimonial clicked");
  workingContainer.innerHTML = "";
  testimonials();
});






download.addEventListener("click", () => {
  console.log("download clicked");
  workingContainer.innerHTML = "";
  downloadPage();
});


if (mobileNav) {
  mobileNav.addEventListener("click", showNav);
}


const accountButton = document.getElementById("account")

    accountButton.addEventListener("click", ()=>{
      createPopup();

    })



// Responsive Nav
let state = 1;
function showNav() {
  if (state === 1) {
    navbar.style.width = '100%';
    state = 0;
  } else {
    navbar.style.width = '0%';
    state = 1;
  }
}

async function loadLandingPage() {
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


