import {createHeroSection, whyChooseContainer, features, pricing, lifeTimeOffer, footer,
showLoadingScreen, hideLoadingScreen, createLoadingScreen} from "./index.js"

document.addEventListener("DOMContentLoaded", loadLandingpage)


async function loadLandingpage(){
    showLoadingScreen();
    try{
        await delay(2000);
        showLoadingScreen()
        createHeroSection();
        whyChooseContainer();
        features();
        pricing();
        lifeTimeOffer();
        footer();
    }
    finally{
        hideLoadingScreen()
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}