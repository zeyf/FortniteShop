import {
    SET_LOADING,
    GET_SEARCH,
    SET_INPUT,
    SET_RARITY,
    SET_ITEMTYPE,
    SET_SLICE,
    SET_RESULTS,
    SET_ALERT
} from '../types'

const SearchReducer = (state, action) => {
    switch(action.type) {
        default:
            return state
        case SET_LOADING:
            return {
                ...state,
                LOADING: action.payload
            }
        case GET_SEARCH:
            return {
                ...state,
                RESULTS: action.payload,
                LOADING: false
                }
        case SET_INPUT:
            return {
                ...state,
                INPUT: action.payload
            }
        case SET_RARITY:
            return {
                ...state,
                RARITY: action.payload
            }
        case SET_ITEMTYPE:
            return {
                ...state,
                ITEMTYPE: action.payload
            }
        case SET_SLICE:
            return {
                ...state,
                CURRENTSLICE: action.payload
            }
        case SET_RESULTS:
            return {
                ...state,
                RESULTS: action.payload
            }
        case SET_ALERT:
            return {
                ...state,
                ALERT: action.payload
            }
    }
}

export default SearchReducer