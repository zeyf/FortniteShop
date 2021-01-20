import React, {useContext} from 'react'
import ItemContext from '../../../../context/ItemContext/ItemContext'
import './ItemCard.css';


const ItemCard = () => {

    const iContext = useContext(ItemContext);
    
    const ItemFunctions = {
        
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
                
                const localStg = localStorage;

                const name = iContext.item.name.toUpperCase()
                
                const IndexOfNameKey = Object.keys(localStg).indexOf(name);

                return Object.values(localStg)[IndexOfNameKey]

                
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
        }
    }

    return (
        <div>
            <div className='itemcard itemcard--primary' style={ItemFunctions.CardStyle()} >
                    <div className='itemcardimage itemcardimage--primary'>
                        <img src={ItemFunctions.ItemImage()} style={{height: '150px', width: '150px', margin: '0px', padding: '0px'}} />
                    </div>
                    <div className="itemcardinfo itemcardinfo--primary">
                        <p className='itemcardinfo__name'>{ItemFunctions.ItemName()}</p>
                        <div className='itemcardprice itemcardprice--primary'>
                           
                            <p className='itemcardprice__text'>{ItemFunctions.ItemPrice()}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemCard
