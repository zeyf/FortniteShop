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
        CurrentDaily: null,
        CardRarityStyles: {
            uncommon: {
                background: 'radial-gradient(rgb(105, 187, 30), rgb(23, 81, 23))',
                border: '3px solid rgb(135, 227, 57)'
            },
            epic: {
                background: 'radial-gradient(rgb(195, 89, 255), rgb(75, 36, 131))',
                border: '3px solid #e95eff'
            },
            rare: {
                background: 'radial-gradient(rgb(44, 193, 255), rgb(20, 57, 119))',
                border: '3px solid rgb(55, 209, 255)'
            },
            iconseries: {
                background: 'radial-gradient(rgb(54, 183, 183), rgb(37, 107, 107))',
                border: '3px solid rgb(82, 224, 224)'
            },
            slurpseries: {
                background: 'radial-gradient(rgb(41, 241, 163), rgb(18, 169, 164))',
                border: '3px solid #53f0ff'   
            },
            dark: {
                background: 'radial-gradient(rgb(251, 34, 223), rgb(82, 12, 111))',
                border: '3px solid rgb(255, 66, 231)'
            },
            legendary: {
                background: 'radial-gradient(rgb(234, 141, 35), rgb(120, 55, 29))',
                border: '3px solid rgb(233, 141, 75)'
            }
        },
        ItemTypes: {
            skin: 'skin',
            emote: 'emote',
            musicpack: 'musicpack',
            pickaxe: 'pickaxe',
            wrap: 'wrap',
            glider: 'glider'
        }
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

        const FeaturedItemsObj = {
            FeaturedItemfinalPrices,
            FeaturedItemItemsNames,
            FeaturedItemItemsImages,
            FeaturedItemItemsRarity,
            FeaturedItemItemsIDs
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

        
        const DailyItemsObj = {
            dailyItemfinalPrices,
            dailyItemItemsNames,
            dailyItemItemsImages,
            dailyItemItemsRarity,
            dailyItemItemsIDs
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
    }

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