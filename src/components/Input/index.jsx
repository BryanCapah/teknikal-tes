import PropTypes from 'prop-types'
export default function Input({ onChange, placeholder }) {
    return (
        <input
            className='border-2 rounded-md px-3 mr-3 py-1'
            onChange={onChange}
            placeholder={placeholder} />
    )
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}