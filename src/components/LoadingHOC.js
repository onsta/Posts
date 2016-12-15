import React, { Component } from 'react';

// Should capture all non-ideal states loading, error and empty
const LoadingHOC = (LoadedComponent) => {
  return class Loading extends Component {
    render() {
      if(this.props.posts.appState === 'error') {
        return <p>Error</p>
      } else if (this.props.posts.appState === 'loading') {
        return <p>Loading</p>
      }
      return (
        <LoadedComponent {...this.props} />
      );
    }
  }
};

export default LoadingHOC;
