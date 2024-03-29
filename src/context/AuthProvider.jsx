// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const singOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  const googlePopup = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  
  const githubPopup = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log(loggedUser);
      setUser(loggedUser);
      setLoading(false);
    })
    return () => unsubscribe();
  }, [])

  const authInfo = { user, createUser, singInUser, singOutUser, loading, googlePopup, githubPopup }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
