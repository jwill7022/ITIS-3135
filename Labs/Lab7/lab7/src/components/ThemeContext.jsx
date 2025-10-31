import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
    // Get initial theme from localStorage or default to 'light'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    // Effect to update localStorage and apply the 'dark' class to the body/html tag
    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(t => t === "light" ? 'dark' : "light");

    // Corrected the typo 'retrun' to 'return'
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children} 
        </ThemeContext.Provider>
    )
}