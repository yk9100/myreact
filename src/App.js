import React, { Component } from 'react';
import './App.css';
import Tabbar from './component/Tabbar';
import store from './store'
class App extends Component {

  state = {
    isShow:store.getState()
  }


  render() {
    return (
      <div className="App">
      {
        this.state.isShow?<Tabbar></Tabbar>:null
      }
      
      {
        this.props.children
      }
      </div>
    );
  }

  componentWillMount() {
    store.subscribe(()=>{
      console.log('新的消息',store.getState())
      this.setState({
        isShow:store.getState()
      })
    })
  }
}

export default App;
