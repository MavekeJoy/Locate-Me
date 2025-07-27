// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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

// Admin Pages
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSubmissions from './pages/admin/AdminSubmissions';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';
import AdminNotifications from './pages/admin/AdminNotifications';
import AdminProfile from './pages/admin/AdminProfile';

const AppContent = () => {
  const location = useLocation();
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

          {/* Admin Pages */}
          <Route
            path="/admin"
            element={
              <PrivateRoute role="admin">
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="submissions" element={<AdminSubmissions />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>
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
