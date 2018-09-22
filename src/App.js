import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import projects from './Data.json';

class App extends Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    );
  }
}

export default App;
