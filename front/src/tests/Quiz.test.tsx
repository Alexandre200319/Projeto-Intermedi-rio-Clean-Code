import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from '../components/Quiz';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

describe('Quiz component', () => {
  const quizProps = {
    perguntas: [
      {
        pergunta: 'Qual é a capital do Brasil?',
        opcoes: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
        respostaCorreta: 'Brasília',
      },
      {
        pergunta: 'Qual é a capital da Argentina?',
        opcoes: ['Buenos Aires', 'Santiago', 'Montevidéu', 'Lima'],
        respostaCorreta: 'Buenos Aires',
      },
    ],
    titulo: 'Quiz de Capitais',
    linkVoltar: '/some-link',
  };

  test('deve renderizar o título e a primeira pergunta', () => {
    render(<Quiz {...quizProps} />);
    const titleElement = screen.getByText(/Quiz de Capitais/i);
    expect(titleElement).toBeInTheDocument();

    const questionElement = screen.getByText(/Qual é a capital do Brasil?/i);
    expect(questionElement).toBeInTheDocument();
  });

  test('deve mostrar a resposta correta quando o usuário acerta', () => {
    render(<Quiz {...quizProps} />);
    const option = screen.getByLabelText(/Brasília/i);
    fireEvent.click(option);

    const verifyButton = screen.getByText(/Verificar Resposta/i);
    fireEvent.click(verifyButton);

    const resultElement = screen.getByText(/Parabéns, você acertou!/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('deve mostrar a resposta incorreta quando o usuário erra', () => {
    render(<Quiz {...quizProps} />);
    const option = screen.getByLabelText(/Rio de Janeiro/i);
    fireEvent.click(option);

    const verifyButton = screen.getByText(/Verificar Resposta/i);
    fireEvent.click(verifyButton);

    const resultElement = screen.getByText(/Que pena, você errou./i);
    expect(resultElement).toBeInTheDocument();
  });

  test('deve avançar para a próxima pergunta', () => {
    render(<Quiz {...quizProps} />);
    const option = screen.getByLabelText(/Brasília/i);
    fireEvent.click(option);

    const verifyButton = screen.getByText(/Verificar Resposta/i);
    fireEvent.click(verifyButton);

    const nextButton = screen.getByText(/Próxima Pergunta/i);
    fireEvent.click(nextButton);

    const nextQuestionElement = screen.getByText(/Qual é a capital da Argentina?/i);
    expect(nextQuestionElement).toBeInTheDocument();
  });

  test('deve mostrar a mensagem de conclusão ao final do quiz', () => {
    render(<Quiz {...quizProps} />);
    // Pergunta 1
    fireEvent.click(screen.getByLabelText(/Brasília/i));
    fireEvent.click(screen.getByText(/Verificar Resposta/i));
    fireEvent.click(screen.getByText(/Próxima Pergunta/i));

    // Pergunta 2
    fireEvent.click(screen.getByLabelText(/Buenos Aires/i));
    fireEvent.click(screen.getByText(/Verificar Resposta/i));
    fireEvent.click(screen.getByText(/Próxima Pergunta/i));

    const completionMessage = screen.getByText(/Parabéns, você completou o jogo!/i);
    expect(completionMessage).toBeInTheDocument();
  });
});
