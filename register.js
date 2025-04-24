import { registerController } from "./register/registerController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loaderController } from "./loader/loaderController.js"

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form")
    const notifications = document.querySelector("#notifications")
    const loader = document.querySelector(".loader")

    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)

    registerForm.addEventListener("register-error", (event) => {
        const message = event.detail
        showNotification(message)
    })

    registerForm.addEventListener("register-started", () => {
        show()
    })

    registerForm.addEventListener("register-end", () => {
        hide()
    })

    registerForm.addEventListener("register-ok", (event) => {
        const message = event.detail.message
        const type = event.detail.type
        showNotification(message, type)
    })

    registerController(registerForm)
})