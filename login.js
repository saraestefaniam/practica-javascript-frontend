import { loginController } from "./login/loginController.js";
import { notificationsController } from "./notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form")
    const notifications = document.querySelector("#notifications")

    const { showNotification } = notificationsController(notifications)

    loginForm.addEventListener("login-error", (event) => {
        const message = event.detail
        showNotification(message)
    })

    loginForm.addEventListener("login-ok", (event) => {
        const message = event.detail.message
        const type = event.detail.type
        showNotification(message, type)
    })
    
    loginController(loginForm)
})


/*
if (localStorage.getItem('token')) {
    const loginButton = document.querySelector(".btn-success")
    loginButton.textContent = "Logout"
    loginButton.addEventListener("click", () => {
        localStorage.removeItem("token")
        window.location.reload()
    })
} else {
    loginButton.textContent = "Login"
}
*/