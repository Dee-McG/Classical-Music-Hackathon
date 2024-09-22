function handleRedirectToPlay() {
    window.location.href = "play-page.html";
}
function handleRedirectToAbout() {
    window.location.href = "about-page.html";
}


play.addEventListener("click", handleRedirectToPlay);
    
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