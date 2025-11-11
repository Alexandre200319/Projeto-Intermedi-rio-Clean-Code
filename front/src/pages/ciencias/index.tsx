import React from "react";
import Link from "next/link";

const Ciencias: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">
        Bem-vindo à sala de jogos de Ciências
      </h1>
      <div className="flex flex-col gap-4">
        <Link href="/ciencias/jogo1ciencia" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Quiz de Sistema Solar
          </button>
        </Link>
        <Link href="/ciencias/jogo2ciencia" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Quiz de Animais
          </button>
        </Link>
        <Link href="/ciencias/jogo3ciencia" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Jogo de correspondência
          </button>
        </Link>
      </div>
      <Link href="/home" passHref>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-16">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Ciencias;
