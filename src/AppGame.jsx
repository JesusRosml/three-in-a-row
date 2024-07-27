import { useState } from 'react';
import { Board } from './components/Board';

export const AppGame = () => {
    const [ orderMovements, setOrderMovements ] = useState( false );
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
            <li key={ move } className="h-auto w-full border-b border-slate-700 hover:bg-slate-500 hover:bg-opacity-45">
                <button 
                    className="text-white py-3 w-full text-left"
                    onClick={ () => jumpTo( move ) }
                >
                    { description }
                </button>
            </li>
        )
    });

    const handleOrderMovements = () => setOrderMovements( !orderMovements );

    return (
        <main 
            className="h-screen w-screen flex justify-center items-center flex-row box-border bg-slate-950"
        >
            <div className="h-80 box-border">
                <Board xIsNext={ xIsNext } squares={ currentSquares } onPlay={ handlePlay } />
            </div>
               
            <div className="h-80 w-auto ml-8 box-border">
                <button 
                    onClick={ handleOrderMovements }
                    className="text-white border border-slate-700 p-3 rounded-md bg-slate-500 bg-opacity-45 mb-3"
                >
                    { 
                        ( orderMovements ) ? 
                            'Ordenar los movimientos en orden descendente' 
                        : 
                            'Ordenar los movimientos en orden ascendente' 
                    }
                </button>

                <ol className={ ( orderMovements ) ? '' : 'flex flex-col-reverse w-full' }>{ moves }</ol>
            </div>
        </main>
    )
}