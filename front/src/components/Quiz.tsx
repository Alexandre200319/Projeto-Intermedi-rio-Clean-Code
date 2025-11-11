import React, { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import Question from './Question';

interface Pergunta {
  pergunta: string;
  opcoes: string[];
  respostaCorreta: string;
}

interface QuizProps {
  perguntas: Pergunta[];
  titulo: string;
  linkVoltar: string;
}

const Quiz: React.FC<QuizProps> = ({ perguntas, titulo, linkVoltar }) => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostaUsuario, setRespostaUsuario] = useState('');
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const avancarPergunta = () => {
    setPerguntaAtual((prev) => prev + 1);
    setRespostaUsuario('');
    setMostrarResposta(false);
    setAcertou(false);
  };

  const verificarResposta = () => {
    const respostaCorreta = perguntas[perguntaAtual].respostaCorreta;
    if (respostaCorreta === respostaUsuario) {
      setAcertou(true);
    } else {
      setAcertou(false);
    }
    setMostrarResposta(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">{titulo}</h1>
      {perguntaAtual < perguntas.length ? (
        <>
          <Question
            pergunta={perguntas[perguntaAtual].pergunta}
            opcoes={perguntas[perguntaAtual].opcoes}
            respostaUsuario={respostaUsuario}
            onRespostaChange={(e) => setRespostaUsuario(e.target.value)}
            mostrarResposta={mostrarResposta}
          />
          {mostrarResposta && (
            <p className="mt-2">
              {acertou ? 'Parabéns, você acertou!' : 'Que pena, você errou.'} A
              resposta correta é: {perguntas[perguntaAtual].respostaCorreta}
            </p>
          )}
          <Button
            onClick={verificarResposta}
            className="bg-yellow-500 hover:bg-yellow-600 mt-4"
            disabled={mostrarResposta}
          >
            Verificar Resposta
          </Button>
          {mostrarResposta && (
            <Button onClick={avancarPergunta} className="mt-4">
              Próxima Pergunta
            </Button>
          )}
        </>
      ) : (
        <p>Parabéns, você completou o jogo!</p>
      )}
      <Link href={linkVoltar} passHref>
        <Button className="mt-16">Voltar à página inicial</Button>
      </Link>
    </div>
  );
};

export default Quiz;
