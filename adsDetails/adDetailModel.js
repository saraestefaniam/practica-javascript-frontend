
export async function adDetailModel(adId) {
    const response = await fetch(`http://localhost:8000/api/ads/${adId}?_expand=user`)

    if (!response.ok) {
        throw new Error("Ad not available")
    }

    const adDetail = await response.json()

    return adDetail
}

export async function removeAd(adId) {
    const token = localStorage.getItem("token")
    const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    window.location = "/"

    if (!response.ok) {
        throw new Error("Ad not available")
    }
}

export async function getLoggedInUserInfo() {
    const token = localStorage.getItem("token")

    const response = await fetch(`http://localhost:8000/auth/me`, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    
    const user = await response.json()
    return user
}


