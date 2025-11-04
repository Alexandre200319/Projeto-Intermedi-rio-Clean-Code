import Link from "next/link";
import React, { useState } from "react";

const palavras = [
  {
    portugues:
      "Qual palavra não pertence ao grupo: Summer, Winter, Spring, Autumn, Elephant?",
    ingles: "elephant",
  },
  {
    portugues:
      "Identifique a palavra que não está relacionada: Book, Pen, Ruler, Apple, Television?",
    ingles: "apple",
  },
  // ... demais palavras
];

const Jogo2: React.FC = () => {
  const [palavraAtual, setPalavraAtual] = useState(0);
  const [respostaUsuario, setRespostaUsuario] = useState("");
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const avancarPalavra = () => {
    setPalavraAtual((prev) => (prev + 1) % palavras.length);
    setRespostaUsuario("");
    setMostrarResposta(false);
    setAcertou(false);
  };

  const verificarResposta = () => {
    const respostaCorreta = palavras[palavraAtual].ingles.toLowerCase();
    const respostaUsuarioLowerCase = respostaUsuario.trim().toLowerCase();
    setAcertou(respostaCorreta === respostaUsuarioLowerCase);
    setMostrarResposta(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-300 p-4">
      <h1 className="mb-8 text-3xl font-bold text-center">
        Jogo de Correspondência de Palavras
      </h1>

      <div className="mb-4 w-full max-w-xl text-center">
        <p>{`Qual é a tradução de "${palavras[palavraAtual].portugues}"?`}</p>
        <input
          type="text"
          value={respostaUsuario}
          onChange={(e) => setRespostaUsuario(e.target.value)}
          className="border border-gray-400 rounded px-2 py-1 mt-2 mb-2 w-full"
          disabled={mostrarResposta}
        />
        {mostrarResposta && (
          <p
            className={`mt-2 font-semibold ${
              acertou ? "text-green-600" : "text-red-600"
            }`}
          >
            {acertou ? "Parabéns, você acertou!" : "Que pena, você errou."}{" "}
            <br />A resposta correta é: {palavras[palavraAtual].ingles}
          </p>
        )}
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={verificarResposta}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          disabled={mostrarResposta}
        >
          Verificar Resposta
        </button>

        <button
          onClick={avancarPalavra}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Próxima Palavra
        </button>
      </div>

      <Link href="/Materias/ingles" passHref>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Jogo2;
