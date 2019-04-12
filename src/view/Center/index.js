import React,{Component} from 'react';
import style from './index.module.scss';
class Center extends Component {
    render () {
        return <div>
            center test用户登录
            <form action="/login" method="post">
                用户名:<input type="text" name="username"/><br/>
                密码:<input type="password" name="password"/>
                <input type="submit" value="登录"/>
            </form>
        </div>
    }
}
export default Center;