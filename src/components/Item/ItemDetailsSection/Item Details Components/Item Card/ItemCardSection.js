import React, {useContext} from 'react'
import ItemContext from '../../../../context/ItemContext/ItemContext'
import './ItemCard.css';
import ShopHistory from '../Item Shop History/ItemShopHistory';
import ItemFunctions from '../../../../../App Wide Functions/ItemFunctions';
import FormatFunctions from '../../../../../App Wide Functions/FormatFunctions';
import ItemShopHistory from '../Item Shop History/ItemShopHistory';
import {Helmet} from 'react-helmet'

const ItemCardSection = () => {

    const {item, loading} = useContext(ItemContext);

    const {
        ItemName, 
        ItemDescription, 
        ItemImage, 
        ItemPrice, 
        ItemReleaseDate,
        ItemLastSeenDate,
        ItemIntroduction,
        ItemShopHistoryTable,
        ItemRarity
    } = ItemFunctions;

    const {setCardRarityStyle} = FormatFunctions;
    
    return (
        <div className='mainitemsection mainitemsection--primary'>
            <Helmet><title>{loading ? `LOADING... FORTNITEBRSHOP` : `${ItemName(item, 'title')} | ${ItemPrice(item) && `${ItemPrice(item)} VBUCKS`} - FortniteBRShop`}</title></Helmet>
            <div className='itemdetails itemdetails--primary'>
                <div className='itemcarddetails itemcarddetails--primary'>
                    <div className='itemcard itemcard--primary' style={setCardRarityStyle(ItemRarity(item))} >
                            <div className='itemcardimage itemcardimage--primary'>
                                <img src={ItemImage(item)} alt={`${ItemName(item, 'card')}'s ITEM CARD`} style={{height: '200px', width: '200px', margin: '0px', padding: '0px'}} />
                            </div>
                            <div className="itemcardinfo itemcardinfo--primary">
                                <p className='itemcardinfo__name'>{ItemName(item, 'card')}</p>
                                <div className='itemcardprice itemcardprice--primary'>
                                    <p className='itemcardprice__text'>{ItemPrice(item)}</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='itemtextdetails itemtextdetails--primary'>
                    <div className='itemdescription itemdescription--primary' style={setCardRarityStyle(ItemRarity(item))}>
                        <h2 className='itemdescription__head'>DESCRIPTION</h2>
                        <p className='itemdescription__text'>{ItemDescription(item)}</p>
                    </div>
                        <div className='itemcardattributes itemcardattributes--primary' style={setCardRarityStyle(ItemRarity(item))}>
                            <table className='itemcardattributestable itemcardattributestable--primary' style={{color: 'white'}}>
                                <tbody>
                                <tr className='itemcardattributestable__row'>
                                    <th className='itemcardattributestable__datahead' scope='row'>Last Seen</th>
                                    <td className='itemcardattributestable__data'>{ItemLastSeenDate(item)}</td>
                                </tr>
                                <tr className='itemcardattributestable__row'>
                                    <th className='itemcardattributestable__datahead' scope='row'>Released</th>
                                    <td className='itemcardattributestable__data'>{ItemReleaseDate(item)}</td>
                                </tr>
                                <tr className='itemcardattributestable__row'>
                                    <th className='itemcardattributestable__datahead' scope='row'>Season</th>
                                    <td className='itemcardattributestable__data'>{ItemIntroduction(item, 'season')}</td>
                                </tr>
                                <tr className='itemcardattributestable__row'>
                                    <th className='itemcardattributestable__datahead' scope='row'>Chapter</th>
                                    <td className='itemcardattributestable__data'>{ItemIntroduction(item, 'chapter')}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                </div>
            </div>
            <div className='shophis shophis--primary'>
                {ItemShopHistoryTable(item, ItemPrice(item))}
            </div>
        </div>
    )
}

export default ItemCardSection
