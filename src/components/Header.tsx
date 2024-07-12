import React from 'react';
import Logo from '@/components/Logo';
import Search from '@/components/Search';
import UserMenu from '@/components/UserMenu';

export default function Header() {
    return (
        <div className="h-36 border-b-gray-200 border-2 bg-white flex justify-between items-center ps-8">
            <div className="flex items-center">
                <Logo />
                <Search />
            </div>
            <UserMenu />
        </div>
    );
}