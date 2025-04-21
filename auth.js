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

