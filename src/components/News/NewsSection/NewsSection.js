import React from 'react'
import './NewsSection.css'
import NewsFunctions from '../../../App Wide Functions/NewsFunctions'
import NewsCard from './NewsCard/NewsCard'
import SkeletonTypes from '../../../App Wide Functions/SkeletonTypes'
import Skeleton from 'react-loading-skeleton'

const NewsSection = ({data, type}) => {

    const {ReturnInfo} = NewsFunctions;

    return (
        <div className='newssection newssection--primary'>
            <h1 className='newssection__head'>
                {type || <Skeleton />}
            </h1>
            <div className='newscards newscards--primary'>
                {data && data.map((message, i) => {
                    
                    const {body, title, image, tileImage} = message;
                    return  <NewsCard title={title} description={body} image={image} tileImage={tileImage} /> 
                })}
            </div>
        </div>
    )
}

export default NewsSection
