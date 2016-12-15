import { POSTS_SUCCESS, POSTS_LOADING, POSTS_ERROR, POSTS_SET_NUMBER, POSTS_SET_START } from './actions';

const initialState = {
  start: 0,
  numberOfPosts: null,
  postData: [],
  appState: null,
};


const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case POSTS_SUCCESS:
      // TODO: Nezahazovat postData
      return { ...state, postData: action.posts, appState: 'ready'};
    case POSTS_LOADING:
      return { ...state, appState: 'loading'};
    case POSTS_ERROR:
      return { ...state, appState: 'error'};
    case POSTS_SET_NUMBER:
      return { ...state, numberOfPosts: action.numberOfPosts};
    case POSTS_SET_START:
        return { ...state, start: action.start};
    default:
      return state;
  }
};

export default postsReducer;
