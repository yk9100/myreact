import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import App from '../App';
import Home from '../view/Home';
import Category from '../view/Category';
import Cart from '../view/Cart';
import Message from '../view/Message';
import Center from '../view/Center';
import Register from '../view/Register';
import Login from '../view/Login';


function isLogin () {
    return false;
}

const routes = (
    <Router>
        <App>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/cart" component={()=>isLogin()?<Cart />:<Redirect to="/login" />}/>
                <Route path="/message" component={()=>isLogin()?<Message />:<Redirect to="/login" />}/>
                <Route path="/center" component={()=>isLogin()?<Center />:<Redirect to="/login" />}/>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register}/>

                <Redirect from="/" to="/home"/>
            </Switch>
        </App>
    </Router>
);

export default routes;