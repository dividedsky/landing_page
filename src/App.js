import React, { Component } from 'react';
import Landing from './components/Landing';
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Landing />
      </div>
    );
  }
}

export default App;
