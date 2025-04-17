import { showAdsController } from "./show-ads/showAdsController.js"

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".ads-container")
    const showAdsButton = document.querySelector(".show-button")
    showAdsButton.addEventListener("click", () => {
        showAdsController(container)})
})