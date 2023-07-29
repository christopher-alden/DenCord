// AuthContextProvider.tsx
import React, { createContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import Loader from '../components/loader/Loader';

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({ children }: any) => {
  const [currUser, setCurrUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrUser(user);
      setLoading(false); 
    });

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return <Loader/>
  }

  return <AuthContext.Provider value={{ currUser }}>{children}</AuthContext.Provider>;
};
