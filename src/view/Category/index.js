import React,{Component} from 'react';
import style from './index.module.scss';
class Category extends Component {
    render () {
        return <div id={style.category}>
            <header>
                <img src="https://m.wowdsgn.com/static/img/searchIcon-e103f6f03f8488bbc144da2ef8684396.png"/>
                <span></span><input type="text" placeholder="搜索我的尖叫好物"/>
            </header>
        </div>
    }
}
export default Category;