import { createAdController } from "./create-product/createProductController.js"
import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js"


document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('token')
    
    if(!token) {
        window.location = '/login.html'
    }

    const loader = document.querySelector(".loader")
    const { show, hide } = loaderController(loader)
    const createAdForm = document.querySelector("form")
    const notifications = document.querySelector(".notifications")
    const { showNotification } = notificationsController(notifications)

    createAdForm.addEventListener("load-create-product-started", () => {
        show()
    })

    createAdForm.addEventListener("load-create-product-finished", () => {
        hide()
    })

    createAdForm.addEventListener("load-create-product-error", (event) => {
        const errorMesage = event.detail
        showNotification(errorMesage)
        
    })

    createAdController(createAdForm)
})