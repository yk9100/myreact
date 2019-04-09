import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import style from './index.module.scss';
class Tabbar extends Component {
    render () {
        return <div id={style.tabbar}>
        <ul>
            <li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
            <li><NavLink to="/category" activeClassName="active">分类</NavLink></li>
            <li><NavLink to="/cart" activeClassName="active">购物车</NavLink></li>
            <li><NavLink to="/message" activeClassName="active">消息</NavLink></li>
            <li><NavLink to="/center" activeClassName="active">我的</NavLink></li>
        </ul>
        </div>
    }
}

export default Tabbar;