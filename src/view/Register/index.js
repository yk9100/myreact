import React,{Component} from 'react';
import style from './index.module.scss';

class Register extends Component {
    render () {
        return (
            <div className="main">
                <header>
                    <h3>注册</h3>
                    <a href="/login" className="header-div-right">登录</a>
                </header>
            </div>
        )
    }
}
export default Register;