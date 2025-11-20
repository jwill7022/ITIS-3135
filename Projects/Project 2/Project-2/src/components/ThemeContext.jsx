import { createContext, useContext, useState, useEffect } from "react";

// Create context for theme state management
const ThemeContext = createContext();

// Custom hook to access theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to manage light/dark mode
export function ThemeProvider({ children }) {
    // Initialize theme from localStorage or default to 'light'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    // Apply theme class to document root and persist to localStorage
    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            // Add 'dark' class to enable Tailwind dark mode
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => setTheme(t => t === "light" ? 'dark' : "light");

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children} 
        </ThemeContext.Provider>
    )
}