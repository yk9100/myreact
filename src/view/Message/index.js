import React,{Component} from 'react';
import style from './index.module.scss';
class Message extends Component {
    state = {
        myDate: (new Date()).getTime(),
        datalist: null,
        msgType: {"2":"尖叫精选", "1":"系统通知"},
    }

    render () {
        return <div id={style.message}>
            <header>
                <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home-07bdcdd36c9df74ef30110623d2d708b.png"
                    onClick={this.goHome.bind(this)}
                />
                
                        <span>消息中心</span>

                <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/me.png"
                  
                />
            </header>
            <section>
                <ul>
                    {
                        this.state.datalist?
                        this.state.datalist.map((item)=>
                            <li key={item.createTime}>
                            <img src="https://m.wowdsgn.com/static/img/official_message.png" alt=""/>
                            <div>
                                <h2 onClick={this.tuJing.bind(this)}>{this.state.msgType[item.msgType]}<b>&gt;</b></h2>
                                <p>{item.msgContent}</p>
                                <span>{item.createTime}</span>
                            </div>
                        </li>):null
                    }
                </ul>
            </section>
           
        </div>
    }

    tuJing () {
        // this.props.history.push('/message/list');
        window.location.href="#/list";
    }

    goHome () {
        window.loaction.href="#/home";
    }

    componentDidMount () {
        fetch(`/message.json`).then(res=>res.json()).then(res=>{
            console.log(res.data);
            this.setState({
                datalist: res.data,
            });
        });
    }
}
export default Message;