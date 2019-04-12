import React,{Component} from 'react';
import style from './index.module.scss';
class Center extends Component {
    render () {
        return <div>
            center test用户登录
                <br/>
                用户名:<input type="text" name="username" ref="username"/><br/>
                密码:<input type="password" name="password" ref="password"/>
                <input type="submit" value="登录" onClick={this.loginCheck.bind(this)}/>
        </div>
    }

    loginCheck () {
        let xhr = new XMLHttpRequest();
        xhr.open('post','/login',true);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) {
                return
            }
            if (this.status >=200 && this.status < 300) {
                console.log(JSON.parse(this.responseText));
                if (JSON.parse(this.responseText).ok) {
                    alert('登录成功');
                } else {
                    alert('登录失败');
                }
            }
        }
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        console.log(username);
        console.log(password);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(`username=${username}&password=${password}`);
    }
}
export default Center;