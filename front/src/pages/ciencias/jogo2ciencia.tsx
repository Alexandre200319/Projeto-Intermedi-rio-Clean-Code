import Link from "next/link";
import React, { useState } from "react";

const perguntas = [
  {
    pergunta: "Qual é o maior animal terrestre?",
    opcoes: ["a) Elefante", "b) Girafa", "c) Hipopótamo"],
    respostaCorreta: "a) Elefante",
  },

  {
    pergunta: "Qual animal vive na água e é conhecido por seu tamanho gigante?",
    opcoes: ["a) Tubarão", "b) Golfinho", "c) Baleia"],
    respostaCorreta: "c) Baleia",
  },

  {
    pergunta: "Qual animal não voa e tem penas?",
    opcoes: ["a) Pato", "b) Águia", "c) Galinha"],
    respostaCorreta: "c) Galinha",
  },

  {
    pergunta: "Qual é o nome da estrela que fica no centro do sistema solar?",
    opcoes: ["a) Alfa Centauri", "b) Sirius", "c) Sol"],
    respostaCorreta: "c) Sol",
  },

  { 
    pergunta: "A qual grupo os seguintes animais pertencem?",
    opcoes: ["Galinha", "Pinguim", "Coruja", "Pomba"],
    respostaCorreta: "aves",
  },

  { 
    pergunta: "A qual grupo os seguintes animais pertencem?",
    opcoes: ["Baleia", "Gato", "Cachorro", "Macaco"],
    respostaCorreta: "mamíferos",
  },

  { 
    pergunta: "A qual grupo os seguintes animais pertencem?",
    opcoes: ["Besouro", "Formiga", "Borboleta", "Abelha"],
    respostaCorreta: "insetos",
  },

  { 
    pergunta: "A qual grupo os seguintes animais pertencem?",
    opcoes: ["Salmão", "Tubarão", "Carpa", "Atum"],
    respostaCorreta: "peixes",
  },

  {
    pergunta: "O que causa o arco-íris?",
    opcoes: [
      "a) A luz do Sol refletida na Lua",
      "b) A refração da luz do Sol nas gotas de chuva",
      "c) A luz do Sol refletida nas nuvens",
      "d) A luz da Lua refletida nas gotas de chuvaResposta correta",
    ],
    respostaCorreta: "b) A refração da luz do Sol nas gotas de chuva",
  },

  {
    pergunta: "O que é uma sombra?",
    opcoes: [
      "a) Uma área onde não há luz",
      "b) Uma área onde há muita luz",
      "c) Uma área onde há mais calor",
      "d) Uma área onde há menos cor",
    ],
    respostaCorreta: "a) Uma área onde não há luz",
  },
];

const Jogo2: React.FC = () => {
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

export default Jogo2;
