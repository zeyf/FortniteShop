import React, {useContext} from 'react'
import ItemContext from '../../../../context/ItemContext/ItemContext'
import './ItemCard.css';
import ItemFunctions from '../../../../../App Wide Functions/ItemFunctions';
import FormatFunctions from '../../../../../App Wide Functions/FormatFunctions';
import {Helmet} from 'react-helmet'
import NSItemCard from '../../../../NSItemCard/NSItemCard';

const ItemCardSection = () => {

    const {item, loading} = useContext(ItemContext);
    const {setCardRarityStyle, NameCharacterHandler, SetLinkByIDType} = FormatFunctions;

    const {
        ItemName, 
        ItemDescription, 
        ItemImage, 
        ItemPrice, 
        ItemReleaseDate,
        ItemLastSeenDate,
        ItemIntroduction,
        ItemShopHistoryTable,
        ItemRarity,
        ItemID,
        SetName
    } = ItemFunctions;
    
    return (
        <div className='mainitemsection mainitemsection--primary'>
            <Helmet><title>{!loading && !item ? `LOADING... FORTNITEBRSHOP` : `${ItemName(item, 'title')} | ${ItemPrice(ItemName(item, 'card')) ? `${ItemPrice(ItemName(item, 'card'))} VBUCKS - FortniteBRShop` : `FortniteBRShop`}`}</title></Helmet>
            <div className='itemdetails itemdetails--primary'>
                <NSItemCard category={SetLinkByIDType(ItemID(item))} name={item && ItemName(item, 'card')} imgSRC={ItemImage(item)}
                cardStyle={setCardRarityStyle(ItemRarity(item))} handledName={item && NameCharacterHandler(ItemName(item, 'card'))}
                price={ItemPrice(ItemName(item, 'card'))} height={225} width={225} margin={25} setname={SetName(item)}
                />
                <div className='itemtextdetails itemtextdetails--primary'>
                    <div className='itemdescription itemdescription--primary' style={setCardRarityStyle(ItemRarity(item))}>
                        <h2 className='itemdescription__head'>DESCRIPTION</h2>
                        <p className='itemdescription__text'>{ItemDescription(item)}</p>
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
            </div>

                {ItemShopHistoryTable(item, ItemPrice(ItemName(item, 'card')))}

        </div>
    )
}

export default ItemCardSection
