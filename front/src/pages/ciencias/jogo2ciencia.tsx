import React from 'react';
import Quiz from '../../components/Quiz';
import { perguntasCientificas2 } from '../../data/ciencias-perguntas-2';

const Jogo2Ciencia: React.FC = () => {
  return (
    <Quiz
      perguntas={perguntasCientificas2}
      titulo="Jogo de Ciências para Séries Iniciais"
      linkVoltar="/ciencias"
    />
  );
};

export default Jogo2Ciencia;