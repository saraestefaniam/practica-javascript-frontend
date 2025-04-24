import { REGEXP } from "../utils/constants.js"
import { loginUser } from "./loginModel.js"


export function loginController(loginForm) {
    
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const userEmailElement = loginForm.querySelector("#email")
        const userEmail = userEmailElement.value
        const passwordElement = loginForm.querySelector("#password")
        const password = passwordElement.value
        const errors = []

        const emailRegExp = new RegExp(REGEXP.mail)
        if(!emailRegExp.test(userEmail)) {
            errors.push('Invalid email')
        } 
        
        if (errors.length === 0) {
            handleLoginUser(userEmail, password, loginForm)
        } else {
            errors.forEach(error => {
                const event = new CustomEvent("login-error", {
                    detail: error
                })
                loginForm.dispatchEvent(event)
            })
        }
    })

    const handleLoginUser = async (userEmail, password, loginForm) => {
        const event = new CustomEvent("login-started")
        loginForm.dispatchEvent(event)

        loginForm.dispatchEvent(new CustomEvent("login-started"))
        try {
            const token = await loginUser(userEmail, password)
            const event = new CustomEvent("login-ok", {
                detail: {
                    message: "You have logged in successfully",
                    type: 'success'
                }
            })
            loginForm.dispatchEvent(event)
            setTimeout(() => {
                window.location = '/'
            }, 2000)
            localStorage.setItem("token", token)
        } catch (error) {
            const event = new CustomEvent("login-error", {
                detail: error
            })
            loginForm.dispatchEvent(event)
        } finally {
            const event = new CustomEvent("login-end")
            loginForm.dispatchEvent(event)
        }
    }
}