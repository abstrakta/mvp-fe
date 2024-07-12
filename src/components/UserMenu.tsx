import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const UserMenu: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const redirectToLogin = () => {
        router.push('/login');
        handleLogin();
    };

    return (
        <div className="relative inline-block me-7">
            {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                    <span>pavel@casper.network</span>
                    <div className="relative">
                        <button
                            onClick={handleLogout}
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: '#4b89db', borderColor: '#4b89db' }}
                        >
                            <FontAwesomeIcon icon={faUser} className="text-3xl text-white" />
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex space-x-2">
                        <button onClick={redirectToLogin} className="text-blue-500 hover:underline">Login</button>
                        <span>|</span>
                        <button onClick={redirectToLogin} className="text-blue-500 hover:underline">Sign Up</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;