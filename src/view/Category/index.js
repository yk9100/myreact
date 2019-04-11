import React,{Component} from 'react';
import style from './index.module.scss';
class Category extends Component {
    render () {
        

        return <div id={style.category}>
            <header>
                <img src="https://m.wowdsgn.com/static/img/searchIcon-e103f6f03f8488bbc144da2ef8684396.png"/>
                <input type="text" placeholder="搜索我的尖叫好物"/>
            </header>
            <section>
                <img src="https://m.wowdsgn.com/static/img/furniture.png"/>
                <ul>
                    <li onClick={this.handleClick.bind(this,20)}>沙发<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this,21)}>椅凳<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this,22)}>桌几<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this,2310)}>床<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this, 24)}>柜架<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this,2210)}>餐桌<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this,2211)}>茶几和边桌<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this,2212)}>书桌<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this,2414)}>隔断<span>&gt;</span></li>  
                </ul>
                <img src="https://m.wowdsgn.com/static/img/household.png" alt=""/>
                <ul>
                    <li onClick={this.handleClick.bind(this, 25)}>灯具<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this, 26)}>用餐<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this, 32)}>时尚生活<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this, 27)}>烹饪<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this, 28)}>纺织品<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this, 29)}>家饰<span>&gt;</span></li>
                    <li onClick={this.handleClick.bind(this, 31)}>卫浴<span>&gt;</span></li>
                </ul>
            </section>
        </div>
    }
    

    handleClick (id) {
        this.props.history.push(`/page/${id}`);
    }
}
export default Category;