'use client';
import { useEffect, useState } from "react";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed z-50 ${isScrolled ? 'bg-gray-100 shadow-md rounded-full' : 'bg-transparent'} top-3 right-3 w-50px h-50px align-middle transition-all duration-500`}>
            <div className="mx-auto flex justify-between items-center">
                <div>
                    <button className="text-gray-500 focus:outline-none align-middle p-4" onClick={handleMenuToggle}>
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
                <ul className={`flex flex-col rounded-none bg-white absolute top-20 -right-3 ${isMenuOpen ? 'block w-70 h-auto' : 'hidden'} p-4 text-xl`}>
                    <li>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold">About me</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold">My projects</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold">Contact me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
