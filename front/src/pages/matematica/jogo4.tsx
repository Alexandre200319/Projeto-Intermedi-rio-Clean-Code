import Link from "next/link";
import React, { useState } from "react";

const palavras = [
  { extenso: "25", ingles: "vinte e cinco" },
  { extenso: "32", ingles: "trinta e dois" },
  { extenso: "3455", ingles: "tres mil quatrocentos e cinquenta e cinco" },
  { extenso: "34633", ingles: "trinta e quatro mil seicentos e trinta e tres" },
  { extenso: "670", ingles: "seicentos e setenta" },
  { extenso: "14", ingles: "quatorze" },
  { extenso: "325", ingles: "trezentos vinte e cinco" },
  { extenso: "66", ingles: "sessenta e seis" },
  { extenso: "77", ingles: "setenta e sete" },
  { extenso: "50", ingles: "cinquenta" },
  { extenso: "4619", ingles: "quatro mil seiscentos e dezenove" },
  { extenso: "7653", ingles: "sete mil seiscentos e cinquenta e tres" },
  { extenso: "98", ingles: "noventa e oito" },
  { extenso: "43", ingles: "quarenta e tres" },
  { extenso: "109746", ingles: "cento e nove mil setecentos e quarenta e seis" }  
];

const Jogo1: React.FC = () => {
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
    const respostaUsuarioLowerCase = respostaUsuario.toLowerCase();
    if (respostaCorreta === respostaUsuarioLowerCase) {
      setAcertou(true);
    } else {
      setAcertou(false);
    }
    setMostrarResposta(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-300">
      <h1 className="mb-8 text-3xl font-bold">
        Jogo de Correspondência de Palavras
      </h1>
      <div className="mb-4">
        <p>Qual é a tradução de "{palavras[palavraAtual].extenso}"?</p>
        <div className="flex items-center">
          <input
            type="text"
            value={respostaUsuario}
            onChange={(e) => setRespostaUsuario(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 mt-2 mr-2"
            disabled={mostrarResposta}
          />
          {mostrarResposta && (
            <p>
              {acertou ? "Parabéns, você acertou!" : "Que pena, você errou."} A
              resposta correta é: {palavras[palavraAtual].ingles}
            </p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <button
          onClick={verificarResposta}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
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
      <Link href="/Materias/linguas" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Jogo1;
