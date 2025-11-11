import React from 'react';

interface QuestionProps {
  pergunta: string;
  opcoes: string[];
  respostaUsuario: string;
  onRespostaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mostrarResposta: boolean;
}

const Question: React.FC<QuestionProps> = ({ pergunta, opcoes, respostaUsuario, onRespostaChange, mostrarResposta }) => {
  return (
    <div className="mb-4">
      <p>{pergunta}</p>
      <div className="flex flex-col">
        {opcoes.map((opcao, index) => (
          <label key={index} className="inline-flex items-center mt-2">
            <input
              type="radio"
              value={opcao}
              checked={respostaUsuario === opcao}
              onChange={onRespostaChange}
              disabled={mostrarResposta}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="ml-2">{opcao}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
