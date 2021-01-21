import React, {useContext} from 'react'
import ItemContext from '../../../../context/ItemContext/ItemContext';


const ItemVariants = () => {

    const iContext = useContext(ItemContext);

    const VariantFunctions = {
        
        GetVariants: () => {
            if (iContext.item) {
                if (iContext.item.variants) {
                    return iContext.item.variants;
                }
            }
        }
    }

    return (
        <div className='itemvariants itemvariants--primary'>
            Has variants
        </div>
    )
}

export default ItemVariants
