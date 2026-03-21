import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrudAdmin() {
  const navigate = useNavigate();
  // Estado provisório para simular uma lista de usuários
  const [users, setUsers] = useState([
    { id: 1, name: "Admin Teste", username: "admin", role: "Admin" },
  ]);

  function handleLogout() {
    localStorage.removeItem("usuarioLogado");
    navigate("/LoginPage");
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Cabeçalho com Logout */}
      <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-blue-500">Painel do Administrador</h1>
        <div className="space-x-4">
            <button onClick={() => navigate("/")} className="bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded">Voltar pra Home</button>
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded">Sair (Logout)</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Formulário de Cadastro (Create) */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 h-fit">
          <h2 className="text-xl mb-4 font-semibold">Novo Usuário</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Nome Completo</label>
              <input type="text" className="w-full bg-black border border-gray-600 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Apelido (Login)</label>
              <input type="text" className="w-full bg-black border border-gray-600 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Senha</label>
              <input type="password" className="w-full bg-black border border-gray-600 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Cargo</label>
              <select className="w-full bg-black border border-gray-600 px-3 py-2 rounded focus:outline-none focus:border-blue-500">
                <option value="user">Professor (Comum)</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <button type="button" className="w-full bg-green-600 hover:bg-green-700 py-2 rounded font-semibold">
              Salvar Usuário
            </button>
          </form>
        </div>

        {/* Lista de Usuários (Read, Update, Delete) */}
        <div className="md:col-span-2 bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl mb-4 font-semibold">Usuários Cadastrados</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="py-2 px-4">Nome</th>
                  <th className="py-2 px-4">Apelido</th>
                  <th className="py-2 px-4">Cargo</th>
                  <th className="py-2 px-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-gray-800 hover:bg-gray-800">
                    <td className="py-2 px-4">{u.name}</td>
                    <td className="py-2 px-4">{u.username}</td>
                    <td className="py-2 px-4">
                      <span className={`px-2 py-1 rounded text-xs ${u.role === 'Admin' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-center space-x-2">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded text-sm">Editar</button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrudAdmin;