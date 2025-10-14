import React, { useState } from "react";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "Qual é o tipo de acento utilizado na palavra 'cidadão'?",
    options: ["Acento agudo", "Acento circunflexo", "Acento til", "Sem acento"],
    correctAnswer: "Acento til"
  },

  {
    question: "Qual é o tipo de acento utilizado na palavra 'café'?",
    options: ["Acento agudo", "Acento circunflexo", "Acento grave", "Sem acento"],
    correctAnswer: "Acento agudo"
  },

  {
    question: "Qual é o tipo de acento utilizado na palavra 'português'?",
    options: ["Acento agudo", "Acento circunflexo", "Acento grave", "Sem acento"],
    correctAnswer: "Acento circunflexo"
  },

  {
    question: "Qual é a palavra corretamente acentuada?",
    options: ["Eja", "Estudante", "Cabelereira", "Lapis"],
    correctAnswer: "Estudante"
  },

  {
    question: "Qual é a palavra corretamente acentuada?",
    options: ["Áviao", "Sapatô", "Médico", "Risadã"],
    correctAnswer: "Médico"
  },

  {
    question: "Qual é a palavra que vai acento?",
    options: ["Pato", "Cançao", "Papai", "Atleta"],
    correctAnswer: "Canção"
  },

  {
    question: "Qual é a palavra que possui acentuação?",
    options: ["Cachorro", "Galinha", "Oculos", "Cadeira"],
    correctAnswer: "Óculos"
  },

  {
    question: "Qual é a palavra corretamente acentuada?",
    options: ["Ilha", "Mãrmore", "Cidadê", "Propagandá"],
    correctAnswer: "Ilha"
  },

  {
    question: "Qual é a palavra corretamente acentuada?",
    options: ["Camísa", "Mèdico", "Matematica", "Aniversário"],
    correctAnswer: "Aniversário"
  },

  {
    question: "Qual é a palavra corretamente acentuada?",
    options: ["Cãnil", "Guitárra", "Macáco", "Caminhão"],
    correctAnswer: "Caminhão"
  },
  {
    question: "Qual é a palavra corretamente acentuada?",
    options: ["Vitoria", "Relogio", "Pipoca", "Paciente"],
    correctAnswer: "Relógio"
  },

  {
    question: "Qual é a palavra corretamente acentuada?",
    options: ["Põrta", "Nacional", "Livraría", "Mascára"],
    correctAnswer: "Nacional"
  },

  {
    question: "Qual é a palavra corretamente acentuada?",
    options: ["Caixá", "História", "Farmacia", "Mênino"],
    correctAnswer: "História"
  },
  
  {
    question: "Qual palavra precisa de acento gráfico?",
    options: ["Cafe", "Casa", "Avo", "Trofeu"],
    correctAnswer: "Cafe"

  },

  {
    question: "Qual alternativa está corretamente acentuada?",
    options: ["Portatil", "Cômodo", "Fácil", "Áspero"],
    correctAnswer: "Cômodo"

  },

  {
    question: "Qual termo precisa de acento?",
    options: ["Problema", "Leitura", "Porta", "Remedio"],
    correctAnswer: "Remedio"

  },

  {
    question: "Qual opção está corretamente acentuada?",
    options: ["Colonia", "Papel", "Pincel", "Chapeu"],
    correctAnswer: "Pincel"

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
