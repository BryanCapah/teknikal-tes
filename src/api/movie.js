import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovie = createAsyncThunk('movie/getMovies', async ({ page = 1, keyword = 'Batman' }) => {
    const data = await axios.get(`https://www.omdbapi.com?apikey=715289b&s=${keyword}&page=${page}`)
    return data?.data
})

export const searchMovie = createAsyncThunk('movie/searchMovies', async ({ page = 1, keyword = 'Batman' }) => {
    const data = await axios.get(`https://www.omdbapi.com?apikey=715289b&s=${keyword}&page=${page}`)
    return data?.data
})