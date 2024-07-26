import PropTypes from 'prop-types';
import { Square } from './Square';
import { calculateWinner } from '../helpers/calculateWinner';

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

    return (
        <>
            <div className="mb-3">{ status }</div>
            <div className="clearfix">
                <Square value={ squares[0] } onSquareClick={ () => handleClick( 0 ) }  />
                <Square value={ squares[1] } onSquareClick={ () => handleClick( 1 ) } />
                <Square value={ squares[2] } onSquareClick={ () => handleClick( 2 ) } />
            </div>

            <div className="clearfix">
                <Square value={ squares[3] } onSquareClick={ () => handleClick( 3 ) } />
                <Square value={ squares[4] } onSquareClick={ () => handleClick( 4 ) }/>
                <Square value={ squares[5] } onSquareClick={ () => handleClick( 5 ) }/>
            </div>

            <div className="clearfix">
                <Square value={ squares[6] } onSquareClick={ () => handleClick( 6 ) }  />
                <Square value={ squares[7] } onSquareClick={ () => handleClick( 7 ) } />
                <Square value={ squares[8] } onSquareClick={ () => handleClick( 8 ) } />
            </div>
        </>
    )
}

Board.propTypes = {
    xIsNext: PropTypes.bool.isRequired,
    squares: PropTypes.array.isRequired,
    onPlay: PropTypes.func.isRequired
}