import React from "react";
import Link from "next/link";

const Sobre: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/images/satc.png"
        alt="Faculdade"
        className="absolute top-0 right-0 h-20 w-30 mr-4 object-cover"
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
        <h1 className="mb-8 text-4xl font-bold text-center px-4">
          Bem-vindo ao Projeto Integrador: Sistema Web de Mini Games
          Educacionais!
        </h1>
        <p className="text-xl  text-center px-12">
          Nossa plataforma combina diversão e aprendizado para crianças do
          ensino fundamental, oferecendo uma coleção de mini games educativos
          cuidadosamente projetados.
        </p>
        <p className="mt-8 text-lg font-semibold px-4">Desenvolvido por:</p>
        <ul className="list-disc list-inside text-lg text-center px-4">
          <li>Alexandre Hermes</li>
          <li>Jefferson Barzan Alexandrino</li>
          <li>Jefferson Zeferino Pacheco</li>
        </ul>
        <Link href="/apresentacao" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
            Voltar à página inicial
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sobre;
