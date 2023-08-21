import {takeEvery, put} from 'redux-saga/effects';
import * as Actions from './action';

function* getProducts() {
    console.log ('saga called')
    yield put ({ type: Actions.SET_PRODUCT_LIST, data:'PLO'})
}
export default function* productSaga() {
    yield takeEvery( Actions.PRODUCT_LIST, getProducts )
}
