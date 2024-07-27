import PropTypes from 'prop-types';

export const Square = ({ value, onSquareClick }) => {
    return (
        <button 
            onClick={ onSquareClick }
            className="bg-white border border-gray-500 float-left text-2xl font-bold leading-8 h-24 
                -mr-1px -mt-1px p-0 text-center w-24"
        >
            { value }
        </button>
    )
}

Square.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([null])
    ]).isRequired,
    onSquareClick: PropTypes.func.isRequired
}