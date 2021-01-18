import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className='navbar navbar--primary'>
            <p style={{fontFamily: 'Fortnite', color: 'white', fontSize: '2.5em',
                        padding: '0px', margin: '0px'}}>FORTNITESHOP</p>
            <ul className='navbarmenu navbarmenu--primary'>
                <li className="navbarmenu__item">
                    <button className='navbarmenu__button'>
                        CHECK YOUR STATS
                        </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
