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
      SET_RESULTS,
      SET_ALERT
    } from '../types'

const SearchState = ({children}) => {
    
    const InitialState  = {
        LOADING: false, INPUT: '', RARITY: null, ITEMTYPE: null,
        RESULTS: null, CURRENTSLICE: 60, ALERT: null
    }

    const [state, dispatch] = useReducer(SearchReducer, InitialState);

    const setLoading = (type) => {
        dispatch({type: SET_LOADING, payload: type})
    }

    const getSearch = async (searchedEndpoint, allEndpoint) => {
        setLoading(true);
        if (searchedEndpoint) {
            //eslint-disable-next-line
            const response = await axios.get(searchedEndpoint)
            .then((resp) => {
                dispatch({type: GET_SEARCH, payload: resp.data.data})
                dispatch({type: SET_ALERT, payload: null})
            })
            .catch(() => {
                    dispatch({type: SET_ALERT, payload: 'There are no search results.'})
                    dispatch({type: SET_LOADING, payload: false})
            })
        } else if (allEndpoint) {
            const response = await axios.get('https://fortnite-api.com/v2/cosmetics/br')
            .then((resp) => {const allreversed = [...resp.data.data].reverse(); dispatch({type: GET_SEARCH, payload: allreversed})})
        }
    }

    const setResults = (boolean) => {dispatch({type: SET_RESULTS, payload: boolean})}
    const setInput = (input) => {dispatch({type: SET_INPUT, payload: input})}
    const setRarity = (rarity) => {dispatch({type: SET_RARITY, payload: rarity})}
    const setItemType = (itemtype) => {dispatch({type: SET_ITEMTYPE, payload: itemtype})}
    const setnewSlice = (CURRENTSLICE) => {dispatch({type: SET_SLICE, payload: (CURRENTSLICE + 60)})}
    const setAlert = (boolean) => {dispatch({type: SET_ALERT, payload: boolean})}

    return <SearchContext.Provider value={{
            LOADING: state.LOADING, INPUT: state.INPUT, RARITY: state.RARITY, RESULTS: state.RESULTS,
            ITEMTYPE: state.ITEMTYPE, CURRENTSLICE: state.CURRENTSLICE, ALERT: state.ALERT,
            setInput, setRarity, setItemType, getSearch, setnewSlice, setResults, setAlert
            }}>
                {children}
            </SearchContext.Provider>
}

export default SearchState