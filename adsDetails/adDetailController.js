import { adDetailModel, getLoggedInUserInfo, removeAd } from "./adDetailModel.js"
import { createAdDetailView, createRemoveButton } from "./adDetailView.js"

export const adDetailController = async (adContainer, adId) => {

    const showRemoveButton = (adId) => {
        const removeButton = createRemoveButton()
        adContainer.appendChild(removeButton)

        removeButton.addEventListener("click", () => {
            if(confirm("Are you sure you want to delete the ad?"))
                removeAd(adId)
        })
    }

    try {
        const adDetail = await adDetailModel(adId)
        adContainer.innerHTML = createAdDetailView(adDetail)

        const user = await getLoggedInUserInfo()
        if (user.id === adDetail.userId) {
            showRemoveButton(adId)
        }
    } catch (error) {
        alert(error.message)
    }
}