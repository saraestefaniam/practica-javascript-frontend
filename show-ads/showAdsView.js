export const buildAd = (ad) => {
    const date = new Date(ad.updatedAt)
    const adView = `
        <p>${date.toLocaleString()}</br>
        ${ad.name} - $${ad.price}</p>
    `
    return adView
}

export const buildNoAds = () => {
    return `<h3>There are no ads available right now.</h3>`
}