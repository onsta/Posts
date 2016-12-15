import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, setPostStart } from '../redux/actions';
import { LIMIT } from './../api';

class Pagination extends Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.end = this.end.bind(this);
  }
  start() {
    this.fetch(0);
  }
  back() {
    let start = this.props.posts.start - LIMIT;
    if (start <= 0) {
      start = 0;
    }
    this.fetch(start);

  }
  next() {
    let start = this.props.posts.start + LIMIT;
    if (start < this.props.posts.numberOfPosts) {
      this.fetch(start);
    }
  }
  end() {
    this.fetch(this.props.posts.numberOfPosts - LIMIT);
  }
  fetch(start) {
    this.props.dispatch(setPostStart(start));
    this.props.dispatch(fetchPosts(start));
  }
  render() {
    return (
      <div className='Pagination pt-button-group pt-large pt-fill'>
        <a className='pt-button pt-intent-primary pt-fixed' role='button' onClick={this.start}>Start</a>
        <a className='pt-button pt-intent-primary pt-fixed' role='button' onClick={this.back}>Back</a>
        <a className='pt-button pt-intent-primary pt-fixed' role='button' onClick={this.next}>Next</a>
        <a className='pt-button pt-intent-primary pt-fixed' role='button' onClick={this.end}>End</a>
      </div>
    );
  }
};

Pagination.propTypes = {
  posts: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default connect(mapStateToProps)(Pagination);
