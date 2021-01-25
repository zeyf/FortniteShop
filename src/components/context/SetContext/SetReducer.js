import {SET_LOADING, GET_SET, SET_NAME} from '../types';

const SetReducer = (state, action) => {




    switch(action.type) {
        default:
            return state;
        
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_SET:
            return {
                ...state,
                SetInfo: action.payload,
                loading: false
            }
        case SET_NAME:
            return {
                ...state,
                SetName: action.payload
            }

    }
}

export default SetReducer;