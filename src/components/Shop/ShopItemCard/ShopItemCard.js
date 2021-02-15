import React from 'react';
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import './ShopItemCard.css'
import VBUCKS from '../../../media/images/VBUCKS.png';
import FormatFunctions from '../../../App Wide Functions/FormatFunctions'

const ShopItemCard = ({price, image, id, rarity, name, BundleName, BundleStatus}) => {

    useEffect(()=> {
        localStorage.setItem(name.toUpperCase() || BundleName, price)
    }, []);

    const {SetLinkByIDType, NameCharacterHandler} = FormatFunctions;

    return (
        <div className='s'>
            <div className='shopitemcard shopitemcard--primary' style={rarity} >
                <Link to={`/items/${SetLinkByIDType(id)}/${NameCharacterHandler(name)}`} className='shopitemcard__link'>
                    <div className='shopitemimage shopitemimage--primary'>
                        <img src={image} style={{height: '150px', width: '150px', margin: '0px', padding: '0px'}} />
                    </div>
                    <div className="shopiteminfo shopiteminfo--primary">
                        <p className='shopiteminfo__name'>{name.toUpperCase()}</p>
                        <div className='shopitemprice shopitemprice--primary'>
                            <img src={VBUCKS} className='shopitemprice__image' />
                            <p className='shopitemprice__text'>{price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ShopItemCard;