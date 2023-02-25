import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";
import { onUserStateChange, login, logout } from "../api/firebase";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => setUser(user));
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, login, logout, uid: user && user.uid }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
