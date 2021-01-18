import {
    SET_LOADING,
    GET_CURRENT_SHOP,
    SET_DAILY,
    SET_FEATURED
} from '../types';



const ShopReducer = (state, action) => {

    switch(action.type) {
        default:
            return state
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_CURRENT_SHOP:
            return {
                ...state,
                loading: false
            }
        case SET_DAILY:
            return {
                ...state,
                CurrentDaily: action.payload
            }
        case SET_FEATURED:
            return {
                ...state,
                CurrentFeatured: action.payload
            }
    }
}

export default ShopReducer;