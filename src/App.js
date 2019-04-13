import React, { Component } from 'react';
import './App.css';
import Tabbar from './component/Tabbar';
import store from './store/store';
import { tabbarReducer } from './store/reducers/tabbarReducer';
import {connect} from 'react-redux';
class App extends Component {
  // state = {
  //   isShow: store.getState().tabbarReducer,
  // }

  render() {
    return (
      <div className="App">
      {
        this.props.isShow?
      <Tabbar></Tabbar>
      :null
      }
      {
        this.props.children
      }
      </div>
    );
  }

  componentDidMount () {
    store.subscribe(()=>{
      console.log("我收到消息了", store.getState());
      
    })
  }
}

const mapStateToProps = (state) => ({
      isShow: state.tabbarReducer
})

export default connect(mapStateToProps)(App);
