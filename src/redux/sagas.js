import { takeLatest } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import fetchPosts from '../api';
import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_ERROR, POSTS_SET_NUMBER, POSTS_LOADING } from './actions';

function* startForman() {
 yield fork(watchRequestPost);
}

function* watchRequestPost() {
  yield* takeLatest(POSTS_REQUEST, fetchPostsSaga);
}

function* fetchPostsSaga({ start }) {
  try {
    yield put({ type: POSTS_LOADING});
    const { numberOfPosts, posts } = yield call(fetchPosts, start);
    yield [
      put({ type: POSTS_SET_NUMBER , numberOfPosts }),
      put({ type: POSTS_SUCCESS, posts }),
    ];
  } catch (err) {
    yield put({ type: POSTS_ERROR, appState: err });
  }
}



export default startForman;
