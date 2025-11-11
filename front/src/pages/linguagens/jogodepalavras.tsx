import React from 'react';
import Quiz from '../../components/Quiz';
import { palavrasLinguagens } from '../../data/linguagens-jogodepalavras';

const JogoDePalavras: React.FC = () => {
  const perguntas = palavrasLinguagens.map((p) => ({
    pergunta: p.question,
    opcoes: p.options,
    respostaCorreta: p.correctAnswer,
  }));

  return (
    <Quiz
      perguntas={perguntas}
      titulo="Quiz de Língua Portuguesa para Séries Iniciais"
      linkVoltar="/linguagens"
    />
  );
};

export default JogoDePalavras;