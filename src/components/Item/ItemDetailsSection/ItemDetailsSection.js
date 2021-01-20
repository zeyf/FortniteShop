import React, {useContext} from 'react';
import ItemContext from '../../context/ItemContext/ItemContext';

import './ItemDetailsSection.css';
import ItemCardSection from './Item Details Components/Item Card/ItemCardSection';

const ItemDetailsSection = () => {

    const iContext = useContext(ItemContext)
    return (
        <div className='itemdetailssection itemdetailssection--primary'>
            <ItemCardSection />
        </div>
    )
}

export default ItemDetailsSection
