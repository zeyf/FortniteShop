import {useContext, useEffect} from 'react'
import StatFunctions from '../../../App Wide Functions/StatFunctions'
import StatsContext from '../../context/Stats Context/StatsContext'
import { SET_ACCOUNT_NAME } from '../../context/types'
import './PlayerStats.css'
import StatCategoryCard from './StatCategoryCard'

const PlayerStats = ({match}) => {

    const {
        LOADING, 
        PLAYERSTATS,
        TIMEWINDOW,
        GetPlayerStats,
        setTimeWindow,
        setAccountType,
        setAccountName,
        ACCOUNTNAME,
        ACCOUNTTYPE
    } = useContext(StatsContext);
    const {ReturnInfo, AccName} = StatFunctions;

    useEffect(() => {
        GetPlayerStats(match.params.username, match.params.platform, TIMEWINDOW)
        setAccountName(match.params.username);
        setAccountType(match.params.platform)
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

    return (
        <div className='playerstats playerstats--primary'>
            <div className='playerstatsbuttons playerstatsbuttons--primary'>
                <h1 className='playerstats__username'>
                    {AccName(ReturnStats('data'))}
                </h1>
                <button className='playerstatsbuttons__button' onClick={() => {
                    setTimeWindow('lifetime')
                    GetPlayerStats(match.params.username, match.params.platform, 'lifetime')
                }}>
                    LIFETIME
                </button>
                <button className='playerstatsbuttons__button' onClick={() => {
                    setTimeWindow('season')
                    GetPlayerStats(match.params.username, match.params.platform, 'season')
                }}>
                    SEASON
                </button>
            </div>
            {LOADING ? 'HI' :
                <div className='statssection statssection--primary'>
                    <div className='overallstats overallstats--primary'>
                        <h1 className='overallstats__head'>Overall Stats</h1>
                        <div className='overallstatsheadsection'>
                            <span className='overallstatsheadsection__headcategory'>
                                OVERALL
                            </span>
                            <span className='overallstatsheadsection__headmatches'>

                            </span>
                        </div>
                            
                                {ReturnInfo(ReturnStats('overall'), 'winRate')}
                            {ReturnInfo(ReturnStats('overall'), 'wins')}
                            {ReturnInfo(ReturnStats('overall'), 'kd')}
                            {ReturnInfo(ReturnStats('overall'), 'matches')}

                    </div>
                    <div className='statcards statcards--primary'>
                        <StatCategoryCard StatsByType={ReturnStats('solo')} type={'SOLOS'} />
                        <StatCategoryCard StatsByType={ReturnStats('duo')} type={'DUOS'} />
                        <StatCategoryCard StatsByType={ReturnStats('squad')} type={'SQUADS'} />
                    </div>
                </div>
            }
        </div>
    )
}

export default PlayerStats
