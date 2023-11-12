   
import {downloadPage} from "../index.js";

const workingContainer = document.querySelector('#working-container');

export function createHeroSection() {
    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero');

    const headingContainer = document.createElement("div");
    headingContainer.className = "heading-container"


    const heading1 = document.createElement('h1');
    heading1.classList.add('heading');
    heading1.innerHTML = 'Make <b>One-Month</b> processes,';

    const heading2= document.createElement('h1');
    heading2.classList.add('heading');
    heading2.innerHTML = '<b>One-Second</b> using <b style="color: rgba(239, 64, 54, 1);">allotrix</b>';

    headingContainer.appendChild(heading1)
    headingContainer.appendChild(heading2)

  

  
 
    const paragraph = document.createElement('p');
    paragraph.classList.add('hero-p');
    paragraph.textContent = 'Automate and upscale the MUN experience in one click';

  
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('hero-button-container');
  
    const button = document.createElement('a');
    button.href = '#';
    button.id = 'hero-download';
    button.classList.add('btn', 'filled-button');
    button.textContent = 'Its Free! Try It Today';

    button.addEventListener("click", () => {
      console.log("download clicked");
      workingContainer.innerHTML = "";
      downloadPage();
    });
  
    buttonContainer.appendChild(button);
  
    heroContainer.appendChild(headingContainer);
    heroContainer.appendChild(paragraph);
    heroContainer.appendChild(buttonContainer);

    workingContainer.appendChild(heroContainer);
    

  }
  
  // Assuming you have a parent container with the class 'working-container'
 