import ItemContext from '../../../../context/ItemContext/ItemContext'
import './ItemSet.css'
import {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import FormatFunctions from '../../../../../App Wide Functions/FormatFunctions'
import ItemFunctions from '../../../../../App Wide Functions/ItemFunctions';
import Skeleton from 'react-loading-skeleton'
import NSItemCard from '../../../../NSItemCard/NSItemCard'


const ItemSet = ({length}) => {

    const {ItemsOfSameSet, GetItem, GetItemSet, item} = useContext(ItemContext);
    const {setCardRarityStyle, SetLinkByIDType, NameCharacterHandler} = FormatFunctions;
    const {
        GetSet,
        SetName,
        SetItemSetLink,
        ItemImage,
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

                        return  <NSItemCard category={SetLinkByIDType(id)}
                                name={name.toUpperCase()} cardStyle={setCardRarityStyle(displayValue)}
                                handledName={NameCharacterHandler(name)}
                                imgSRC={ItemImage(item)} islink={true}
                                />
                    }
                })}
            </div>
        </div>
    )

}

export default ItemSet;