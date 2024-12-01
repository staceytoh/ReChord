import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-lg font-bold">ReChord</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-blue-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/news" className="hover:text-blue-300">News</Link>
                    </li>
                    <li>
                        <Link to="/reviews" className="hover:text-blue-300">Reviews</Link>
                    </li>
                    <li>
                        <Link to="/social" className="hover:text-blue-300">Social</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
