import {useReducer} from 'react';
import SetReducer from './SetReducer';
import SetContext from './SetContext';
import {SET_LOADING, GET_SET, SET_NAME} from '../types';
import axios from 'axios';

const SetState = (props) => {

    const InitialState = {
        SetInfo: null,
        SetName: null,
        loading: false
    }

    const [state, dispatch] = useReducer(SetReducer, InitialState);

    const SetLoading = () => {
        dispatch({type: SET_LOADING});
    }

    const GetSet = async (setname) => {
        SetLoading();
        const NameCharacterHandler = () => {
            // handles names with dashes (which are passed in with ~ instead)
            const dashregex = /-/gi;
            const tilderegex = /~/gi;
            if (dashregex.test(setname) === true && tilderegex.test(setname) === false) {
                const NameDashResult = setname.replaceAll(dashregex, ' ')
                return NameDashResult.toUpperCase();
            } else if (tilderegex.test(setname) === true && dashregex.test(setname) === false) {
                const NameTildeResult = setname.replaceAll(tilderegex, '-')
                return NameTildeResult.toUpperCase();
            } else if (tilderegex.test(setname) === true && dashregex.test(setname) === true) {
                const replacedash = setname.replaceAll(dashregex, ' ')
                const replacetilde = replacedash.replaceAll(tilderegex, '-');
                return replacetilde.toUpperCase();
            } else if (tilderegex.test(setname) === false && dashregex.test(setname) === false) {
                return setname.toUpperCase();
            }
        }
        const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/search/all?set=${encodeURIComponent(NameCharacterHandler())}`)

        dispatch({
            type: GET_SET,
            payload: response.data.data
        })
        dispatch({
            type: SET_NAME,
            payload: NameCharacterHandler().toUpperCase()
        })
    }

    return <SetContext.Provider value={{
        SetInfo: state.SetInfo,
        SetName: state.SetName,
        loading: state.loading,
        CardRarityStyles: state.CardRarityStyles,
        GetSet
            }}>
                {props.children}
            </SetContext.Provider>
}
export default SetState