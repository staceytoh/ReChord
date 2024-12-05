import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../photos/logo.png';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="flex-1 flex justify-center">
                    <img src={logo} alt="ReChord Logo" className="w-56 h-auto" />
                </Link>

                {/* Navigation Links */}
                <div className="flex-1 flex justify-center">
                    <Link
                        to="/reviews"
                        className="text-2xl font-medium hover:underline hover:text-indigo-400"
                    >
                        Reviews
                    </Link>
                </div>
                <div className="flex-1 flex justify-center">
                    <Link
                        to="/news"
                        className="text-2xl font-medium hover:underline hover:text-indigo-400"
                    >
                        News
                    </Link>
                </div>
                <div className="flex-1 flex justify-center">
                    <Link
                        to="/social"
                        className="text-2xl font-medium hover:underline hover:text-indigo-400"
                    >
                        Social
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
