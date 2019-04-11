import React,{Component} from 'react';
import style from './index.module.scss';
class List extends Component {
    state = {
        datalist:null,
    }

    render () {
        return <div id={style.list}>
            <header>
                <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home-07bdcdd36c9df74ef30110623d2d708b.png"
                    onClick={this.goHome.bind(this)}
                />

                <span>尖叫精选</span>

                <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/me.png"

                />
            </header>
            <ul>
                {
                    this.state.datalist?
                    this.state.datalist.map((item)=>
                        <li key={item.messageId}>
                        <h2>{item.createTime}</h2>
                        <div>
                            <h3>{item.msgTitle}<span>&gt;</span></h3>
                            <p>{item.msgContent}</p>
                        </div>
                    </li>):null
                }
            </ul>
        </div>
    }

    componentDidMount () {
        fetch('/jingxuan.json').then(res=>res.json()).then(res=>{
            console.log(res.data);
            this.setState({
                datalist:res.data
            });
        });
    }

    goHome () {
        window.location.href="#/home";
    }
}
export default List;