import React from 'react';
import Quiz from '../../components/Quiz';
import { perguntasCientificas3 } from '../../data/ciencias-perguntas-3';

const Jogo3Ciencia: React.FC = () => {
  const perguntas = perguntasCientificas3.map((p) => ({
    pergunta: p.question,
    opcoes: p.options,
    respostaCorreta: p.correctAnswer,
  }));

  return (
    <Quiz
      perguntas={perguntas}
      titulo="Quiz de Ciências"
      linkVoltar="/ciencias"
    />
  );
};

export default Jogo3Ciencia;