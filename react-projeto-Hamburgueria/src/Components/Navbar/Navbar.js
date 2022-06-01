import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav className='navbar'>
            
            <Link to="/" >
                <h1>TOMPERO</h1>
            </Link>
            <ul>
                <Link to="/cardapio" >
                    <li>Cardápio</li>
                </Link>
                <Link to="/form">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
