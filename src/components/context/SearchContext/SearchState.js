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
      SET_SLICE,
      SET_RESULTS
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

    const getSearch = async (searchedEndpoint, allEndpoint) => {
        setLoading();
        if (searchedEndpoint) {
            const response = await axios.get(searchedEndpoint);
            dispatch({type: GET_SEARCH, payload: response.data.data})
        } else if (allEndpoint) {
            const response = await axios.get('https://fortnite-api.com/v2/cosmetics/br');
            dispatch({type: GET_SEARCH, payload: response.data.data})
        }
    }



    const setResults = (boolean) => {dispatch({type: SET_RESULTS, payload: boolean})}
    const setInput = (input) => {dispatch({type: SET_INPUT, payload: input})}
    const setRarity = (rarity) => {dispatch({type: SET_RARITY, payload: rarity})}
    const setItemType = (itemtype) => {dispatch({type: SET_ITEMTYPE, payload: itemtype})}
    const setnewSlice = (CURRENTSLICE) => {dispatch({type: SET_SLICE, payload: (CURRENTSLICE + 60)})}

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
                setnewSlice,
                setResults
            }}>
                {children}
            </SearchContext.Provider>
}

export default SearchState