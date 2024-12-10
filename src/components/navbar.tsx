
import { navItemsEs } from "../constants/navbar-data";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Navbar() {
    const [menuDrawerIsOpen, setMenuDrawerIsOpen] = useState(false);
    const handleNavbar = () => { setMenuDrawerIsOpen(!menuDrawerIsOpen); }
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = navItemsEs.map(item => document.querySelector(item.link));
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, [navItemsEs]);

    return (
        <nav className="shadow-lg shadow-pink-300 rounded-xl sticky z-50 py-3 mt-5 backdrop-blur-lg w-full max-w-2xl mx-auto">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">
                    <ul className="hidden lg:flex space-x-12">
                        {navItemsEs.map((item, index) => (
                            <li key={index} className={`hover:transition-all duration-500 transform ${activeSection === item.link.substring(1) ? 'scale-110' : ''} hover:text-pink-400`}>
                                <a href={item.link} className="font-semibold text-gray-400 hover:text-pink-300">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={handleNavbar} className="text-2xl text-gray-400">
                            {menuDrawerIsOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
                {menuDrawerIsOpen && (
                    <div className={`fixed right-0 z-20 rounded-b-xl  w-full p-12 flex flex-col justify-center items-center lg:hidden bg-white}`}>
                        <ul>
                            {navItemsEs.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;