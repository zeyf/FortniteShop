import {useReducer} from 'react';
import ShopContext from './ShopContext';
import ShopReducer from './ShopReducer';
import axios from 'axios';
import {
    SET_LOADING,
    GET_CURRENT_SHOP,
    SET_DAILY,
    SET_FEATURED
} from '../types';

const ShopState = (props) => {
    
    const initialState = {
        loading: false,
        CurrentFeatured: null,
        CurrentDaily: null
    }

    const [state, dispatch] = useReducer(ShopReducer, initialState);

    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    // Get Current Shop
    const GetCurrentShop = async () => {
        SetLoading();
        const response = await axios.get('https://fortnite-api.com/v2/shop/br/combined');

        // FEATURED ITEM SPECIFIC DATA FOR FEATUREDITEMOBJ //

        const FeaturedItemfinalPrices = response.data.data.featured.entries.map((item, i) => {
            return item.finalPrice;
        });
        const FeaturedItemItemsArr = response.data.data.featured.entries.map((item, i) => {
            return item.items;
        });
        const FeaturedItemItemsIDs = FeaturedItemItemsArr.map((item, i) => {
        
            const curr = item.map((current, i) => {
                return current.id;
            })
            return curr
        });

        const FeaturedItemItemsNames = FeaturedItemItemsArr.map((item, i) => {
            const name = item.map((current, pos) => {
                return current.name
            })
            return name;
        });
        const FeaturedItemItemsImages = FeaturedItemItemsArr.map((item, i) => {
            const images = item.map((current, pos) => {

                if(current.images.featured) {
                    return current.images.featured
                } else {
                    return current.images.icon
                }
            })
            return images;
        });
        const FeaturedItemItemsRarity = FeaturedItemItemsArr.map((item, i) => {
            const rarity = item.map((current, pos) => {
                return current.rarity.displayValue
            })
            return rarity;
        });

        const FeaturedItemBundleStatus = response.data.data.featured.entries.map((item, i) => {
            return item.bundle
        })
        console.log(FeaturedItemBundleStatus)

        const FeaturedItemsObj = {
            FeaturedItemfinalPrices,
            FeaturedItemItemsNames,
            FeaturedItemItemsImages,
            FeaturedItemItemsRarity,
            FeaturedItemItemsIDs,
            FeaturedItemBundleStatus
        }

        // DAILY ITEM SPECIFIC DATA FOR DAILYITEMOBJ //

        const dailyItemfinalPrices = response.data.data.daily.entries.map((item, i) => {
            return item.finalPrice;
        });
        const dailyItemItemsArr = response.data.data.daily.entries.map((item, i) => {
            return item.items;
        });
        const dailyItemItemsIDs = dailyItemItemsArr.map((item, i) => {
            const curr = item.map((current, i) => {
                return current.id;
            })
            return curr
        });

        const dailyItemItemsNames = dailyItemItemsArr.map((item, i) => {
            const name = item.map((current, pos) => {
                return current.name
            })
            return name;
        });
        const dailyItemItemsImages = dailyItemItemsArr.map((item, i) => {
            const images = item.map((current, pos) => {
        
                if(current.images.featured) {
                    return current.images.featured
                } else {
                    return current.images.icon
                }
            })
            return images;
        });
        const dailyItemItemsRarity = dailyItemItemsArr.map((item, i) => {
            const rarity = item.map((current, pos) => {
                return current.rarity.displayValue
            })
            return rarity;
        });

        const dailyItemBundleStatus = response.data.data.daily.entries.map((item, i) => {
            return item.bundle
        })
        
        
        const DailyItemsObj = {
            dailyItemfinalPrices,
            dailyItemItemsNames,
            dailyItemItemsImages,
            dailyItemItemsRarity,
            dailyItemItemsIDs,
            dailyItemBundleStatus
        }

        dispatch({
            type: GET_CURRENT_SHOP
        }) // changes loading to confirm shop info acquired
        dispatch({
            type: SET_FEATURED,
            payload: FeaturedItemsObj
        })
        dispatch({
            type: SET_DAILY,
            payload: DailyItemsObj
        })
    };

    return <ShopContext.Provider value={{

        loading: state.loading,
        CurrentDaily: state.CurrentDaily, 
        CurrentFeatured: state.CurrentFeatured,
        CardRarityStyles: state.CardRarityStyles,
        ItemTypes: state.ItemTypes,
        GetCurrentShop

        }}>
            {props.children}
    </ShopContext.Provider>;

}

export default ShopState;