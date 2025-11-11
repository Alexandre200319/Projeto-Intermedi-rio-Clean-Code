import React, { useState } from 'react';
import Link from 'next/link';
import Button from './Button';

interface Pergunta {
  pergunta: string;
  resposta: string;
}

interface InputQuizProps {
  perguntas: Pergunta[];
  titulo: string;
  linkVoltar: string;
}

const InputQuiz: React.FC<InputQuizProps> = ({ perguntas, titulo, linkVoltar }) => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostasCorretas, setRespostasCorretas] = useState(0);
  const [respostasIncorretas, setRespostasIncorretas] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [bloquearInput, setBloquearInput] = useState(false);
  const [resposta, setResposta] = useState('');

  const handleResposta = () => {
    if (bloquearInput) return;

    if (resposta === perguntas[perguntaAtual].resposta) {
      setFeedback('Certo!');
      setRespostasCorretas(respostasCorretas + 1);
    } else {
      setFeedback('Errado!');
      setRespostasIncorretas(respostasIncorretas + 1);
    }

    setBloquearInput(true);

    setTimeout(() => {
      setFeedback('');
      setBloquearInput(false);
      setResposta('');
      setPerguntaAtual(perguntaAtual + 1);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="mb-8 text-3xl font-bold">{titulo}</h1>
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
          <Button
            onClick={handleResposta}
            className={`${
              bloquearInput ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={bloquearInput}
          >
            Responder
          </Button>
          {feedback && <p className="mt-4">{feedback}</p>}
        </>
      ) : (
        <h1 className="text-3xl font-bold">
          Parabéns! Você acertou {respostasCorretas} perguntas e errou{' '}
          {respostasIncorretas}.
        </h1>
      )}
      <Link href={linkVoltar} passHref>
        <Button className="m-4 mt-8">
          Voltar à página inicial
        </Button>
      </Link>
    </div>
  );
};

export default InputQuiz;
