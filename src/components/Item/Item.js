import React, {useEffect, useContext} from 'react';
import ItemContext from '../context/ItemContext/ItemContext'

const Item = ({match}) => {

    const iContext = useContext(ItemContext);


    useEffect(() => {
        iContext.GetItem(match.params.itemid);
    }, []);

    return (
        <div className='item item--primary'>
            <p>{iContext.item && iContext.item.name}</p>
        </div>
    )
}

export default Item
