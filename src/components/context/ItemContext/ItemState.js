import ItemContext from './ItemContext';
import React, {useReducer} from 'react';
import ItemReducer from './ItemReducer'
import {GET_ITEM, GET_ITEM_SET, SET_LOADING} from '../types';
import axios from 'axios';



const ItemState = (props) => {
    
    const initialState = {
        item: null,
        ItemsOfSameSet: null,
        loading: false
    }

    const [state, dispatch] = useReducer(ItemReducer, initialState);

    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const GetItem = async (name) => {
        SetLoading();


        const NameCharacterHandler = () => {
            
            const dashregex = /-/gi;
            
            // handles names with dashes (which are passed in with ~ instead)
            const tilderegex = /~/gi;


            if (dashregex.test(name) === true && tilderegex.test(name) === false) {
                const NameDashResult = name.replaceAll(dashregex, ' ')
                return NameDashResult
            } else if (tilderegex.test(name) === true && dashregex.test(name) === false) {
                const NameTildeResult = name.replaceAll(tilderegex, '-')
                return NameTildeResult
            } else if (tilderegex.test(name) === true && dashregex.test(name) === true) {
                const replacedash = name.replaceAll(dashregex, ' ');
                const replacetilde = replacedash.replaceAll(tilderegex, '-');
                console.log(replacetilde)
                return replacetilde
            } else {
                return name
            }
        }

        const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${NameCharacterHandler()}`);

        dispatch({
            type: GET_ITEM,
            payload: response.data.data
        })
    }

    const GetItemSet = async (set) => {

        const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/search/all?set=${set}`)
        dispatch({
            type: GET_ITEM_SET,
            payload: response.data.data
        })

    }

    return <ItemContext.Provider value={{
        
        item: state.item,
        loading: state.loading,
        CardRarityStyles: state.CardRarityStyles,
        itemprice: state.itemprice,
        ItemsOfSameSet: state.ItemsOfSameSet,
        ItemTypes: state.ItemTypes,
        GetItem,
        GetItemSet
    }}>

                {props.children}

            </ItemContext.Provider>
}

export default ItemState
