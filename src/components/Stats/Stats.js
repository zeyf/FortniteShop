import React from 'react'
import StatsContext from '../context/Stats Context/StatsContext'
import './Stats.css'
import {useContext, useEffect} from 'react'
import PSNIcon from '../../media/images/PSNicon.svg'
import XboxIcon from '../../media/images/XboxIcon.svg'
import EpicIcon from '../../media/images/EpicIcon.svg'
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import StatFunctions from '../../App Wide Functions/StatFunctions'

const Stats = () => {
    const {
        ACCOUNTNAME,
        ACCOUNTTYPE,
        TIMEWINDOW,
        GetPlayerStats,
        setAccountName,
        setTimeWindow,
        setPlayerStats,
        setAccountType
    } = useContext(StatsContext);

    const {setBackgroundType} = StatFunctions;
    
    useEffect(() => {
        setTimeWindow(null);
        setAccountName(null);
        setAccountType(null)
        setPlayerStats();
    }, [])

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const onChange = (event) => {
        setAccountName(event.target.value)
    }

    return (
        <div className='stats stats--primary'>
            <Helmet><title>{`STATS LOOKUP EPIC/PSN/XB1 - FortniteBR`}</title></Helmet>
            <h1 className='stats__head'>
                LOOK UP YOUR STATS
            </h1>
            <p className='stats__text'>
                PSN/XBOX Lookup does not work if you have an Epic account. You must search by Epic Name.
            </p>
            <form className='stats__form' onSubmit={onSubmit}>
                <input className='stats__inputaccountname' onChange={onChange} placeholder='Enter your account name' />
                <div className='timewindow timewindow--primary'>
                    <span className='timewindow__text'>
                        Select a timeframe
                    </span>
                    <div className='timewindowbuttons timewindowbuttons--primary'>
                        <button style={setBackgroundType('season', TIMEWINDOW)} className='timewindowbuttons__button' type='button' onClick={() => {setTimeWindow('season')}}>SEASON</button>
                        <button style={setBackgroundType('lifetime', TIMEWINDOW)} className='timewindowbuttons__button' type='button' onClick={() => {setTimeWindow('lifetime')}}>LIFETIME</button>
                    </div>
                </div>
                <div className='platformbuttons platformbuttons--primary'>
                    <Link to={`/stats/psn/${ACCOUNTNAME}`} className='stats__buttonlink'>
                        <button className='platformbuttons__psn' type='submit' onClick={(event) => {
                            if (TIMEWINDOW) setAccountType('psn'); GetPlayerStats(ACCOUNTNAME, ACCOUNTTYPE, TIMEWINDOW); 
                            if (!TIMEWINDOW) event.preventDefault();
                        }}>
                            <img className='platformbuttons__icon psnicon' src={PSNIcon} alt='Fornite Playstation search' />
                        </button>
                    </Link>
                    <Link to={`/stats/epic/${ACCOUNTNAME}`} className='stats__buttonlink'>
                        <button className='platformbuttons__epic' type='submit' onClick={(event) => {
                            if (TIMEWINDOW) setAccountType('epic'); GetPlayerStats(ACCOUNTNAME, ACCOUNTTYPE, TIMEWINDOW); 
                            if (!TIMEWINDOW) event.preventDefault();
                        }}>
                            <img className='platformbuttons__icon epicicon' src={EpicIcon} alt='Fornite Playstation search' />
                        </button>
                    </Link>
                    <Link to={`/stats/xbox/${ACCOUNTNAME}`} className='stats__buttonlink'>
                        <button className='platformbuttons__xbox' type='submit' onClick={(event) => {
                            if (TIMEWINDOW) setAccountType('xb1'); GetPlayerStats(ACCOUNTNAME, ACCOUNTTYPE, TIMEWINDOW); 
                            if (!TIMEWINDOW) event.preventDefault();
                        }}>
                            <img className='platformbuttons__icon xboxicon' src={XboxIcon} alt='Fornite Playstation search' />
                        </button>
                    </Link>
                </div>
            </form>
            <div className='instructionscont instructionscont--primary'>
                <div className='instructions instructions--primary'>
                    <span className='instructions__head'>
                        LOOKUP GUIDE FOR CONSOLE PLAYERS
                    </span>
                    <div className='instructionstext instructionstext--primary'>
                        <span className='instructions__questions'>
                            How can I look up stats by GAMERTAG/PSN?
                        </span>
                        <span className='instructions__answers'>
                            You can look up the stats for a console player by:
                            <ol className='instructions__ol'>
                                <li className='instructions__option'>
                                    Entering the Gamertag or PSN in the input above.
                                </li>
                                <li className='instructions__option'>
                                    Selecting a timeframe of the stats you would like to view, season or lifetime.
                                    <em className='instruction__optionwarning'> NOTE: THIS IS REQUIRED.</em>
                                </li>
                                <li className='instructions__option'>
                                    After entering the Gamertag or PSN and selecting a timeframe, click on the button for the console you are looking up.
                                </li>
                            </ol>
                        </span>
                    </div>
                </div>
                <div className='instructions instructions--primary'>
                    <span className='instructions__head'>
                        LOOKUP GUIDE FOR EPIC PLAYERS
                    </span>
                    <div className='instructionstext instructionstext--primary'>
                        <span className='instructions__questions'>
                            How can I look up stats by EPIC name?
                        </span>
                        <span className='instructions__answers'>
                            You can look up the stats by an Epic name by:
                            <ol className='instructions__ol'>
                                <li className='instructions__option'>Entering the Epic name in the input above.</li>
                                <li className='instructions__option'>Selecting a timeframe of the stats you would like to view, season or lifetime.
                                    <em className='instruction__optionwarning'> NOTE: THIS IS REQUIRED.</em>
                                </li>
                                <li className='instructions__option'>After entering the Epic name 
                                    
                                and selecting a <br /> timeframe, click on the Epic button.</li>
                            </ol>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
