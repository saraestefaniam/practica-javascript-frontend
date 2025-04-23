
export async function adDetailModel(adId) {
    const response = await fetch(`http://localhost:8000/api/ads/${adId}?_expand=user`)

    if (!response.ok) {
        throw new Error("Ad not available")
    }

    const adDetail = await response.json()

    return adDetail
}


