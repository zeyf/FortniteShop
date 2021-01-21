import React, {useContext} from 'react';
import ItemContext from '../../context/ItemContext/ItemContext';
import './ItemDetailsSection.css';
import ItemCardSection from './Item Details Components/Item Card/ItemCardSection';
import ItemVariants from './Item Details Components/Item Variants/ItemVariants';

const ItemDetailsSection = () => {

    const iContext = useContext(ItemContext)

    const CheckForVariants = () => {
        if (iContext.item) {
            if (iContext.item.variants) {
                return <ItemVariants />
            }
        }
    }

    return (
        <div className='itemdetailssection itemdetailssection--primary'>
            <ItemCardSection />
            {CheckForVariants()}
        </div>
    )
}

export default ItemDetailsSection
