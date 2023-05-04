import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//import { legacy_createStore as createStore } from 'redux'; caso não dê certo usa esse import!

import rootReducer  from './modules/reserve/rootReducer';
import rootSaga from './modules/reserve/rootSagas';

const sagaMidddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMidddleware);

const store = createStore(rootReducer, enhancer);

sagaMidddleware.run(rootSaga);

export default store;