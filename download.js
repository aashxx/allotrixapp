
const workingContainer = document.querySelector('#working-container');


export function downloadPage(){

    const downloadContainer = document.createElement("div");
    downloadContainer.className = "download-container";

    const downloadHeadingContainer = document.createElement("div");
    downloadHeadingContainer.className = "download-heading-container";

    const downloadHeading1 = document.createElement("div");
    downloadHeading1.className = "download-heading";
    downloadHeading1.textContent = "Download the future of"

    const downloadHeading2 = document.createElement("div");
    downloadHeading2.className = "download-heading";
    downloadHeading2.textContent = "MUN Automation";
    downloadHeading2.style.color = "rgba(239, 64, 54, 1)";
    downloadHeading2.style.fontWeight = "bold";

    downloadHeadingContainer.appendChild(downloadHeading1);
    downloadHeadingContainer.appendChild(downloadHeading2);
    downloadContainer.appendChild(downloadHeadingContainer)

    const downloadButtonContainer = document.createElement("div");
    downloadButtonContainer.className = "download-button-container";


    const windowsDownloadButton = document.createElement("button");
    windowsDownloadButton.className = "btn";
    windowsDownloadButton.textContent = "Windows";

    const macDownloadButton = document.createElement("button");
    macDownloadButton.className = "btn";
    macDownloadButton.textContent = "Mac";



    downloadButtonContainer.appendChild(windowsDownloadButton);
    downloadButtonContainer.appendChild(macDownloadButton);
    downloadContainer.appendChild(downloadButtonContainer);


    const tutorialHeadingContainer = document.createElement("div");
    tutorialHeadingContainer.className = "subheading";
    tutorialHeadingContainer.textContent = "Download Tutorial"



    const tutorialContainer = document.createElement("div");
    tutorialContainer.className = "tutorial-container";

    const videoId = "NDDFezF7OTA"
    const iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    //iframe.src = `https://www.youtube.com/embed/${videoId}?si=sumERDAjpyNA32_S`;
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    tutorialContainer.appendChild(iframe);

    const contactMessage = document.createElement("div");
    contactMessage.className = "download-page-contact-message"
    contactMessage.innerHTML = "<p>Still having trouble downloading?? <a href='mailto:allotrixapp@gmail.com'> Contact us </a></p>"

    
    workingContainer.appendChild(downloadContainer)

    tutorialContainer.appendChild(contactMessage)


    workingContainer.appendChild(tutorialHeadingContainer)
    workingContainer.appendChild(tutorialContainer)


    windowsDownloadButton.addEventListener("click", () => {
        const popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.classList.add('hidden');
      
        const popup = document.createElement('div');
        popup.classList.add('popup');
      
        const popupHeader = document.createElement('div');
        popupHeader.classList.add('popup-header');
      
        const heading = document.createElement('h2');
        heading.textContent = 'Download Allotrix';
      
        const closeButton = document.createElement('button');
        closeButton.id = 'close-popup';
        closeButton.classList.add('btn');
        closeButton.textContent = 'X';
      
        const popupContent = document.createElement('div');
        popupContent.classList.add('content');
      
        // Append the elements to build the structure
        popupHeader.appendChild(heading);
        popupHeader.appendChild(closeButton);
        popup.appendChild(popupHeader);
        popup.appendChild(popupContent);
        popupContainer.appendChild(popup)
      
        // Add the popup to the document body
        document.body.appendChild(popupContainer);
      
        // Show the popup by removing the 'hidden' class
        popupContainer.classList.remove('hidden');


        closeButton.addEventListener('click', () => {
            popupContainer.classList.add('hidden');
          });
      
      });

    
    macDownloadButton.addEventListener("click", ()=>{
        const popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.classList.add('hidden');
      
        const popup = document.createElement('div');
        popup.classList.add('popup');
      
        const popupHeader = document.createElement('div');
        popupHeader.classList.add('popup-header');
      
        const heading = document.createElement('h2');
        heading.textContent = 'Download Allotrix';
      
        const closeButton = document.createElement('button');
        closeButton.id = 'close-popup';
        closeButton.classList.add('btn');
        closeButton.textContent = 'X';
      
        const popupContent = document.createElement('div');
        popupContent.classList.add('content');
      
        // Append the elements to build the structure
        popupHeader.appendChild(heading);
        popupHeader.appendChild(closeButton);
        popup.appendChild(popupHeader);
        popup.appendChild(popupContent);
        popupContainer.appendChild(popup)
      
        // Add the popup to the document body
        document.body.appendChild(popupContainer);
      
        // Show the popup by removing the 'hidden' class
        popupContainer.classList.remove('hidden');


        closeButton.addEventListener('click', () => {
            popupContainer.classList.add('hidden');
          });
      

    });




   




}