import React from 'react';
import { Link } from 'react-router-dom'; // for routing
import { useTheme } from '../ThemeContext.jsx';
import { useAuth } from '../AuthContext.jsx';

// Header component with navigation and theme toggle
function Header() {
    // Get theme state and toggler from context
    const { toggleTheme, theme } = useTheme();
    // Get authentication state and logout function from context
    const { isAuthenticated, user, logout } = useAuth();

    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 shadow-lg">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">
                    {/* Link to Home Page */}
                    <Link to="/" className="hover:text-blue-200 transition-colors">
                        THE Blog
                    </Link>
                </h1>
                <nav>
                    <ul className="flex space-x-6 text-lg items-center">
                        <li>
                            {/* Link to the Blog Posts Page */}
                            <Link to="/all" className="hover:text-blue-200 transition-colors">
                                Blog Posts
                            </Link>
                        </li>
                        <li>
                            {/* Link to the Contact Page */}
                            <Link to="/contact" className="hover:text-blue-200 transition-colors">
                                Contact
                            </Link>
                        </li>
                        <li>
                            {isAuthenticated ? (
                                <Link to="/" onClick={logout} className="hover:text-blue-200 transition-colors">
                                    Logout
                                </Link>
                            ) : (
                                <Link to="/login" className="hover:text-blue-200 transition-colors">
                                    Login
                                </Link>
                            )}
                        </li>
                        {/* Theme Toggle Button */}
                        <button 
                            onClick={toggleTheme}
                            className="ml-auto px-4 py-2 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition-colors font-semibold"
                        >
                            {/* Display current theme and switch text */}
                            Toggle to {theme === 'light' ? 'Dark' : 'Light'}
                        </button>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;