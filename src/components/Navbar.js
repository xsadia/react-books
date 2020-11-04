import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi';
import '../styles/components/Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);

    function handleClick()
    {
        setClick(!click);
    }

    function closeMobileMenu()
    {
        setClick(false);
    }

    return (
        <>
         <IconContext.Provider value={{color: '#1d1d1d'}}>
            <div className='navbar' >
                <div className='navbar-container container' >
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
                        <HiOutlineBookOpen className='navbar-icon' />
                        GOOGLE BOOKS
                    </Link>
                    <div className='menu-icon' onClick={handleClick} >
                        { click ? <FaTimes/> : <FaBars/> }
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' } >
                        <li className='nav-item' >
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/books' className='nav-links' onClick={closeMobileMenu} >
                                Books
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;