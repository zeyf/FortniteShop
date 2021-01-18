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

                            if (item.length > 1) {
                                return <ShopItemCard price={price[i]} image={item[0]} />
                            } else {
                                return <ShopItemCard price={price[i]} image={item} />
                            }   
                        })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedShopSection