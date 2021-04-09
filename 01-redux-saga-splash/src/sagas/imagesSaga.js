import { takeEvery, select, call, put } from 'redux-saga/effects';
import { setError, setImages } from '../actions';

import { fetchImages } from '../api';

import { IMAGES } from '../constants';

//pobiera wartość ze store
const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page); //wstrzymuję sage zanim call sie nie wykona

        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
