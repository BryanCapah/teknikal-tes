import PropTypes from 'prop-types';
export default function Button({ onClick, children }) {
    return (
        <button
            className='border-2 rounded-md  px-3 py-1 bg-green-500 text-white'
            onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any
}