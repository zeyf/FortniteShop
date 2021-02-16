import {useReducer} from 'react'
import SearchContext from './SearchContext'
import SearchReducer from './SearchReducer'
import axios from 'axios'
import {
    SET_LOADING,
     GET_SEARCH,
      SET_INPUT,
      SET_ITEMTYPE,
      SET_RARITY,
      SET_SLICE
    } from '../types'

const SearchState = ({children}) => {
    
    const InitialState  = {
        LOADING: false,
        INPUT: '',
        RARITY: null,
        ITEMTYPE: null,
        RESULTS: null,
        CURRENTSLICE: 60
    }

    const [state, dispatch] = useReducer(SearchReducer, InitialState);

    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const getSearch = async (endpoint) => {
        setLoading();
        const response = await axios.get(endpoint)

        dispatch({
            type: GET_SEARCH,
            payload: response.data.data
        })
    }

    const setInput = (input) => {
        dispatch({type: SET_INPUT, payload: input})
    }

    const setRarity = (rarity) => {
        dispatch({type: SET_RARITY, payload: rarity})
    }

    const setItemType = (itemtype) => {
        dispatch({type: SET_ITEMTYPE, payload: itemtype})
    }

    const setnewSlice = (CURRENTSLICE) => {
        dispatch({
            type: SET_SLICE,
            payload: (CURRENTSLICE + 48)
        })
    }

    return <SearchContext.Provider value={{
                LOADING: state.LOADING,
                INPUT: state.INPUT,
                RARITY: state.RARITY,
                RESULTS: state.RESULTS,
                ITEMTYPE: state.ITEMTYPE,
                CURRENTSLICE: state.CURRENTSLICE,
                setInput,
                setRarity,
                setItemType,
                getSearch,
                setnewSlice
            }}>
                {children}
            </SearchContext.Provider>
}

export default SearchState