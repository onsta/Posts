export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_ERROR = 'POSTS_ERROR';
export const POSTS_SET_NUMBER = 'POSTS_SET_NUMBER';
export const POSTS_SET_START = 'POSTS_SET_START';

export const fetchPosts = (start = 0) => ({
  type: POSTS_REQUEST,
  start,
});

export const setPostStart = (start = 0) => ({
  type: POSTS_SET_START,
  start,
});
