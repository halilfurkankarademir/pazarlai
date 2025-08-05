import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const isLoggedInLS = localStorage.getItem("isLoggedIn");
        const token = localStorage.getItem("access_token");
        setIsLoggedIn(isLoggedInLS === "true" || !!token);
        setIsLoading(false);
    }, []);

    const login = () => {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        setIsLoading(false);
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("isLoggedIn"); // Eski key'i de temizle
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
