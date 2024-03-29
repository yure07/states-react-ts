import Buttons from '../Button';
import styles from './style.module.sass';
import { useVotedContext } from '../../context/VotedContext';
import { useRef, useState } from 'react';

interface CitationData{
    data: { author: string; text: string; }[];
}

interface DataVotedType{
    author: string;
    citation: string;
    note: number;
}

const Citations:React.FC<CitationData> = ({ data }) => {
    const votedContext = useVotedContext();
    const { voteCitation } = votedContext ?? {};
    const { votedCitations } = votedContext ?? {};
    const [hideCitation, setHideCitation] = useState<string[]>([])
    const citationRef = useRef<HTMLDivElement>(null)

    let newDataVoted:DataVotedType = {author: '', citation: '', note: 0}

    const handleContent = (e: React.MouseEvent<HTMLDivElement>) => {
        const author = e.currentTarget.children[0].innerHTML
        const citation = e.currentTarget.children[1].innerHTML
        
        newDataVoted.author = author
        newDataVoted.citation = citation
        e.currentTarget.style.opacity = '1'
    }

    const handleNote = (e: React.MouseEvent<HTMLButtonElement>) => {
        const note = Number(e.currentTarget.innerHTML)
        newDataVoted.note = note
        e.currentTarget.style.backgroundColor = 'green'
        if(voteCitation !== undefined && !verifyCitationEqual(newDataVoted.citation)){
            voteCitation({author: newDataVoted.author, citation: newDataVoted.citation, note: newDataVoted.note})
        }
        setHideCitation((prevHiddenDivs) => [...prevHiddenDivs, newDataVoted.citation]);
    }

    const verifyCitationEqual = (newCitation: string) => {
        return votedCitations.find(objCitation => objCitation.citation === newCitation)
    }
    
    return(
        <>
        <h6 data-testid='text-select-board'>Selecione o quadro para votar</h6>
            {data.map && data.map(({author, text}, index) => (
                <div
                key={index}
                className={`${styles.citationContainer} ${hideCitation.includes(text) ? styles.hidden : ''}`}
                onClick={handleContent}
                ref={citationRef}
              >
                    <p>{author}</p>
                    <p>{text}</p>
                    <h3>Nota:</h3>
                    <Buttons onClick={handleNote}/>
                </div>
            ))}
        </>
    )
}

export default Citations