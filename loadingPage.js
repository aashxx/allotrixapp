export function createLoadingScreen() {
    const loadingScreen = document.getElementById("loadingScreen");

    if (loadingScreen) {
        return; // Loading screen already exists, do nothing
    }

    const splash = document.createElement('div');
    splash.classList.add('splash');
    
    const content = document.createElement('div');
    content.classList.add('content');
    
    const loaderBorder = document.createElement('div');
    loaderBorder.classList.add('loader-border');
    
    const loaderSpan = document.createElement('span');
    
    loaderBorder.appendChild(loaderSpan);
    content.appendChild(loaderBorder);
    
    const image = document.createElement('img');
    image.style.width = "300px";
    image.style.height = "auto";

    image.src = './assets/logo2.png';
    image.alt = '';
    
    content.appendChild(image);
    splash.appendChild(content);
    
    document.body.appendChild(splash);

  
    setTimeout(() => {
      splash.style.display = 'none';
    }, 3000);

}

export function showLoadingScreen() {
    createLoadingScreen()
    const loadingScreen = document.getElementById("loadingScreen");

    if (loadingScreen) {
        loadingScreen.style.display = "flex";
    }
}

export function hideLoadingScreen() {
    const loadingScreen = document.getElementById("loadingScreen");

    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }
}
