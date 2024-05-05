import {call, takeEvery, takeLatest, put} from 'redux-saga/effects';
import * as Actions from './action';
import { API_KEY, TMDB_BASE_URL } from "../constants";


function* getProducts() {
    yield put ({ type: Actions.SET_PRODUCT_LIST, data:'PLO'})
}

// 

function fetchGenres() {
    return fetch(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`).then(response =>
        response.json()
    );
}

function* getGenres(action) {
    try {
        const type = action.params.type
        const url = `${TMDB_BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        const response = yield call(fetch, url)
        const responseData = yield response.json();
        yield put({ type: Actions.GET_GENRE_LIST_SUCCESS, responseData });
    } catch (error) {
        console.error(error)
    }
}

function* getMovies(action) {
    try {
        const type = action.params.type
        const url = `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}&language=en-US`
        const response = yield call(fetch, url)
        const responseData = yield response.json();
        yield put({ type: Actions.GET_MOVIES_LIST_SUCCESS, responseData });
    } catch (error) {
        console.error(error)
    }
}

function* getTopRatedMovies(action) {
    try {
        const type = action.params.type
        const url = `${TMDB_BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
        const response = yield call(fetch, url)
        const responseData = yield response.json();
        yield put({ type: Actions.GET_TOPRATED_MOVIES_SUCCESS, responseData });
    } catch (error) {
        console.error(error)
    }
}

function* getActionMovies(action) {
    try {
        const type = action.params.type
        const url = `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        const response = yield call(fetch, url)
        const responseData = yield response.json();
        yield put({ type: Actions.GET_ACTION_MOVIES_SUCCESS, responseData });
    } catch (error) {
        console.error(error)
    }
}

function* getComedyMovies(action) {
    try {
        const type = action.params.type
        const url = `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        const response = yield call(fetch, url)
        const responseData = yield response.json();
        yield put({ type: Actions.GET_COMEDY_MOVIES_SUCCESS, responseData });
    } catch (error) {
        console.error(error)
    }
}

function* getHorrorMovies(action) {
    try {
        const type = action.params.type
        const url = `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        const response = yield call(fetch, url)
        const responseData = yield response.json();
        yield put({ type: Actions.GET_HORROR_MOVIES_SUCCESS, responseData });
    } catch (error) {
        console.error(error)
    }
}

function* getRomanceMovies(action) {
    try {
        const type = action.params.type
        const url = `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        const response = yield call(fetch, url)
        const responseData = yield response.json();
        yield put({ type: Actions.GET_ROMANCE_MOVIES_SUCCESS, responseData });
    } catch (error) {
        console.error(error)
    }
}

export default function* productSaga() {
    yield takeEvery( Actions.PRODUCT_LIST, getProducts );
    yield takeLatest(Actions.GET_GENRE_LIST, getGenres);
    yield takeLatest(Actions.GET_MOVIES_LIST, getMovies);
    yield takeLatest(Actions.GET_TOPRATED_MOVIES, getTopRatedMovies)
    yield takeLatest(Actions.GET_ACTION_MOVIES, getActionMovies)
    yield takeLatest(Actions.GET_COMEDY_MOVIES, getComedyMovies)
    yield takeLatest(Actions.GET_HORROR_MOVIES, getHorrorMovies)
    yield takeLatest(Actions.GET_ROMANCE_MOVIES, getRomanceMovies)
}
