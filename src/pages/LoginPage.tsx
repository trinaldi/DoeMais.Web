import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext.tsx";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/dashboard");
        } catch {
            alert("Email ou senha inválidos");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
            <button type="submit">Login</button>
        </form>
    );
}