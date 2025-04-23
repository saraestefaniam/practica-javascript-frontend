import { adDetailModel } from "./adDetailModel.js"
import { createAdDetailView } from "./adDetailView.js"

export const adDetailController = async (adContainer, adId) => {


    try {
        const adDetail = await adDetailModel(adId)
        adContainer.innerHTML = createAdDetailView(adDetail)
    } catch (error) {
        alert(error.message)
    }
}