import React from 'react'
import {useContext} from 'react';
import ShopContext from '../../../context/ShopContext/ShopContext'
import './FeaturedShopSection.css';
import ShopItemCard from '../../ShopItemCard/ShopItemCard';
import FormatFunctions from '../../../../App Wide Functions/FormatFunctions'
import ItemFunctions from '../../../../App Wide Functions/ItemFunctions';

const FeaturedShopSection = () => {

    const {CurrentFeatured} = useContext(ShopContext);
    const {setCardRarityStyle} = FormatFunctions;
    const {ReturnFeatured} = ItemFunctions;

    return (
        <div className='featuredview featuredview--primary'>
            <p className='featuredview__head viewhead'>FEATURED</p>
            <div>
            <div className='featureditemsection featureditemsection--primary'>
                {CurrentFeatured && ReturnFeatured(CurrentFeatured, 'images').map((item, i) => {

                            const BundleCheck = {
                                BundleName: () => {
                                    if (ReturnFeatured(CurrentFeatured, 'bundlestatuses')) {
                                        return ReturnFeatured(CurrentFeatured, 'bundlestatuses').map((current, pos) => {
                                            if (current) return current.name
                                            if (!current) return current
                                        })
                                    }
                                },
                                BundleImage: () => {
                                    if (ReturnFeatured(CurrentFeatured, 'bundlestatuses')) {
                                        return ReturnFeatured(CurrentFeatured, 'bundlestatuses').map((curr, pos) => {
                                            if (curr) return curr.image
                                            if(!curr) return curr
                                        })
                                    }
                                }
                            }
                            
                            const id = ReturnFeatured(CurrentFeatured, 'IDs').map((current, pos) => {
                                return String(current[0])
                            });

                            const rarity = ReturnFeatured(CurrentFeatured, 'rarities').map((current, pos) => {
                                return setCardRarityStyle(current[0])
                            });

                            const name = ReturnFeatured(CurrentFeatured, 'names').map((current, pos) => {
                                return current[0];
                            });

                            if (item.length > 1) {
                                return <ShopItemCard price={ReturnFeatured(CurrentFeatured, 'prices')[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i] : item[0]} id={id[i]} rarity={rarity[i]} name={name[i]} BundleName={BundleCheck.BundleName()[i] && BundleCheck.BundleName()[i]} />
                            } else {
                                return <ShopItemCard price={ReturnFeatured(CurrentFeatured, 'prices')[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i]  : item} id={id[i]} rarity={rarity[i]} name={name[i]} BundleName={BundleCheck.BundleName()[i] && BundleCheck.BundleName()[i]} />
                            }   
                        })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedShopSection