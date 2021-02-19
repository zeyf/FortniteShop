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
            <Link to='/' className='navbar__headtextlink'>
                <span className='navbar__headtext'>FORTNITEBR</span>
            </Link>
            
            {showMenu && <div className='mobilepopupmenu mobilepopupmenu--primary'>
                            <div className='xcloseiconsection xcloseiconsection--primary'>
                                <img className='xcloseiconsection__icon' alt='close mobile menu icon' src={XCloseIcon} onClick={() => {
                                    setShowMenu(false)
                                }} />
                            </div>
                            <ul className='mobilepopupmenu__ul'>
                                <li className='mobilepopupmenu__option'>
                                    <Link className='mobilepopupmenu__optionlink' to='/' onClick={() => {
                                        GetCurrentShop();
                                        setShowMenu(false)
                                    }}>
                                        HOME
                                    </Link>
                                </li>
                                <li className='mobilepopupmenu__option'>
                                    <Link className='mobilepopupmenu__optionlink' to='/stats' onClick={() => {
                                        // stats
                                        setShowMenu(false)
                                    }}>
                                        STATS LOOKUP
                                    </Link>
                                </li>
                                <li className='mobilepopupmenu__option'>
                                    <Link className='mobilepopupmenu__optionlink' to='/news' onClick={() => {
                                        setShowMenu(false)
                                    }}>
                                        NEWS
                                    </Link>
                                </li>
                                <li className='mobilepopupmenu__option'>
                                    <Link className='mobilepopupmenu__optionlink' to='/search' onClick={() => {
                                        setShowMenu(false)
                                    }}>
                                        SEARCH
                                    </Link>
                                </li>
                            </ul>
                        </div>
            }
                <img className='mobilemenuicon' src={MobileMenuIcon} alt='mobile menu image' onClick={() =>
                    setShowMenu(true)
                }/>
            <div className='nonmobilemenu nonmobilemenu--primary'>
                <ul className='nonmobilemenu__ul'>
                    <li className='nonmobilemenu__option'>
                        <Link to='/' className='nonmobilemenu__optionlink'>
                            HOME
                        </Link>
                    </li>
                    <li className='nonmobilemenu__option'>
                        <Link to='/stats' className='nonmobilemenu__optionlink'>
                            STATS   
                        </Link>
                    </li>
                    <li className='nonmobilemenu__option'>
                        <Link to='/news' className='nonmobilemenu__optionlink'>
                            NEWS
                        </Link>
                    </li>
                    <li className='nonmobilemenu__option'>
                        <Link to='/search' className='nonmobilemenu__optionlink'>
                            SEARCH
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar