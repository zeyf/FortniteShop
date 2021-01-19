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
                        
                        const id = sContext.CurrentDaily && sContext.CurrentDaily.dailyItemItemsIDs.map((current, i) => {
                            if (typeof(current[0]) === 'object')
                                return String(current[0]);
                            else {
                                return current[0]
                            }
                        });
                        const rarity = sContext.CurrentDaily && sContext.CurrentDaily.dailyItemItemsRarity.map((current, i) => {
                            
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

                        const name = sContext.CurrentDaily && sContext.CurrentDaily.dailyItemItemsNames.map((current, i) => {
                            return current[0];
                        });

                        if (item.length > 1) {
                            return <ShopItemCard price={price[i]} image={item[0]} id={id[i]} cardstyle={rarity[i]} name={name[i]} />
                        } else {
                            return <ShopItemCard price={price[i]} image={item} id={id[i]} cardstyle={rarity[i]} name={name[i]} />
                        }   
                    })}
            </div>
        </div>
    )
}

export default DailyShopSection
