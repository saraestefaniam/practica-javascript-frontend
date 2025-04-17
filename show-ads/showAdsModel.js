export async function getAds() {
    let ads = []

    try {
        const response = await fetch('http://localhost:8000/api/ads')
        ads = await response.json()
    } catch (error) {
        throw new Error("Ads could not be retrieved. Please try again later.")
    }

    return ads
}
