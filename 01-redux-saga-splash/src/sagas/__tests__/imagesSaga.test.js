import { runSaga } from '@redux-saga/core';
import { getPage, handleImagesLoad } from '../imagesSaga';
import * as api from '../../api';
import { setError, setImages } from '../../actions';

describe('imagesSaga', () => {
    test('selector gives back the page', () => {
        const nextPage = 1;
        const state = { nextPage };

        const res = getPage(state);

        expect(res).toBe(nextPage);
    });

    test('should load images and handle them in case of success', async () => {
        const dispatchedActions = [];
        const mockedImages = ['abc', 'def'];

        api.fetchImages = jest.fn(() => Promise.resolve(mockedImages));

        const fakeStore = {
            getState: () => ({ nextPage: 1 }),
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, handleImagesLoad).result.k;

        expect(api.fetchImages.mock.calls.length).toBe(1);
        expect(dispatchedActions).toContainEqual(setImages(mockedImages));
    });

    test('should handle errors in case of fail', async () => {
        const dispatchedActions = [];
        const error = 'Error';

        api.fetchImages = jest.fn(() => Promise.reject(error));

        const fakeStore = {
            getState: () => ({ nextPage: 1 }),
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, handleImagesLoad).result.k;

        expect(api.fetchImages.mock.calls.length).toBe(1);
        expect(dispatchedActions).toContainEqual(setError(error));
    });
});
