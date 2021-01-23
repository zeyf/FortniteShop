import React, {useContext} from 'react';
import ItemContext from '../../../../context/ItemContext/ItemContext';
import './ItemShopHistory.css';
import VBUCKS from '../../../../../media/images/VBUCKS.png'

const ItemShopHistory = ({price}) => {

    const iContext = useContext(ItemContext)

    const mutableShopHistory = () => {
        if (iContext.loading === false) {

            const {item} = iContext;
            const {shopHistory} = item;

            if (shopHistory) {

                return [...shopHistory]
            } else {
                return []
            }

            // a practical use for the spread operator...
            // couldn't do array reverse (to have recent appearances first)
            // on shophistory from iContext directly as it references state (which is immutable)
        }
    }

    return (
        <div className="itemshophistory itemshophistory--primary">
            <div className='tablesummaryhead tablesummaryhead--primary'>
                SHOP HISTORY
            </div>
            <div className='historytablescroll historytablescroll--primary'>
                <table className='historytable historytable--primary'>
                    <thead>
                    <tr>
                        <th className='historytable__tcol' scope='col'>DATE</th>
                        <th className='historytable__tcol' scope='col'>PRICE</th>
                    </tr>
                    </thead>
                    <tbody>
                        {iContext.item ? mutableShopHistory().reverse().map((item, i) => {

                            const date = item.split(/T/gi)[0]

                            return <tr className='historytable__bodyrow'>
                                    <td className='historytable__bodydata'>{date}</td>
                                    <td className='historytable__bodydata'>
                                        <span className='historytable__span'>
                                            <img className='historytable__priceimage' src={VBUCKS}/>
                                        {price}
                                        </span>
                                    </td>
                                   </tr>;
                        }) : <tr className='historytable__bodyrow'>
                        <td className='historytable__bodydata'>
                            <span className='historytable__span'>Battle Pass Item</span></td></tr>}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ItemShopHistory
