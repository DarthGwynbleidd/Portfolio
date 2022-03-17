import React from 'react';
import Profile from './Profile';
import Nav from './Nav';

const Header = () => {
    return (
        <div className='header'>
            <Profile />
            <Nav />
        </div>
    );
};

export default Header;