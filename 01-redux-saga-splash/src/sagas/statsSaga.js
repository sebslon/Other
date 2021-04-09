import { call, fork, put, take } from '@redux-saga/core/effects';
import {
    loadImagesStats,
    setImagesStats,
    setImageStatsError,
} from '../actions';

import { fetchImageStats } from '../api';
import { IMAGES } from '../constants';

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImagesStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImagesStats(id, res.downloads.total));
            return true;
        } catch (error) {}
    }

    yield put(setImageStatsError(id));
}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}
