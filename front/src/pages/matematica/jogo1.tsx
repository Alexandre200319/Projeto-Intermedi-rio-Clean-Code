import React, { useState } from "react";
import Link from "next/link";
const Jogo1: React.FC = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostasCorretas, setRespostasCorretas] = useState(0);
  const [respostasIncorretas, setRespostasIncorretas] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [bloquearInput, setBloquearInput] = useState(false);
  const [resposta, setResposta] = useState("");

  const perguntas = [
    { pergunta: "2 + 2", resposta: "4" },
    { pergunta: "5 - 3", resposta: "2" },
    { pergunta: "3 x 4", resposta: "12" },
    { pergunta: "10 / 2", resposta: "5" },
    { pergunta: "7 + 8", resposta: "15" },
    { pergunta: "20 - 6", resposta: "14" },
  ];

  const handleResposta = () => {
    if (bloquearInput) return;

    if (resposta === perguntas[perguntaAtual].resposta) {
      setFeedback("Certo!");
      setRespostasCorretas(respostasCorretas + 1);
    } else {
      setFeedback("Errado!");
      setRespostasIncorretas(respostasIncorretas + 1);
    }

    setBloquearInput(true);

    setTimeout(() => {
      setFeedback("");
      setBloquearInput(false);
      setResposta("");
      setPerguntaAtual(perguntaAtual + 1);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="mb-8 text-3xl font-bold">Corrida de Matemática</h1>
      {perguntaAtual < perguntas.length ? (
        <>
          <p className="mb-4">Pergunta: {perguntas[perguntaAtual].pergunta}</p>
          <input
            id="inputResposta"
            type="text"
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded text-black"
            disabled={bloquearInput}
          />
          <button
            onClick={handleResposta}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
              bloquearInput ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={bloquearInput}
          >
            Responder
          </button>
          {feedback && <p className="mt-4">{feedback}</p>}
        </>
      ) : (
        <h1 className="text-3xl font-bold">
          Parabéns! Você acertou {respostasCorretas} perguntas e errou{" "}
          {respostasIncorretas}.
        </h1>
      )}
      <Link href="/Materias/matematica" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold m-4 py-2 px-4 rounded mt-8">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Jogo1;
