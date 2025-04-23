export const createAdDetailView = (ad) => {
    const date = new Date(ad.updatedAt)
    const adView = `
        <img src="${ad.photo}" alt="${ad.name}"/>
        <p>${date.toLocaleString()}</p>
        <h5>${ad.user.name} is ${ad.type}</h5>
        <h3>${ad.name} - $${ad.price}</h3>
        <p>${ad.description}</p>
    `

    return adView
}

export const createRemoveButton = () => {
    const removeButton = document.createElement("button")
    removeButton.textContent = "Delete ad"

    return removeButton
}