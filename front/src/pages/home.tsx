import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#ffa742] items-center justify-center h-screen font-sans ">
      <h1 className="mb-4 pt-20 text-3xl  font-bold text-white">
        Seja bem-vindo ao EducaPlay!
      </h1>
      <div className="relative flex flex-wrap justify-center w-full h-full">
        <Link href="/Materias/matematica" passHref>
          <button className="m-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/matematica.png"
              alt="Matéria 1"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <span className="block text-[#ffa742] mt-2">Matemática</span>
          </button>
        </Link>
        <Link href="/Materias/ciencias" passHref>
          <button className="m-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/natureza.png"
              alt="Matéria 2"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <span className="block text-[#ffa742] mt-2">Ciências</span>
          </button>
        </Link>
        <Link href="/Materias/linguas" passHref>
          <button className="m-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/letras.png"
              alt="Matéria 3"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <span className="block text-[#ffa742] mt-2">Línguas</span>
          </button>
        </Link>
        <Link href="/Materias/ingles" passHref>
          <button className="m-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/english.png"
              alt="Matéria 4"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <span className="block text-[#ffa742] mt-2">Inglês</span>
          </button>
        </Link>
      </div>
      <h1 className="mb-4 pt-2 text-3xl font-bold text-white">
        Por favor escolha uma matéria!!
      </h1>
      <Link href="/apresentacao" passHref>
        <button className="absolute bottom-4 right-4 bg-[rgb(255,94,66)] hover:bg-[rgb(255,94,66)] text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Home;
