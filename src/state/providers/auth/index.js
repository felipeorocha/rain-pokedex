import { useEffect, useState, createContext } from "react";
import authentication from '../../../services/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logedIn, setLogedIn] = useState(null);

  useEffect(() => {
    authentication.auth().onAuthStateChanged(setLogedIn);
  }, []);

  return (
    <AuthContext.Provider value={{ logedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
