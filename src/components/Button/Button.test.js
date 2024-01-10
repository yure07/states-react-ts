import { fireEvent, render, screen } from "@testing-library/react"
import Buttons from "."

test('Seção mostrando botões', () => {
    const onClickMocked = jest.fn()
    render(<Buttons onClick={onClickMocked}/>)
  
    const buttons = screen.getAllByRole('button')

    buttons.forEach((button) => {
      fireEvent.click(button)
    })
  
    expect(onClickMocked).toHaveBeenCalledTimes(10)
})