import React from 'react'
import {useContext} from 'react';
import ShopContext from '../../../context/ShopContext/ShopContext'
import ShopItemCard from '../../ShopItemCard/ShopItemCard';
import FormatFunctions from '../../../../Format Functions/FormatFunctions'
import './DailyShopSection.css';

const DailyShopSection = () => {

    const {CurrentDaily} = useContext(ShopContext);
    const {setCardRarityStyle} = FormatFunctions;

    const ReturnDaily = (array) => {
        if (array) return array
    }

    const {
        dailyItemItemsNames,
        dailyItemItemsRarity,
        dailyItemItemsIDs,
        dailyItemfinalPrices,
        dailyItemBundleStatus,
        dailyItemItemsImages
    } = ReturnDaily(CurrentDaily);

    return (
        <div className='dailyview dailyview--primary'>
            <p className='dailyview__head viewhead'>DAILY</p>
            <div className='dailyitemsection dailyitemsection--primary'>
                {CurrentDaily && dailyItemItemsImages.map((item, i) => {

                        const BundleCheck = {
                            BundleName: () => {
                                if (dailyItemBundleStatus) {
                                    return dailyItemBundleStatus.map((current, pos) => {
                                        if (current) return current.name
                                        if (!current) return current
                                    })
                                }
                            },
                            BundleImage: () => {
                                if (dailyItemBundleStatus) {
                                    return dailyItemBundleStatus.map((curr, pos) => {
                                        if (curr) {
                                            return curr.image
                                        } else {
                                            return curr
                                        }
                                    })
                                }
                            }
                        }
                        
                        const id = dailyItemItemsIDs.map((current, i) => {
                            return String(current[0]);
                        });
                        const rarity = dailyItemItemsRarity.map((current, i) => {
                            setCardRarityStyle(current[0])
                        });

                        const name = dailyItemItemsNames.map((current, i) => {
                            return current[0];
                        });

                        if (item.length > 1) {
                            return <ShopItemCard price={dailyItemfinalPrices[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i] : item[0]} id={id[i]} cardstyle={rarity[i]} name={name[i]} BundleName={BundleCheck.BundleName()[i] && BundleCheck.BundleName()[i]} />
                        } else {
                            return <ShopItemCard price={dailyItemfinalPrices[i]} image={BundleCheck.BundleImage()[i] ? BundleCheck.BundleImage()[i] : item} id={id[i]} cardstyle={rarity[i]} name={name[i]} BundleName={BundleCheck.BundleName()[i] && BundleCheck.BundleName()[i]} />
                        }   
                    })}
            </div>
        </div>
    )
}

export default DailyShopSection