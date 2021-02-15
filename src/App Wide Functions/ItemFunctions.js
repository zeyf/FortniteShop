import ShopHistory from '../components/Item/ItemDetailsSection/Item Details Components/Item Shop History/ItemShopHistory'

export const ItemFunctions = {
    ItemName: (item, type) => {
        if (item && type === 'title') {const {name} = item; return name;}
        if (item && type === 'card') {const {name} = item; return name.toUpperCase();}
    },
    ItemRarity: (item) => {
        if (item) {const {rarity} = item; const {displayValue} = rarity; return displayValue;}
    },
    ItemDescription: (item) => {
        if (item) {const {description} = item; return description;}
    },
    ItemImage: (item) => {
        if (item) {
            const {images} = item;
            const {featured, icon, smallIcon} = images;
            if (icon) return icon
            if (!icon && featured) return featured
            if (!icon && !featured) return smallIcon
        }
    },
    ItemPrice: (item) => {
        if (item) {
            const {name} = item;
            const IndexOfNameKey = Object.keys(localStorage).indexOf(name.toUpperCase());
            return Object.values(localStorage)[IndexOfNameKey]
        }
    },
    ItemReleaseDate: (item) => {
        if (item) {
            const {shopHistory} = item;
            if (shopHistory) return shopHistory[0].split(/T/gi)[0] 
            if (!shopHistory) return `Battle Pass`
        }
    },
    ItemLastSeenDate: (item) => {
        if (item) {
            const {shopHistory} = item;
            if (shopHistory) return shopHistory[shopHistory.length - 1].split(/T/gi)[0]
            if (!shopHistory) return `-`
        }
    },
    ItemIntroduction: (item, type) => {
        if (item) {   
            const {introduction} = item;
            if (introduction) {
                if (type === 'season') return introduction.season;
                if (type === 'chapter') return introduction.chapter;
            } else {
                if (type === 'season') return '-'
                if (type === 'chapter') return '-'
            }
        }
    },
    ItemShopHistoryTable: (item, LocalStgPrice) => {
        if (item) {
            const {shopHistory} = item;
            if (shopHistory && shopHistory.length > 0) return <ShopHistory price={LocalStgPrice}/>
        }
    },
    GetSet: (item, GetItemSet) => {
        if (item) {
            const {set} = item;
            if (set) GetItemSet(set.value)
        }
    },
    SetName: (item) => {
        if (item) {
            const {set} = item;
            if (set) {
                const {value} = set;
                return value.toUpperCase()
            } 
        }
    },
    SetItemSetLink: (setname) => {
            const spaceregex = /\s/gi;
            const dashregex = /-/gi;
            if (spaceregex.test(setname) && !dashregex.test(setname)) return setname.replaceAll(spaceregex, '-').toLowerCase()
            if (!spaceregex.test(setname) && dashregex.test(setname)) return setname.replaceAll(dashregex, '~')
            if (!spaceregex.test(setname) && !dashregex.test(setname)) return setname.toLowerCase()
            if (spaceregex.test(setname) && dashregex.test(setname)) {
                const replacedashes = setname.replaceAll(dashregex, '~');
                const replacespaces = replacedashes.replaceAll(spaceregex, '-');
                return replacespaces;
            }
    },
    SetItemSetLength: (ItemsOfSameSet) => {
        if (ItemsOfSameSet) return ItemsOfSameSet.length
    },
    SetItemName: (ItemsOfSameSet) => {
        if (ItemsOfSameSet) {
            const name = ItemsOfSameSet.map((item, i) => {
                const {name} = item;
                const spaceregex = /\s/gi;
                const dashregex = /-/gi;

                if (spaceregex.test(name) && !dashregex.test(name)) {
                    const SpaceReplaceResult = name.replaceAll(spaceregex, '-').toLowerCase()
                    return SpaceReplaceResult;
        
                } else if (dashregex.test(name) && !spaceregex.test(name)) { 
                    const DashReplaceResult = name.replaceAll(dashregex, '~').toLowerCase()
                    return DashReplaceResult
        
                } else if(dashregex.test(name) && spaceregex.test(name)) {
                    const DashReplaceResult = name.replaceAll(dashregex, '~').toLowerCase()
                    const ReplaceSpacesToo = DashReplaceResult.replaceAll(spaceregex, '-')
                    return ReplaceSpacesToo
                } else if (!dashregex.test(name) && !spaceregex.test(name)){
                    return name.toLowerCase();
                }
            })
            return name
        }
    },
    SetItemSetImages: (ItemsOfSameSet) => {
        if (ItemsOfSameSet) {
            return ItemsOfSameSet.map((item, i) => {
                const {images} = item;
                const {featured, icon} = images;
                if (icon) return icon
                if (!icon) return featured
            })
        }
    },
    ReturnDaily: (data, type) => {
        if (data) {
            const {
                dailyItemItemsNames,
                dailyItemItemsRarity,
                dailyItemItemsIDs,
                dailyItemfinalPrices,
                dailyItemBundleStatus,
                dailyItemItemsImages,
                dailyItemSetNames
            } = data;

            if (type === 'names') return dailyItemItemsNames
            if (type === 'rarities') return dailyItemItemsRarity
            if (type === 'IDs') return dailyItemItemsIDs
            if (type === 'prices') return dailyItemfinalPrices
            if (type === 'bundlestatuses') return dailyItemBundleStatus
            if (type === 'images') return dailyItemItemsImages
            if (type === 'setnames') return dailyItemSetNames
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
                FeaturedItemItemsNames,
                FeaturedItemSetNames
            } = data;

            if (type === 'names') return FeaturedItemItemsNames
            if (type === 'rarities') return FeaturedItemItemsRarity
            if (type === 'IDs') return FeaturedItemItemsIDs
            if (type === 'prices') return FeaturedItemfinalPrices
            if (type === 'bundlestatuses') return FeaturedItemBundleStatus
            if (type === 'images') return FeaturedItemItemsImages
            if (type === 'setnames') return FeaturedItemSetNames
        }
    }
}

export default ItemFunctions;