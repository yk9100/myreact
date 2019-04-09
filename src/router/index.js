import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import App from '../App';
import Home from '../view/Home';
import Category from '../view/Category';
import Cart from '../view/Cart';
import Message from '../view/Message';
import Center from '../view/Center';
import Register from '../view/Register';

const routes = (
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/message" component={Message}/>
                <Route path="/center" component={Center}/>
                <Route path="/register" component={Register}/>

                <Redirect from="/" to="/home"/>
            </Switch>
        </App>
    </Router>
);

export default routes;