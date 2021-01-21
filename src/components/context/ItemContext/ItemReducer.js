import {GET_ITEM, GET_ITEM_SET, SET_LOADING, RELOAD_COMPONENT} from '../types';

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
        case RELOAD_COMPONENT:
            return {
                ...state,
                reloadComp: action.payload
            }
    }
}

export default ItemReducer;