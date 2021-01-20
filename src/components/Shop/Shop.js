import React, {useContext, useEffect} from 'react';
import ShopContext from '../context/ShopContext/ShopContext';
import FeaturedShopSection from './ShopSections/FeaturedShopSection/FeaturedShopSection';
import DailyShopSection from './ShopSections/DailyShopSection/DailyShopSection';
import './Shop.css';
import Spinner from '../layout/spinner/Spinner';
const Shop = (props) => {
    
    const sContext = useContext(ShopContext);

    useEffect(() => {
        sContext.GetCurrentShop()
        // eslint-disable-next-line
    }, [])

    


    return (
        <div className='shop shop--primary'>
            <h1 className='shopview__head'>Today's Shop</h1>
            <div className="shopview shopview--primary">
                {sContext.loading ? <Spinner /> :
                    <>    
                        <DailyShopSection key='dailyshopsection' />
                        <FeaturedShopSection key='featuredshopsection' />
                    </>
                }
            </div>
        </div>
    )
}

export default Shop
