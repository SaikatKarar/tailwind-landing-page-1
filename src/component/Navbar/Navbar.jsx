import React, { useState } from 'react';
import logo from '../../assets/asset 0.png';
import asset_1 from '../../assets/asset 1.svg';
import { ArrowRightIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { navigation } from '../constants';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Single state for both open and close

    function handleToggleMenu() {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    }

    return (
        <nav className="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
            {/* Brand */}
            <a href="#" id="brand" className="flex gap-2 items-center flex-1">
                <img className="object-cover max-w-12 max-h-12" src={logo} alt="Logo" />
                <span className="text-lg font-medium font-display">ToDesktop</span>
            </a>

            {/* Desktop Nav Menu */}
            <div id="nav-menu" className="hidden lg:flex gap-12">
                {navigation.map((item) => (
                    <a key={item.id} href="#" className="font-medium hover:text-primary">{item.title}</a>
                ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden lg:flex flex-1 justify-end">
                <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
                    <img src={asset_1} alt="" />
                    <span className="font-display font-medium">Electron Developers</span>
                    <ArrowRightIcon className="size-5" />
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="p-2 lg:hidden" onClick={handleToggleMenu}>
                {isMenuOpen ? (
                    <XMarkIcon className="size-6 text-gray-600" /> // Close icon if menu is open
                ) : (
                    <Bars3BottomRightIcon className="size-6 text-gray-600" /> // Hamburger icon if menu is closed
                )}
            </button>

            {/* Mobile Nav Menu */}
            <div id="nav-dialog" className={`${isMenuOpen ? 'fixed z-10 lg:hidden bg-white inset-0 p-3' : 'hidden'}`}>
                <div id="nav-bar" className="flex justify-between">
                    {/* Brand inside mobile menu */}
                    <a href="#" id="brand" className="flex gap-2 items-center">
                        <img className="object-cover max-w-12 max-h-12" src={logo} alt="Logo" />
                        <span className="text-lg font-medium font-display">ToDesktop</span>
                    </a>

                    {/* Mobile Menu Close Button */}
                    <button className="p-2 lg:hidden" onClick={handleToggleMenu}>
                        <XMarkIcon className="size-6 text-gray-600" />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="mt-6">
                    {navigation.map((item) => (
                        <a key={item.id} href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">
                            {item.title}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gray-300"></div>

                {/* Mobile Button */}
                <button className="mt-6 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-gray-50">
                    <img src={asset_1} alt="" />
                    <span>Electron Developers</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
