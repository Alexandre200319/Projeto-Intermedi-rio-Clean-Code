import React, { useState } from "react";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
{
    question: "Qual é a classe gramatical da palavra 'menina'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "a) Substantivo"
},

{
    question: "Qual é a classe gramatical da palavra 'rápido'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "b) Adjetivo"
},

{
    question: "Qual é a classe gramatical da palavra 'correr'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "d) Verbo"
},

{
    question: "Qual é a classe gramatical da palavra 'amizade'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "a) Substantivo"
},

{
    question: "Qual é a classe gramatical da palavra 'bonito'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "b) Adjetivo"
},

{
    question: "Qual é a classe gramatical da palavra 'pular'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "d) Verbo"
},

{
    question: "Qual é a classe gramatical da palavra 'azul'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "b) Adjetivo"
},

{
    question: "Qual é a classe gramatical da palavra 'felizmente'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "c) Advérbio"
},

{
    question: "Qual é a classe gramatical da palavra 'cantar'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "d) Verbo"
},

{
    question: "Qual é a classe gramatical da palavra 'cachorro'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "a) Substantivo"
},

{
    question: "Qual é a classe gramatical da palavra 'elefante'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "a) Substantivo"
},
 
{
    question: "Qual é a classe gramatical da palavra 'comer'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "d) Verbo"
},

{
    question: "Qual é a classe gramatical da palavra 'comigo'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "c) Advérbio"
},

{
    question: "Qual é a classe gramatical da palavra 'muito'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "c) Advérbio"
},

{
    question: "Qual é a classe gramatical da palavra 'coragem'?",
    options: ["a) Substantivo", "b) Adjetivo", "c) Advérbio", "d) Verbo"],
    correctAnswer: "a) Substantivo"
}
];

const PortugueseQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">
        Quiz de Língua Portuguesa para Séries Iniciais
      </h1>
      {currentQuestion < questions.length ? (
        <div className="mb-4">
          <p>{questions[currentQuestion].question}</p>
          <div className="flex flex-col">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="inline-flex items-center mt-2">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="form-radio h-5 w-5 text-blue-600"
                  disabled={showResult}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
          {showResult && (
            <p className="mt-2">
              {selectedOption === questions[currentQuestion].correctAnswer
                ? "Resposta correta!"
                : "Resposta incorreta."}
            </p>
          )}
        </div>
      ) : (
        <div>
          <p>Parabéns, você completou o quiz!</p>
          <p>
            Sua pontuação foi: {score} de {questions.length}
          </p>
        </div>
      )}
      {currentQuestion < questions.length && (
        <button
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
          className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4 ${
            selectedOption === null ? "cursor-not-allowed" : ""
          }`}
        >
          Próxima Pergunta
        </button>
      )}
      <Link href="/Materias/linguas" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-16">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default PortugueseQuiz;
