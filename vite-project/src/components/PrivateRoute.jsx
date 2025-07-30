// src/components/PrivateRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import { db } from '../firebase'; // <-- Make sure to export Firestore `db` in firebase.js

const PrivateRoute = ({ children, role }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);

        try {
          const docRef = doc(db, 'users', user.uid); // Adjust path if different
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
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (!currentUser) return <Navigate to="/signin" />;

  if (role && userRole !== role) return <Navigate to="/unauthorized" />;

  return children;
};

export default PrivateRoute;
