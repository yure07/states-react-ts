import { useState } from 'react'
import Citation from "./components/Citations";
import Header from "./components/Header";
import Voted from './components/Voted';

const App = () => {
  const [showCitations, setShowCitations] = useState(false)

  const data = [
    {author: 'Santo Agostinho', citation: 'A filosofia é um combate, não contra os homens, mas contra os defeitos que estão em nós.'},
    {author: 'Sócrates', citation: 'A vida sem reflexão não vale a pena ser vivida.'},
    {author: 'Anton Tchekhov', citation: 'O homem é aquilo que ele acredita.'},
    {author: 'Alexandr Solijenítsin', citation: 'A felicidade é a aceitação corajosa da vida.'},
    {author: 'Albert Pike', citation: 'O que fazemos para nós mesmos morre conosco. O que fazemos pelos outros e pelo mundo permanece e é imortal.'},
    {author: 'Henry David Thoreau', citation: 'O preço de qualquer coisa é a quantidade de vida que você troca por ela.'}
  ]

  return (
    <>
      <Header onClick={() => setShowCitations(!showCitations)}/>
      {showCitations && <Citation data={data}/>}
      <Voted/>
    </>
  );
}

export default App;