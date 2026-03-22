import { Navigate } from "react-router-dom";
import type { ReactNode } from "react"; 
type ProtectedRouteProps = {
  children: ReactNode; 
  requireAdmin?: boolean;
};

function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {

  const userStorage = localStorage.getItem("usuarioLogado");
  
  const user = userStorage ? JSON.parse(userStorage) : null;

  if (!user) {
    return <Navigate to="/LoginPage" replace />;
  }

  if (requireAdmin && !user.isAdmin) {
    alert("Acesso negado. Apenas administradores.");
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;