import PropTypes from 'prop-types';
import { calculateWinner } from '../helpers/calculateWinner';
import { renderSquaresBoard } from '../helpers/renderSquaresBoard';

export const Board = ({ xIsNext, squares, onPlay }) => {
    
    const handleClick = ( i ) => {
        if( squares[i] || calculateWinner( squares ) ) return;

        const nextSquares = squares.slice();
        ( xIsNext ) ? nextSquares[i] = 'X' : nextSquares[i] = 'O';

        onPlay( nextSquares );
    }
    
    const winner = calculateWinner( squares );
    let status;

    if( winner ) {
        status = `Ganador: ${ winner }`;
    } else {
        status = `Siguiente jugador: ${ ( xIsNext ) ? 'X' : 'O' }`;
    }

    console.log( winner )

    return (
        <>
            <div className="mb-3 text-white font-bold font-mono text-xl">{ status }</div>
            
            { renderSquaresBoard( squares, handleClick ) }

        </>
    )
}

Board.propTypes = {
    xIsNext: PropTypes.bool.isRequired,
    squares: PropTypes.array.isRequired,
    onPlay: PropTypes.func.isRequired
}