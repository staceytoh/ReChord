import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../photos/logo.png'; 

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Section: Logo */}
                <Link to="/" className="flex items-center space-x-4">
                    {/* Larger logo */}
                    <img src={logo} alt="ReChord Logo" className="w-56 h-auto" />
                    {/*<div>
                        <h1 className="text-2xl font-bold">
                            <span className="text-indigo-400">Chord</span>
                        </h1>
                        <p className="text-sm text-gray-400">Share your sound</p>
                    </div>*/}
                </Link>

                {/* Right Section: Navigation Links */}
                <div className="flex items-center space-x-8">
                    <Link
                        to="/reviews"
                        className="text-sm font-medium hover:underline hover:text-indigo-400"
                    >
                        Reviews
                    </Link>
                    <Link
                        to="/news"
                        className="text-sm font-medium hover:underline font-bold hover:text-indigo-400"
                    >
                        News
                    </Link>
                    <Link
                        to="/social"
                        className="text-sm font-medium hover:underline hover:text-indigo-400"
                    >
                        Social
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
