
const SearchFunctions = {
    setSearchEndpoint: (input, itemtype, rarity) => {
        if (input !== '') {
            if (itemtype && rarity) return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&name=${input}&rarity=${rarity}&type=${itemtype}`
            if (!itemtype && rarity) return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&name=${input}&rarity=${rarity}`
            if (itemtype && !rarity) return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&name=${input}&type=${itemtype}`
            if (!itemtype && !rarity) return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&name=${input}`
        } if (input === '') {
            if (itemtype && rarity) return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&type=${itemtype}&rarity=${rarity}`
            if (!itemtype && rarity) return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&rarity=${rarity}`
            if (itemtype && !rarity) return `https://fortnite-api.com/v2/cosmetics/br/search/all?matchMethod=contains&type=${itemtype}`
        }
    },
    resultsLength: (results) => {
        return results.length
    },
    filteringBy: (input, itemtype, rarity) => {
        if (input !== '') {
            if (itemtype && rarity) return `Results for: ${input} | Filtering by - Item Type:${itemtype} and Rarity: ${rarity}`
            if (!itemtype && rarity) return `Results for: ${input} | Filtering by - Rarity: ${rarity}`
            if (itemtype && !rarity) return `Results for: ${input} | Filtering by - Item Type: ${itemtype}`
            if (!itemtype && !rarity) return `Results for: ${input}`
        } if (input === '') {
            if (itemtype && rarity) return `Filtering by - Item Type: ${itemtype} and Rarity: ${rarity}`
            if (!itemtype && rarity) return `Filtering by - Rarity: ${rarity}`
            if (itemtype && !rarity) return `Filtering by - Item Type: ${itemtype}`
        }
    },
    rarityOptions: {
        label: 'Rarity',
        options: [
        {value: 'common', label:'Common'},
        {value: 'uncommon', label:'Uncommon'},
        {value: 'epic', label:'Epic'},
        {value: 'rare', label:'Rare'},
        {value: 'legendary', label:'Legendary'},
        {value: 'icon', label:'Icon Series'},
        {value: 'slurp', label:'Slurp Series'},
        {value: 'dark', label:'DARK SERIES'},
        {value: 'shadow', label:'Shadow Series'},
        {value: 'starwars', label:'Star Wars Series'},
        {value: 'gaminglegends', label:'Gaming Legends Series'},
        {value: 'dc', label:'DC SERIES'},
        {value: 'marvel', label:'MARVEL SERIES'},
        {value: 'lava', label:'Lava Series'},
        {value: 'frozen', label:'frozen'}
        ]
    },
    itemtypeOptions: {
        label: 'Item Type',
        options: [
        {value: 'outfit', label:'Outfit'},
        {value: 'pickaxe', label:'Pickaxe'},
        {value: 'backpack', label:'Back Bling'},
        {value: 'emote', label:'Emote'},
        {value: 'contrail', label:'Contrail'},
        {value: 'spray', label:'Spray'},
        {value: 'toy', label:'Toy'},
        {value: 'petcarrier', label:'Pet'},
        {value: 'loadingscreen', label:'Loading Screen'},
        {value: 'wrap', label:'Wrap'},
        {value: 'banner', label:'Banner'}
        ]
    }
}

export default SearchFunctions;