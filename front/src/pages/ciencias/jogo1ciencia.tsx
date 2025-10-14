import Link from "next/link";
import React, { useState } from "react";

const perguntas = [
  {
    pergunta: "Qual é o nome da galáxia onde se localiza o sistema solar?",
    opcoes: ["a) Via Láctea", "b) Andrômeda", "c) Triângulo"],
    respostaCorreta: "a) Via Láctea",
  },

  {
    pergunta: "Qual é o nome do planeta conhecido como o 'planeta vermelho'?",
    opcoes: ["a) Vênus", "b) Júpiter", "c) Marte"],
    respostaCorreta: "c) Marte",
  },

  {
    pergunta: "Quantos planetas existem no sistema solar?",
    opcoes: ["a) 10", "b) 11", "c) 7 ", "d) 8"],
    respostaCorreta: "d) 8",
  },

  {
    pergunta: "O que são planetas gasosos??",
    opcoes: ["a) Planetas feitos principalmente de rochas e metais", "b) Planetas sem atmosfera", "c) Planetas feitos principalmente de gases" , "d) Planetas feitos principalmente de gelo"],
    respostaCorreta: "c) Planetas feitos principalmente de gases",
  },

  {
    pergunta: "Qual é o planeta mais próximo do Sol?",
    opcoes: ["a) Terra", "b) Vênus", "c) Mercúrio", "d) Marte"],
    respostaCorreta: "c) Mercúrio",
  },

  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    opcoes: ["a) Júpiter", "b) Saturno", "c) Urano", "d) Netuno"],
    respostaCorreta: "a) Júpiter",
  },

  {
    pergunta: "Qual é o nome da estrela que fica no centro do sistema solar?",
    opcoes: [" a) Alfa Centauri", "b) Sirius", "c) Sol", "d) Lua"],
    respostaCorreta: "c) Sol",
  },

  {
    pergunta: "O que é um cometa?",
    opcoes: ["a) Um planeta", "b) Um tipo de estrela", "c) Um corpo celeste composto por gelo, poeira e rochas", "d) Uma galáxia"],
    respostaCorreta: "c) Um corpo celeste composto por gelo, poeira e rochas ",
  },

  {
    pergunta: "Qual é a ordem correta dos planetas do sistema solar, começando do mais próximo ao Sol?",
    opcoes: ["a) Terra, Vênus, Marte, Júpiter, Saturno, Urano, Netuno", "b) Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno", "c) Mercúrio, Vênus, Terra, Marte, Saturno, Júpiter, Urano, Netuno", "d) Marte, Vênus, Terra, Mercúrio, Júpiter, Saturno, Urano, Netuno"],
    respostaCorreta: "b) Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno",
  },

  {
    pergunta: "Qual é o planeta conhecido como gigante gasoso?",
    opcoes: ["a) Marte", "b) Júpiter", "c) Vênus", "d) Terra"],
    respostaCorreta: "b) Júpiter",
  },

  {
    pergunta: "Qual é o nome da maior lua de Saturno?",
    opcoes: ["a) Deimos", "b) Lua", "c) Io", "d) Titã"],
    respostaCorreta: "d) Titã",
  },

  {
    pergunta: "Qual é o quarto planeta do sistema solar, partindo do Sol?",
    opcoes: ["a) Vênus", "b) Marte", "c) Terra", "d) Saturno"],
    respostaCorreta: "b) Marte",
  },
  
  {
    pergunta: "Qual é a diferença entre uma estrela e um planeta?",
    opcoes: ["a) Estrelas têm atmosferas, enquanto planetas não têm.", "b) Estrelas são menores que planetas.", "c) Estrelas têm luz própria, enquanto planetas refletem a luz do Sol.", "d) Estrelas estão mais próximas do Sol do que os planetas."],
    respostaCorreta: "c) Estrelas têm luz própria, enquanto planetas refletem a luz do Sol.",
  },
  
];

const Jogo1: React.FC = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostaUsuario, setRespostaUsuario] = useState("");
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const avancarPergunta = () => {
    setPerguntaAtual((prev) => prev + 1);
    setRespostaUsuario("");
    setMostrarResposta(false);
    setAcertou(false);
  };

  const verificarResposta = () => {
    const respostaCorreta = perguntas[perguntaAtual].respostaCorreta;
    if (respostaCorreta === respostaUsuario) {
      setAcertou(true);
    } else {
      setAcertou(false);
    }
    setMostrarResposta(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">
        Jogo de Ciências para Séries Iniciais
      </h1>
      {perguntaAtual < perguntas.length ? (
        <div className="mb-4">
          <p>{perguntas[perguntaAtual].pergunta}</p>
          <div className="flex flex-col">
            {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
              <label key={index} className="inline-flex items-center mt-2">
                <input
                  type="radio"
                  value={opcao}
                  checked={respostaUsuario === opcao}
                  onChange={(e) => setRespostaUsuario(e.target.value)}
                  disabled={mostrarResposta}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">{opcao}</span>
              </label>
            ))}
          </div>
          {mostrarResposta && (
            <p className="mt-2">
              {acertou ? "Parabéns, você acertou!" : "Que pena, você errou."} A
              resposta correta é: {perguntas[perguntaAtual].respostaCorreta}
            </p>
          )}
        </div>
      ) : (
        <p>Parabéns, você completou o jogo!</p>
      )}
      {perguntaAtual < perguntas.length && (
        <button
          onClick={verificarResposta}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2 mt-4"
          disabled={mostrarResposta}
        >
          Verificar Resposta
        </button>
      )}
      {mostrarResposta && (
        <button
          onClick={avancarPergunta}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Próxima Pergunta
        </button>
      )}
      <Link href="/Materias/ciencias" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-16">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Jogo1;
