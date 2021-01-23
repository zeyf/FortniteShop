import React from 'react'
import {useContext} from 'react';
import ShopContext from '../../../context/ShopContext/ShopContext'
import './FeaturedShopSection.css';
import ShopItemCard from '../../ShopItemCard/ShopItemCard';

const FeaturedShopSection = () => {

    const sContext = useContext(ShopContext);
    console.log(sContext.CurrentFeatured)

    return (
        <div className='featuredview featuredview--primary'>
            <p className='featuredview__head viewhead'>FEATURED</p>
            <div>
            <div className='featureditemsection featureditemsection--primary'>
                {sContext.CurrentFeatured && sContext.CurrentFeatured.FeaturedItemItemsImages.map((item, i) => {

                            const BundleCheck = {
                                BundleName: () => {
                                    if (sContext.CurrentFeatured.FeaturedItemBundleStatus) {
                                        const nameslist = sContext.CurrentFeatured.FeaturedItemBundleStatus.map((current, pos) => {
                                            
                                            if (current) {
                                                return current.name
                                            } else {
                                                return current
                                            }
                                        })
                                        return nameslist
                                    }
                                },
                                BundleImage: () => {
                                    if (sContext.CurrentFeatured.FeaturedItemBundleStatus) {
                                        const imagelist = sContext.CurrentFeatured.FeaturedItemBundleStatus.map((curr, pos) => {
                                            if (curr) {
                                                return curr.image
                                            } else {
                                                return curr
                                            }
                                        })
                                        return imagelist
                                    }
                                }
                            }
                            

                            const price = sContext.CurrentFeatured && sContext.CurrentFeatured.FeaturedItemfinalPrices.map((current, pos) => {
                                return current;
                            });
                            const id = sContext.CurrentFeatured && sContext.CurrentFeatured.FeaturedItemItemsIDs.map((current, pos) => {
                                if (typeof(current[0]) === 'object')
                                    return String(current[0]);
                                else {
                                    return current[0]
                                }
                            });

                            const rarity = sContext.CurrentFeatured && sContext.CurrentFeatured.FeaturedItemItemsRarity.map((current, pos) => {
                                
                                const raritytype = current[0];
                                
                                if(raritytype === 'Uncommon') {
                                    return sContext.CardRarityStyles.uncommon;
                                } else if (raritytype === 'Epic') {
                                    return sContext.CardRarityStyles.epic;
                                } else if (raritytype === 'Rare') {
                                    return sContext.CardRarityStyles.rare;
                                } else if (raritytype === 'Icon Series') {
                                    return sContext.CardRarityStyles.iconseries;
                                } else if (raritytype === 'Slurp Series') {
                                    return sContext.CardRarityStyles.slurpseries;
                                } else if (raritytype === 'DARK SERIES') {
                                    return sContext.CardRarityStyles.dark;
                                } else if (raritytype === 'Legendary') {
                                    return sContext.CardRarityStyles.legendary;
                                }
                            });

                            const name = sContext.CurrentFeatured && sContext.CurrentFeatured.FeaturedItemItemsNames.map((current, pos) => {
                                return current[0];
                            });

                            if (item.length > 1) {
                                return <ShopItemCard price={price[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i] : item[0]} id={id[i]} cardstyle={rarity[i]} name={name[i]} />
                            } else {
                                return <ShopItemCard price={price[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i]  : item} id={id[i]} cardstyle={rarity[i]} name={name[i]}  />
                            }   
                        })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedShopSection