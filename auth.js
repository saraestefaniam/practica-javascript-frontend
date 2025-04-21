if (localStorage.getItem('token')) {
    const loginButton = document.querySelector(".btn-success")
    loginButton.textContent = "Logout"
    loginButton.addEventListener("click", () => {
        localStorage.removeItem("token")
        window.location = '/login.html'
    })
} else {
    loginButton.textContent = "Login"
}

