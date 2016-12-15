import fetch from 'isomorphic-fetch';

const POSTS_ENDPOINT = '//jsonplaceholder.typicode.com/posts';
export const LIMIT = 10;

const fetchPosts = (start, limit = LIMIT) => {
  let numberOfPosts;
  return fetch(`${POSTS_ENDPOINT}?_start=${start}&_limit=${limit}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      numberOfPosts = parseInt(response.headers.get('x-total-count'), 10);
      return response.json();
    })
    .then((posts) => {
      return {
        posts,
        numberOfPosts
      };
    })
    .catch((err) => {
      return err;
    });
};

export default fetchPosts;
