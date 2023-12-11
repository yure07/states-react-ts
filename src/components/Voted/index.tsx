import { useVotedContext } from "../../context/VotedContext"
import './style.css'

interface objProps{
    note: number
}

const Voted = () => {
    const votedContext = useVotedContext();
    const { votedCitations } = votedContext ?? {};

    const compairNotes = (a: objProps, b:objProps) => b.note - a.note

    const votedOrdered = votedCitations.sort(compairNotes)

    return(
        <div className="container-voted">
            <h1>Votados:</h1>
            {votedCitations.length > 0 ? (
                votedOrdered?.map((citation) => (
                    <div key={citation.citation} className="container-citation">
                        <p> <span>Autor: </span> {citation.author}</p>
                        <p> <span>Citação: </span> {citation.citation}</p>
                        <p className="note-citation"> Nota: <span>{citation.note}</span></p>
                    </div>
                ))
            ) : (
                <p>Ainda não há votações</p>
            )}
        </div>
    )
}

export default Voted