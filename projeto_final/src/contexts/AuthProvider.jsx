import { useState } from "react";
import { AuthContext } from "./AuthContext";
import api from "../services/api";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

    async function login(email, password) {
        const {data} = await api.get("/users", {
            params: {email},
        });
        if (data.length === 0 || data[0].password !== password) {
            throw new Error("Invalid email or password");
        }
        const loggedUser = data[0];
        setUser(loggedUser);
        localStorage.setItem("user", JSON.stringify(loggedUser));
        
    }
    async function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}