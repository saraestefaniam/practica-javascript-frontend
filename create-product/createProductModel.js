export const createProduct = async (name, description, price, type, photo) => {

    const token = localStorage.getItem("token")

    const response = await fetch("http://localhost:8000/api/ads", {
        method: "POST",
        body: JSON.stringify({
            name,
            description,
            price,
            type,
            photo
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        const data = response.json()
        throw new Error("Product could not be created")
    }
}