import {useReducer} from 'react'
import SearchContext from './SearchContext'
import SearchReducer from './SearchReducer'
import axios from 'axios'
import {
    SET_LOADING,
     GET_SEARCH,
      SET_INPUT,
      SET_ITEMTYPE,
      SET_RARITY
    } from '../types'

const SearchState = ({children}) => {
    
    const InitialState  = {
        LOADING: false,
        INPUT: '',
        RARITY: null,
        ITEMTYPE: null,
        RESULTS: null
    }

    const [state, dispatch] = useReducer(SearchReducer, InitialState);

    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const getSearch = async (endpoint) => {
        setLoading();
        const response = await axios.get(endpoint)

        console.log(response)
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

    return <SearchContext.Provider value={{
                LOADING: state.LOADING,
                INPUT: state.INPUT,
                RARITY: state.RARITY,
                RESULTS: state.RESULTS,
                ITEMTYPE: state.ITEMTYPE,
                setInput,
                setRarity,
                setItemType,
                getSearch
            }}>
                {children}
            </SearchContext.Provider>
}

export default SearchState