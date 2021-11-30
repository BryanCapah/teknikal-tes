import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovie, searchMovie } from "../api/movie"
import * as movieReducer from '../store/reducers/movie-reducers'


export const useMovie = () => {
    const [searchParam, setSearchParam] = useState({
        page: 1,
        keyword: 'Batman'
    })

    const movieList = useSelector(movieReducer.getMovieList)
    const dispatch = useDispatch()
    const getMovies = useCallback(_ => dispatch(getMovie(searchParam)).unwrap().then().catch(e => alert(e.message)), [searchParam])
    const searchMovies = useCallback(_ => dispatch(searchMovie(searchParam)).unwrap().then().catch(e => alert(e.message)), [searchParam])

    useEffect(() => {
        getMovies()
    }, [searchParam.page])


    const handleScroll = useCallback(function handleScroll({ setSearchParam }) {
        const {
            scrollHeight,
            scrollTop,
            clientHeight
        } = document.documentElement
        if (scrollHeight - scrollTop === clientHeight) {
            setSearchParam(searchParam => ({ ...searchParam, page: searchParam.page + 1 }))
        }
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", () => handleScroll({ setSearchParam }), true);
    }, [])

    const searchHandler = (e) => setSearchParam(searchParam => ({ ...searchParam, keyword: e.target.value }))

    return {
        searchParam,
        movieList,
        searchHandler,
        searchMovies
    }
}