import React from 'react';
import InputQuiz from '../../components/InputQuiz';
import { palavrasIngles2 } from '../../data/ingles-jogo2';

const Jogo2: React.FC = () => {
  const perguntas = palavrasIngles2.map((p) => ({
    pergunta: p.portugues,
    resposta: p.ingles,
  }));

  return (
    <InputQuiz
      perguntas={perguntas}
      titulo="Jogo de Correspondência de Palavras"
      linkVoltar="/ingles"
    />
  );
};

export default Jogo2;