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
    SET_ACCOUNT_TYPE,
    SET_ALERT
} from '../types'

const StatsState = ({children}) => {
    
    const InitialState = {
        PLAYERSTATS: null,
        LOADING: false,
        ACCOUNTNAME: null,
        TIMEWINDOW: 'lifetime',
        ACCOUNTTYPE: null,
        ALERT: null
    };
    
    const [state, dispatch] = useReducer(StatsReducer, InitialState);
    
    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const GetPlayerStats = async (AccountName, Platform, TimeWindow) => {
        SetLoading();

        if (AccountName && Platform && TimeWindow) {
                //eslint-disable-next-line
                const response = await axios.get(
                    `https://fortnite-api.com/v1/stats/br/v2/?name=${AccountName}&accountType=${Platform}&timeWindow=${TimeWindow}`
                ).then((resp) => {

                    const Data = resp.data.data;
                    const {account, battlePass, image, stats} = Data;
                    
                    const {id, name} = account
                    const {level, progress} = battlePass
                    const {all} = stats;
                    const {duo, ltm, overall, solo, squad, trio} = all
                    
                    const DestructuredResponse = {
                        id, name, level, progress,
                        duo, ltm, overall, solo,
                        squad, trio, image
                    }
                    
                    dispatch({type: GET_STATS, payload: DestructuredResponse})
                })
                .catch((err) => {console.log(err); dispatch({type: SET_ALERT, payload: 'This is not a valid username/platform combination.' })})
        }
    }

    const setAccountName = (input) => {
        dispatch({
            type: SET_ACCOUNT_NAME,
            payload: input
        })
    }
    const setTimeWindow = (TimeWindow) => {
        dispatch({type: SET_TIME_WINDOW, payload: TimeWindow})
    }

    const setPlayerStats = (type) => {
        dispatch({type: SET_PLAYER_STATS, payload: type})
    }

    const setAccountType = (input) => {
        dispatch({type: SET_ACCOUNT_TYPE, payload: input})
    }

    const setAlert = (type) => {
        dispatch({type: SET_ALERT, payload: type})
    }

    return  <StatsContext.Provider value={{
                LOADING: state.LOADING, PLAYERSTATS: state.PLAYERSTATS,
                ACCOUNTNAME: state.ACCOUNTNAME, TIMEWINDOW: state.TIMEWINDOW,
                ACCOUNTTYPE: state.ACCOUNTTYPE, ALERT: state.ALERT,
                GetPlayerStats, setAccountName, setTimeWindow,
                setPlayerStats, setAccountType, setAlert
            }}>
                {children}
            </StatsContext.Provider>;
}

export default StatsState