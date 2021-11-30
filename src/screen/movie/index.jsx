import { memo, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import MovieCard from "../../components/MovieCard";
import PopUpImage from "../../components/PopUpImage";
import { useMovie } from "../../hooks/useMovie";

const Movie = () => {
    const {
        movieList,
        searchHandler,
        searchMovies
    } = useMovie()

    const [popup, setPopup] = useState()

    return (
        <div
            id='movie'
            className='flex justify-center flex-col align-middle w-full'>
            <div className='my-5'>
                <Input
                    onChange={searchHandler}
                    placeholder='search something' />
                <Button
                    onClick={searchMovies}>
                    Search
                </Button>
            </div>
            {
                movieList?.length > 0 &&
                movieList.map((movie, idx) => (
                    <MovieCard
                        movie={movie}
                        key={`movieCard_${idx}`}
                        idx={idx}
                        onClick={setPopup} />
                ))
            }
            <PopUpImage
                popup={popup}
                setPopup={setPopup} />
        </div>
    )
}

export default memo(Movie)