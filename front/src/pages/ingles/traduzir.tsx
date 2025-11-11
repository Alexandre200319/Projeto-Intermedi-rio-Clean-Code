import React from 'react';
import InputQuiz from '../../components/InputQuiz';
import { palavrasTraduzir } from '../../data/ingles-traduzir';

const Traduzir: React.FC = () => {
  const perguntas = palavrasTraduzir.map((p) => ({
    pergunta: p.portugues,
    resposta: p.ingles,
  }));

  return (
    <InputQuiz
      perguntas={perguntas}
      titulo="Jogo de Tradução de Perguntas"
      linkVoltar="/ingles"
    />
  );
};

export default Traduzir;