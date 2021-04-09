import { runSaga } from '@redux-saga/core';
import { loadImagesStats, setImagesStats } from '../../actions';
import * as api from '../../api';
import { handleStatsRequest } from '../statsSaga';

describe('statsSaga', () => {
    test('should load stats and handle them in case of success', async () => {
        const dispatchedActions = [];
        const mockedId = '1';
        const mockedDownloads = 10;

        const mockedStats = { downloads: { total: mockedDownloads } };
        api.fetchImageStats = jest.fn(() => Promise.resolve(mockedStats));

        const fakeStore = {
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, handleStatsRequest, mockedId).done;

        expect(api.fetchImageStats.mock.calls.length).toBe(1);
        expect(dispatchedActions).toContainEqual(loadImagesStats(mockedId));
        expect(dispatchedActions).toContainEqual(
            setImagesStats(mockedId, mockedDownloads),
        );
    });
});
