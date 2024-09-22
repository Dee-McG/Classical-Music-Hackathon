// handle redirects
function handleRedirectToPlay() {
    try {
        window.location.href = "play-page.html";
    } catch (error) {
        console.error("Error redirecting to the Play page: ", error);
    }
}
function handleRedirectToAbout() {
    try {
        window.location.href = "about-page.html";
    } catch (error) {
        console.error("Error redirecting to the About page: ", error);
    }
}
   
// Event listener for play button
const playButton = document.getElementById("play");
if (playButton) {
    playButton.addEventListener("click", handleRedirectToPlay);
} else {
    console.error("Play button not found.");
}
    
const rulesModalOpen = document.querySelector("button[data-type='rules-modal-trigger']")
const rulesModalClose = document.querySelector("button[data-type='rules-modal-close']")
const rulesModal = document.querySelector(".rules-modal")

if (rulesModalOpen){

    rulesModalOpen.addEventListener("click", (e)=>{

        rulesModal.showModal()

    })

}

if(rulesModalClose){
    rulesModalClose.addEventListener("click", ()=>{
        rulesModal.close()
    })
}