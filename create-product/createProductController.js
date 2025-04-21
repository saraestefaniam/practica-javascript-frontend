import { createProduct } from "./createProductModel.js"

export const createAdController = (form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const name = form.querySelector("#name").value
        const description = form.querySelector("#description").value
        const price = form.querySelector("#price").value
        const type = form.querySelector('input[name="account"]:checked').id
        const photo = form.querySelector("#photo").value

        try {
            await createProduct(name, description, price, type, photo)
            setTimeout(() => {
                window.location = '/'
            }, 2000);
        } catch (error) {
            alert(error.message)
        }
    })
}