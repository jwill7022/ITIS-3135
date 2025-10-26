function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 shadow-lg">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">My Blog</h1>
                <nav>
                    <ul className="flex space-x-6 text-lg">
                        <li>
                            <a href="#home" className="hover:text-blue-200 transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-blue-200 transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-200 transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;