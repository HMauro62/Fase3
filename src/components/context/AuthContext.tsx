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

  const login = async (username: string, password: string) => {

    try {

      //const res = await api.post("/loginUser", {username, password});
      var request = `/loginUser/username/${username}/password/${password}`;

      console.log(request);

      const response = await api.get(request)

      const dados = response.data;

        console.log(response.status + ' ' + response.statusText );

        if (typeof dados.Id === "number") {
          console.log('O Id do usuario é numero')
        } else {
          console.log('O Id do usuario é string')
        }

        console.log(response)
/*
        if (typeof parseFloat(dados.Id) === "number"){
          console.log('agora o Id do usuario é numero')
        } */

        console.log('id ' + dados.id);

        if (response.status === 200) {

            setUser({
              userId: dados.id,
              userName: username,
              Email: dados.email,
            }); 

            //setUser(dados)
              
            console.log("saida Id: [" + user?.userId + ']');

            return true;
      } else {

        return false;
      }

    } catch {        
        console.log("Chamada a Api falhou");
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