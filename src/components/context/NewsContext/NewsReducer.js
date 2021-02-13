import {SET_LOADING, GET_NEWS} from '../types'

const NewsReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
        case SET_LOADING:
            return {
                ...state,
                LOADING: true
            }
        case GET_NEWS:
            return {
                ...state,
                NEWS: action.payload,
                LOADING: false
            }
    }    
}

export default NewsReducer;