import React from 'react';
import Quiz from '../../components/Quiz';
import { perguntasCientificas } from '../../data/ciencias-perguntas';

const Jogo1Ciencia: React.FC = () => {
  return (
    <Quiz
      perguntas={perguntasCientificas}
      titulo="Jogo de Ciências para Séries Iniciais"
      linkVoltar="/ciencias"
    />
  );
};

export default Jogo1Ciencia;