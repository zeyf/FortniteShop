import {GET_ITEM, SET_LOADING} from '../types';

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
    }
}

export default ItemReducer;