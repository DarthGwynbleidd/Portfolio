import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <ul className='nav_ul'>
                <NavLink className='nav__ul__link' to='/'>About</NavLink>
                <NavLink className='nav__ul__link' to='/Projects'>Projects</NavLink>
                <NavLink className='nav__ul__link' to='/Contact'>Contact</NavLink>
            </ul>
        </div>
    );
};

export default Nav;