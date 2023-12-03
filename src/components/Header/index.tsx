import { MouseEvent } from 'react'
import './style.css'

interface buttonType{
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const Header: React.FC<buttonType> = ({onClick}) => {
    return(
        <header className='header-container'>
            <h1>Bem-vindo</h1>
            <button onClick={onClick}>Iniciar votação</button>
        </header>   
    )
}

export default Header