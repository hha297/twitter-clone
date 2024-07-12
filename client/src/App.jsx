import { Navigate, Route, Routes } from 'react-router-dom';

import SignUpPage from './pages/auth/SignUpPage.jsx';
import SignInPage from './pages/auth/SignInPage.jsx';
import HomePage from './pages/home/HomePage.jsx';
import ProfilePage from './pages/profile/ProfilePage.jsx';
import NotificationPage from './pages/notification/NotificationPage.jsx';
import RightPanel from './components/shared/RightPanel.jsx';
import Sidebar from './components/shared/Sidebar.jsx';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from './components/shared/LoadingSpinner.jsx';
function App() {
        const { data: authUser, isLoading } = useQuery({
                queryKey: ['authUser'],
                queryFn: async () => {
                        try {
                                const res = await fetch('/api/auth/me');
                                const data = await res.json();
                                if (data.error) return null;
                                if (!res.ok) {
                                        throw new Error(data.error);
                                }

                                return data;
                        } catch (error) {
                                throw new Error(error);
                        }
                },
                retry: false,
        });

        if (isLoading) {
                return (
                        <div className="h-screen flex justify-center items-center">
                                <LoadingSpinner />
                        </div>
                );
        }
        return (
                <div className="flex max-w-6xl mx-auto">
                        {authUser && <Sidebar />}
                        <Routes>
                                <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/sign-in" />} />
                                <Route path="/sign-in" element={!authUser ? <SignInPage /> : <Navigate to="/" />} />
                                <Route path="/sign-up" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
                                <Route
                                        path="/notifications"
                                        element={authUser ? <NotificationPage /> : <Navigate to="/sign-in" />}
                                />
                                <Route
                                        path="/profile/:username"
                                        element={authUser ? <ProfilePage /> : <Navigate to="/sign-in" />}
                                />
                        </Routes>
                        {authUser && <RightPanel />}
                        <Toaster />
                </div>
        );
}

export default App;
