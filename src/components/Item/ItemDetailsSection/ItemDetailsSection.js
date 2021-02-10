import {useContext} from 'react';
import ItemCardSection from './Item Details Components/Item Card/ItemCardSection';
import ItemVariants from './Item Details Components/Item Variants/ItemVariants';
import ItemSet from './Item Details Components/Item Set/ItemSet';
import ItemContext from '../../context/ItemContext/ItemContext';
import './ItemDetailsSection.css';

const ItemDetailsSection = () => {

    const {item} = useContext(ItemContext)

    const CheckForVariants = () => {
        if (item) {
            const {variants} = item;
            if (variants) return <ItemVariants />
        }
    }

    const CheckForSet = () => {
        if (item) {
            const {set} = item;
            if (set) return <ItemSet length={5} />
        }
    }

    return (
        <div className='itemdetailssection itemdetailssection--primary'>
            <ItemCardSection />
            {CheckForVariants()}
            {CheckForSet()}
        </div>
    )
}

export default ItemDetailsSection