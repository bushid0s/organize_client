import Expenses from './pages/Expenses/Expenses.tsx';
import Login from './pages/Login/Login.tsx';
import Signup from './pages/Signup/Signup.tsx';
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext.jsx";

export function App() {
  // @ts-ignore
  const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [cookies] = useCookies(["token"]);

    useEffect(() => {
        const token = cookies.token;

        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [cookies.token, setIsLoggedIn]);

    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                {isLoggedIn ? (
                    <>
                        <Route index element={<Expenses />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <>
                        <Route path="/connexion" element={<Login />} />
                        <Route path="/inscription" element={<Signup />} />
                        <Route index element={<Navigate to="/connexion" />} />
                        <Route
                            path="*"
                            element={<Navigate to="/connexion" />}
                        />
                    </>
                )}
            </Route>
        </Routes>
    );
}
