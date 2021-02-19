import {useContext, useEffect} from 'react'
import StatFunctions from '../../../App Wide Functions/StatFunctions'
import StatsContext from '../../context/Stats Context/StatsContext'
import './PlayerStats.css'
import PlayerStatsSkeleton from './PlayerStatsSkeleton'
import StatCategoryCard from './StatCategoryCard'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

const PlayerStats = ({match}) => {

    const {
        PLAYERSTATS,
        TIMEWINDOW,
        GetPlayerStats,
        setTimeWindow,
        setAccountType,
        setAccountName,
        setAlert,
        ALERT,
        LOADING
    } = useContext(StatsContext);
    const {ReturnInfo, NumberFormatter, AccName, setBackgroundType} = StatFunctions;

    useEffect(() => {
        setAlert(null)
        GetPlayerStats(match.params.username, match.params.platform, TIMEWINDOW);
        setAccountName(match.params.username);
        setAccountType(match.params.platform);
    }, [])
    const ReturnStats = (type) => {
        if (PLAYERSTATS) {
            const {overall, solo, duo, trio, squad, ltm} = PLAYERSTATS;
            if (type === 'overall') return overall
            if (type === 'solo') return solo
            if (type === 'duo') return duo
            if (type === 'trio') return trio
            if (type === 'squad') return squad
            if (type === 'ltm') return ltm
            if (type === 'data') return PLAYERSTATS
        }
    }

    const showSkeletonOrAlert = (alert, Skeleton) => {
        if (ALERT) return <div className='alert alert--primary'>
                        <p className='alert__text'>{alert}</p>
                        <Link to='/stats' className='alert__buttonlink'>
                            <button className='alert__button'>GO BACK TO LOOKUP</button>
                        </Link>
                    </div>
        if (!ALERT) return <Skeleton />
    }

    return (
        <>
        <Helmet><title>{PLAYERSTATS ? `${match.params.username}'s stats on ${match.params.platform} - FORTNITEBR` : `Loading ${match.params.username}'s stats... - FORTNITEBR`}</title></Helmet>
        {!ALERT && !LOADING ?

            <div className='playerstats playerstats--primary'>
                    <div className='statssection statssection--primary'>
                        <div className='overallstats overallstats--primary'>
                            <div className='playerstatsbuttons playerstatsbuttons--primary'>
                                <div className='overallstatsheader overalstatsheader--primary'>
                                    <h1 className='overallstats__head'>OVERALL STATS -</h1>
                                    <h1 className='overallstats__head'>{AccName(ReturnStats('data'))}</h1>
                                </div>
                                <div className='playerstatstimewindowbuttons playerstatstimewindowbuttons--primary'>
                                    <button style={setBackgroundType('season', TIMEWINDOW)} className='playerstatstimewindowbuttons__button' type='button' onClick={() => {
                                        setTimeWindow('season')
                                        GetPlayerStats(match.params.username, match.params.platform, 'season')
                                    }}>
                                        SEASON
                                    </button>
                                    <button style={setBackgroundType('lifetime', TIMEWINDOW)} className='playerstatstimewindowbuttons__button' type='button' onClick={() => {
                                        setTimeWindow('lifetime')
                                        GetPlayerStats(match.params.username, match.params.platform, 'lifetime')
                                    }}>
                                        LIFETIME
                                    </button>
                                </div>
                            </div>
                            <div className='overallstatssection overallstatssection--primary'>
                                    <div className='overallstatsdata overallstatsdata--primary'>
                                        <span className='overallstatsdata__head'>
                                            WINS
                                        </span>
                                        <span className='overallstatsdata__data'>
                                            {NumberFormatter(ReturnInfo(ReturnStats('overall'), 'wins'))}
                                        </span>
                                    </div>
                                    <div className='overallstatsdata overallstatsdata--primary'>
                                        <span className='overallstatsdata__head'>
                                            WIN RATE
                                        </span>
                                        <span className='overallstatsdata__data'>
                                            {ReturnInfo(ReturnStats('overall'), 'winRate')}
                                        </span>
                                    </div>
                                    <div className='overallstatsdata overallstatsdata--primary'>
                                        <span className='overallstatsdata__head'>
                                            KILLS
                                        </span>
                                        <span className='overallstatsdata__data'>
                                            {NumberFormatter(ReturnInfo(ReturnStats('overall'), 'kills'))}
                                        </span>
                                    </div>
                                    <div className='overallstatsdata overallstatsdata--primary'>
                                        <span className='overallstatsdata__head'>
                                            K/D
                                        </span>
                                        <span className='overallstatsdata__data'>
                                            {NumberFormatter(ReturnInfo(ReturnStats('overall'), 'kd'), 2)}
                                        </span>
                                    </div>
                            </div>
                        </div>
                        <div className='statcards statcards--primary'>
                            <StatCategoryCard StatsByType={ReturnStats('solo')} type={'SOLOS'} />
                            <StatCategoryCard StatsByType={ReturnStats('duo')} type={'DUOS'} />
                            <StatCategoryCard StatsByType={ReturnStats('squad')} type={'SQUADS'} />
                        </div>
                    </div>
            </div>

        : showSkeletonOrAlert(ALERT, PlayerStatsSkeleton)
        }
        </>
    )
}

export default PlayerStats
