import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const navigate = useNavigate();

    // 2. useEffect to add and clean up the scroll listener
    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is past a certain threshold (e.g., 100 pixels)
            const isScrolled = window.scrollY > 400;
            if (isScrolled !== hasScrolled) {
                setHasScrolled(isScrolled);
            }
        };

        // Attach the listener to the window
        window.addEventListener('scroll', handleScroll);

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]); // Re-run effect only if hasScrolled changes

    return (
        <div className="fixed top-0 left-0 z-50 w-full py-3 px-4 sm:py-4 sm:px-6 backdrop-blur-sm shadow-md transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
                {/* Logo (Left Side) */}
                <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                    <img src="/logo-black.png" alt="Floyd School" className="h-7 sm:h-8 object-contain" />
                </div>

                {/* Login Button (Right Side) */}
                {/* Conditional rendering: Only show the button when 'hasScrolled' is true */}
                {hasScrolled && (
                    <div className=" md:block mr-20"> {/* Hide on small screens, show on medium and large screens */}
                        <button
                            onClick={() => navigate('/role')}
                            className="bg-[#2D2D2D] hover:bg-[#2563EB] text-white px-6 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Logo

