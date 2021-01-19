import React, {useContext} from 'react'
import ItemContext from '../../../../context/ItemContext/ItemContext'

const ItemCard = () => {

    const iContext = useContext(ItemContext);
    console.log(iContext.CardRarity)

    return (
        <div>
            
        </div>
    )
}

export default ItemCard
