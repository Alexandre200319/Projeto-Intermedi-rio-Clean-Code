import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputQuiz from '../components/InputQuiz';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

describe('InputQuiz component', () => {
  const inputQuizProps = {
    perguntas: [
      {
        pergunta: 'Qual é a capital do Brasil?',
        resposta: 'Brasília',
      },
      {
        pergunta: 'Qual é a capital da Argentina?',
        resposta: 'Buenos Aires',
      },
    ],
    titulo: 'Quiz de Capitais',
    linkVoltar: '/some-link',
  };

  test('deve renderizar o título e a primeira pergunta', () => {
    render(<InputQuiz {...inputQuizProps} />);
    const titleElement = screen.getByText(/Quiz de Capitais/i);
    expect(titleElement).toBeInTheDocument();

    const questionElement = screen.getByText(/Qual é a capital do Brasil?/i);
    expect(questionElement).toBeInTheDocument();
  });

  test('deve mostrar a resposta correta quando o usuário acerta', async () => {
    render(<InputQuiz {...inputQuizProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Brasília' } });

    const verifyButton = screen.getByText(/Responder/i);
    fireEvent.click(verifyButton);

    const resultElement = await screen.findByText(/Certo!/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('deve mostrar a resposta incorreta quando o usuário erra', async () => {
    render(<InputQuiz {...inputQuizProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Rio de Janeiro' } });

    const verifyButton = screen.getByText(/Responder/i);
    fireEvent.click(verifyButton);

    const resultElement = await screen.findByText(/Errado!/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('deve avançar para a próxima pergunta', async () => {
    render(<InputQuiz {...inputQuizProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Brasília' } });

    const verifyButton = screen.getByText(/Responder/i);
    fireEvent.click(verifyButton);

    const nextQuestionElement = await screen.findByText(/Qual é a capital da Argentina?/i);
    expect(nextQuestionElement).toBeInTheDocument();
  });
});
