import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react"
import Header from "."

test('Renderiza boas vindas e botão início de votação', () => {
  const onClickMocked = jest.fn();
  render(<Header onClick={onClickMocked} />) 

  const textWelcome = screen.getByText('Bem-vindo')
  const btnStartVotation = screen.getByTestId('btn-start')

  expect(textWelcome).toBeInTheDocument()
  expect(btnStartVotation).toBeInTheDocument()
})

test('Inicia votação', () => {
  const onClickMocked = jest.fn();
  render(<Header onClick={onClickMocked} />)
  
  const btnStartVotation = screen.getByTestId('btn-start')

  fireEvent.click(btnStartVotation)
})