import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

type Props = {
  onSuccess: () => void
}

const Login = ({ onSuccess }: Props) => {

  const { user, login, logout } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {

    const ok = await login(email, password)

    if (ok) {
      onSuccess();
    } else {
      alert("Login inválido");
    }
  }

  return (
    <div>

      <h2>Tela de Login</h2>

      {/* STATUS DO USUÁRIO */}

      {user ? (
        <div>
          <p>Usuário logado</p>
          <p>Nome: {user.username}</p>
          <p>Email: {user.email}</p>

          <button onClick={logout}>
            Sair
          </button>
        </div>
      ) : (
        <p>Usuário não logado</p>
      )}

      <hr />

      {/* FORM LOGIN */}

      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Entrar
      </button>

    </div>
  )
}
export default Login