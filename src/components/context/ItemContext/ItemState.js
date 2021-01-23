import ItemContext from './ItemContext';
import React, {useReducer} from 'react';
import ItemReducer from './ItemReducer'
import {GET_ITEM, GET_ITEM_SET, SET_LOADING, RELOAD_COMPONENT} from '../types';
import axios from 'axios';



const ItemState = (props) => {
    
    const initialState = {
        item: null,
        ItemsOfSameSet: null,
        loading: false,
        reloadComp: null,
        ItemTypes: {
            skin: 'skins',
            backbling: 'backblings',
            emote: 'emotes',
            musicpack: 'musicpacks',
            pickaxe: 'pickaxes',
            wrap: 'wraps',
            glider: 'gliders'
        },
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

        console.log(response.data.data)
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

    const ReloadComponent = (value) => {

        const num = value

        dispatch({
            type: RELOAD_COMPONENT,
            payload: num
        })
    }

    return <ItemContext.Provider value={{
        
        item: state.item,
        loading: state.loading,
        CardRarityStyles: state.CardRarityStyles,
        itemprice: state.itemprice,
        ItemsOfSameSet: state.ItemsOfSameSet,
        ItemTypes: state.ItemTypes,
        reloadComp: state.reloadComp,
        GetItem,
        GetItemSet,
        ReloadComponent
    }}>

                {props.children}

            </ItemContext.Provider>
}

export default ItemState
