import {useReducer} from 'react';
import StatsContext from './StatsContext'
import StatsReducer from './StatsReducer'
import axios from 'axios'
import {
    GET_STATS,
    SET_LOADING,
    SET_ACCOUNT_NAME,
    SET_TIME_WINDOW,
    SET_PLAYER_STATS,
    SET_ACCOUNT_TYPE
} from '../types'

const StatsState = ({children}) => {
    
    const InitialState = {
        PLAYERSTATS: null,
        LOADING: false,
        ACCOUNTNAME: null,
        TIMEWINDOW: 'lifetime',
        ACCOUNTTYPE: null
    };
    
    const [state, dispatch] = useReducer(StatsReducer, InitialState);
    
    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const GetPlayerStats = async (AccountName, Platform, TimeWindow) => {
        SetLoading();

        if (AccountName && Platform && TimeWindow) {

                const response = await axios.get(`https://fortnite-api.com/v1/stats/br/v2/?name=${AccountName}&accountType=${Platform}&timeWindow=${TimeWindow}`)
                const Data = response.data.data;
                const {
                    account,
                    battlePass,
                    image,
                    stats
                } = Data;
                
                const {id, name} = account
                const {level, progress} = battlePass
                const {all} = stats;
                const {duo, ltm, overall, solo, squad, trio} = all
                
                
                const DestructuredResponse = {
                    id, name, level, progress,
                duo, ltm, overall, solo,
                squad, trio, image
            }

            dispatch({
                type: GET_STATS,
                payload: DestructuredResponse
            })
        }
    }

    const setAccountName = (input) => {
        dispatch({
            type: SET_ACCOUNT_NAME,
            payload: input
        })
    }
    const setTimeWindow = (TimeWindow) => {
        dispatch({
            type: SET_TIME_WINDOW,
            payload: TimeWindow
        })
    }

    const setPlayerStats = () => {
        dispatch({
            type: SET_PLAYER_STATS
        })
    }

    const setAccountType = (input) => {
        dispatch({type: SET_ACCOUNT_TYPE, payload: input})
    }

    return  <StatsContext.Provider value={{
                LOADING: state.LOADING,
                PLAYERSTATS: state.PLAYERSTATS,
                ACCOUNTNAME: state.ACCOUNTNAME,
                TIMEWINDOW: state.TIMEWINDOW,
                ACCOUNTTYPE: state.ACCOUNTTYPE,
                GetPlayerStats,
                setAccountName,
                setTimeWindow,
                setPlayerStats,
                setAccountType
            }}>
                {children}
            </StatsContext.Provider>;
}

export default StatsState