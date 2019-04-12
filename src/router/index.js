import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import App from '../App';
import Home from '../view/Home';
import Category from '../view/Category';
import Cart from '../view/Cart';
import Message from '../view/Message';
import Center from '../view/Center';
import zscDetail from '../view/Cart/Detail'
import Searcher from '../view/Searcher/searcher';
import Activity from '../view/Home/Activity/activity';
import Furniture from '../view/Home/Furniture/furniture';
import Jiaju from '../view/Home/Jiaju/jiaju';
import Recommend from '../view/Home/Recommend/recommend';
import Register from '../view/Register';
import Login from '../view/Login';

import zscOrder from '../view/Cart/Order/order.js';
import zscCollection from '../view/Cart/Collection/collection.js'
import zscUser from '../view/Cart/User/user.js';

import {Provider} from 'react-redux';
import store from '../store/store';
import Page from '../view/Page';
import Item from '../view/Item';
import List from '../view/Message/List';


function isLogin () {
    return true;
}

const routes = (
    <Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={()=><Home>
                    <Switch>
                        <Route path="/home/recommend" component={Recommend}></Route>
                        <Route path="/home/furniture" component={Furniture}></Route>
                        <Route path="/home/jiaju" component={Jiaju}></Route>
                        <Route path="/home/activity" component={Activity}></Route>
                        <Redirect from="/home" to="/home/recommend"></Redirect>
                    </Switch>
                </Home>}/>
                <Route path="/searcher" component={Searcher}></Route>
                <Route path="/category" component={Category}/>

                
                <Route path="/zscDetail/:id" component={zscDetail}></Route>
                <Route path="/page/:myid" component={Page}/>
                <Route path="/item" component={Item}/>
                <Route path="/list" component={List}/>
                <Route path="/cart" component={()=>isLogin()?<Cart />:<Redirect to="/login" />}/>
                <Route path="/message" component={()=>isLogin()?<Message />:<Redirect to="/login" />}/>
                <Route path="/center" component={()=>isLogin()?<Center />:<Redirect to="/login" />}/>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register}/>
                <Route path="/zscOrder/:id" component={zscOrder}/>
                <Route path="/zscCollection" component={zscCollection}/>
                <Route path="/zscUser" component={zscUser}/>

                <Redirect from="/" to="/home"/>
            </Switch>
        </App>
    </Router>
    </Provider>
);

export default routes;