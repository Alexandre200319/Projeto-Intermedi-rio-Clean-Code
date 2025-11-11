import React from 'react';
import InputQuiz from '../../components/InputQuiz';
import { perguntasMatematicas } from '../../data/matematica-perguntas';

const Jogo1Matematica: React.FC = () => {
  return (
    <InputQuiz
      perguntas={perguntasMatematicas}
      titulo="Corrida de Matemática"
      linkVoltar="/matematica"
    />
  );
};

export default Jogo1Matematica;