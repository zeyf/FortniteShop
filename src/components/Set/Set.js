import React, {useContext, useEffect} from 'react'
import SetContext from '../context/SetContext/SetContext';
import ItemSet from '../Item/ItemDetailsSection/Item Details Components/Item Set/ItemSet'
import Spinner from '../layout/spinner/Spinner';
import ItemFunctions from '../../App Wide Functions/ItemFunctions'
import FormatFunctions from '../../App Wide Functions/FormatFunctions'
import {Link} from 'react-router-dom'
import ItemContext from '../context/ItemContext/ItemContext';

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
                THE <span style={{color: '#ffe227'}}>{SetName} SET</span> ({SetInfo && SetInfo.length})
            </h2>
            <div className="setcontainer setcontainer--primary">
                {SetInfo && SetInfo.map((item, i) => {
                    
                    const {id, rarity, name} = item;
                    const {displayValue} = rarity

                    return <Link to={`/items/${SetLinkByIDType(id)}/${NameCharacterHandler(name)}`} onClick={() => {
                        GetItem(NameCharacterHandler(name))
                    }}>
                                <div className='setitemcard setitemcard--primary' style={setCardRarityStyle(displayValue)}>
                                    <img src={ItemImage(item)} style={{height: '150px', width: '150px'}} />
                                </div>
                            </Link>
                })}
            </div>
            </>
            }
        </div>
    )
}

export default Set
