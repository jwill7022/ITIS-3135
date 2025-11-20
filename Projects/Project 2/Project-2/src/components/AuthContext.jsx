import React, { createContext, useContext, useState, useEffect} from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    useEffect(() => {
        if(user) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');
        }
    }, [user]);

    const login = (username, password) => {

        if (username && password.length >= 6) {
            const userData = { username, loggedInAt: new Date().toISOString() };
            setUser(userData);
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

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