import React from 'react'
import StatsContext from '../context/Stats Context/StatsContext'
import './Stats.css'
import {useContext, useEffect} from 'react'
import PSNIcon from '../../media/images/PSNicon.svg'
import XboxIcon from '../../media/images/XboxIcon.svg'
import EpicIcon from '../../media/images/EpicIcon.svg'
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

const Stats = () => {
    const {
        LOADING, 
        PLAYERSTATS,
        ACCOUNTNAME,
        TIMEWINDOW,
        GetPlayerStats,
        setAccountName,
        setTimeWindow,
        setPlayerStats,
        setAccountType
    } = useContext(StatsContext);
    
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

    const setBackgroundType = (timewindow) => {
        if (TIMEWINDOW === timewindow) return {background: '#fdb827' ,transition: '1.25s'}
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
                        <button style={setBackgroundType('season')} className='timewindowbuttons__button' type='button' onClick={() => {setTimeWindow('season')}}>SEASON</button>
                        <button style={setBackgroundType('lifetime')} className='timewindowbuttons__button' type='button' onClick={() => {setTimeWindow('lifetime')}}>LIFETIME</button>
                    </div>
                </div>
                <div className='platformbuttons platformbuttons--primary'>
                    <Link to={`/stats/psn/${ACCOUNTNAME}`} className='stats__buttonlink'>
                        <button className='platformbuttons__psn' type='submit' onClick={(event) => {
                            if (TIMEWINDOW) GetPlayerStats(); setAccountType('psn')
                            if (!TIMEWINDOW) event.preventDefault();
                        }}>
                            <img className='platformbuttons__icon psnicon' src={PSNIcon} alt='Fornite Playstation search' />
                        </button>
                    </Link>
                    <Link to={`/stats/epic/${ACCOUNTNAME}`} className='stats__buttonlink'>
                        <button className='platformbuttons__epic' type='submit' onClick={(event) => {
                            if (TIMEWINDOW) GetPlayerStats(); setAccountType('epic')
                            if (!TIMEWINDOW) event.preventDefault();
                        }}>
                            <img className='platformbuttons__icon epicicon' src={EpicIcon} alt='Fornite Playstation search' />
                        </button>
                    </Link>
                    <Link to={`/stats/xbox/${ACCOUNTNAME}`} className='stats__buttonlink'>
                        <button className='platformbuttons__xbox' type='submit' onClick={(event) => {
                            if (TIMEWINDOW) GetPlayerStats(); setAccountType('xb1')
                            if (!TIMEWINDOW) event.preventDefault();
                        }}>
                            <img className='platformbuttons__icon xboxicon' src={XboxIcon} alt='Fornite Playstation search' />
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Stats
