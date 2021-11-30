import PropTypes from 'prop-types';
import { memo } from 'react';

const MovieCard = ({
    movie = {},
    idx = 0,
    onClick,
    showDetail = false
}) => {

    const {
        Poster = "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        Title = "Batman Begins",
        Type = "movie",
        Year = "2005",
    } = movie

    const hideDetail = !showDetail && 'hidden'
    return (
        <div
            id={`movie-card-${idx}`}
            className='movie-card mb-5 items-center flex flex-col justify-center'
        >
            <img
                onClick={() => typeof (onClick) === 'function' && onClick(movie)}
                alt={`movie-img`}
                src={Poster}
                style={{ width: '15rem', }}
                className='cursor-pointer' />
            <br />
            <div className='border rounded-md w-1/2 whitespace-nowrap'>
                <table className={`${hideDetail} w-full align-left`}>
                    <tr className='bg-blue-100'>
                        <td width='50%' style={{ textAlign: 'left' }} >Title</td>
                        <td width='50%' style={{ textAlign: 'left' }} >Type</td>
                        <td width='50%' style={{ textAlign: 'left' }} >Year</td>
                    </tr>
                    <tr>
                        <td width='50%' style={{ textAlign: 'left' }} >{Title}</td>
                        <td width='50%' style={{ textAlign: 'left' }} >{Type}</td>
                        <td width='50%' style={{ textAlign: 'left' }} >{Year}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default memo(MovieCard)

MovieCard.propTypes = {
    movie: PropTypes.object,
    idx: PropTypes.number,
    onClick: PropTypes.func,
    showDetail: PropTypes.bool
}