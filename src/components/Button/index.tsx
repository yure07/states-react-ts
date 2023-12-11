import React from 'react'
import './style.css'

interface PropsButtons{
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<PropsButtons> = ({ onClick }) => {
    return(
        <div className='section-notes'>
            <button onClick={onClick}>1</button>
            <button onClick={onClick}>2</button>
            <button onClick={onClick}>3</button>
            <button onClick={onClick}>4</button>
            <button onClick={onClick}>5</button>
            <button onClick={onClick}>6</button>
            <button onClick={onClick}>7</button>
            <button onClick={onClick}>8</button>
            <button onClick={onClick}>9</button>
            <button onClick={onClick}>10</button>
        </div>
    )
}

export default Button