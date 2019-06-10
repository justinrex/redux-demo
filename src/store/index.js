import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import analytics from './middleware/analytics';
import button from './reducers/button';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducer = combineReducers({
  button
});

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(analytics, sagaMiddleware);

const store = createStore(
  combinedReducer,
  composeEnhancers(
    middleware
  )
);

sagaMiddleware.run(rootSaga);

export default store;
