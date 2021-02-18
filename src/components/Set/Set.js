import React, {useContext, useEffect} from 'react'
import SetContext from '../context/SetContext/SetContext';
import ItemSet from '../Item/ItemDetailsSection/Item Details Components/Item Set/ItemSet'
import Spinner from '../layout/spinner/Spinner';
import ItemFunctions from '../../App Wide Functions/ItemFunctions'
import FormatFunctions from '../../App Wide Functions/FormatFunctions'
import ItemContext from '../context/ItemContext/ItemContext';
import NSItemCard from '../NSItemCard/NSItemCard';
import './Set.css'

const Set = ({match}) => {

    const {SetName, SetInfo, loading, GetSet} = useContext(SetContext);
    const {GetItem} = useContext(ItemContext)
    useEffect(() => {
       GetSet(match.params.setname)
        //eslint-disable-next-line
    }, [])

    const {setCardRarityStyle, SetLinkByIDType, NameCharacterHandler} = FormatFunctions;
    const {ItemImage, SetItemName} = ItemFunctions;

    return (

        <div className='set set--primary'>
            {loading ? <Spinner /> :  <>
            <h2 className="set__head">
                <h1 className='set__head'>THE {SetName} SET</h1>
            </h2>
            <div className="setcards setcards--primary">
                {SetInfo && SetInfo.map((item, i) => {
                    
                    const {id, rarity, name} = item;
                    const {displayValue} = rarity

                    return <NSItemCard category={SetLinkByIDType(id)}
                        name={name.toUpperCase()} cardStyle={setCardRarityStyle(displayValue)}
                        handledName={NameCharacterHandler(name)}
                        imgSRC={ItemImage(item)} height={200} width={200}
                    />
                })}
            </div>
            </>
            }
        </div>
    )
}

export default Set
