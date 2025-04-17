export const buildAd = (ad) => {
    const adView = `
        <p>${ad.name}</p>
        <p>${ad.price}</p>
    `
    return adView
}

export const buildNoAds = () => {
    return `<h3>There are no ads available right now.</h3>`
}