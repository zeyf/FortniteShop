import React from 'react'
import StatFunctions from '../../../App Wide Functions/StatFunctions'
import './StatCategoryCard.css'

const StatCategoryCard = ({StatsByType, type}) => {
    const {
        ReturnInfo,
        setStatcardColor,
        NumberFormatter,
        FormatDaysPlayed,
        AvgMatchTime
    } = StatFunctions;

    return (
        <div className='statcard statcard--primary'>
            <div className='statcardheadsection' style={setStatcardColor(type)}>
                <span className='statcardheadsection__category'>
                    {type}
                </span>
                <span className='statcardheadsection__matches'>
                    {NumberFormatter(ReturnInfo(StatsByType, 'matches')) || `-`} MATCHES
                </span>
            </div>
            <div className='statdatasection statdatasection--primary'>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        WINS
                    </span>
                    <span className='statgriddata__data'>
                        {NumberFormatter(ReturnInfo(StatsByType, 'wins')) || `-`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        WIN RATE
                    </span>
                    <span className='statgriddata__data'>
                        {ReturnInfo(StatsByType, 'winRate') || `0.00%`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        KILLS
                    </span>
                    <span className='statgriddata__data'>
                        {NumberFormatter(ReturnInfo(StatsByType, 'kills')) || `-`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        DEATHS
                    </span>
                    <span className='statgriddata__data'>
                        {NumberFormatter(ReturnInfo(StatsByType, 'deaths')) || `-`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        {type === 'SOLOS' && `TOP 10`}
                        {type === 'DUOS' && `TOP 5`}
                        {type === 'SQUADS' && `TOP 3`}
                    </span>
                    <span className='statgriddata__data'>
                        {type === 'SOLOS' && NumberFormatter(ReturnInfo(StatsByType, 'top10'))}
                        {type === 'DUOS' && NumberFormatter(ReturnInfo(StatsByType, 'top5'))}
                        {type === 'SQUADS' && NumberFormatter(ReturnInfo(StatsByType, 'top3'))}
                        {ReturnInfo(StatsByType, 'top10') === null ||
                         ReturnInfo(StatsByType, 'top5') === null ||
                         ReturnInfo(StatsByType, 'top3') === null &&
                            '0'   
                        }
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        {type === 'SOLOS' && `TOP 25`}
                        {type === 'DUOS' && `TOP 12`}
                        {type === 'SQUADS' && `TOP 6`}
                    </span>
                    <span className='statgriddata__data'>
                        {type === 'SOLOS' && NumberFormatter(ReturnInfo(StatsByType, 'top25'))}
                        {type === 'DUOS' && NumberFormatter(ReturnInfo(StatsByType, 'top12'))}
                        {type === 'SQUADS' && NumberFormatter(ReturnInfo(StatsByType, 'top6'))}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        TIME PLAYED
                    </span>
                    <span className='statgriddata__data'>
                        {FormatDaysPlayed(ReturnInfo(StatsByType, 'minutesPlayed')) || `-`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        AVG. MATCH TIME
                    </span>
                    <span className='statgriddata__data'>
                        {AvgMatchTime(ReturnInfo(StatsByType, 'minutesPlayed'), ReturnInfo(StatsByType, 'matches')) || `-`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        KILLS/MATCH
                    </span>
                    <span className='statgriddata__data'>
                        {NumberFormatter(ReturnInfo(StatsByType, 'killsPerMatch'), 2) || `-`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        KILLS/MINUTE
                    </span>
                    <span className='statgriddata__data'>
                        {NumberFormatter(ReturnInfo(StatsByType, 'killsPerMin'), 2) || `-`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        SCORE/MATCH
                    </span>
                    <span className='statgriddata__data'>
                        {NumberFormatter(ReturnInfo(StatsByType, 'scorePerMatch'), 2) || `-`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        SCORE/MINUTE
                    </span>
                    <span className='statgriddata__data'>
                        {NumberFormatter(ReturnInfo(StatsByType, 'scorePerMin'), 2) || `-`}
                    </span>
                </div>
                <div className='statgriddata statgriddata--primary'>
                    <span className='statgriddata__head'>
                        SCORE
                    </span>
                    <span className='statgriddata__data'>
                        {NumberFormatter(ReturnInfo(StatsByType, 'score')) || `-`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StatCategoryCard
