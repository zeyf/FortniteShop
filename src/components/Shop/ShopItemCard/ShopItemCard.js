import React from 'react';
import ShopContext from '../../context/ShopContext/ShopContext';
import {Link} from 'react-router-dom'
import {useContext, useEffect} from 'react'
import './ShopItemCard.css'
import VBUCKS from '../../../media/images/VBUCKS.png';
import ItemContext from '../../context/ItemContext/ItemContext';

const ShopItemCard = ({price, image, id, cardstyle, name}) => {

    useEffect(()=> {
        // This will eliminate passing prices up on click and the issues that arise like
        // price disappearing on refresh.
        //using local storage to setitem for each shopitem name and it's respective price
        // allows to not rely on onClick of shopitemcard for passing up price to a state context.
        localStorage.setItem(name.toUpperCase(), price)
    }, []);

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
        } else if (itemtype === 'BID') {
            return sContext.ItemTypes.backbling;
        }
    }

    const NameCharacterHandler = () => {

        const spaceregex = /\s/gi;

        // this dash regex is added on this side for items with names like YEE-HAW!
        // In the get item function it replaces all -'s, but this one shouldnt
        // be replaced as it is the name.
        // these items with - in name will have - replaced by ~ and switched back for
        // the api call. this is all for User Experience.

        const dashregex = /-/gi;
        
        if (spaceregex.test(name) === true && dashregex.test(name) === false) {
            const SpaceReplaceResult = name.replaceAll(spaceregex, '-').toLowerCase()
            return SpaceReplaceResult;

        } else if (dashregex.test(name) === true && spaceregex.test(name) === false) { 
            const DashReplaceResult = name.replaceAll(dashregex, '~').toLowerCase()
            return DashReplaceResult

        } else if(dashregex.test(name) === true && spaceregex.test(name) === true) {
            const DashReplaceResult = name.replaceAll(dashregex, '~').toLowerCase()
            const ReplaceSpacesToo = DashReplaceResult.replaceAll(spaceregex, '-')
            console.log(ReplaceSpacesToo)
            return ReplaceSpacesToo
        } else {
            return name.toLowerCase();
        }
    }

    return (
        <div className='s'>
            <div className='shopitemcard shopitemcard--primary' style={cardstyle} >
                <Link to={`/${SetLinkByIDType()}/${NameCharacterHandler()}`} className='shopitemcard__link'>
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
