import React from "react";
import Link from "next/link";

const Matematica: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-300">
      <h1 className="mb-8 text-3xl font-bold">
        Bem-vindo à sala de jogos de Matemática
      </h1>
      <div className="flex flex-col gap-4">
        <Link href="/matematica/jogo1" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
            Corrida de Matemática
          </button>
        </Link>
        <Link href="/matematica/jogo2" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
            Jogo de Adivinhação
          </button>
        </Link>
        <Link href="/matematica/jogo3" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
            Jogo de Memória
          </button>
        </Link>
      </div>
      <Link href="/home" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-16">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Matematica;
