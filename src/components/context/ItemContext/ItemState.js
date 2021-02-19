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
        
        const NameCharacterHandler = (name) => {
            const dashregex = /-/gi;
            const tilderegex = /~/gi;
            
            return name.replaceAll(dashregex, ' ').replaceAll(tilderegex, '-')
        }

        const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${NameCharacterHandler(name)}`);

        dispatch({
            type: GET_ITEM,
            payload: response.data.data
        })
    }

    const GetItemSet = async (set) => {
        const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/search/all?set=${encodeURIComponent(set)}`)
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
