import React from 'react';
import Quiz from '../../components/Quiz';
import { palavrasLinguagens3 } from '../../data/linguagens-jogo3';

const Jogo3: React.FC = () => {
  const perguntas = palavrasLinguagens3.map((p) => ({
    pergunta: p.question,
    opcoes: p.options,
    respostaCorreta: p.correctAnswer,
  }));

  return (
    <Quiz
      perguntas={perguntas}
      titulo="Jogo de Palavras em Língua Portuguesa para Séries Iniciais"
      linkVoltar="/linguagens"
    />
  );
};

export default Jogo3;