export const buildAd = (ad) => {
    const date = new Date(ad.updatedAt)
    const adView = `
        <p>${date.toLocaleString()}</p>
        <h3>${ad.name} - $${ad.price}</h3>
        <p>${ad.description}</p>
    `
    return adView
}

export const buildNoAds = () => {
    return `<h3>There are no ads available right now.</h3>`
}