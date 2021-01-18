import React from 'react';
import ShopContext from '../../context/ShopContext/ShopContext';
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import './ShopItemCard.css'
import VBUCKS from '../../../media/images/VBUCKS.png';

const ShopItemCard = ({price, image, id, cardstyle}) => {

    const sContext = useContext(ShopContext);
    
    return (
        <div className='shopitemcard shopitemcard--primary' style={cardstyle} >
            <Link to={`/${id}`}>
                <img src={image} style={{height: '150px', width: '150px'}} />
                <div className='shopprice shopprice--primary'>
                    <img src={VBUCKS} className='shopprice__image' />
                    <p className='shopprice__text'>{price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ShopItemCard;
