import React, {useEffect, useContext} from 'react';
import ItemContext from '../context/ItemContext/ItemContext'
import LOADER from '../../media/images/InfinityWhite.svg'
import ItemDetailsSection from '../Item/ItemDetailsSection/ItemDetailsSection'
import './Item.css';

const Item = ({match}) => {
    const {GetItem, loading} = useContext(ItemContext);
    
    useEffect(() => {
        GetItem(match.params.itemname);
        //eslint-disable-next-line
    }, []);

    return (
        <div className='item item--primary'>
            { loading ? <img src={LOADER} alt='loader' /> : <ItemDetailsSection /> }
        </div>
    )
}

export default Item
