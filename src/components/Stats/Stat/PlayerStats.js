import {useContext, useEffect} from 'react'
import StatFunctions from '../../../App Wide Functions/StatFunctions'
import StatsContext from '../../context/Stats Context/StatsContext'
import { SET_ACCOUNT_NAME } from '../../context/types'
import './PlayerStats.css'

const PlayerStats = ({match}) => {
    const {GetPlayerStats, TIMEWINDOW, PLAYERSTATS, LOADING} = useContext(StatsContext)
    const {ReturnInfo, AccName} = StatFunctions;
    useEffect(() => {
        GetPlayerStats(match.params.username, match.params.platform, TIMEWINDOW)
    }, [])
    const ReturnStats = (type) => {
        if (PLAYERSTATS) {
            const {overall, solo, duo, trio, squad, ltm, name} = PLAYERSTATS;
            if (type === 'overall') return overall
            if (type === 'solo') return solo
            if (type === 'duo') return duo
            if (type === 'trio') return trio
            if (type === 'squad') return squad
            if (type === 'ltm') return ltm
        }
    }
    return (
        <div className='playerstats playerstats--primary'>
            {LOADING ? 'HI' :
                <div className='overallstatscont overallstatscont--primary'>
                <h1 className='overallstats__head'>
                    {AccName(PLAYERSTATS)}
                </h1>
                <h1>Overall Stats</h1>
                <div className='overallstats overallstats--primary'>
                    <div className='killdeathssection killdeathssection--primary'>
                        <div className='headanddata headanddata--primary'>
                            <h1 className='headandata__head'>
                                KILLS
                            </h1>
                            <p className='overallstats__text'>
                                {ReturnInfo(ReturnStats('overall'), 'kills')}
                            </p>
                        </div>
                        <div className='headanddata headanddata--primary'>
                            <h1 className='headandata__head'>
                                DEATHS
                            </h1>
                            <p className='overallstats__text'>
                                {ReturnInfo(ReturnStats('overall'), 'deaths')}
                            </p>
                        </div>
                        <div className='headanddata headanddata--primary'>
                            <h1 className='headandata__head'>
                                K/D RATIO
                            </h1>
                            <p className='overallstats__text'>
                                {ReturnInfo(ReturnStats('overall'), 'kd')}
                            </p>
                        </div>
                        <div className='headanddata headanddata--primary'>
                            <h1 className='headandata__head'>
                                KILLS PER MATCH
                                <br/>
                                KILLS PER MIN
                            </h1>
                            <p className='overallstats__text'>
                                {ReturnInfo(ReturnStats('overall'), 'killsPerMatch')}
                            </p>
                            <p className='overallstats__text'>
                                {ReturnInfo(ReturnStats('overall'), 'killsPerMin')}
                            </p>
                        </div>
                    </div>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'lastModified')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'matches')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'minutesPlayed')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'playersOutlived')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'score')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'scorePerMatch')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'scorePerMin')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'top3')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'top5')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'top10')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'top25')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'wins')}
                    </p>
                    <p className='overallstats__text'>
                        {ReturnInfo(ReturnStats('overall'), 'winRate')}
                    </p>

                </div>
            </div>
            }
        </div>
    )
}

export default PlayerStats
