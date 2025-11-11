import React from 'react';
import Quiz from '../../components/Quiz';
import { palavrasLinguagens2 } from '../../data/linguagens-jogo2';

const Jogo2: React.FC = () => {
  const perguntas = palavrasLinguagens2.map((p) => ({
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

export default Jogo2;