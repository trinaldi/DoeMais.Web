import { BASE_URL } from "../utils/config.ts";
import type { AuthResponse } from "../types/auth.ts";

export const login = async (email: string, password: string)  : Promise<string>  => {
    try {
        const res = await fetch(`${BASE_URL}/Auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (!res.ok) throw new Error("Login Failed");

        const data: AuthResponse = await res.json();
        localStorage.setItem("token", data.token);

        return data.token;
    } catch (e: unknown) {
        console.error(e);
        throw new Error("Login Failed");
    }
}

export const logout = () : void => {
    localStorage.removeItem("token");
}