import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { login as loginService } from "../services/auth";

type User = { userId: number; name: string; email: string };

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode<User>(token);
            setUser(decoded);
        }
    }, []);

    const login = async (email: string, password: string) => {
        const token = await loginService(email, password);
        localStorage.setItem("token", token);
        const decoded = jwtDecode<User>(token);
        setUser(decoded);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

/* eslint-disable react-refresh/only-export-components */
export const useAuth = () => useContext(AuthContext);