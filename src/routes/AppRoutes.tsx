import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import { useAuth } from "../context/AuthContext";
import Layout from "@/components/common/Layout";
import React from "react";

function PrivateRoute({ children }: { children: React.ReactNode }) {
    const { user } = useAuth();
    return user ? children : <Navigate to="/" />;
}

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Layout>
                            <DashboardPage />
                        </Layout>
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}
