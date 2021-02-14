import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import SkeletonTypes from '../../App Wide Functions/SkeletonTypes'



const NewsSkeleton = () => {

    const cards = [1, 2, 3, 4, 5];
    const sections = [1, 2, 3]

    return (
        <>
                <div className='newssections newssections--primary'>
                    {sections.map((section, i) => {
                        
                    return <div className='newssection newssection--primary'>
                        <h1 className='newssection__head'>
                            {SkeletonTypes('news', 'newssectiontitle')}
                        </h1>
                        <div className='newscards newscards--primary'>
                            {cards.map((container, i) => {
                                
                                return  <div className='newscard newscard--primary' style={{border: 'none'}}>
                                            {SkeletonTypes('news', 'newscard')}
                                        </div>
                            })}
                        </div>
                    </div>
                    })}
                </div>
        </>
    )
}

export default NewsSkeleton
