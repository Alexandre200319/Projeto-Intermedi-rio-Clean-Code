import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCheck, FaTimes } from "react-icons/fa";

const JogoMemoria: React.FC = () => {
  const operacoes = [
    { operacao: "2 + 2", resultado: 4 },
    { operacao: "5 - 3", resultado: 2 },
    { operacao: "4 * 3", resultado: 12 },
    { operacao: "10 / 2", resultado: 5 },
    { operacao: "8 - 5", resultado: 3 },
    { operacao: "6 * 7", resultado: 42 },
    { operacao: "9 / 3", resultado: 3 },
    { operacao: "12 + 8", resultado: 20 },
  ];

  const pares = operacoes.flatMap(op => [
    { ...op, type: "operacao" },
    { operacao: op.resultado.toString(), resultado: op.resultado, type: "resultado" }
  ]);

  const [cartas, setCartas] = useState(pares.sort(() => Math.random() - 0.5));
  const [selecionadas, setSelecionadas] = useState<number[]>([]);
  const [paresEncontrados, setParesEncontrados] = useState<number[]>([]);
  const [resultadoTentativa, setResultadoTentativa] = useState<
    "acertou" | "errou" | ""
  >("");

  const selecionarCarta = (index: number) => {
    if (selecionadas.length === 2 || paresEncontrados.includes(index)) return;
    setSelecionadas([...selecionadas, index]);
  };

  const verificarTentativa = () => {
    if (selecionadas.length === 2) {
      const [carta1, carta2] = selecionadas;
      if (
        (cartas[carta1].type === "operacao" && cartas[carta2].resultado === parseInt(cartas[carta1].resultado.toString())) ||
        (cartas[carta2].type === "operacao" && cartas[carta1].resultado === parseInt(cartas[carta2].resultado.toString()))
      ) {
        setParesEncontrados([...paresEncontrados, carta1, carta2]);
        setSelecionadas([]);
        setResultadoTentativa("acertou");
        setTimeout(() => {
          setResultadoTentativa("");
        }, 1000);
      } else {
        setResultadoTentativa("errou");
        setTimeout(() => {
          setSelecionadas([]);
          setResultadoTentativa("");
        }, 1000);
      }
    }
  };

  useEffect(() => {
    verificarTentativa();
  }, [selecionadas]);

  const reiniciarJogo = () => {
    setCartas(pares.sort(() => Math.random() - 0.5));
    setSelecionadas([]);
    setParesEncontrados([]);
    setResultadoTentativa("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-300">
      <h1 className="mb-8 text-3xl font-bold">Jogo de Memória Matemática</h1>
      <div className="grid grid-cols-4 gap-4">
        {cartas.map((carta, index) => (
          <div
            key={index}
            onClick={() => selecionarCarta(index)}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded cursor-pointer ${
              selecionadas.includes(index) || paresEncontrados.includes(index)
                ? "opacity-50"
                : ""
            }`}
          >
            {selecionadas.includes(index) ||
            paresEncontrados.includes(index) ? (
              paresEncontrados.includes(index) ? (
                <FaCheck className="text-green-500 text-2xl" />
              ) : (
                <FaTimes className="text-red-500 text-2xl" />
              )
            ) : (
              carta.type === "operacao" ? carta.operacao : carta.operacao
            )}
          </div>
        ))}
      </div>
      {paresEncontrados.length === pares.length && (
        <button
          onClick={reiniciarJogo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Jogar Novamente
        </button>
      )}
      <Link href="/Materias/matematica" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default JogoMemoria;
