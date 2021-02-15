import ItemContext from '../../../../context/ItemContext/ItemContext'
import './ItemSet.css'
import {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import FormatFunctions from '../../../../../App Wide Functions/FormatFunctions'
import ItemFunctions from '../../../../../App Wide Functions/ItemFunctions';
import Skeleton from 'react-loading-skeleton'


const ItemSet = ({length}) => {

    const {ItemsOfSameSet, GetItem, GetItemSet, item} = useContext(ItemContext);
    const {setCardRarityStyle, SetLinkByIDType} = FormatFunctions;
    const {
        GetSet,
        SetName,
        SetItemSetLink,
        SetItemSetLength,
        SetItemSetImages,
        SetItemName
    } = ItemFunctions;

    useEffect(() => {
        GetSet(item, GetItemSet)
        //eslint-disable-next-line
    }, [])

    return (
        <div className='itemsetsection itemsetsection--primary'>
            <h2 className="itemsetsection__head">
                PART OF THE <Link to={`/sets/${SetItemSetLink(SetName(item))}`} style={{textDecoration: 'none'}}><span style={{color: '#ffe227'}}>{SetName(item)} SET</span></Link>
            </h2>
            <div className="itemset itemset--primary">
                {ItemsOfSameSet && ItemsOfSameSet.map((item, i) => {
                    const {rarity, id, name} = item;
                    const {displayValue} = rarity;
                    if (i < length) {

                        return  <Link style={{textDecoration: 'none'}} to={`/items/${SetLinkByIDType(id)}/${SetItemName(ItemsOfSameSet)[i]}`} onClick={() => {GetItem(SetItemName(ItemsOfSameSet)[i])}}> {/* // set item name as param */}
                                    <div className='setitemcard setitemcard--primary' style={setCardRarityStyle(displayValue)}>
                                        <img src={SetItemSetImages(ItemsOfSameSet)[i]} className='setitemcard__image' alt={`${SetItemName(ItemsOfSameSet)[i].replaceAll(/-/gi, ' ').replaceAll(/~/gi, '-').toUpperCase()} FROM ITEM SET ${SetName(item)}`} />
                                        
                                    </div>
                                </Link>

                    }
                })}
            </div>
        </div>
    )

}

export default ItemSet;