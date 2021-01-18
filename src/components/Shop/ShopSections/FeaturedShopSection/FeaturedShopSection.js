import React from 'react'
import {useContext} from 'react';
import ShopContext from '../../../context/ShopContext/ShopContext'
import './FeaturedShopSection.css';
import ShopItemCard from '../../ShopItemCard/ShopItemCard';

const FeaturedShopSection = () => {

    const sContext = useContext(ShopContext);

    return (
        <div className='featuredview featuredview--primary'>
            <p className='featuredview__head viewhead'>FEATURED</p>
            <div>
            <div className='featureditemsection featureditemsection--primary'>
                {sContext.CurrentFeatured && sContext.CurrentFeatured.FeaturedItemItemsImages.map((item, i) => {
                            const price = sContext.CurrentFeatured && sContext.CurrentFeatured.FeaturedItemfinalPrices.map((current, i) => {
                                return current;
                            });
                            const id = sContext.CurrentFeatured && sContext.CurrentFeatured.FeaturedItemItemsIDs.map((current, i) => {
                                if(current.length > 1) {

                                    return current[0];
                                } else {
                                    return current;
                                }
                            });

                            const rarity = sContext.CurrentFeatured && sContext.CurrentFeatured.FeaturedItemItemsRarity.map((current, i) => {
                            
                                const raritytype = current[0];
                                
                                if(raritytype === 'Uncommon') {
                                    return sContext.CardRarityStyles.uncommon;
                                } else if (raritytype === 'Epic') {
                                    return sContext.CardRarityStyles.epic;
                                } else if (raritytype === 'Rare') {
                                    return sContext.CardRarityStyles.rare;
                                } else if (raritytype === 'Icon Series') {
                                    return sContext.CardRarityStyles.iconseries;
                                } else if (raritytype === 'DARK SERIES') {
                                    return sContext.CardRarityStyles.dark;
                                } else if (raritytype === 'Legendary') {
                                    return sContext.CardRarityStyles.legendary;
                                }
                            });

                            if (item.length > 1) {
                                return <ShopItemCard price={price[i]} image={item[0]} id={id[i]} cardstyle={rarity[i]} />
                            } else {
                                return <ShopItemCard price={price[i]} image={item} id={id[i]} cardstyle={rarity[i]} />
                            }   
                        })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedShopSection