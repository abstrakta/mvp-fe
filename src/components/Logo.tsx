import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
    );
};

export default Logo;