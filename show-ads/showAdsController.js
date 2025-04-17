import { getAds } from "./showAdsModel.js"
import { buildAd, buildNoAds } from "./showAdsView.js"

export async function showAdsController(container) {

    try {
        const event = new CustomEvent("load-ads-started")
        container.dispatchEvent(event)
        const ads = await getAds()
        drawAds(ads, container)
    } catch (error) {
        const event = new CustomEvent("load-ads-error", {
            detail: error.message
        })
        container.dispatchEvent(event)
    } finally {
        const event = new CustomEvent("load-ads-finished")
        container.dispatchEvent(event)
    }
    
}

function drawAds(ads, container) {
    container.innerHTML = ''

    if (ads.length === 0) {
        container.innerHTML = buildNoAds()
    }

    ads.forEach((ad) => {
        const adHtml = document.createElement("a")
        adHtml.setAttribute("href", `./ad-detail.html=id=${ad.id}`)
        adHtml.innerHTML = buildAd(ad)

        container.appendChild(adHtml)
    })
}