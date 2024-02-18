import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/default.scss';
import { App } from './App.tsx';
import Layout from './Components/Layout/Layout.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainerComponent } from "./Components/Toast/Toast.jsx";

// AuthContext
import { AuthProvider } from "./Contexts/AuthContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <AuthProvider>
                <Layout>
                    <App />
                    <ToastContainerComponent />
                </Layout>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
