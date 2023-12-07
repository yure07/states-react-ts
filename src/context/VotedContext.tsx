import { createContext, useState, useContext, ReactNode } from 'react';

type propsVotedContext = {
    votedCitations: propsCitation[];
    voteCitation: ({author, citation, note}: propsCitation) => void 
}

interface propsProvider{
    children: ReactNode
}

interface propsCitation{
    author: string;
    citation: string;
    note: number;
}

const VotedContext = createContext<propsVotedContext | undefined>(undefined);

export const VotedProvider = ({children}: propsProvider) => {
    const [votedCitations, setVotedCitations] = useState<propsCitation[]>([])

    const voteCitation = ({author, citation, note}: propsCitation) => {
        setVotedCitations((prevVotedCitations) => [
            ...prevVotedCitations,
            {author: author, citation: citation, note: note}
        ])
    }

    return(
        <VotedContext.Provider value={{ votedCitations, voteCitation }}>
            {children}
        </VotedContext.Provider>
    )
}

export const useVotedContext = (): propsVotedContext => {
    const context = useContext(VotedContext)

    if (!context) {
        throw new Error('useCitationContext deve ser usado dentro de um CitationProvider');
      }
    
    return context as propsVotedContext;
}