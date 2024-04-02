'use client'
import { useEffect, useState } from "react";




export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed z-50 top-0 w-full p-4 transition-all duration-500 ${isScrolled ? 'bg-gray-500 shadow-md' : 'bg-transparent text-transparent'}`}>
            <div className="mx-auto flex justify-center items-center">
                <ul className="flex space-x-32">
                    <li>
                        <a href="#" className="font-semibold ">Home</a>
                    </li>
                    <li>
                        <a href="#" className="">About</a>
                    </li>
                    <li>
                        <a href="#" className="">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        

    );
}
