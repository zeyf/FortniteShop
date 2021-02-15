import React from 'react'
import {useContext} from 'react';
import ShopContext from '../../../context/ShopContext/ShopContext'
import './FeaturedShopSection.css';
import ShopItemCard from '../../ShopItemCard/ShopItemCard';
import FormatFunctions from '../../../../App Wide Functions/FormatFunctions'
import ItemFunctions from '../../../../App Wide Functions/ItemFunctions';
import Skeleton from 'react-loading-skeleton';
import SkeletonTypes from '../../../../App Wide Functions/SkeletonTypes';

const FeaturedShopSection = () => {

    const {CurrentFeatured} = useContext(ShopContext);
    const {setCardRarityStyle} = FormatFunctions;
    const {ReturnFeatured} = ItemFunctions;
    
    const featuredsize = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];


    return (
        <div className='featuredview featuredview--primary'>
            <p className='featuredview__head viewhead'>FEATURED</p>
            <div>
            <div className='featureditemsection featureditemsection--primary'>
                {CurrentFeatured ? ReturnFeatured(CurrentFeatured, 'images').map((item, i) => {

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
                                },
                                BundleStatus: () => {
                                    if (ReturnFeatured(CurrentFeatured, 'bundlestatuses')) {
                                        return ReturnFeatured(CurrentFeatured, 'bundlestatuses').map((status, i) => {
                                            return status
                                        })
                                    }
                                }
                            }
                            const {BundleStatus, BundleImage, BundleName} = BundleCheck
                            
                            const id = ReturnFeatured(CurrentFeatured, 'IDs').map((current, pos) => {
                                return String(current[0])
                            });

                            const rarity = ReturnFeatured(CurrentFeatured, 'rarities').map((current, pos) => {
                                return setCardRarityStyle(current[0])
                            });

                            const name = ReturnFeatured(CurrentFeatured, 'names').map((current, pos) => {
                                return current[0];
                            });
                            
                            const setname = ReturnFeatured(CurrentFeatured, 'setnames').map((current, pos) => {
                                return current[0];
                            });

                            if (item.length > 1) {
                                return <ShopItemCard price={ReturnFeatured(CurrentFeatured, 'prices')[i]} image={BundleImage()[i] ? BundleImage()[i] : item[0]} 
                                setname={setname[i]} id={id[i]} rarity={rarity[i]} name={name[i]} BundleName={BundleName()[i] && BundleName()[i]} BundleStatus={BundleStatus()[i]} />
                            } else {
                                return <ShopItemCard price={ReturnFeatured(CurrentFeatured, 'prices')[i]} image={BundleImage()[i] ? BundleImage()[i]  : item} 
                                setname={setname[i]} id={id[i]} rarity={rarity[i]} name={name[i]} BundleName={BundleName()[i] && BundleName()[i]} BundleStatus={BundleStatus()[i]} />
                            }   
                        }) : featuredsize.map((card, i) => {
                            return SkeletonTypes('shopitemcard', window.screen.width)
                        })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedShopSection