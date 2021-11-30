import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';


export default function PopUpImage({ popup, setPopup }) {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => setPopup()}
            className={`${!popup && 'hidden'} fixed w-full h-full flex flex-col justify-center align-middle items-center`}
            style={{
                transition: 'all ease 0.5s',
                top: 0,
                left: 0,
                backgroundColor: 'rgba(69, 69, 69, 0.8)'
            }} >
            <div>
                <img
                    onClick={() => navigate(`/${popup?.imdbID}`)}
                    className='rounded-md z-10 cursor-pointer'
                    alt={`${popup?.imdbID}`}
                    src={popup?.Poster} />
            </div>
        </div>
    )

}

PopUpImage.propTypes = {
    popup: PropTypes.object,
    setPopup: PropTypes.func
}