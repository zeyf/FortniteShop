import ItemContext from './ItemContext';
import React, {useReducer} from 'react';
import ItemReducer from './ItemReducer'
import {GET_ITEM, SET_ITEM_PRICE, SET_LOADING} from '../types';
import axios from 'axios';



const ItemState = (props) => {
    
    const initialState = {
        item: null,
        itemprice: null,
        loading: false,
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
        }
    }

    const [state, dispatch] = useReducer(ItemReducer, initialState);

    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const GetItem = async (name) => {
        SetLoading();


        const NameDashHandler = () => {
            
            const dashregex = /-/gi;
            
            // handles names with dashes (which are passed in with ~ instead)
            const tilderegex = /~/gi;


            if (dashregex.test(name)) {
                const NameDashResult = name.replaceAll(dashregex, ' ')
                return NameDashResult
            } else if (tilderegex.test(name)) {
                const NameTildeResult = name.replaceAll(tilderegex, '-')
                return NameTildeResult
            } else {
                return name
            }
        }

        const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${NameDashHandler()}`);
        dispatch({
            type: GET_ITEM,
            payload: response.data.data
        })
    }

    const SetItemPrice = (price) => {
        dispatch({
            type: SET_ITEM_PRICE,
            payload: price
        })

    }

    return <ItemContext.Provider value={{
        
        item: state.item,
        loading: state.loading,
        CardRarityStyles: state.CardRarityStyles,
        itemprice: state.itemprice,
        GetItem,
        SetItemPrice
    }}>

                {props.children}

            </ItemContext.Provider>
}

export default ItemState
