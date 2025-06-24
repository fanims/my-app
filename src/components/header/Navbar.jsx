import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-800">My App</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
                        <Link to="/contact-us" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar