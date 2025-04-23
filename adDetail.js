import { adDetailController } from "./adsDetails/adDetailController.js"

document.addEventListener("DOMContentLoaded", () => {

    const searchParams = new URLSearchParams(window.location.search)
    const adId = searchParams.get('id')

    if(adId) {
        const adContainer = document.querySelector(".ad-container")
        adDetailController(adContainer, adId)
    } else {
        window.location = "/"
    }


})