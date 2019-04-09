import React, { Component } from 'react';
import './App.css';
import Tabbar from './component/Tabbar';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Tabbar></Tabbar>
      {
        this.props.children
      }
      </div>
    );
  }
}

export default App;
