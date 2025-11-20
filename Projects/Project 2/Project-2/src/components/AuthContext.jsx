import React, { createContext, useContext, useState, useEffect} from 'react';

// Create context for authentication state management
const AuthContext = createContext();

// Custom hook to access authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to manage user authentication state
function AuthProvider({ children }) {
    // Initialize user from localStorage or null
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    // Track if user is authenticated
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    // Persist authentication state to localStorage
    useEffect(() => {
        if(user) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');
        }
    }, [user]);

    // Login function - validates credentials and sets user state
    const login = (username, password) => {
        // Accept any username with password >= 6 characters for demo
        if (username && password.length >= 6) {
            const userData = { username, loggedInAt: new Date().toISOString() };
            setUser(userData);
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    // Logout function - clears user state
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;