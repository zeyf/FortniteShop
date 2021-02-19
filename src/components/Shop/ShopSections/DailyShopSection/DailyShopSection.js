import React from 'react'
import {useContext} from 'react';
import ShopContext from '../../../context/ShopContext/ShopContext'
import FormatFunctions from '../../../../App Wide Functions/FormatFunctions'
import './DailyShopSection.css';
import ItemFunctions from '../../../../App Wide Functions/ItemFunctions'
import SkeletonTypes from '../../../../App Wide Functions/SkeletonTypes';
import NSItemCard from '../../../NSItemCard/NSItemCard';

const DailyShopSection = () => {

    const {CurrentDaily} = useContext(ShopContext);
    const {setCardRarityStyle, NameCharacterHandler} = FormatFunctions;
    const {SetLinkByIDType} = FormatFunctions;
    const {ReturnDaily} = ItemFunctions;
    const dailysize = [1,2,3,4,5,6];

    return (
        <div className='dailyview dailyview--primary'>
            <p className='dailyview__head viewhead'>DAILY</p>
            <div className='dailyitemsection dailyitemsection--primary'>
                {CurrentDaily ? ReturnDaily(CurrentDaily, 'images').map((item, i) => {

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
                            },
                            BundleStatus: () => {
                                if (ReturnDaily(CurrentDaily, 'bundlestatuses')) {
                                    return ReturnDaily(CurrentDaily, 'bundlestatuses').map((status, i) => {
                                        return status
                                    })
                                }
                            }
                        }

                        const {BundleStatus, BundleImage, BundleName} = BundleCheck;
                        
                        const id = ReturnDaily(CurrentDaily, 'IDs').map((current, i) => {
                            return String(current[0]);
                        });
                        const rarity = ReturnDaily(CurrentDaily, 'rarities').map((current, i) => {
                            return setCardRarityStyle(current[0])
                        });

                        const name = ReturnDaily(CurrentDaily, 'names').map((current, i) => {
                            return current[0];
                        });
                        
                        const setname = ReturnDaily(CurrentDaily, 'setnames').map((current, i) => {
                            return current[0];
                        });

                        const items = ReturnDaily(CurrentDaily, 'items').map((current, pos) => {
                            return current
                        })
                        
                        const prices = ReturnDaily(CurrentDaily, 'prices').map((current, pos) => {
                            return current
                        })

                        if (!/locker/gi.test(BundleName()[i])) {
                                return <NSItemCard category={SetLinkByIDType(id[i])} name={name[i]} cardStyle={rarity[i]} 
                                handledName={NameCharacterHandler(name[i])} imgSRC={BundleImage()[i] ? BundleImage()[i] : item[0]}
                                 BundleName={BundleName()[i] && BundleName()[i]} price={prices[i]} item={items[i]}
                                BundleStatus={BundleStatus()[i]} setname={setname[i]}
                                />
                        }
                    }) : dailysize.map((card, i) => {
                        return SkeletonTypes('shopitemcard', window.screen.width)
                    })}
            </div>
        </div>
    )
}

export default DailyShopSection



//  if (item.length > 1) {
//     return <ShopItemCard price={ReturnDaily(CurrentDaily, 'prices')[i]} image={BundleImage()[i] ? BundleImage()[i] : item[0]} 
//     setname={setname[i]} id={id[i]} rarity={rarity[i]} name={name[i]} BundleName={BundleName()[i] && BundleName()[i]} BundleStatus={BundleStatus()[i]} />
// } else {
//     return <ShopItemCard price={ReturnDaily(CurrentDaily, 'prices')[i]} image={BundleImage()[i] ? BundleImage()[i] : item} 
//     setname={setname[i]} id={id[i]} rarity={rarity[i]} name={name[i]} BundleName={BundleName()[i] && BundleName()[i]} BundleStatus={BundleStatus()[i]} />
// }   