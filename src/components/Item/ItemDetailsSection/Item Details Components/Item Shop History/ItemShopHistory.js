import React, {useContext} from 'react';
import ItemContext from '../../../../context/ItemContext/ItemContext';
import './ItemShopHistory.css';
import VBUCKS from '../../../../../media/images/VBUCKS.png'

const ItemShopHistory = ({price}) => {

    const {loading, item} = useContext(ItemContext)

    const mutableShopHistory = () => {
        if (loading === false) {
            const {shopHistory} = item;
            if (shopHistory) return [...shopHistory]
            if (!shopHistory) return []
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
                        {item && item.shopHistory && item.shopHistory.length > 0 && mutableShopHistory().reverse().map((item, i) => {

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
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ItemShopHistory
