import {GET_ITEM, GET_ITEM_SET, SET_LOADING} from '../types';

const ItemReducer = (state, action) => {


    switch(action.type) {
        default:
            return state
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_ITEM:
            return {
                ...state,
                item: action.payload,
                loading: false
            }
        case GET_ITEM_SET:
            return {
                ...state,
                ItemsOfSameSet: action.payload
            }
    }
}

export default ItemReducer;