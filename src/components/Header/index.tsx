import { MouseEvent } from 'react'
import styles from './header.module.sass'

interface buttonType{
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const Header: React.FC<buttonType> = ({onClick}) => {
    return(
        <header className={styles.headerContainer}>
            <h1>Bem-vindo</h1>
            <button onClick={onClick}>Iniciar votação</button>
        </header>   
    )
}

export default Header