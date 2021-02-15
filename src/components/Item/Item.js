import React, {useEffect, useContext} from 'react';
import ItemContext from '../context/ItemContext/ItemContext'
import Spinner from '../layout/spinner/Spinner';
import ItemDetailsSection from '../Item/ItemDetailsSection/ItemDetailsSection'
import SetContext from '../context/SetContext/SetContext'
import './Item.css';
import ItemFunctions from '../../App Wide Functions/ItemFunctions';

const Item = ({match}) => {
    const {GetItem, GetItemSet, loading, item} = useContext(ItemContext);
    const {GetSet} = ItemFunctions;
    
    useEffect(() => {
        GetItem(match.params.itemname);
        if (item) GetSet(item, GetItemSet);
        //eslint-disable-next-line
    }, []);

    return (
        <div className='item item--primary'>
            { loading ? <Spinner /> : <ItemDetailsSection /> }
        </div>
    )
}

export default Item
