import React from 'react'
import SkeletonTypes from '../../../App Wide Functions/SkeletonTypes'
import StatFunctions from '../../../App Wide Functions/StatFunctions';
import './PlayerStats.css'


const PlayerStatsSkeleton = () => {

    const cardcount = ['SOLOS', 'DUOS', 'SQUADS'];
    const {setStatcardColor} = StatFunctions;
    

    return (
        <>
            <div className='playerstats playerstats--primary'>
                    <h1 className='playerstats__username'>
                        {SkeletonTypes('playerstats', 'namehead')}
                    </h1>
                    <div className='statssection statssection--primary'>
                        <div className='overallstats overallstats--primary'>
                        <div className='playerstatsbuttons playerstatsbuttons--primary'>
                            <h1 className='overallstats__head'>OVERALL STATS</h1>
                            <div className='playerstatstimewindowbuttons playerstatstimewindowbuttons--primary'>
                                <button className='playerstatstimewindowbuttons__button' type='button'>
                                    SEASON
                                </button>
                                <button className='playerstatstimewindowbuttons__button' type='button'>
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
                                            {SkeletonTypes('playerstats', 'dynamicoveralldata')}
                                        </span>
                                    </div>
                                    <div className='overallstatsdata overallstatsdata--primary'>
                                        <span className='overallstatsdata__head'>
                                            WIN RATE
                                        </span>
                                        <span className='overallstatsdata__data'>
                                            {SkeletonTypes('playerstats', 'dynamicoveralldata')}
                                        </span>
                                    </div>
                                    <div className='overallstatsdata overallstatsdata--primary'>
                                        <span className='overallstatsdata__head'>
                                            KILLS
                                        </span>
                                        <span className='overallstatsdata__data'>
                                            {SkeletonTypes('playerstats', 'dynamicoveralldata')}
                                        </span>
                                    </div>
                                    <div className='overallstatsdata overallstatsdata--primary'>
                                        <span className='overallstatsdata__head'>
                                            K/D
                                        </span>
                                        <span className='overallstatsdata__data'>
                                            {SkeletonTypes('playerstats', 'dynamicoveralldata')}
                                        </span>
                                    </div>
                            </div>

                        </div>
                        <div className='statcards statcards--primary'>
                            {cardcount.map((card, i) => {

                                return <div className='statcard statcard--primary'>
                                            <div className='statcardheadsection' style={setStatcardColor(card)}>
                                                <span className='statcardheadsection__category'>
                                                    {card}
                                                </span>
                                                <span className='statcardheadsection__matches'>
                                                    {SkeletonTypes('playerstats', 'headmatchcount')}
                                                </span>
                                            </div>
                                            <div className='statdatasection statdatasection--primary'>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        WINS
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        WIN RATE
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        KILLS
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        DEATHS
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        {card === 'SOLOS' && `TOP 10`}
                                                        {card === 'DUOS' && `TOP 5`}
                                                        {card === 'SQUADS' && `TOP 3`}
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        {card === 'SOLOS' && `TOP 25`}
                                                        {card === 'DUOS' && `TOP 12`}
                                                        {card === 'SQUADS' && `TOP 6`}
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        TIME PLAYED
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        AVG. MATCH TIME
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        KILLS/MATCH
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        KILLS/MINUTE
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        SCORE/MATCH
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        SCORE/MINUTE
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                                <div className='statgriddata statgriddata--primary'>
                                                    <span className='statgriddata__head'>
                                                        SCORE/MINUTE
                                                    </span>
                                                    <span className='statgriddata__data'>
                                                        {SkeletonTypes('playerstats', 'dynamiccarddata')}
                                                    </span>
                                                </div>
                                            </div>
                            </div>
                            })}
                        </div>
                    </div>
            </div>
        </>
    )
}

export default PlayerStatsSkeleton
