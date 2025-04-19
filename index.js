import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { showAdsController } from "./show-ads/showAdsController.js"


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".ads-container")
    const showAdsButton = document.querySelector(".show-button")
    const loader = document.querySelector(".loader")
    const notifications = document.querySelector(".notifications")
    showAdsButton.addEventListener("click", () => {
        showAdsController(container)})
    
    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)
    container.addEventListener("load-ads-started", () => {
        container.innerHTML = ''
        show()
    })
    container.addEventListener("load-ads-finished", () => {
        hide()
    })
    container.addEventListener('load-ads-error', (event) => {
        const errorMesage = event.detail;
        showNotification(errorMesage)
        //container.innerHTML = `<div>${errorMesage}</div>`
    })

    notificationsController(notifications)
})