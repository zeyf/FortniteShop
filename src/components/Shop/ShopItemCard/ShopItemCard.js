import React from 'react';
import ShopContext from '../../context/ShopContext/ShopContext';
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import './ShopItemCard.css'
import VBUCKS from '../../../media/images/VBUCKS.png';

const ShopItemCard = ({price, image}) => {


    const sContext = useContext(ShopContext);


    return (
        <div className='shopitemcard shopitemcard--primary' style={{border: '1px solid green', backgroundColor:'#333333'}}>
            <img src={image} style={{height: '150px', width: '150px'}} />
            <div className='shopprice shopprice--primary'>
                <img src={VBUCKS} className='shopprice__image' />
                <p className='shopprice__text'>{price}</p>
            </div>
        </div>
    )
}

export default ShopItemCard;
