import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Floyd School Logo component
 * @param {'dark' | 'light'} variant - 'dark' for dark text (on light backgrounds), 'light' for white text (on dark backgrounds)
 * @param {string} className - Additional CSS classes
 * @param {number} height - Image height in pixels (default: 32)
 * @param {boolean} asLink - Whether to wrap in a Link to home page (default: true)
 */
const FloydLogo = ({
  variant = 'light',
  className = '',
  height = 32,
  asLink = true,
  onClick,
}) => {
  const logoSrc = variant === 'light' ? '/logo-white.png' : '/logo-black.png';

  const content = (
    <img
      src={logoSrc}
      alt="Floyd School"
      className={`object-contain transition-transform duration-200 select-none ${className}`}
      style={{ height: `${height}px`, width: 'auto' }}
      loading="eager"
    />
  );

  if (!asLink) {
    return (
      <div onClick={onClick} className="inline-flex items-center cursor-pointer">
        {content}
      </div>
    );
  }

  return (
    <Link to="/" onClick={onClick} className="inline-flex items-center group">
      {content}
    </Link>
  );
};

export default FloydLogo;
