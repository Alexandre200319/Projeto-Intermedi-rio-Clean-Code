import React, { useState } from "react";
import Link from "next/link";

const palavras = [
  { portugues: "What color is the sky?", ingles: "blue" },
  { portugues: "How many legs does a dog have?", ingles: "four" },
  { portugues: "What do you use to write with?", ingles: "pencil" },
  { portugues: "What is the opposite of 'cold'?", ingles: "hot" },
  { portugues: "What is the capital of France?", ingles: "paris" },
  { portugues: "What do you wear on your feet?", ingles: "socks" },
  { portugues: "What do you use to eat soup?", ingles: "spoon" },
  { portugues: "What animal says 'meow'?", ingles: "cat" },
  { portugues: "What is the shape of a circle?", ingles: "round" },
  { portugues: "What is the opposite of 'big'?", ingles: "small" },
  { portugues: "How many days are in a week?", ingles: "seven" },
  { portugues: "What is the name of the planet we live on?", ingles: "earth" },
  { portugues: "What do you use to brush your teeth?", ingles: "toothbrush" },
  { portugues: "How many fingers do you have on one hand?", ingles: "five" },
  { portugues: "What is the opposite of 'fast'?", ingles: "slow" },
];

const Traduzir: React.FC = () => {
  // Mudança do nome do componente para Traduzir
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
           {" "}
      <h1 className="mb-8 text-3xl font-bold">
                Jogo de Tradução de Perguntas      {" "}
      </h1>
           {" "}
      <div className="mb-4">
               {" "}
        {/* CORREÇÃO: Usando &quot; para escapar as aspas em volta da variável que será exibida. */}
               {" "}
        <p>
          Qual é a tradução de &quot;{palavras[palavraAtual].portugues}&quot;?
        </p>
               {" "}
        <div className="flex items-center">
                   {" "}
          <input
            type="text"
            value={respostaUsuario}
            onChange={(e) => setRespostaUsuario(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 mt-2 mr-2"
            disabled={mostrarResposta}
          />
                   {" "}
          {mostrarResposta && (
            <p>
                           {" "}
              {acertou ? "Parabéns, você acertou!" : "Que pena, você errou."} A
                            resposta correta é: {palavras[palavraAtual].ingles} 
                       {" "}
            </p>
          )}
                 {" "}
        </div>
             {" "}
      </div>
           {" "}
      <div className="mb-4">
               {" "}
        <button
          onClick={verificarResposta}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
          disabled={mostrarResposta}
        >
                    Verificar Resposta        {" "}
        </button>
               {" "}
        <button
          onClick={avancarPalavra}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
                    Próxima Palavra        {" "}
        </button>
             {" "}
      </div>
           {" "}
      <Link href="/Materias/ingles" passHref>
               {" "}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
                    Voltar à página inicial        {" "}
        </button>
             {" "}
      </Link>
         {" "}
    </div>
  );
};

export default Traduzir;
