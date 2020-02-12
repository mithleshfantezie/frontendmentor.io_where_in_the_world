import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();


let middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}



export const store = createStore(rootReducer,applyMiddleware(...middlewares))


sagaMiddleware.run(rootSaga);


export let persistor = persistStore(store);

export default { store, persistor};