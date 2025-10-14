import React, { useState } from "react";
import Link from "next/link";

const Jogo2: React.FC = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [tentativa, setTentativa] = useState("");
  const [resultado, setResultado] = useState("");
  const [dica, setDica] = useState("");
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);

  const handleTentativa = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTentativa(e.target.value);
  };

  const verificarTentativa = () => {
    const tentativaInt = parseInt(tentativa);
    if (!isNaN(tentativaInt)) {
      if (tentativaInt === numeroAleatorio) {
        setResultado("Parabéns, você acertou!");
        setDica("");
        setAcertos(acertos + 1);
        setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
      } else if (tentativaInt > numeroAleatorio) {
        setResultado("Tente novamente.");
        setDica("A dica é: o número é menor.");
        setErros(erros + 1);
      } else {
        setResultado("Tente novamente.");
        setDica("A dica é: o número é maior.");
        setErros(erros + 1);
      }
    } else {
      setResultado("Por favor, digite um número válido.");
      setDica("");
    }
    setTentativa("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-300">
      <h1 className="mb-8 text-3xl font-bold">Jogo de Adivinhação</h1>
      <p>Estou pensando em um número entre 1 e 100. Qual é?</p>
      <input
        type="text"
        value={tentativa}
        onChange={handleTentativa}
        className="border border-gray-400 rounded px-2 py-1 mt-4"
      />
      <button
        onClick={verificarTentativa}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Verificar
      </button>
      <p>{resultado}</p>
      {dica && <p>{dica}</p>}
      <p>Acertos: {acertos}</p>
      <p>Erros: {erros}</p>
      <Link href="/Materias/matematica" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold m-4 py-2 px-4 rounded mt-8">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Jogo2;
