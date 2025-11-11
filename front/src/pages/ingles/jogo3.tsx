import React from 'react';
import InputQuiz from '../../components/InputQuiz';
import { palavrasIngles3 } from '../../data/ingles-jogo3';

const Jogo3: React.FC = () => {
  const perguntas = palavrasIngles3.map((p) => ({
    pergunta: `Qual é a tradução de "${p.portugues}"?`,
    resposta: p.ingles,
  }));

  return (
    <InputQuiz
      perguntas={perguntas}
      titulo="Jogo de Correspondência de Palavras em Inglês"
      linkVoltar="/ingles"
    />
  );
};

export default Jogo3;