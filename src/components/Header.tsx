import React from 'react';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

const Header: React.FC = () => {
    return (
        <div className="h-30 border-b-gray-200 border-2 bg-white flex justify-between items-center p-4">
            <Logo />
            <Search />
            <UserMenu />
        </div>
    );
};

export default Header;