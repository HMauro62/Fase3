import { useEffect, useState } from "react";

interface Linha {
  id: number;
  nome: string;
}

export default function Grid() {
  const [linhas, setLinhas] = useState<Linha[]>([]);
  const [linhaOcultaId, setLinhaOcultaId] = useState<number | null>(null);

  // Simulando fetch
  useEffect(() => {
    async function buscar() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      setLinhas(data);
    }

    buscar();
  }, []);

  return (
    <div className="grid gap-2">
      {linhas
        .filter((linha) => linha.id !== linhaOcultaId) // 🔥 Aqui esconde
        .map((linha) => (
          <div
            key={linha.id}
            className="p-4 border border-black flex justify-between"
          >
            <span>{linha.nome}</span>

            <button
              onClick={() => setLinhaOcultaId(linha.id)}
              className="text-red-500"
            >
              Esconder
            </button>
          </div>
        ))}
    </div>
  );
}