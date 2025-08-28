// src/services/authService.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const register = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Save user in Firestore (with default role)
  await setDoc(doc(db, 'users', user.uid), {
    email: user.email,
    role: 'user',
    createdAt: new Date(),
  });

  return userCredential;
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  // Store user in Firestore if new
  await setDoc(doc(db, 'users', user.uid), {
    email: user.email,
    role: 'user',
    createdAt: new Date(),
  }, { merge: true });

  return result;
};

export const logout = () => {
  return signOut(auth);
};
