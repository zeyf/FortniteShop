import React from 'react';
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import './ShopItemCard.css'
import VBUCKS from '../../../media/images/VBUCKS.png';
import FormatFunctions from '../../../App Wide Functions/FormatFunctions'
import SetContext from '../../context/SetContext/SetContext';
import ItemFunctions from '../../../App Wide Functions/ItemFunctions'
import {useContext} from 'react'

const ShopItemCard = ({price, image, id, rarity, name, BundleName, BundleStatus, setname}) => {

    useEffect(()=> {
        localStorage.setItem(name.toUpperCase() || BundleName, price)
    }, []);

    const {SetLinkByIDType, NameCharacterHandler} = FormatFunctions;
    const {GetSet} = useContext(SetContext)
    
    const ShopItemCardLink = (category, handledName) => {
        if (BundleStatus) {
            return `/sets/${handledName}`
        } else if (!BundleStatus) {
            return `/items/${category}/${handledName}`
        }
    }

    const CheckBundleSetName = (setname, name) => {
        if (BundleStatus) return setname
        if (!BundleStatus) return name
    }

    return (
        <div className='s'>
            <div className='shopitemcard shopitemcard--primary' style={rarity} >
                <Link to={ShopItemCardLink(SetLinkByIDType(id), NameCharacterHandler(CheckBundleSetName(setname, name)))} className='shopitemcard__link' onClick={() => {
                    if (BundleStatus) GetSet(CheckBundleSetName(setname))
                }}>
                    <div className='shopitemimage shopitemimage--primary'>
                        <img src={image} style={{height: '150px', width: '150px', margin: '0px', padding: '0px'}} />
                    </div>
                    <div className="shopiteminfo shopiteminfo--primary">
                        <p className='shopiteminfo__name'>{BundleName ? BundleName.toUpperCase().replaceAll('BUNDLE', '(BUNDLE)') : name.toUpperCase()}</p>
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