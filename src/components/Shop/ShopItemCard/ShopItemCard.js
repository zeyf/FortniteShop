import React from 'react';
import ShopContext from '../../context/ShopContext/ShopContext';
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import './ShopItemCard.css'
import VBUCKS from '../../../media/images/VBUCKS.png';

const ShopItemCard = ({price, image, id, cardstyle, name}) => {

    const sContext = useContext(ShopContext);

    // Get type by parsing by _ for first value in id.
    // set first param in link by item type

    
    const SetLinkByIDType = () => {

        const itemtype = id.split('_')[0];

        if (itemtype === 'CID') {
            return sContext.ItemTypes.skin;
        } else if (itemtype === 'EID') {
            return sContext.ItemTypes.emote;
        } else if (itemtype === 'MusicPack') {
            return sContext.ItemTypes.musicpack;
        } else if (itemtype === 'Pickaxe') {
            return sContext.ItemTypes.pickaxe;
        } else if (itemtype === 'Wrap') {
            return sContext.ItemTypes.wrap;
        } else if (itemtype === 'Glider') {
            return sContext.ItemTypes.glider;
        }
    }
    
    return (
        <div className='s'>
            <div className='shopitemcard shopitemcard--primary' style={cardstyle} >
                <Link to={`/${SetLinkByIDType()}/${name}`} className='shopitemcard__link'>
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
