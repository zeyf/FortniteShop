import React from 'react'
import {useContext} from 'react';
import ShopContext from '../../../context/ShopContext/ShopContext'
import ShopItemCard from '../../ShopItemCard/ShopItemCard';
import './DailyShopSection.css';

const DailyShopSection = () => {

    const sContext = useContext(ShopContext);

    return (
        <div className='dailyview dailyview--primary'>
            <p className='dailyview__head viewhead'>DAILY</p>
            <div className='dailyitemsection dailyitemsection--primary'>
                {sContext.CurrentDaily && sContext.CurrentDaily.dailyItemItemsImages.map((item, i) => {
                        const price = sContext.CurrentDaily && sContext.CurrentDaily.dailyItemfinalPrices.map((current, i) => {
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
    )
}

export default DailyShopSection
