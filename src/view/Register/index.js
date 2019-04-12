import React,{Component} from 'react';
import style from './index.module.scss';


class Register extends Component {

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
                    <h3>注册</h3>
                    <a className={style.header_login_btn} onClick={this.toLogin.bind(this)}>登录</a>
                </header>
                <div className={style.formbox} id="captchaForm">
                    <div className={style.formInner}>
                        <input type="text" name="telephoneNumber" className={style.phone} id="phone" ref="username" placeholder="请输入手机号" />
                        <input type="password" name="password" className={style.password} id="password" ref="password" placeholder="请输入密码" />
                    </div>
                    <input type="button" name="submit" id="submit" value="注册" onClick={this.Regist.bind(this)} />
                </div>
            </div>
        )
    }



    Regist(){
        this.setState({
            username: this.refs.username.value,
            password: this.refs.password.value
        }, ()=>{
            this.props.history.push(`/login`);
        });
    }


    toLogin(){
        this.props.history.push(`/login`);
    }
}
export default Register;