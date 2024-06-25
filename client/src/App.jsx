import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/auth/SignUpPage.jsx';
import SignInPage from './pages/auth/SignInPage.jsx';

function App() {
        return (
                <div className="flex max-w-6xl mx-auto">
                        <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/sign-up" element={<SignUpPage />} />
                                <Route path="/sign-in" element={<SignInPage />} />
                        </Routes>
                </div>
        );
}

export default App;
