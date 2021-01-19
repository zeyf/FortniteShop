import React, {useContext} from 'react';
import ItemContext from '../../context/ItemContext/ItemContext';
import ItemShopHistory from './Item Shop History/ItemShopHistory'
import './ItemDetailsSection.css';

const ItemDetailsSection = () => {

    const iContext = useContext(ItemContext)
    return (
        <div className='itemdetailssection itemdetailssection--primary'>
            <ItemShopHistory />
        </div>
    )
}

export default ItemDetailsSection
