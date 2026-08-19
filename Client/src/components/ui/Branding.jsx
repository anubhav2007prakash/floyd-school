import React from 'react';

const Branding = ({ className = "", variant = "dark", height = 24 }) => {
    const logoSrc = variant === 'light' ? '/logo-white.png' : '/logo-black.png';
    return (
        <span className={`inline-flex items-center ${className}`}>
            <img src={logoSrc} alt="Floyd School" style={{ height: `${height}px` }} className="object-contain" />
        </span>
    );
};

export default Branding;
