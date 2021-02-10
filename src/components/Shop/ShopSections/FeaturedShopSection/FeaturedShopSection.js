import React from 'react'
import {useContext} from 'react';
import ShopContext from '../../../context/ShopContext/ShopContext'
import './FeaturedShopSection.css';
import ShopItemCard from '../../ShopItemCard/ShopItemCard';
import FormatFunctions from '../../../../Format Functions/FormatFunctions'

const FeaturedShopSection = () => {

    const {CurrentFeatured} = useContext(ShopContext);
    const {setCardRarityStyle} = FormatFunctions;

    const ReturnFeatured = (array) => {
        if (array) return array
    }

    const {
        FeaturedItemItemsImages,
        FeaturedItemBundleStatus, 
        FeaturedItemfinalPrices,
        FeaturedItemItemsIDs,
        FeaturedItemItemsRarity,
        FeaturedItemItemsNames
    } = ReturnFeatured(CurrentFeatured);

    return (
        <div className='featuredview featuredview--primary'>
            <p className='featuredview__head viewhead'>FEATURED</p>
            <div>
            <div className='featureditemsection featureditemsection--primary'>
                {CurrentFeatured && FeaturedItemItemsImages.map((item, i) => {

                            const BundleCheck = {
                                BundleName: () => {
                                    if (FeaturedItemBundleStatus) {
                                        return FeaturedItemBundleStatus.map((current, pos) => {
                                            if (current) return current.name
                                            if (!current) return current
                                        })
                                    }
                                },
                                BundleImage: () => {
                                    if (FeaturedItemBundleStatus) {
                                        return FeaturedItemBundleStatus.map((curr, pos) => {
                                            if (curr) return curr.image
                                            if(!curr) return curr
                                        })
                                    }
                                }
                            }
                            
                            const id = FeaturedItemItemsIDs.map((current, pos) => {
                                return String(current[0])
                            });

                            const rarity = FeaturedItemItemsRarity.map((current, pos) => {
                                setCardRarityStyle(current[0])
                            });

                            const name = FeaturedItemItemsNames.map((current, pos) => {
                                return current[0];
                            });

                            if (item.length > 1) {
                                return <ShopItemCard price={FeaturedItemfinalPrices[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i] : item[0]} id={id[i]} cardstyle={rarity[i]} name={name[i]} BundleName={BundleCheck.BundleName()[i] && BundleCheck.BundleName()[i]} />
                            } else {
                                return <ShopItemCard price={FeaturedItemfinalPrices[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i]  : item} id={id[i]} cardstyle={rarity[i]} name={name[i]} BundleName={BundleCheck.BundleName()[i] && BundleCheck.BundleName()[i]} />
                            }   
                        })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedShopSection