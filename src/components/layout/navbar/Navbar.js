import {useState, useContext} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import MobileMenuIcon from '../../../media/images/MobileMenuIcon.svg'
import XCloseIcon from '../../../media/images/XCloseIcon.svg'
import ShopContext from '../../context/ShopContext/ShopContext';
const Navbar = () => {
    
    const [showMenu, setShowMenu] = useState(false);
    const {GetCurrentShop} = useContext(ShopContext)

    return (
        <div className='navbar navbar--primary'>
            <Link to='/' style={{margin: '8.75px 0px 0px 0px', padding: '0px', textDecoration: 'none'}}>
                <span style={{fontFamily: 'Fortnite', color: 'white', fontSize: '2.25em',
                        paddingLeft: '25px', margin: '0px'}}>FORTNITEBR</span>
            </Link>
            
            {showMenu && <div className='mobilepopupmenu mobilepopupmenu--primary'>
                            <div className='xcloseiconsection xcloseiconsection--primary'>
                                <img className='xcloseiconsection__icon' src={XCloseIcon} onClick={() => {
                                    setShowMenu(false)
                                }} />
                            </div>
                            <ul className='mobilepopupmenu__ul'>
                                <li className='mobilepopupmenu__option'>
                                    <Link className='mobilepopupmenu__optionlink' to='/shop' onClick={() => {
                                        GetCurrentShop();
                                        setShowMenu(false)
                                    }}>
                                        TODAY'S ITEM SHOP
                                    </Link>
                                </li>
                                <li className='mobilepopupmenu__option'>
                                    <Link className='mobilepopupmenu__optionlink' to='/stats' onClick={() => {
                                        // stats
                                        setShowMenu(false)
                                    }}>
                                        ACCOUNT STATS
                                    </Link>
                                </li>
                            </ul>
                        </div>
            }
                <img className='mobilemenuicon' src={MobileMenuIcon} alt='mobile menu image' onClick={() =>
                    setShowMenu(true)
                }/>
        </div>
    )
}

export default Navbar