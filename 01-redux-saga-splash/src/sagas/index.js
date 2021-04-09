import { all } from '@redux-saga/core/effects';
import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

//watcher-sage -> actions -> workersaga
export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}
