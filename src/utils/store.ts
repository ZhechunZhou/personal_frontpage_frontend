import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../slices';
import {persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/es/storage'

const config = {
    key: 'root',
    storage,
}

const sagaMiddleware = createSagaMiddleware()

export const reducer = persistReducer(config, rootReducer);


export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)


