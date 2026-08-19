import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup as firebaseSignInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';
import firebaseConfig from './config';

const hasFirebaseConfig = Object.values(firebaseConfig).every((value) => value && String(value).trim() !== '');

let app = null;
let auth = null;
let googleProvider = null;

if (hasFirebaseConfig) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
  } catch (error) {
    console.warn('Firebase is disabled because the config is invalid or missing. Frontend-only mode is active.', error);
  }
}

export const isFirebaseEnabled = Boolean(auth);

export const signInWithPopup = async (...args) => {
  if (!auth || !googleProvider) {
    throw new Error('Google sign-in is unavailable because Firebase is disabled in frontend-only mode.');
  }
  return firebaseSignInWithPopup(auth, googleProvider, ...args.slice(2));
};

export const signOut = async (...args) => {
  if (!auth) {
    return undefined;
  }
  return firebaseSignOut(auth, ...args);
};

export { auth, googleProvider };
export default app;
