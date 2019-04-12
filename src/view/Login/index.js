import React,{Component} from 'react';
import style from './index.module.scss';

// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';


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
                    <p><span>用户名:</span><input type="text" onChange={(e)=>{this.setUserInfo(e, "username")}} /></p>
                    <p><span>密  码:</span><input type="password" onChange={(e)=>{this.setUserInfo(e, "password")}} /></p>
                    <p><input type="submit" value="登录" onClick={()=>{this.props.history.push("/home")}} /></p>
                </div>
            </div>
        )
    }

    setUserInfo(event, key){

        let obj = {};

        obj[key] = event.target.value;

        this.setState(obj);

    }

    toHome(){
        this.props.history.push(`/home`);
    }

    toRegist(){
        this.props.history.push(`/register`);
    }

}

export default Login;