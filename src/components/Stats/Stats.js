import React from 'react'
import StatsContext from '../context/Stats Context/StatsContext'
import './Stats.css'
import {useContext, useEffect} from 'react'
import PSNIcon from '../../media/images/PSNicon.svg'
import XboxIcon from '../../media/images/XboxIcon.svg'
import EpicIcon from '../../media/images/EpicIcon.svg'
import {Link} from 'react-router-dom';

const Stats = () => {
    const {
        LOADING, 
        PLAYERSTATS,
        ACCOUNTNAME,
        TIMEWINDOW,
        GetPlayerStats,
        setAccountName,
        setTimeWindow
    } = useContext(StatsContext);
    
    useEffect(() => {
        setTimeWindow(null)
    }, [])

    const onSubmit = (event) => {
        if (!TIMEWINDOW) console.log('bruh')
    }

    const onChange = (event) => {
        setAccountName(event.target.value)
    }

    return (
        <div className='stats stats--primary'>
            <form className='stats__form' onSubmit={onSubmit}>
                <input className='stats__inputaccountname' onChange={onChange} placeholder='Enter your account name' />
                <div className='timewindow timewindow--primary'>
                    <div className='timewindowbuttons timewindowbuttons'>
                        <button className='timewindowbuttons__button' type='button' onClick={() => {setTimeWindow('season')}}>Season</button>
                        <button className='timewindowbuttons__button' type='button' onClick={() => {setTimeWindow('lifetime')}}>Lifetime</button>
                    </div>
                </div>
                <div className='platformbuttons platformbuttons--primary'>
                    <Link to={`/stats/psn/${ACCOUNTNAME}`} className='stats__buttonlink'>
                        <button className='platformbuttons__psn' type='submit' onClick={(event) => {
                            if (TIMEWINDOW) GetPlayerStats();
                            if (!TIMEWINDOW) event.preventDefault();
                        }}>
                            <img className='platformbuttons__icon psnicon' src={PSNIcon} alt='Fornite Playstation search' />
                        </button>
                    </Link>
                    <Link to={`/stats/epic/${ACCOUNTNAME}`} className='stats__buttonlink'>
                        <button className='platformbuttons__epic' type='submit' onClick={(event) => {
                            if (TIMEWINDOW) GetPlayerStats();
                            if (!TIMEWINDOW) event.preventDefault();
                        }}>
                            <img className='platformbuttons__icon epicicon' src={EpicIcon} alt='Fornite Playstation search' />
                        </button>
                    </Link>
                    <Link to={`/stats/xbox/${ACCOUNTNAME}`} className='stats__buttonlink'>
                        <button className='platformbuttons__xbox' type='submit' onClick={(event) => {
                            if (TIMEWINDOW) GetPlayerStats();
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
