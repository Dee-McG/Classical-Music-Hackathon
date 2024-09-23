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

// Event listeners for the modal (open and close)
const rulesModalOpen = document.querySelector("button[data-type='rules-modal-trigger']")
const rulesModalClose = document.querySelector("button[data-type='rules-modal-close']")
const rulesModal = document.querySelector(".rules-modal")

if (rulesModalOpen && rulesModal) {
    rulesModalOpen.addEventListener("click", (e) => {
        try {
            e.preventDefault();
            rulesModal.showModal();  // Show the modal when clicked
        } catch (error) {
            console.error("Error showing the rules modal: ", error);
        }
    });
} else {
    if (!rulesModalOpen) {
        console.error("Rules modal trigger button not found.");
    }
    if (!rulesModal) {
        console.error("Rules modal element not found.");
    }
}

if (rulesModalClose && rulesModal) {
    rulesModalClose.addEventListener("click", () => {
        try {
            rulesModal.close();  // Close the modal when clicked
        } catch (error) {
            console.error("Error closing the rules modal: ", error);
        }
    });
} else {
    if (!rulesModalClose) {
        console.error("Rules modal close button not found.");
    }
    if (!rulesModal) {
        console.error("Rules modal element not found.");
    }
}