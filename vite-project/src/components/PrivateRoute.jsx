// src/components/PrivateRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import { db } from '../firebase'; // <-- Firestore DB instance

const PrivateRoute = ({ children, role }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && isAuthenticated) {
        setCurrentUser(user);

        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserRole(data.role || 'user');
          } else {
            setUserRole('user');
          }
        } catch (error) {
          console.error('Failed to get user role:', error);
          setUserRole('user');
        }
      } else {
        setCurrentUser(null);
        localStorage.removeItem('isAuthenticated'); // 🔒 force logout if token/session is gone
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  // 🔐 Redirect if not logged in or session expired
  if (!currentUser || !isAuthenticated) return <Navigate to="/signin" />;

  // 🔐 Optional: Role-based access (e.g., admin)
  if (role && userRole !== role) return <Navigate to="/unauthorized" />;

  return children;
};

export default PrivateRoute;
