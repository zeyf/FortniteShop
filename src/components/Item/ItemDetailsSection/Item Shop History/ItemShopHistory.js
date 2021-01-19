import React, {useContext} from 'react';
import ItemContext from '../../../context/ItemContext/ItemContext';
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
        <div>
            <table>
                <th>
                    <td>
                        Date
                    </td>
                </th>
                <tbody>
                    {iContext.item && mutableShopHistory().reverse().map((appearance, i) => {
                        
                        const dateparsed = appearance.split('T')[0];
        
                        return <tr><td>{dateparsed}</td></tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ItemShopHistory
