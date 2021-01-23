import ItemContext from '../../../../context/ItemContext/ItemContext'
import './ItemSet.css'
import {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';


const ItemSet = () => {

    const iContext = useContext(ItemContext);

    const BoilerPlate = {
        CardStyle: () => {
            if (iContext.item) {
                const itemrarity = iContext.item.rarity.displayValue;
                
                if(itemrarity === 'Uncommon') {
                    return iContext.CardRarityStyles.uncommon;
                } else if (itemrarity === 'Epic') {
                    return iContext.CardRarityStyles.epic;
                } else if (itemrarity === 'Rare') {
                    return iContext.CardRarityStyles.rare;
                } else if (itemrarity === 'Icon Series') {
                    return iContext.CardRarityStyles.iconseries;
                } else if (itemrarity === 'Slurp Series') {
                    return iContext.CardRarityStyles.slurpseries;
                } else if (itemrarity === 'DARK SERIES') {
                    return iContext.CardRarityStyles.dark;
                } else if (itemrarity === 'Legendary') {
                    return iContext.CardRarityStyles.legendary;
                }
            }
        },
        SetLinkByIDType: () => {

            if (iContext.item) {
                if (iContext.ItemsOfSameSet) {

                    const returntype = iContext.ItemsOfSameSet.map((item, i) => {

                        

                        const itemtype = item.id.split('_')[0];

                        
                        if (itemtype === 'CID') {
                            return iContext.ItemTypes.skin;
                        } else if (itemtype === 'EID') {
                            return iContext.ItemTypes.emote;
                        } else if (itemtype === 'MusicPack') {
                            return iContext.ItemTypes.musicpack;
                        } else if (itemtype === 'Pickaxe') {
                            return iContext.ItemTypes.pickaxe;
                        } else if (itemtype === 'Wrap') {
                            return iContext.ItemTypes.wrap;
                        } else if (itemtype === 'Glider') {
                            return iContext.ItemTypes.glider;
                        } else if (itemtype === 'BID') {
                            return iContext.ItemTypes.backbling
                        }
                    })
                    //eslint-disable-next-line

                    return returntype;

                }
            }
        },
        forceupdate: (name) => {
            iContext.GetItem(name);
        }
    }

    const SetFunctions = {

        GetSet: () => {
            if (iContext.item) {
                if (iContext.item.set) {
                    const {value} = iContext.item.set;    
                    iContext.GetItemSet(value);
                }
            }
        },
        SetInfo: {
            CardStyle: () => {
                
            },
            SetName: () => {
                if (iContext.item) {
                    if (iContext.item.set) {
                        const {value} = iContext.item.set;    
                        return value.toUpperCase()
                    }
                }
            },
            SetLength: () => {
                if (iContext.item) {
                    if (iContext.ItemsOfSameSet) {
   
                        return iContext.ItemsOfSameSet.length;
                    }
                }
            },
            SetImages: () => {
                if (iContext.item) {
                    if (iContext.ItemsOfSameSet) {
                        const Images = iContext.ItemsOfSameSet.map((item, i) => {
                            if (item.images.featured) {
                                return item.images.featured;
                            } else {
                                return item.images.icon;
                            }
                        })

                        return Images
                    }
                }
            },
            SetRarity: () => {
                if (iContext.item) {
                    if (iContext.ItemsOfSameSet) {
                        const Images = iContext.ItemsOfSameSet.map((item, i) => {
                            
                            const raritytype = item.rarity.displayValue;
                            
                            if(raritytype === 'Uncommon') {
                                return iContext.CardRarityStyles.uncommon;
                            } else if (raritytype === 'Epic') {
                                return iContext.CardRarityStyles.epic;
                            } else if (raritytype === 'Rare') {
                                return iContext.CardRarityStyles.rare;
                            } else if (raritytype === 'Icon Series') {
                                return iContext.CardRarityStyles.iconseries;
                            } else if (raritytype === 'Slurp Series') {
                                return iContext.CardRarityStyles.slurpseries;
                            } else if (raritytype === 'DARK SERIES') {
                                return iContext.CardRarityStyles.dark;
                            } else if (raritytype === 'Legendary') {
                                return iContext.CardRarityStyles.legendary;
                            }
                            
                        })
                        //eslint-disable-next-line

                        return Images
                    }
                }
            },
            SetItemName: () => {
                if (iContext.item) {
                    if (iContext.ItemsOfSameSet) {
                        const name = iContext.ItemsOfSameSet.map((item, i) => {
                            const {name} = item;
                            const spaceregex = /\s/gi;
                            const dashregex = /-/gi;

                            if (spaceregex.test(name) === true && dashregex.test(name) === false) {
                                const SpaceReplaceResult = name.replaceAll(spaceregex, '-').toLowerCase()
                                return SpaceReplaceResult;
                    
                            } else if (dashregex.test(name) === true && spaceregex.test(name) === false) { 
                                const DashReplaceResult = name.replaceAll(dashregex, '~').toLowerCase()
                                return DashReplaceResult
                    
                            } else if(dashregex.test(name) === true && spaceregex.test(name) === true) {
                                const DashReplaceResult = name.replaceAll(dashregex, '~').toLowerCase()
                                const ReplaceSpacesToo = DashReplaceResult.replaceAll(spaceregex, '-')
                                return ReplaceSpacesToo
                            } else {
                                return name.toLowerCase();
                            }
                        })
                        return name
                    }
                }
            }
        }
    }

    useEffect(() => {
        SetFunctions.GetSet();
        //eslint-disable-next-line
    }, [])

    return (
        <div className='itemsetsection itemsetsection--primary'>
            <h2 className="itemsetsection__head">
                PART OF THE <span style={{color: '#ffe227'}}>{SetFunctions.SetInfo.SetName()} SET</span> ({SetFunctions.SetInfo.SetLength()})
            </h2>
            <div className="itemset itemset--primary">
                {iContext.ItemsOfSameSet && SetFunctions.SetInfo.SetImages().map((item, i) => {

                    
                    if (i < 6) {

                        const CurrentItemNameParam = SetFunctions.SetInfo.SetItemName()[i];
                        const PassClickedItemName = () => {
                            BoilerPlate.forceupdate(CurrentItemNameParam);
                        }

                        return  <Link to={`/${BoilerPlate.SetLinkByIDType()[i]}/${SetFunctions.SetInfo.SetItemName()[i]}`} onClick={PassClickedItemName}>
                                    <div className='setitemcard setitemcard--primary'>
                                        <img src={item} className='setitemcard__image' style={SetFunctions.SetInfo.SetRarity()[i]} alt={`${SetFunctions.SetInfo.SetItemName()[i].replaceAll(/-/gi, ' ').replaceAll(/~/gi, '-').toUpperCase()} FROM ITEM SET ${SetFunctions.SetInfo.SetName()}`} />
                                    </div>
                                </Link>
                    }
                })}
            </div>
        </div>
    )

}




export default ItemSet;