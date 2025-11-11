import React from 'react';
import InputQuiz from '../../components/InputQuiz';
import { numerosMatematica4 } from '../../data/matematica-jogo4';

const Jogo4: React.FC = () => {
  const perguntas = numerosMatematica4.map((p) => ({
    pergunta: `Qual é a tradução de "${p.extenso}"?`,
    resposta: p.ingles,
  }));

  return (
    <InputQuiz
      perguntas={perguntas}
      titulo="Jogo de Números em Inglês"
      linkVoltar="/matematica"
    />
  );
};

export default Jogo4;