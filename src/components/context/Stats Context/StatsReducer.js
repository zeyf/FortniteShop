import {
    SET_LOADING, 
    GET_STATS, 
    SET_ACCOUNT_NAME,
    SET_TIME_WINDOW,
    SET_PLAYER_STATS,
    SET_ACCOUNT_TYPE
} from '../types';

const StatsReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
        case SET_LOADING:
            return {
                ...state,
                LOADING: true
            }
        case GET_STATS:
            return {
                ...state,
                PLAYERSTATS: action.payload,
                LOADING: false
            }
        case SET_ACCOUNT_NAME:
            return {
                ...state,
                ACCOUNTNAME: action.payload
            }
        case SET_TIME_WINDOW:
            return {
                ...state,
                TIMEWINDOW: action.payload
            }
        case SET_PLAYER_STATS:
            return {
                ...state,
                PLAYERSTATS: null
            }
        case SET_ACCOUNT_TYPE:
            return {
                ...state,
                ACCOUNTTYPE: action.payload
            }
    }
}

export default StatsReducer