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
import Searcher from '../view/Searcher/searcher';
import Activity from '../view/Home/Activity/activity';
import Furniture from '../view/Home/Furniture/furniture';
import Jiaju from '../view/Home/Jiaju/jiaju';
import Recommend from '../view/Home/Recommend/recommend';
import Register from '../view/Register';

const routes = (
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