
document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('token')

    if(!token) {
        window.location = '/login.html'
    }
})