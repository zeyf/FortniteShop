import React, {useContext} from 'react';
import ItemContext from '../../context/ItemContext/ItemContext';
import ItemShopHistory from './Item Details Components/Item Shop History/ItemShopHistory'
import ItemCard from './Item Details Components/Item Card/ItemCard'
import './ItemDetailsSection.css';

const ItemDetailsSection = () => {

    const iContext = useContext(ItemContext)
    return (
        <div className='itemdetailssection itemdetailssection--primary'>
            <ItemCard />
            <ItemShopHistory />
        </div>
    )
}

export default ItemDetailsSection
