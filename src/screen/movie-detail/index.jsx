import { useSelector } from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom'
import Button from "../../components/Button"
import MovieCard from "../../components/MovieCard"
import { getMovieList } from "../../store/reducers/movie-reducers"

export default function MovieDetail() {
    const location = useLocation()
    const imdbId = location.pathname?.replace('/', '')
    const movie = useSelector(getMovieList)?.filter(movie => movie.imdbID === imdbId)[0]
    const navigate = useNavigate()
    return (
        <div>
            <MovieCard movie={movie} showDetail />
            <Button onClick={() => navigate('/')}>Back to List</Button>
        </div>
    )
}