import {useReducer} from 'react';
import NewsContext from './NewsContext';
import NewsReducer from './NewsReducer'
import {SET_LOADING, GET_NEWS} from '../types'
import axios from 'axios'


const NewsState = ({children}) => {

    const InitialState = {
        LOADING: false,
        NEWS: null
    }
    
    const [state, dispatch] = useReducer(NewsReducer, InitialState);

    const SetLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const GetNews = async (type) => {
        SetLoading();
        const response = await axios.get('https://fortnite-api.com/v2/news')
        console.log(response)

        dispatch({
            type: GET_NEWS,
            payload: response.data.data
        })
    }

    return  <NewsContext.Provider value={{
                LOADING: state.LOADING,
                NEWS: state.NEWS,
                GetNews
            }}>
                {children}
            </NewsContext.Provider>


}

export default NewsState;