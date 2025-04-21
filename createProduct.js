import { createAdController } from "./create-product/createProductController.js"

document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('token')

    if(!token) {
        window.location = '/login.html'
    }

    const createAdForm = document.querySelector("form")
    createAdController(createAdForm)
})