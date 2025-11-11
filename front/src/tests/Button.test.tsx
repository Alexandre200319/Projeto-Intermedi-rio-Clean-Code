import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
  test('deve renderizar o botão com o texto correto', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('deve chamar a função onClick quando clicado', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('deve desabilitar o botão quando a propriedade disabled for verdadeira', () => {
    render(<Button disabled>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeDisabled();
  });
});
