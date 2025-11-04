import Link from "next/link";
import React, { useState, useEffect } from "react";

const numeros = [
  { extenso: "25", ingles: "vinte e cinco" },
  { extenso: "32", ingles: "trinta e dois" },
  { extenso: "3455", ingles: "tres mil quatrocentos e cinquenta e cinco" },
  { extenso: "34633", ingles: "trinta e quatro mil seicentos e trinta e tres" },
  { extenso: "670", ingles: "seicentos e setenta" },
];

const Jogo4: React.FC = () => {
  const [numeroAtual, setNumeroAtual] = useState(0);
  const [respostaUsuario, setRespostaUsuario] = useState("");
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const avancarNumero = () => {
    setNumeroAtual((prev) => (prev + 1) % numeros.length);
    setRespostaUsuario("");
    setMostrarResposta(false);
    setAcertou(false);
  };

  const verificarResposta = () => {
    const correta = numeros[numeroAtual].ingles.toLowerCase();
    const usuario = respostaUsuario.trim().toLowerCase();
    setAcertou(correta === usuario);
    setMostrarResposta(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-300">
      <h1 className="mb-8 text-3xl font-bold">Jogo de Números em Inglês</h1>
      <p>{`Qual é a tradução de "${numeros[numeroAtual].extenso}"?`}</p>
      <input
        type="text"
        value={respostaUsuario}
        onChange={(e) => setRespostaUsuario(e.target.value)}
        className="border border-gray-400 rounded px-2 py-1 mt-2 mb-2"
        disabled={mostrarResposta}
      />
      {mostrarResposta && (
        <p>
          {acertou ? "Parabéns, você acertou!" : "Que pena, você errou."} A
          resposta correta é: {numeros[numeroAtual].ingles}
        </p>
      )}
      <div className="flex gap-2 mt-4">
        <button
          onClick={verificarResposta}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          disabled={mostrarResposta}
        >
          Verificar
        </button>
        <button
          onClick={avancarNumero}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Próximo
        </button>
      </div>
      <Link href="/Materias/matematica" passHref>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Jogo4;
