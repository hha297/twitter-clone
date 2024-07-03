import { Route, Routes } from 'react-router-dom';

import SignUpPage from './pages/auth/SignUpPage.jsx';
import SignInPage from './pages/auth/SignInPage.jsx';
import HomePage from './pages/home/HomePage.jsx';
import ProfilePage from './pages/profile/ProfilePage.jsx';
import NotificationPage from './pages/notification/NotificationPage.jsx';
import RightPanel from './components/shared/RightPanel.jsx';
import { Toaster } from 'react-hot-toast';
function App() {
        return (
                <div className="flex max-w-6xl mx-auto">
                        <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/sign-up" element={<SignUpPage />} />
                                <Route path="/sign-in" element={<SignInPage />} />
                                <Route path="/notifications" element={<NotificationPage />} />
                                <Route path="/profile/:username" element={<ProfilePage />} />
                        </Routes>
                        <RightPanel />
                        <Toaster />
                </div>
        );
}

export default App;
