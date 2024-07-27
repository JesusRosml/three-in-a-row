import { Square } from '../components/Square';

export const renderSquaresBoard = ( squares, handleClick ) => {
    return Array.from( { length: 3 }, ( _, i ) => (
        <div key={ `clearfix-${ i }` } className="clearfix">
            { 
                Array.from( { length: 3 }, ( _, j ) => {
                    const index = i * 3 + j;

                    return (
                        <Square 
                            key={ `square-${ index }` }
                            value={ squares[ index ] }
                            onSquareClick={ () => handleClick( index ) }
                        />
                    );
            })}
        </div>
    ));
}