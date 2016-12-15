import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './redux/actions';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
import '../node_modules/@blueprintjs/core/dist/blueprint.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts, appState } = this.props;
    return (
      <div className='App'>
        <div className='App-header'>
          <h2 className='App-header-heading'>Welcome to Posts</h2>
        </div>
        <div className='App-posts'>
          <Posts posts={posts} appState={appState} />
        </div>
        <Pagination />
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts, appState }) => ({
  posts,
  appState,
});

export default connect(mapStateToProps)(App);
