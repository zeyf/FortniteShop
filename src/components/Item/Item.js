import React, {useEffect, useContext} from 'react';
import ItemContext from '../context/ItemContext/ItemContext'
import Spinner from '../layout/spinner/Spinner';
import ItemDetailsSection from '../Item/ItemDetailsSection/ItemDetailsSection'
import './Item.css';

const Item = ({match}) => {
    const {GetItem} = useContext(ItemContext);
    
    useEffect(() => {
        GetItem(match.params.itemname);
        //eslint-disable-next-line
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
