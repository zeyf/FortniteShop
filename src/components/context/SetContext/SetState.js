import {useReducer} from 'react';
import SetReducer from './SetReducer';
import SetContext from './SetContext';
import {SET_LOADING, GET_SET, SET_NAME} from '../types';
import axios from 'axios';

const SetState = (props) => {

    const InitialState = {
        SetInfo: null,
        SetName: null,
        loading: false,
        CardRarityStyles: {
            uncommon: {
                background: 'radial-gradient(rgb(105, 187, 30), rgb(23, 81, 23))',
                border: '3px solid rgb(135, 227, 57)'
            },
            epic: {
                background: 'radial-gradient(rgb(195, 89, 255), rgb(75, 36, 131))',
                border: '3px solid #e95eff'
            },
            rare: {
                background: 'radial-gradient(rgb(44, 193, 255), rgb(20, 57, 119))',
                border: '3px solid rgb(55, 209, 255)'
            },
            iconseries: {
                background: 'radial-gradient(rgb(54, 183, 183), rgb(37, 107, 107))',
                border: '3px solid rgb(82, 224, 224)'
            },
            slurpseries: {
                background: 'radial-gradient(rgb(41, 241, 163), rgb(18, 169, 164))',
                border: '3px solid #53f0ff'   
            },
            dark: {
                background: 'radial-gradient(rgb(251, 34, 223), rgb(82, 12, 111))',
                border: '3px solid rgb(255, 66, 231)'
            },
            legendary: {
                background: 'radial-gradient(rgb(234, 141, 35), rgb(120, 55, 29))',
                border: '3px solid rgb(233, 141, 75)'
            }
        }
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