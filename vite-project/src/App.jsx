// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';

import SplashScreen from './pages/SplashScreen';
import Login from './pages/LoginIn';
import SignInPage from './pages/SignInPage';
import LandingPage from './pages/LandingPage';
import FindMe from './pages/FindMe';
import PostMe from './pages/PostMe';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Support from './pages/Support';

import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import PrivateRoute from './components/PrivateRoute';
import AdminBottomNav from './components/admin/AdminBottomNav';
import AdminRoute from './routes/AdminRoute'; // ✅ NEW
import NotFound from './pages/NotFound'; // ✅ NEW

// Admin Pages
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSubmissions from './pages/admin/AdminSubmissions';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';
import AdminNotifications from './pages/admin/AdminNotifications';
import AdminProfile from './pages/admin/AdminProfile';

// Optional: Replace with your context/provider if needed
import { useAuth } from './context/AuthContext'; // Adjust path as needed

const AppContent = () => {
  const location = useLocation();
  const { user } = useAuth(); // ✅ assuming this holds user and role info

  const isAdmin = location.pathname.startsWith('/admin');
  const isSplash = location.pathname === '/';

  const shouldShowNavbar = !isAdmin && !isSplash;
  const shouldShowUserBottomNav = !isAdmin && !isSplash;
  const shouldShowAdminBottomNav = isAdmin;

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <div className={shouldShowNavbar ? 'pt-10' : ''}>
        <Routes>
          {/* Splash & Auth */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignInPage />} />

          {/* Public/User Pages */}
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/find" element={<FindMe />} />
          <Route
            path="/post"
            element={
              <PrivateRoute>
                <PostMe />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/support"
            element={
              <PrivateRoute>
                <Support />
              </PrivateRoute>
            }
          />

          {/* Admin Pages - protected by AdminRoute */}
          <Route
            path="/admin/*"
            element={
              <AdminRoute user={user}>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="submissions" element={<AdminSubmissions />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>

          {/* 404 and fallback */}
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Bottom Navigation */}
      {shouldShowUserBottomNav && <MobileBottomNav />}
      {shouldShowAdminBottomNav && <AdminBottomNav />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
