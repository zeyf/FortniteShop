import React from 'react'
import {useContext} from 'react';
import ShopContext from '../../../context/ShopContext/ShopContext'
import ShopItemCard from '../../ShopItemCard/ShopItemCard';
import FormatFunctions from '../../../../App Wide Functions/FormatFunctions'
import './DailyShopSection.css';
import ItemFunctions from '../../../../App Wide Functions/ItemFunctions'

const DailyShopSection = () => {

    const {CurrentDaily} = useContext(ShopContext);
    const {setCardRarityStyle} = FormatFunctions;
    const {ReturnDaily} = ItemFunctions;

    return (
        <div className='dailyview dailyview--primary'>
            <p className='dailyview__head viewhead'>DAILY</p>
            <div className='dailyitemsection dailyitemsection--primary'>
                {CurrentDaily && ReturnDaily(CurrentDaily, 'images').map((item, i) => {

                        const BundleCheck = {
                            BundleName: () => {
                                if (ReturnDaily(CurrentDaily, 'bundlestatuses')) {
                                    return ReturnDaily(CurrentDaily, 'bundlestatuses').map((current, pos) => {
                                        if (current) return current.name
                                        if (!current) return current
                                    })
                                }
                            },
                            BundleImage: () => {
                                if (ReturnDaily(CurrentDaily, 'bundlestatuses')) {
                                    return ReturnDaily(CurrentDaily, 'bundlestatuses').map((curr, pos) => {
                                        if (curr) {
                                            return curr.image
                                        } else {
                                            return curr
                                        }
                                    })
                                }
                            }
                        }
                        
                        const id = ReturnDaily(CurrentDaily, 'IDs').map((current, i) => {
                            return String(current[0]);
                        });
                        const rarity = ReturnDaily(CurrentDaily, 'rarities').map((current, i) => {
                            return setCardRarityStyle(current[0])
                        });

                        const name = ReturnDaily(CurrentDaily, 'names').map((current, i) => {
                            return current[0];
                        });

                        if (item.length > 1) {
                            return <ShopItemCard price={ReturnDaily(CurrentDaily, 'prices')[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i] : item[0]} id={id[i]} rarity={rarity[i]} name={name[i]} BundleName={BundleCheck.BundleName()[i] && BundleCheck.BundleName()[i]} />
                        } else {
                            return <ShopItemCard price={ReturnDaily(CurrentDaily, 'prices')[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i] : item} id={id[i]} rarity={rarity[i]} name={name[i]} BundleName={BundleCheck.BundleName()[i] && BundleCheck.BundleName()[i]} />
                        }   
                    })}
            </div>
        </div>
    )
}

export default DailyShopSection