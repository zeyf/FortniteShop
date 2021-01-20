import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className='navbar navbar--primary'>
            <Link to='/' style={{margin: '0px', padding: '0px', textDecoration: 'none'}}>
                <p style={{fontFamily: 'Fortnite', color: 'white', fontSize: '2.5em',
                        padding: '0px', margin: '0px'}}>FORTNITEBR</p>
            </Link>
            <ul className='navbarmenu navbarmenu--primary'>
                <li className="navbarmenu__item">
                    <button className='navbarmenu__button'>
                        SHOP
                        </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
