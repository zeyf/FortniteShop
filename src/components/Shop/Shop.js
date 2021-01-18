import React, {useContext, useEffect} from 'react';
import ShopContext from '../context/ShopContext/ShopContext';
import FeaturedShopSection from './ShopSections/FeaturedShopSection/FeaturedShopSection';
import DailyShopSection from './ShopSections/DailyShopSection/DailyShopSection';
import './Shop.css';
import Spinner from '../../media/images/Spinner.svg';
import Inf from '../../media/images/Infinity.svg';
const Shop = (props) => {
    
    const sContext = useContext(ShopContext);

    useEffect(() => {
        sContext.GetCurrentShop()
        // eslint-disable-next-line
    }, [])

    console.log(sContext.loading)
    

    return (
        <div className='shop shop--primary'>
            <h1 className='shopview__head'>Today's Shop</h1>
            <div className="shopview shopview--primary">
                <DailyShopSection />
                <FeaturedShopSection />
            </div>
        </div>
    )
}

export default Shop
