import React from 'react'
import './SetItemCard.css'
import {Link} from 'react-router-dom'

const SetItemCard = ({LinkItemTypeByID, ImgSRC, Rarity, onclick, ItemParam, ImgAlt}) => {
    return (
            <Link style={{textDecoration: 'none'}} to={`/items/${LinkItemTypeByID}/${ItemParam}`} onClick={() => {onclick()}}> 
                <div className='setitemcard setitemcard--primary' style={Rarity}>
                    <img src={ImgSRC} className='setitemcard__image' alt={ImgAlt} />                    
                </div>
            </Link>
    )
}

export default SetItemCard
