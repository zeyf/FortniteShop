import React, {useContext} from 'react'
import ItemContext from '../../../../context/ItemContext/ItemContext'
import './ItemCard.css';
import ShopHistory from '../Item Shop History/ItemShopHistory';
import ItemFunctions from '../../../../../App Wide Functions/ItemFunctions';
import FormatFunctions from '../../../../../App Wide Functions/FormatFunctions';
import ItemShopHistory from '../Item Shop History/ItemShopHistory';

const ItemCardSection = () => {

    const {item} = useContext(ItemContext);

    const ReturnItem = (item) => {
        if (item) return item
    }

    const {
        name,
        description,
        images,
        rarity,
        shopHistory,
        introduction
    } = ReturnItem(item);

    const {
        ItemName, 
        ItemDescription, 
        ItemImage, 
        ItemPrice, 
        ItemReleaseDate,
        ItemLastSeenDate,
        ItemIntroduction,
        ItemShopHistoryTable
    } = ItemFunctions;

    const {setCardRarityStyle} = FormatFunctions;
    
    return (
        <div className='mainitemsection mainitemsection--primary'>
            <div className='itemdetails itemdetails--primary'>
                <div className='itemcarddetails itemcarddetails--primary'>
                    <div className='itemcard itemcard--primary' style={setCardRarityStyle(rarity.displayValue)} >
                            <div className='itemcardimage itemcardimage--primary'>
                                <img src={ItemImage(images)} alt={`${ItemName(name)}'s ITEM CARD`} style={{height: '200px', width: '200px', margin: '0px', padding: '0px'}} />
                            </div>
                            <div className="itemcardinfo itemcardinfo--primary">
                                <p className='itemcardinfo__name'>{ItemName(name)}</p>
                                <div className='itemcardprice itemcardprice--primary'>
                                    <p className='itemcardprice__text'>{ItemPrice(name)}</p>
                                </div>
                            </div>
                    </div>
                    <div className='itemcardattributes itemcardattributes--primary' style={ItemFunctions.ItemInfo.CardStyle()}>
                        <table className='itemcardattributestable itemcardattributestable--primary' style={{color: 'white'}}>
                            <tbody>
                            <tr className='itemcardattributestable__row'>
                                <th className='itemcardattributestable__datahead' scope='row'>Last Seen</th>
                                <td className='itemcardattributestable__data'>{ItemLastSeenDate(shopHistory)}</td>
                            </tr>
                            <tr className='itemcardattributestable__row'>
                                <th className='itemcardattributestable__datahead' scope='row'>Released</th>
                                <td className='itemcardattributestable__data'>{ItemReleaseDate(shopHistory)}</td>
                            </tr>
                            <tr className='itemcardattributestable__row'>
                                <th className='itemcardattributestable__datahead' scope='row'>Season</th>
                                <td className='itemcardattributestable__data'>{ItemIntroduction(introduction, 'season')}</td>
                            </tr>
                            <tr className='itemcardattributestable__row'>
                                <th className='itemcardattributestable__datahead' scope='row'>Chapter</th>
                                <td className='itemcardattributestable__data'>{ItemIntroduction(introduction, 'chapter')}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='itemtextdetails itemtextdetails--primary'>
                    <div className='itemdescription itemdescription--primary' style={ItemFunctions.ItemInfo.CardStyle()}>
                        <h2 className='itemdescription__head'>DESCRIPTION</h2>
                        <p className='itemdescription__text'>{ItemDescription(description)}</p>
                    </div>

                </div>
            </div>
            <div className='shophis shophis--primary'>
                {ItemShopHistoryTable(shopHistory, ItemPrice(name))}
            </div>
        </div>
    )
}

export default ItemCardSection
