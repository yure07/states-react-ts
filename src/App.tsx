import { useState, useEffect } from 'react'
import Citation from "./components/Citations";
import Header from "./components/Header";
import Voted from './components/Voted';
import { VotedProvider } from './context/VotedContext'

const App = () => {
  const [data, setData] = useState()
  const [showCitations, setShowCitations] = useState(false)
  
  useEffect(()=>{
    const getApi = async () => {
      try{
          const response = await fetch('https://type.fit/api/quotes')
          const data = await response.json()
          setData(data)
        }
        catch (error){
          console.log('error:', error)
        }    
    } 
    getApi()
  },[])

  return (
    <VotedProvider>
      <Header onClick={() => setShowCitations(!showCitations)}/>
      {(showCitations && data) && <Citation data={data}/>}
      <Voted/>
    </VotedProvider>
  );
}

export default App;