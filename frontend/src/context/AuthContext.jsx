import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import axios from 'axios';
import getBaseUrl from "../utils/baseUrl";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// const googleProvider = new GoogleAuthProvider();

// authProvider
export const AuthProvide = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // login the user
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // sing up with google
  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  // logout the user
  const logout = () => {
    return signOut(auth);
  };

  // manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        const { email, displayName, photoURL } = user;
        const userData = {
          email,
          username: displayName,
          photo: photoURL,
        };

        console.log(userData)
      }
    });

    return () => unsubscribe();
  }, []);

  const adminLogin = async (userName, password) => {
    console.log(userName, password);
    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth`, {
        userName,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Failed to login admin:', error);
      throw error;
    }
  };

  const value = {
    currentUser,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
    adminLogin
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
