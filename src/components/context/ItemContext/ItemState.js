import ItemContext from './ItemContext';
import React, {useReducer} from 'react';
import ItemReducer from './ItemReducer'
import {GET_ITEM, SET_LOADING} from '../types';
import axios from 'axios';



const ItemState = (props) => {
    
    const initialState = {
        item: null,
        loading: false
    }

    const [state, dispatch] = useReducer(ItemReducer, initialState);

    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const GetItem = async (name) => {
        SetLoading();


        const NameDashHandler = () => {
            
            const dashregex = /-/gi;

            if (dashregex.test(name)) {
                const NameDashResult = name.replaceAll(dashregex, ' ')
                return NameDashResult
            } else {
                return name
            }
        }

        const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${NameDashHandler()}`);
        console.log(response.data.data);
        dispatch({
            type: GET_ITEM,
            payload: response.data.data
        })
    }

    return <ItemContext.Provider value={{
        
        item: state.item,
        loading: state.loading,
        GetItem
    }}>

                {props.children}

            </ItemContext.Provider>
}

export default ItemState
