import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import App from '../App';
import Home from '../view/Home';
import Category from '../view/Category';
import Cart from '../view/Cart';
import Message from '../view/Message';
import Center from '../view/Center';
import Register from '../view/Register';
import Page from '../view/Page';
import Item from '../view/Item';
import List from '../view/Message/List';
import store from '../store/store';

//供应商组件
import { Provider } from 'react-redux';

const routes = (
    <Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/message" component={Message}/>
                <Route path="/center" component={Center}/>
                <Route path="/register" component={Register}/>

                <Route path="/item" component={Item}/>
                <Route path="/page/:myid" component={Page}/>
                <Route path="/list" component={List} />

                <Redirect from="/" to="/home"/>
            </Switch>
        </App>
    </Router>
    </Provider>
);

export default routes;