import { Routes, Route } from 'react-router-dom';

// Pages
import Expenses from './pages/Expenses/Expenses.tsx';
import Login from './pages/Login/Login.tsx';
import Signup from './pages/Signup/Signup.tsx';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Expenses />} />
            <Route path='/connexion' element={<Login />} />
            <Route path='/inscription' element={<Signup />} />
        </Routes>
    );
}
