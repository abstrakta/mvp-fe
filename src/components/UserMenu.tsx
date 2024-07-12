import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const UserMenu: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative inline-block me-7">
            {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                    <span>pavel@casper.network</span>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="w-10 h-10 rounded-full flex border-2 items-center justify-center ms-1"
                            style={{ borderColor: '#4b89db' }}
                        >
                            <FontAwesomeIcon icon={faUser} className="text-2xl" style={{ color: '#4b89db' }}/>
                        </button>
                        {isDropdownOpen && (
                            <div
                                ref={dropdownRef}
                                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg"
                                style={{ right: 0 }}
                            >
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-100">Home</li>
                                    <li className="px-4 py-2 hover:bg-gray-100">Upload Research</li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/research/1">
                                            <span className="cursor-pointer">My Research</span>
                                        </Link></li>
                                    <li className="px-4 py-2 hover:bg-gray-100">Explore</li>
                                    <li className="px-4 py-2 hover:bg-gray-100">My Account</li>
                                    <li className="px-4 py-2 hover:bg-gray-100">Help</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Log Out</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex space-x-2">
                    <button onClick={handleLogin} className="text-blue-500 hover:underline">Login</button>
                    <span>|</span>
                    <button onClick={handleLogin} className="text-blue-500 hover:underline">Sign Up</button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;