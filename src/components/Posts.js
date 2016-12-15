import React, { PropTypes } from 'react';
import LoadingHOC from './LoadingHOC'

const Posts = ({ posts }) => (
  <div className='Posts'>
    {posts.postData.map(({body, id, title}) => <Post key={id} id={id} body={body} title={title} />)}
  </div>
);

const Post = ({body, id, title }) => (
  <div className='Post'>
    <h3>#{id} {title}</h3>
    <p>{body}</p>
  </div>
);

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
};

Post.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default LoadingHOC(Posts);
