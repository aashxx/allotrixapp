
const workingContainer = document.querySelector('#working-container');


export function downloadPage(){

    const downloadContainer = document.createElement("div");
    downloadContainer.className = "download-container";

    const downloadHeadingContainer = document.createElement("div");
    downloadHeadingContainer.className = "download-heading-container";

    const downloadHeading1 = document.createElement("div");
    downloadHeading1.className = "download-heading";
    downloadHeading1.textContent = "DOWNLOAD"

    const downloadHeading2 = document.createElement("div");
    downloadHeading2.className = "download-heading";
    downloadHeading2.textContent = "THE FUTURE"

    downloadHeadingContainer.appendChild(downloadHeading1);
    downloadHeadingContainer.appendChild(downloadHeading2);
    downloadContainer.appendChild(downloadHeadingContainer)

    const downloadButtonContainer = document.createElement("div");
    downloadButtonContainer.className = "download-button-container";


    const windowsDownloadButton = document.createElement("button");
    windowsDownloadButton.className = "download-button";
    windowsDownloadButton.textContent = "Windows"

    const macDownloadButton = document.createElement("button");
    macDownloadButton.className = "download-button";
    macDownloadButton.textContent = "Mac"



    downloadButtonContainer.appendChild(windowsDownloadButton);
    downloadButtonContainer.appendChild(macDownloadButton);
    downloadContainer.appendChild(downloadButtonContainer)

    //tutorial container

    const tutorialHeadingContainer = document.createElement("div");
    tutorialHeadingContainer.className = "tutorial-heading-container";
    tutorialHeadingContainer.textContent = "Download Tutorial"



    const tutorialContainer = document.createElement("div");
    tutorialContainer.className = "tutorial-container";

    const videoId = "NDDFezF7OTA"
    const iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = `https://www.youtube.com/embed/${videoId}?si=sumERDAjpyNA32_S`;
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    tutorialContainer.appendChild(iframe);

    const contactMessage = document.createElement("div");
    contactMessage.className = "download-page-contact-message"
    contactMessage.innerHTML = "<p>Still having trouble downloading?? <a href='mailto:allotrixapp@gmail.com'> Contact us </a></p>"

    

    tutorialContainer.appendChild(contactMessage)


    workingContainer.appendChild(downloadContainer)
    workingContainer.appendChild(tutorialHeadingContainer)
    workingContainer.appendChild(tutorialContainer)




}