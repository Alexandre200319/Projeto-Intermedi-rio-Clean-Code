import React, { useState } from "react";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "Qual é o nome do órgão responsável por bombear o sangue pelo corpo humano?",
    options: ["Fígado", "Pulmão", "Coração", "Estômago"],
    correctAnswer: "Coração"
  },

  {
    question: "Qual é o termo utilizado para descrever todas as formas de vida em uma determinada área e seu ambiente físico?",
    options: ["Habitat", "Comunidade", "Biosfera", "Ecossistema"],
    correctAnswer: "Ecossistema"
  },

  {
    question: "Qual é o nome dado à unidade fundamental da hereditariedade?",
    options: ["Célula", "Gene", "DNA", "Cromossomo"],
    correctAnswer: "Gene"
  },

  {
    question: "Qual é a categoria taxonômica abaixo do reino?",
    options: ["Filo", "Classe", "Ordem", "Família"],
    correctAnswer: "Filo"
  },

  {
    question: "Qual é o processo pelo qual as plantas convertem a luz solar em energia?",
    options: ["Respiração", "Fotossíntese", "Transpiração", "Digestão"],
    correctAnswer: "Fotossíntese"
  },

  {
    question: "Quem propôs a teoria da evolução por seleção natural?",
    options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Albert Einstein"],
    correctAnswer: "Charles Darwin"
  },

  {
    question: "Qual é o nome dado a organismos unicelulares que podem causar doenças?",
    options: ["Bactérias", "Fungos", "Vírus", "Protozoários"],
    correctAnswer: "Vírus"
  },

  {
    question: "Qual é o nome do processo pelo qual um animal passa por mudanças físicas e comportamentais ao longo de sua vida?",
    options: ["Metabolismo", "Mutação", "Evolução", "Desenvolvimento"],
    correctAnswer: "Desenvolvimento"
  },

  {
    question: "Qual é o maior bioma terrestre?",
    options: ["Deserto", "Floresta Tropical", "Tundra", "Savana"],
    correctAnswer: "Floresta Tropical"
  },

  {
    question: "Qual é o termo utilizado para descrever uma interação onde uma espécie se beneficia enquanto a outra é prejudicada?",
    options: ["Mutualismo", "Comensalismo", "Parasitismo", "Simbiose"],
    correctAnswer: "Parasitismo"
  },

  {
    question: "Qual é o nome dado à substância que é formada a partir da combinação de dois ou mais elementos químicos?",
    options: ["Composto", "Elemento", "Molécula", "Íon"],
    correctAnswer: "Composto"
  },

  {
    question: "Qual é o estado da matéria que não tem forma nem volume próprios?",
    options: ["Sólido", "Líquido", "Gasoso", "Plasma"],
    correctAnswer: "Gasoso"
  },

  {
    question: "Qual é o elemento químico mais abundante na crosta terrestre?",
    options: ["Ferro", "Oxigênio", "Carbono", "Silício"],
    correctAnswer: "Oxigênio"
  },

  {
    question: "Qual é o nome dado à substância que acelera a velocidade de uma reação química sem ser consumida na reação?",
    options: ["Catalisador", "Reagente", "Produto", "Inibidor"],
    correctAnswer: "Catalisador"
  },

  {
    question: "Qual é o nome dado à parte do corpo humano responsável por detectar os estímulos sensoriais?",
    options: ["Cérebro", "Coração", "Pulmões", "Sistema Nervoso"],
    correctAnswer: "Sistema Nervoso"
  }   
];

const ScienceQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    if (!showResult) {
      setSelectedAnswer(answer);
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">Quiz de Ciências</h1>
      {!showResult ? (
        <div className="mb-4">
          <p>{questions[currentQuestion].question}</p>
          <div className="flex flex-col">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className="inline-flex items-center mt-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelect(option)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
          {selectedAnswer !== "" && (
            <button
              onClick={handleNextQuestion}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Próxima Pergunta
            </button>
          )}
        </div>
      ) : (
        <div>
          <p>
            Você acertou {score} de {questions.length} perguntas.
          </p>
          <button
            onClick={handleResetQuiz}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Tentar Novamente
          </button>
        </div>
      )}
      <Link href="/Materias/ciencias" passHref>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-16">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default ScienceQuiz;
