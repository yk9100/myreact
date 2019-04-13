import React,{Component} from 'react';
import style from './index.module.scss';

// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import {showTabbar, hideTabbar, alreadyLogin} from '../../store/actionCreators';

import {connect} from 'react-redux';

class Login extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    render () {
        return (
            <div className="main">
                <header>
                    <a className={style.header_home_btn} onClick={this.toHome.bind(this)}>
                        <img src="./home_btn.png" />
                    </a>
                    <h3>登录</h3>
                    <a className={style.header_regist_btn} onClick={this.toRegist.bind(this)}>注册</a>
                </header>
                <div className={style.signBox}>
                    <p><input type="text"  placeholder="请输入用户名" ref="username"/></p>
                    <p><input type="password" placeholder="请输入密码" ref="password"/></p>
                </div>
                <div className={style.form_btn}>
                    <input type="submit" value="登录" onClick={this.checkLogin.bind(this)} />
                </div>
            </div>
        )
    }

    checkLogin () {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        console.log(username, password);
        if (username === 'admin' && password === 'admin') {
            //记录登录的状态 改为true
            this.props.alreadyLogin();
            console.log('登录成功');
            this.props.history.push('/center');
        } else {
            alert('用户名或密码不正确');
        }
    }


    componentDidMount(){
        this.props.hideTabbar();
    }

    componentWillUnmount(){
        this.props.showTabbar();
    }

    toHome(){
        this.props.history.push(`/home`);
    }

    toRegist(){
        this.props.history.push(`/register`);
    }

}
const mapDispatchToProps = {
    showTabbar,
    hideTabbar,
    alreadyLogin,
}

export default connect(null, mapDispatchToProps)(Login);