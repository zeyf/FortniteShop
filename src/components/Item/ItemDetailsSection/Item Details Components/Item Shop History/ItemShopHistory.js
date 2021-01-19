import React, {useContext} from 'react';
import ItemContext from '../../../../context/ItemContext/ItemContext';
import './ItemShopHistory.css';

const ItemShopHistory = () => {

    const iContext = useContext(ItemContext)

    const mutableShopHistory = () => {
        if (iContext.loading === false) {

            const {item} = iContext;
            const {shopHistory} = item;
            return [...shopHistory]

            // a practical use for the spread operator...
            // couldn't do array reverse (to have recent appearances first)
            // on shophistory from iContext directly as it references state (which is immutable)
        }
    }

    return (
        <div className="itemshophistory itemshophistory--primary">

            <table className='historytable historytable--primary'>
                <thead>
                    <tr>
                        <th scope='col'>
                            Date
                        </th>
                        <th scope='col'>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {iContext.item && mutableShopHistory().reverse().map((appearance, i) => {
                        
                        const dateparsed = appearance.split('T')[0];
        
                        return <tr className='historytable__row'>
                                    <td className='historytable__data'>
                                        {dateparsed}
                                    </td>
                                    <td className='historytable__data'>
                                        dddddd
                                    </td>
                                </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ItemShopHistory
