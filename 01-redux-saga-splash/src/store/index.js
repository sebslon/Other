import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

/* eslint-disable no-underscore-dangle */
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
