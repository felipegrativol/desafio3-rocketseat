import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "~/reducers";
import rootSaga from "~/store/sagas";

const middlewares = [];

const sagaMonitor = console.tron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = compose(
  applyMiddleware(...middlewares),
  console.tron.createEnhancer()
);

const store = createStore(rootReducer, composer);
console.tron.log(store.getState());

sagaMiddleware.run(rootSaga);

export default store;
