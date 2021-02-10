import ShopHistory from '../components/Item/ItemDetailsSection/Item Details Components/Item Shop History/ItemShopHistory'

export const ItemFunctions = {
    ItemName: (name) => {
        return name.toUpperCase();
    },
    ItemDescription: (description) => {
        return `"${description}"`
    },
    ItemImage: (images) => {
        if (images.icon) return images.icon
        if (!images.icon) return images.featured;
    },
    ItemPrice: (name) => {
        const IndexOfNameKey = Object.keys(localStorage).indexOf(name.toUpperCase());
        return Object.values(localStorage)[IndexOfNameKey]
    },
    ItemReleaseDate: (shopHistory, season) => {
        if (shopHistory) return item.shopHistory[0].split(/T/gi)[0] 
        if (!shopHistory) return `Battle Pass`
    },
    ItemLastSeenDate: (shopHistory) => {
        if (shopHistory) return item.shopHistory[item.shopHistory.length - 1].split(/T/gi)[0]
        if (!shopHistory) return `-`
    },
    ItemIntroduction: (introduction, type) => {
        if (type === 'season') return introduction.season;
        if (type === 'chapter') return introduction.chapter;
    },
    ItemShopHistoryTable: (shopHistory, LocalStgPrice) => {
        if (shopHistory.length > 0) return <ShopHistory price={LocalStgPrice}/>
    }
}