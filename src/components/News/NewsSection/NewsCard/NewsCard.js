import React from 'react'
import './NewsCard.css'

const NewsCard = ({title, image, description}) => {
    return (
        <div className='newscard newscard--primary'>
            <div className='newscardimagecont newscardimagecont--primary'>
                <img className='newscardimagecont__image' src={image} alt={`${title} news tile for fortnte battle royale`} />
            </div>
            <div className='newscarddetailscont newscarddetailscont--primary'>
                <span className='newscarddetailscont__title'>{title}</span>
                <span className='newscarddetailscont__description'>{description}</span>
            </div>      
        </div>
    )
}

export default NewsCard
