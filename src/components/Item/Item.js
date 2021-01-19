import React, {useEffect, useContext} from 'react';
import ItemContext from '../context/ItemContext/ItemContext'
import Spinner from '../layout/spinner/Spinner';
import ItemDetailsSection from '../Item/ItemDetailsSection/ItemDetailsSection'
import './Item.css';

const Item = ({match}) => {

    const iContext = useContext(ItemContext);


    useEffect(() => {
        iContext.GetItem(match.params.itemid);
    }, []);

    return (
        <div className='item item--primary'>

            {iContext.loading ? <Spinner /> :
                <>
                    <ItemDetailsSection />
                </>
            }
        </div>
    )
}

export default Item
