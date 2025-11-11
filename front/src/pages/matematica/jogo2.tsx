import React from 'react';
import InputQuiz from '../../components/InputQuiz';
import { palavrasMatematica2 } from '../../data/matematica-jogo2';

const Jogo2: React.FC = () => {
  const perguntas = palavrasMatematica2.map((p) => ({
    pergunta: p.portugues,
    resposta: p.ingles,
  }));

  return (
    <InputQuiz
      perguntas={perguntas}
      titulo="Jogo de Correspondência de Palavras"
      linkVoltar="/matematica"
    />
  );
};

export default Jogo2;