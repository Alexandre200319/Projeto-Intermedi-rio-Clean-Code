import React, { useState } from "react";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "Qual é o plural da palavra 'cachorro'?",
    options: ["cachorras", "cachorros", "cachorres", "cachorras"],
    correctAnswer: "cachorros",
    },
    
    {
    question: "Qual é o antônimo da palavra 'grande'?",
    options: ["pequeno", "alto", "enorme", "gigante"],
    correctAnswer: "pequeno",
    },
    
    {
    question: "Qual é o sinônimo da palavra 'alegre'?",
    options: ["triste", "feliz", "chato", "bravo"],
    correctAnswer: "feliz",
    },
    
    {
    question: "Em qual alternativa a palavra está escrita corretamente?",
    options: ["casinha", "cazine", "cazinha", "cazinna"],
    correctAnswer: "casinha",
    },
    
    {
    question: "Qual é o plural da palavra 'lápis'?",
    options: ["lápis", "lápises", "lápiz", "lápisés"],
    correctAnswer: "lápis",
    },
    
    {
    question: "Qual é a forma do verbo 'andar' na terceira pessoa do singular do presente do indicativo?",
    options: ["andei", "andamos", "andam", "anda"],
    correctAnswer: "anda",
    },
    
    {
    question: "Qual é o artigo definido plural da palavra 'o carro'?",
    options: ["os carros", "as carro", "o carroes", "os carro"],
    correctAnswer: "os carros",
    },
    
    {
    question: "Qual é a palavra que está incorreta ortograficamente?",
    options: ["abacaxi", "abaxi", "abacachi", "abacahi"],
    correctAnswer: "abaxi",
    },
    
    {
    question: "Qual é a classe gramatical da palavra 'rápido'?",
    options: ["adjetivo", "substantivo", "verbo", "advérbio"],
    correctAnswer: "advérbio",
    },
    
    {
    question: "Qual é a sílaba tônica da palavra 'banana'?",
    options: ["ba", "na", "nana", "ba-na"],
    correctAnswer: "ba-na",
    },

    {
      question: "Qual é o plural da palavra 'gato'?",
      options: ["gatas", "gatos", "gatás", "gates"],
      correctAnswer: "gatos",
      },
      
      {
      question: "Qual é o antônimo da palavra 'triste'?",
      options: ["alegre", "feliz", "contente", "sorridente"],
      correctAnswer: "alegre",
      },
      
      {
      question: "Qual é o sinônimo da palavra 'rápido'?",
      options: ["devagar", "lento", "veloz", "apressado"],
      correctAnswer: "veloz",
      },
      
      {
      question: "Em qual alternativa a palavra está escrita corretamente?",
      options: ["cachoro", "cachorro", "caxoro", "cachoro"],
      correctAnswer: "cachorro",
      },
      
      {
      question: "Qual é o plural da palavra 'pão'?",
      options: ["pãos", "pães", "pãos", "pãezinhos"],
      correctAnswer: "pães",
      },
];

const PortugueseWordGame: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCheckAnswer = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">
        Jogo de Palavras em Língua Portuguesa para Séries Iniciais
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
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
          {isCorrect !== null && (
            <p className="mt-2">
              {isCorrect ? "Parabéns, você acertou!" : "Que pena, você errou."}{" "}
              A resposta correta é: {questions[currentQuestion].correctAnswer}
            </p>
          )}
        </div>
      ) : (
        <div>
          <p>Parabéns, você completou o jogo!</p>
        </div>
      )}
      {currentQuestion < questions.length && (
        <button
          onClick={handleCheckAnswer}
          disabled={selectedOption === null}
          className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4 ${
            selectedOption === null ? "cursor-not-allowed" : ""
          }`}
        >
          Verificar Resposta
        </button>
      )}
      {isCorrect !== null && (
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
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

export default PortugueseWordGame;
