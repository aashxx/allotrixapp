export function createLoadingScreen() {
    const loadingScreen = document.getElementById("loadingScreen");

    if (loadingScreen) {
        return; // Loading screen already exists, do nothing
    }

    const newLoadingScreen = document.createElement("div");
    newLoadingScreen.classList.add("loading-screen");
    newLoadingScreen.id = "loadingScreen";

    const loadingContent = document.createElement("div");
    loadingContent.classList.add("text-container");
    loadingContent.innerHTML = `
    <div class="text-container">
    <span>a</span>
    <span>l</span>
    <span>l</span>
    <span>o</span>
    <span>t</span>
    <span>r</span>
    <span>i</span>
    <span>x</span>
    </div>
    `
   

    newLoadingScreen.appendChild(loadingContent);

    document.body.appendChild(newLoadingScreen);

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
