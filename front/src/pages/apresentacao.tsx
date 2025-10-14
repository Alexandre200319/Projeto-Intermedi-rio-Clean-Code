import React from "react";
import Link from "next/link";

const Apresentacao: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/images/satc.png"
        alt="Faculdade"
        className="absolute top-0 right-0 h-20 w-50 mr-8 mt-4 object-cover"
      />
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h1 className="mb-8 text-4xl font-bold text-center">EducaPlay</h1>
        <div className="flex gap-4">
          <Link href="/home" passHref>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex-1">
              Entrar
            </button>
          </Link>
          <Link href="/sobre" passHref>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex-1">
              Sobre o Projeto
            </button>
          </Link>
          <div className="absolute bottom-0 right-0 mb-4 mr-4 text-right">
            <p>Desenvolvido por:</p>
            <p>Alexandre Hermes</p>
            <p>Jefferson Barzan Alexandrino</p>
            <p>Jefferson Zeferino Pacheco</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;
