import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import postsReducer from './reducers';
import saga from './sagas';
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({
  posts: postsReducer,
});


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return {
    ...createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run(saga),
  };
};

export default configureStore;
