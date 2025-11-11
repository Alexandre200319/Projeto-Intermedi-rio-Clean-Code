import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Question from '../components/Question';

describe('Question component', () => {
  const questionProps = {
    pergunta: 'Qual é a capital do Brasil?',
    opcoes: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
    respostaUsuario: '',
    onRespostaChange: jest.fn(),
    mostrarResposta: false,
  };

  test('deve renderizar a pergunta e as opções', () => {
    render(<Question {...questionProps} />);
    const questionElement = screen.getByText(/Qual é a capital do Brasil?/i);
    expect(questionElement).toBeInTheDocument();

    const option1 = screen.getByLabelText(/Rio de Janeiro/i);
    expect(option1).toBeInTheDocument();

    const option2 = screen.getByLabelText(/São Paulo/i);
    expect(option2).toBeInTheDocument();

    const option3 = screen.getByLabelText(/Brasília/i);
    expect(option3).toBeInTheDocument();

    const option4 = screen.getByLabelText(/Belo Horizonte/i);
    expect(option4).toBeInTheDocument();
  });

  test('deve chamar a função onRespostaChange quando uma opção é selecionada', () => {
    render(<Question {...questionProps} />);
    const option = screen.getByLabelText(/Brasília/i);
    fireEvent.click(option);
    expect(questionProps.onRespostaChange).toHaveBeenCalledTimes(1);
  });

  test('deve desabilitar as opções quando mostrarResposta for verdadeiro', () => {
    render(<Question {...questionProps} mostrarResposta={true} />);
    const option = screen.getByLabelText(/Brasília/i);
    expect(option).toBeDisabled();
  });
});
