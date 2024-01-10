import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios"
import Citations from ".";
import Buttons from '../Button';
import { VotedProvider } from "../../context/VotedContext";

test('Renderiza citações da API', () => {
  const spyOnAxios = jest.spyOn(axios, 'get')

  const mockResponse = [
    {
      text: 'Texto de exemplo 1',
      author: 'Autor de exemplo 1'
    },
    {
      text: 'Texto de exemplo 2',
      author: 'Autor de exemplo 2'
    }
  ]
  spyOnAxios.mockResolvedValue(mockResponse)

  render(
    <VotedProvider>
      <Citations data={mockResponse}/>
    </VotedProvider>
  )

  const textSelectCitation = screen.getByTestId('text-select-board')

  mockResponse.forEach(item => {
    expect(screen.getByText(item.text)).toBeInTheDocument();
    expect(screen.getByText(item.author)).toBeInTheDocument();
  });

  expect(textSelectCitation).toBeInTheDocument()
})

test('Função de dar nota', () => {
  const onClickMocked = jest.fn()
    render(<Buttons onClick={onClickMocked}/>)
  
    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      fireEvent.click(button)
    })
  
    expect(onClickMocked).toHaveBeenCalledTimes(10)
})