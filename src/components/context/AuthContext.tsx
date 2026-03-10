import type { UserType } from '../../types/User';
import { createContext, useState } from "react";
import { api } from "./api";
import type { AuthContextType } from '../../types/AuthContextType';

export const AuthContext = createContext<AuthContextType | null>(null)

type Props = {
    children: React.ReactNode;
}

export const  AuthProvider = ({ children }: Props) => {

  const [user, setUser] = useState<UserType | null>(null);

  const login = async (email: string, password: string) => {

    try {

      const res = await api.post("/Login", {
        email,
        password
      });

      const data = res.data;

      setUser({
        userId: data.userId,
        username: data.user,
        email: data.email,
      });

      return true;

    } catch {
      return false;
    }
  }

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}