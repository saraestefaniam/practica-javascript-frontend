import { REGEXP } from "../utils/constants.js"
import { loginUser } from "./loginModel.js"


export function loginController(loginForm) {
    
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const userEmailElement = loginForm.querySelector("#email")
        const userEmail = userEmailElement.value
        const passwordElement = loginForm.querySelector("#password")
        const password = passwordElement.value

        const emailRegExp = new RegExp(REGEXP.mail)
        if(!emailRegExp.test(userEmail)) {
            alert('Incorrect email format')
        } else {
            handleLoginUser(userEmail, password)
        }
    })

    async function handleLoginUser(userEmail, password) {
        const token = await loginUser(userEmail, password)

        localStorage.setItem("token", token)
    }
}