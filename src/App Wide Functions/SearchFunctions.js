
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
        if (results) return results.length
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
            {value: 'Legendary', label:'Legendary'},
            {value: 'Epic', label:'Epic'},
            {value: 'Rare', label:'Rare'},
            {value: 'Uncommon', label:'Uncommon'},
            {value: 'Common', label:'Common'},
            {value: 'Frozen', label:'Frozen Series'},
            {value: 'Lava', label:'Lava Series'},
            {value: 'Marvel', label:'Marvel Series'},
            {value: 'GamingLegends', label:'Gaming Legends Series'},
            {value: 'Slurp', label:'Slurp Series'},
            {value: 'Starwars', label:'Star Wars Series'},
            {value: 'Shadow', label:'Shadow Series'},
            {value: 'Icon', label:'Icon Series'},
            {value: 'DC', label:'DC Series'},
            {value: 'Dark', label:'Dark Series'},
        ]
    },
    itemtypeOptions: {
        label: 'Item Type',
        options: [
        {value: 'Outfit', label:'Outfit'},
        {value: 'Backpack', label:'Back Bling'},
        {value: 'Emote', label:'Emote'},
        {value: 'Contrail', label:'Contrail'},
        {value: 'Spray', label:'Spray'},
        {value: 'Toy', label:'Toy'},
        {value: 'PetCarrier', label:'Pet'},
        {value: 'Loadingscreen', label:'Loading Screen'},
        {value: 'Wrap', label:'Wrap'},
        {value: 'Banner', label:'Banner'}
        ]
    }
}

export default SearchFunctions;