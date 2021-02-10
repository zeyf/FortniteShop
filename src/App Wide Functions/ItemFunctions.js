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
        if (shopHistory) return shopHistory[0].split(/T/gi)[0] 
        if (!shopHistory) return `Battle Pass`
    },
    ItemLastSeenDate: (shopHistory) => {
        if (shopHistory) return shopHistory[shopHistory.length - 1].split(/T/gi)[0]
        if (!shopHistory) return `-`
    },
    ItemIntroduction: (introduction, type) => {
        if (type === 'season') return introduction.season;
        if (type === 'chapter') return introduction.chapter;
    },
    ItemShopHistoryTable: (shopHistory, LocalStgPrice) => {
        if (shopHistory.length > 0) return <ShopHistory price={LocalStgPrice}/>
    },
    ReturnDaily: (data, type) => {
        if (data) {
            const {
                dailyItemItemsNames,
                dailyItemItemsRarity,
                dailyItemItemsIDs,
                dailyItemfinalPrices,
                dailyItemBundleStatus,
                dailyItemItemsImages
            } = data;

            if (type === 'names') return dailyItemItemsNames
            if (type === 'rarities') return dailyItemItemsRarity
            if (type === 'IDs') return dailyItemItemsIDs
            if (type === 'prices') return dailyItemfinalPrices
            if (type === 'bundlestatuses') return dailyItemBundleStatus
            if (type === 'images') return dailyItemItemsImages
        }
    },
    ReturnFeatured: (data, type) => {
        if (data) {
            const {
                FeaturedItemItemsImages,
                FeaturedItemBundleStatus, 
                FeaturedItemfinalPrices,
                FeaturedItemItemsIDs,
                FeaturedItemItemsRarity,
                FeaturedItemItemsNames
            } = data;

            if (type === 'names') return FeaturedItemItemsNames
            if (type === 'rarities') return FeaturedItemItemsRarity
            if (type === 'IDs') return FeaturedItemItemsIDs
            if (type === 'prices') return FeaturedItemfinalPrices
            if (type === 'bundlestatuses') return FeaturedItemBundleStatus
            if (type === 'images') return FeaturedItemItemsImages
        }
    }
}

export default ItemFunctions;