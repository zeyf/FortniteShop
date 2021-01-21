import ItemContext from '../../../../context/ItemContext/ItemContext'
import './ItemSet.css'
import {useEffect, useContext} from 'react';

const ItemSet = () => {

    const iContext = useContext(ItemContext);

    const GetSet = () => {
        if (iContext.item) {
            if (iContext.item.set) {
                const {value} = iContext.item.set;    
                iContext.GetItemSet(value);
            }
        }
    }

    useEffect(() => {
        GetSet();
    }, [])

    return (
        <div>
            has set
        </div>
    )
}




export default ItemSet;