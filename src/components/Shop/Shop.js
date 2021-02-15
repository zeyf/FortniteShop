import React, {useContext, useEffect} from 'react';
import ShopContext from '../context/ShopContext/ShopContext';
import FeaturedShopSection from './ShopSections/FeaturedShopSection/FeaturedShopSection';
import DailyShopSection from './ShopSections/DailyShopSection/DailyShopSection';
import './Shop.css';
import Spinner from '../layout/spinner/Spinner';
import {Helmet} from 'react-helmet';

const Shop = () => {
    
    const {GetCurrentShop, loading} = useContext(ShopContext);

    useEffect(() => {
        GetCurrentShop()
        console.log(window.screen.width)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='shop shop--primary'>
        <Helmet><title>{loading && `FortniteBR: Item Shop, Item Data, and much more!`}</title></Helmet>
            <h1 className='shopview__head'>Today's Shop</h1>
                    <div className="shopview shopview--primary">
                        <FeaturedShopSection key='featuredshopsection' />
                        <DailyShopSection key='dailyshopsection' />
                    </div>
        </div>
    )
}

export default Shop
