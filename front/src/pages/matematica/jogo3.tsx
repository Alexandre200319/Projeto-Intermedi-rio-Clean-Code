import React from 'react';
import MemoryGame from '../../components/MemoryGame';
import { operacoesMatematica3 } from '../../data/matematica-jogo3';

const Jogo3: React.FC = () => {
  return (
    <MemoryGame
      operacoes={operacoesMatematica3}
      titulo="Jogo de Memória Matemática"
      linkVoltar="/matematica"
    />
  );
};

export default Jogo3;