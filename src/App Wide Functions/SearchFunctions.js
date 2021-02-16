
const SearchFunctions = {
    setSearchEndpoint: (input, itemtype, rarity) => {
        if (input || input !== '') {
            if (itemtype && rarity) {
                return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&name=${input}&rarity=${rarity}&type=${itemtype}`
            } else if (!itemtype && rarity) {
                return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&name=${input}&rarity=${rarity}`
            } else if (itemtype && !rarity) {
                return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&name=${input}&type=${itemtype}`
            } else if (!itemtype && !rarity) {
                return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&name=${input}`
            }
        } if (!input || input === '') {
            if (itemtype && rarity) {
                return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&type=${itemtype}&rarity=${rarity}`
            } else if (!itemtype && rarity) {
                return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&rarity=${rarity}`
            } else if (itemtype && !rarity) {
                return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&type=${itemtype}`
            }
        }
    }
}

export default SearchFunctions;