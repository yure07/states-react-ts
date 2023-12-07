import Button from '../Button';
import './style.css'
import { useVotedContext } from '../../context/VotedContext';

interface CitationData{
    data: { author: string; citation: string; }[];
}

interface DataVotedType{
    author: string;
    citation: string;
    note: number;
}

const Citations = ({ data }: CitationData) => {
    const votedContext = useVotedContext();
    const { voteCitation } = votedContext ?? {};
    const { votedCitations } = votedContext ?? {};

    let newDataVoted:DataVotedType = {author: '', citation: '', note: 0}

    const handleContent = (e: React.MouseEvent<HTMLDivElement>) => {
        const author = e.currentTarget.children[0].innerHTML
        const citation = e.currentTarget.children[1].innerHTML
        
        newDataVoted.author = author
        newDataVoted.citation = citation
        e.currentTarget.style.cursor = 'not-allowed'
        e.currentTarget.style.opacity = '1'
    }

    const handleNote = (e: React.MouseEvent<HTMLButtonElement>) => {
        const note = Number(e.currentTarget.innerHTML)
        newDataVoted.note = note
        e.currentTarget.style.backgroundColor = 'green'
        if(voteCitation !== undefined && !verifyCitationEqual(newDataVoted.citation)){
            voteCitation({author: newDataVoted.author, citation: newDataVoted.citation, note: newDataVoted.note})
        }
    }
    
    const handleDivButtons = (e: React.MouseEvent<HTMLDivElement>) => {
        const divElement = e.currentTarget;
        
        if (divElement) {
            divElement.querySelectorAll('*').forEach((element) => {
                element.id = 'btn-disabled'
            })
        }
    }

    const verifyCitationEqual = (newCitation: string) => {
        return votedCitations.find(objCitation => objCitation.citation === newCitation)
    }
    
    return(
        <>
        <h6>Selecione o quadro para votar</h6>
            {data.map(({author, citation}, index) => (
                <div key={index} className='citation-container' onClick={handleContent}>
                    <p>{author}</p>
                    <p>{citation}</p>
                    <h3>Nota:</h3>
                    <Button onClick={handleNote} onClick2={handleDivButtons}/>
                </div>
            ))}
        </>
    )
}

export default Citations