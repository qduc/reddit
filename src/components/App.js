import React, { Component } from 'react';
import Control from '../containers/Control';
import PostList from '../containers/PostList';

class App extends Component {
  render() {
    return (
      <div>
        <Control />
        <PostList />
      </div>
    );
  }
}

export default App;
