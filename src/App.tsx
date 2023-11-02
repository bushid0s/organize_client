import { Routes, Route } from 'react-router-dom';

// Pages
import Expenses from './pages/Expenses/Expenses.tsx';
import Login from './pages/Login/Login.tsx';
import Signup from './pages/Signup/Signup.tsx';

export default function App() {
    return (
        <Routes>
            <Route exact path='/' element={<Expenses />} />
            <Route exact path='/connexion' element={<Login />} />
            <Route exact path='/inscription' element={<Signup />} />
        </Routes>
    );
}
