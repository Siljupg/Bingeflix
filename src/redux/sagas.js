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
        console.log('acrtiongenere', type);
        const url = `${TMDB_BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        const response = yield call(fetch, url)
        const responseData = yield response.json();
        yield put({ type: Actions.GET_GENRE_LIST_SUCCESS, responseData });
        console.log('GENRE', responseData);
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
        // console.log('res', responseData);
    } catch (error) {
        console.error(error)
    }
}

export default function* productSaga() {
    yield takeEvery( Actions.PRODUCT_LIST, getProducts );
    yield takeLatest(Actions.GET_GENRE_LIST, getGenres);
    yield takeLatest(Actions.GET_MOVIES_LIST, getMovies);
}
