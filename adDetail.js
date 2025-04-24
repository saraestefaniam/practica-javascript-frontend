import { adDetailController } from "./adsDetails/adDetailController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener("DOMContentLoaded", () => {

    const searchParams = new URLSearchParams(window.location.search)
    const adId = searchParams.get('id')

    const adContainer = document.querySelector(".ad-container")

    const loader = document.querySelector(".loader")
    const notifications = document.querySelector("#notifications")

    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)

    adContainer.addEventListener("ad-detail-started", () => {
        show()
    })

    adContainer.addEventListener("ad-detail-finished", () => {
        hide()
    })

    adContainer.addEventListener("ad-detail-error", (event) => {
        showNotification(event.detail)
    })
    

    if(adId) {
        adDetailController(adContainer, adId)
    } else {
        window.location = "/"
    }

})