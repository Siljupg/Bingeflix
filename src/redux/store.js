// import {createStore} from 'redux';
import { configureStore,
    createAsyncThunk,
    createSlice
 } from "@reduxjs/toolkit";
import rootReducer from './rootreducer';
import * as productSagas from './sagas';
import createSagaMiddleware from 'redux-saga';
import { API_KEY, TMDB_BASE_URL } from "../constants";
import axios from 'axios';
 
const initialState = {
    movies: [],
    genresLoaded: [],
    genres:[],
}

export const getGenres = createAsyncThunk('netflix/genres', async () => {
    const { data } = await axios.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    console.log('data', data);
})

const netflixSlice = createSlice({
    name: 'Netflix',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
        });
    },
});
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

for (const saga in productSagas) {
    sagaMiddleware.run(productSagas[saga]);
}

export default store;