import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setError, setImages } from '../actions';

//pobiera wartość ze store
export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
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
