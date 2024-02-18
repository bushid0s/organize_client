import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "../Components/Toast/Toast.jsx";
  // @ts-ignore
const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
type FlashMessage = Record<string, string>

export function AuthProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [flashMessage, setFlashMessage] = useState<FlashMessage>({});

    const userInformations = {
        isLoggedIn,
        setIsLoggedIn,
        flashMessage,
        setFlashMessage,
    };

    useEffect(() => {
        switch (flashMessage.type) {
            case "success":
                toast.success(flashMessage.message);
                break;
            case "error":
                toast.error(flashMessage.message);
                break;
            default:
                toast(flashMessage.message);
                break;
        }
    }, [flashMessage, setFlashMessage]);

    return (
        <AuthContext.Provider value={userInformations}>
            {props.children}
        </AuthContext.Provider>
    );
}
