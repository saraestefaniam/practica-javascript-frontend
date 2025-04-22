import { authorizeSession } from "./sessionView.js"
import { unauthorizeSession } from "./sessionView.js"

export const sessionController = (container) => {
    const isUserLoggedIn = !!localStorage.getItem("token")

    if (isUserLoggedIn) {
        container.innerHTML = authorizeSession()
    } else {
        container.innerHTML = unauthorizeSession()
    }
}