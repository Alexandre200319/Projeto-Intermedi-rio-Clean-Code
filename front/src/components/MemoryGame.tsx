import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';

interface Carta {
  id: number;
  valor: string;
  type: 'operacao' | 'resultado';
  resultado: number;
}

interface MemoryGameProps {
  operacoes: { operacao: string; resultado: number }[];
  titulo: string;
  linkVoltar: string;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ operacoes, titulo, linkVoltar }) => {
  const criarCartas = (): Carta[] => {
    let id = 0;
    const pares: Carta[] = operacoes.flatMap((op) => [
      {
        id: id++,
        valor: op.operacao,
        type: 'operacao',
        resultado: op.resultado,
      },
      {
        id: id++,
        valor: op.resultado.toString(),
        type: 'resultado',
        resultado: op.resultado,
      },
    ]);
    return pares.sort(() => Math.random() - 0.5);
  };

  const [cartas, setCartas] = useState<Carta[]>(criarCartas());
  const [selecionadas, setSelecionadas] = useState<number[]>([]);
  const [paresEncontrados, setParesEncontrados] = useState<number[]>([]);
  const [tentativaAcertou, setTentativaAcertou] = useState<boolean | null>(null);

  const selecionarCarta = (index: number) => {
    if (selecionadas.length === 2 || paresEncontrados.includes(index)) return;
    setSelecionadas([...selecionadas, index]);
  };

  useEffect(() => {
    if (selecionadas.length === 2) {
      const [i1, i2] = selecionadas;
      const c1 = cartas[i1];
      const c2 = cartas[i2];

      if (c1.type !== c2.type && c1.resultado === c2.resultado) {
        setParesEncontrados([...paresEncontrados, i1, i2]);
        setTentativaAcertou(true);
      } else {
        setTentativaAcertou(false);
      }

      const timeout = setTimeout(() => {
        setSelecionadas([]);
        setTentativaAcertou(null);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [selecionadas, cartas, paresEncontrados]);

  const reiniciarJogo = () => {
    setCartas(criarCartas());
    setSelecionadas([]);
    setParesEncontrados([]);
    setTentativaAcertou(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-300 p-4">
      <h1 className="mb-8 text-3xl font-bold">{titulo}</h1>
      <div className="grid grid-cols-4 gap-4">
        {cartas.map((carta, index) => {
          const mostrar = selecionadas.includes(index) || paresEncontrados.includes(index);
          return (
            <div
              key={carta.id}
              onClick={() => selecionarCarta(index)}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded cursor-pointer ${
                mostrar ? 'opacity-60' : ''
              } flex items-center justify-center`}
            >
              {mostrar ? carta.valor : '?'}
            </div>
          );
        })}
      </div>

      {paresEncontrados.length === cartas.length && (
        <Button onClick={reiniciarJogo} className="bg-green-500 hover:bg-green-600 mt-4">
          Jogar Novamente
        </Button>
      )}

      <Link href={linkVoltar} passHref>
        <Button className="bg-gray-700 hover:bg-gray-800 mt-8">
          Voltar à página inicial
        </Button>
      </Link>

      {tentativaAcertou !== null && (
        <p
          className={`mt-4 font-bold ${
            tentativaAcertou ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {tentativaAcertou ? 'Parabéns, você acertou!' : 'Que pena, você errou.'}
        </p>
      )}
    </div>
  );
};

export default MemoryGame;
