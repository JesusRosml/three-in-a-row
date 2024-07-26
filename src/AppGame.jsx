import { useState } from 'react';
import { Board } from './components/Board';

export const AppGame = () => {
    const [ history, setHistory ] = useState([ Array(9).fill( null ) ]);
    const [ currentMove, setCurrentMove ] = useState( 0 );
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[ currentMove ];

    const handlePlay = ( nextSquares ) => {
        const nextHistory = [ ...history.slice( 0, currentMove + 1 ), nextSquares ];

        setHistory( nextHistory );
        setCurrentMove( nextHistory.length - 1 );
    }

    const jumpTo = ( nextMove ) => setCurrentMove( nextMove );

    const moves = history.map(( squares, move ) => {
        let description;

        ( move > 0 ) ? description = `Ir al movimiento #${ move }` : description = 'Ir al inicio del juego';

        return (
            <li key={ move }>
                <button onClick={ () => jumpTo( move ) }>{ description }</button>
            </li>
        )
    })

    return (
        <div className="flex flex-row">
            <div>
                <Board xIsNext={ xIsNext } squares={ currentSquares } onPlay={ handlePlay } />
            </div>
               
            <div className="ml-5">
                <ol>{ moves }</ol>
            </div>
        </div>
    )
}