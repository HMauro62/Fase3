import { useContext } from "react"

import { AuthContext }  from "../context/AuthContext"

export const useAuth = () => {

  const context = useContext(AuthContext)

  if (!context) {
    console.error("useAuth deve estar dentro do AuthProvider/AuthContext")
  }

  return context;
}