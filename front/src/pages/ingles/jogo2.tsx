// jogar pra matéria de INGLÊS
import Link from "next/link";
import React, { useState } from "react";

const palavras = [
  {
    portugues:
      "Qual palavra não pertence ao grupo: Summer, Winter, Spring, Autumn, Elephant?",
    ingles: "elephant",
  },
  {
    portugues:
      "Identifique a palavra que não está relacionada: Book, Pen, Ruler, Apple, Television?",
    ingles: "apple",
  },
  {
    portugues: "Qual palavra não se encaixa: Red, Blue, Green, Chair, Yellow?",
    ingles: "chair",
  },
  {
    portugues:
      "Encontre a palavra que não pertence ao grupo: Lion, Tiger, Elephant, Snake, Airplane?",
    ingles: "airplane",
  },
  {
    portugues:
      "Qual palavra não está associada: Pizza, Burger, Salad, Sandwich, Bicycle?",
    ingles: "bicycle",
  },
  {
    portugues:
      "Qual dessas palavras não pertence ao grupo: Happy, Joyful, Sorrowful, Cheerful, Fruit?",
    ingles: "fruit",
  },
  {
    portugues:
      "Identifique a palavra que não está relacionada: Apple, Orange, Banana, Carrot, Cat?",
    ingles: "Cat",
  },
  {
    portugues: "Qual palavra não se encaixa: Run, Jump, Swim, Fly, Fire?",
    ingles: "Fire",
  },
  {
    portugues:
      "Encontre a palavra que não pertence ao grupo: Monday, Tuesday, Friday, Wednesday, Television?",
    ingles: "television",
  },
  {
    portugues:
      "Qual palavra não está associada: Dog, Cat, Fish, Bird, Computer?",
    ingles: "computer",
  },
  {
    portugues:
      "Qual palavra não está associada: Guitar, Piano, Violin, Drum, Carrot?",
    ingles: "carrot",
  },
  {
    portugues:
      "Encontre a palavra que não pertence ao grupo: Doctor, Nurse, Teacher, Plumber, Keyboard?",
    ingles: "keyboard",
  },
  {
    portugues:
      "Qual palavra não se encaixa: Car, Bus, Train, Ship, Strawberry?",
    ingles: "ship",
  },
  {
    portugues:
      "Identifique a palavra que não está relacionada: Desk, Chair, Lamp, Sofa, Banana?",
    ingles: "banana",
  },
  {
    portugues:
      "Qual dessas palavras não pertence ao grupo: Football, Basketball, Tennis, Water, Volleyball?",
    ingles: "water",
  },
];

const Jogo2: React.FC = () => {
  const [palavraAtual, setPalavraAtual] = useState(0);
  const [respostaUsuario, setRespostaUsuario] = useState("");
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const avancarPalavra = () => {
    setPalavraAtual((prev) => (prev + 1) % palavras.length);
    setRespostaUsuario("");
    setMostrarResposta(false);
    setAcertou(false);
  };

  const verificarResposta = () => {
    const respostaCorreta = palavras[palavraAtual].ingles.toLowerCase();
    const respostaUsuarioLowerCase = respostaUsuario.toLowerCase();
    if (respostaCorreta === respostaUsuarioLowerCase) {
      setAcertou(true);
    } else {
      setAcertou(false);
    }
    setMostrarResposta(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-300">
      <h1 className="mb-8 text-3xl font-bold">
        Jogo de Correspondência de Palavras
      </h1>
      <div className="mb-4">
        <p>Qual é a tradução de "{palavras[palavraAtual].portugues}"?</p>
        <div className="flex items-center">
          <input
            type="text"
            value={respostaUsuario}
            onChange={(e) => setRespostaUsuario(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 mt-2 mr-2"
            disabled={mostrarResposta}
          />
          {mostrarResposta && (
            <p>
              {acertou ? "Parabéns, você acertou!" : "Que pena, você errou."} A
              resposta correta é: {palavras[palavraAtual].ingles}
            </p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <button
          onClick={verificarResposta}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
          disabled={mostrarResposta}
        >
          Verificar Resposta
        </button>
        <button
          onClick={avancarPalavra}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Próxima Palavra
        </button>
      </div>
      <Link href="/Materias/ingles" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Jogo2;
