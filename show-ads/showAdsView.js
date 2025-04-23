export const buildAd = (ad) => {
    const adView = `
        <a href="./ad-detail.html?id=${ad.id}"><img src="${ad.photo}" alt="${ad.name}"/><a/>
        <a href="./ad-detail.html?id=${ad.id}"><h3>${ad.name} - $${ad.price}</h3></a>
        <p>${ad.description}</p>
    `
    return adView
}

export const buildNoAds = () => {
    return `<h3>There are no ads available right now.</h3>`
}