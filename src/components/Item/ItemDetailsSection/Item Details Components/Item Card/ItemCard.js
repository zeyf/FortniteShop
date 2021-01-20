import React, {useContext} from 'react'
import ItemContext from '../../../../context/ItemContext/ItemContext'
import './ItemCard.css';


const ItemCard = () => {

    const iContext = useContext(ItemContext);
    
    const ItemFunctions = {
    
        ItemInfo: {
            
            CardStyle: () => {
                if (iContext.item) {
                    const itemrarity = iContext.item.rarity.displayValue;
                    
                    if(itemrarity === 'Uncommon') {
                        return iContext.CardRarityStyles.uncommon;
                    } else if (itemrarity === 'Epic') {
                        return iContext.CardRarityStyles.epic;
                    } else if (itemrarity === 'Rare') {
                        return iContext.CardRarityStyles.rare;
                    } else if (itemrarity === 'Icon Series') {
                        return iContext.CardRarityStyles.iconseries;
                    } else if (itemrarity === 'Slurp Series') {
                        return iContext.CardRarityStyles.slurpseries;
                    } else if (itemrarity === 'DARK SERIES') {
                        return iContext.CardRarityStyles.dark;
                    } else if (itemrarity === 'Legendary') {
                        return iContext.CardRarityStyles.legendary;
                    }
                }
            },
            ItemPrice: () => {
                if (iContext.item) {
                    const name = iContext.item.name.toUpperCase()
                    const IndexOfNameKey = Object.keys(localStorage).indexOf(name);
                    return Object.values(localStorage)[IndexOfNameKey]
    
                }
            },
            ItemImage: () => {
                if (iContext.item) {
                    if (iContext.item.images.featured) {
                        return iContext.item.images.featured
                    } else {
                        return iContext.item.images.icon;
                    }
                }
            },
            ItemName: () => {
                if (iContext.item) {
                    return iContext.item.name.toUpperCase();
                }
            },
            ItemDescription: () => {
                if (iContext.item) {
                    return `"${iContext.item.description}"`
                }
            }
        },
        ItemDates: {
            ReleaseDate: () => {
                if (iContext.item) {
                    return iContext.item.shopHistory[0].split(/T/gi)[0]
                }
            },
            LastAppearanceDate: () => {
                if (iContext.item) {
                    return iContext.item.shopHistory[iContext.item.shopHistory.length - 1].split(/T/gi)[0]
                }
            }
        },
        ItemIntroduction: {
            Season: () => {
                if (iContext.item) {
                    return iContext.item.introduction.season;
                }
            },
            Chapter: () => {
                if (iContext.item) {
                    return iContext.item.introduction.chapter;
                }
            },
            Text: () => {
                if (iContext.item) {
                    return iContext.item.introduction.text;
                }
            }
        },
        ItemSet: {
            Season: () => {
                if (iContext.item) {
                    return iContext.item.introduction.season;
                }
            }
        }
    }

    return (
        <div className='itemdetails itemdetails--primary'>
            <div className='itemcarddetails itemcarddetails--primary'>
                <div className='itemcard itemcard--primary' style={ItemFunctions.ItemInfo.CardStyle()} >
                        <div className='itemcardimage itemcardimage--primary'>
                            <img src={ItemFunctions.ItemInfo.ItemImage()} style={{height: '250px', width: '250px', margin: '0px', padding: '0px'}} />
                        </div>
                        <div className="itemcardinfo itemcardinfo--primary">
                            <p className='itemcardinfo__name'>{ItemFunctions.ItemInfo.ItemName()}</p>
                            <div className='itemcardprice itemcardprice--primary'>
                                <p className='itemcardprice__text'>{ItemFunctions.ItemInfo.ItemPrice()}</p>
                            </div>
                        </div>
                </div>
                <div className='itemcardattributes itemcardattributes--primary' style={ItemFunctions.ItemInfo.CardStyle()}>
                    <table className='itemcardattributestable itemcardattributestable--primary' style={{color: 'white'}}>
                        <tbody>
                        <tr className='itemcardattributestable__row'>
                            <th className='itemcardattributestable__datahead' scope='row'>Last Seen</th>
                            <td className='itemcardattributestable__data'>{ItemFunctions.ItemDates.LastAppearanceDate()}</td>
                        </tr>
                        <tr className='itemcardattributestable__row'>
                            <th className='itemcardattributestable__datahead' scope='row'>Released</th>
                            <td className='itemcardattributestable__data'>{ItemFunctions.ItemDates.ReleaseDate()}</td>
                        </tr>
                        <tr className='itemcardattributestable__row'>
                            <th className='itemcardattributestable__datahead' scope='row'>Season</th>
                            <td className='itemcardattributestable__data'>{ItemFunctions.ItemIntroduction.Season()}</td>
                        </tr>
                        <tr className='itemcardattributestable__row'>
                            <th className='itemcardattributestable__datahead' scope='row'>Chapter</th>
                            <td className='itemcardattributestable__data'>{ItemFunctions.ItemIntroduction.Chapter()}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='d'>
                <div style={{color: 'white'}}>
                    <h2>Description</h2>
                    <p>{ItemFunctions.ItemInfo.ItemDescription()}</p>
                </div>
                <div style={{color: 'white'}}>
                    <h2>Introduction</h2>
                    <p>{ItemFunctions.ItemIntroduction.Text()}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
