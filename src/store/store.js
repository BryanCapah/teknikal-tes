import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movie-reducers'

export default configureStore({
    reducer: {
        movie: movieReducer,
    },
})
