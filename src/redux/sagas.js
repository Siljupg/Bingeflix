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

function* getGenres() {
    try {
        const response = yield call(fetchGenres);
        yield put({ type: Actions.GET_GENRE_LIST_SUCCESS, response });
        console.log('saga called', response);
    } catch (error) {
        // Handle error if the API call fails
        console.error('Error fetching genres:', error);
    }
}

export default function* productSaga() {
    yield takeEvery( Actions.PRODUCT_LIST, getProducts );
    yield takeLatest(Actions.GET_GENRE_LIST, getGenres);
}
