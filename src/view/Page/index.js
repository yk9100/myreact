import React, {Component} from 'react';
import style from './index.module.scss';
import ReactDOM from 'react-dom';
import { PullToRefresh, Carousel, WingBlank } from 'antd-mobile';
import {showTabbar, hideTabbar} from '../../store/actionCreators';

// import store from '../../store/store';
import {connect} from 'react-redux';
// function genData() {
//     const dataArr = [];
//     for (let i = 0; i < 20; i++) {
//         dataArr.push(i);
//     }
//     return dataArr;
// }


var mypage = 1;
let Swiper = window.Swiper;
class Page extends Component {
    state = {
        datalist:[],
        categoryId:null,
        refreshing: false,
        down: true,
        height: document.documentElement.clientHeight,
        mypage:1,
        myDate: (new Date()).getTime(),
        data: ['1', '2', '3'],
        imgHeight: 176,
        lb: ["All",
            "沙发", 
            "椅凳", 
            "柜架", 
            "休闲椅",
            "餐桌", 
            "茶几和边桌", 
            "书桌", 
            "床"],
        index:0,    
        nav: ["上新",
            "销量",
            "价格"],
            navId:0,
    }

    render () {
        var list = {
            "2012":"休闲椅",
            "35":"All",
            "20": "沙发",
            "21": "椅凳",
            "22": "桌几",
            "2310": "床",
            "24": "柜架",
            "2210": "餐桌",
            "2211": "茶几和边桌",
            "2212": "书桌",
            "2414": "隔断",
            "25": "灯具",
            "26": "用餐",
            "32": "时尚生活",
            "27": "烹饪",
            "28": "纺织品",
            "29": "家饰",
            "31": "卫浴"
        }

        let findKey = (value, compare = (a, b) => a === b) => {
            return Object.keys(list).find(k => compare(list[k], value))
        }
        return <div id={style.page}>
            <header>
                <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home-07bdcdd36c9df74ef30110623d2d708b.png"
                 onClick={this.goHome.bind(this)}   
                />
                {
                    this.state.categoryId?
                    <span>{list[this.state.categoryId]}</span>
                    :null
                }               
                <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/category-7b414cf77bd5249e0272f04fb80ef1f7.png"
                    onClick={this.goCategory.bind(this)}
                />
            </header>
            <div className="swiper-container" style={{ padding: ".15rem 0" }}>
                <div className="swiper-wrapper">
                {
                        this.state.lb.map((item,cindex) =>
                        <div className="swiper-slide" key={item}><a className={this.state.index===cindex?'current':''} onClick={this.current.bind(this,cindex,findKey(item))} href="javascript:;">{item}</a></div>)
                    
                }
                    
                </div>
            </div>
            <nav>
                <ul>
                   {
                       this.state.nav.map((item,index)=>
                       <li key={item} onClick={this.sort.bind(this,index,item)} 
                               className={this.state.navId === index ? 'navCurrent' : ''}><a>{item}</a></li>)
                   }
                </ul>
            </nav>
            
            <PullToRefresh
            damping={60}
            ref={el => this.ptr = el}
            style={{
            height: this.state.height,
            overflow: 'auto',
            }}
            indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
            direction={'up'}
            refreshing={this.state.refreshing}
            onRefresh={() => {
            this.setState({ refreshing: true });
            // setTimeout(() => {
            //     this.setState({ refreshing: false });
            // }, 1000);
                fetch(`/pages/category/${this.state.categoryId}?currentPage=${++mypage}&sort=onShelfTime&order=desc&_=${this.state.myDate}`)
                .then(res=>res.json()).then(res=>{console.log(res);
                this.setState({
                    datalist:[...this.state.datalist,...res.data],
                    refreshing: false
                },);
                })
            }}
            >
                <section>
                    <ul>
                        {
                            this.state.datalist ?
                                this.state.datalist.map((item) =>
                                    <li key={item.productId} onClick={this.toItem.bind(this, item.productId, item.parentProductId, item.productTitle, item.sellPrice)}>
                                        <img src={item.productImg} />
                                        <p>{item.productTitle}</p>
                                        <span>￥{item.sellPrice}</span>
                                    </li>) : null
                        }
                    </ul>
                </section>

      </PullToRefresh>
        </div>
    }

    toItem(id, pId, title, price) {
        // console.log(id);
        this.props.history.push(`/item?myId=${id}&pId=${pId}&title=${title}&price=${price}`);
    }

    current (index,id) {
        console.log(id);
        this.setState({
            index: index,
            categoryId: id,
        })
        fetch(`/pages/category/${id}?currentPage=1&sort=onShelfTime&order=desc&_=${this.state.myDate}`)
        .then(res=>res.json()).then(res=>{
            //console.log(res.data);
            this.setState({
                datalist: res.data,
            });
        })
    }

    sort (index,item) {
        this.setState({
            navId: index,
        });
        if (item === '销量') {
            fetch(`/pages/category/${this.state.categoryId}?currentPage=1&sort=sales&order=desc&_=${this.state.myDate}`)
            .then(res=>res.json()).then(res=>{
                this.setState({
                    datalist: res.data
                });
            })
        } else if (item === '价格') {
            fetch(`/pages/category/${this.state.categoryId}?currentPage=1&sort=price&order=desc&_=${this.state.myDate}`)
                .then(res => res.json()).then(res => {
                    this.setState({
                        datalist: res.data
                    });
                })
        } else {
            fetch(`/pages/category/${this.state.categoryId}?currentPage=1&sort=onShelfTime&order=desc&_=${this.state.myDate}`)
                .then(res => res.json()).then(res => {
                    this.setState({
                        datalist: res.data
                    });
                })
        }
        
    }

    componentDidMount () {
        //redux隐藏tabbar
        // store.dispatch(hideTabbar());
        this.props.hideTabbar();
        console.log(this.props.match.params.myid);
      
        fetch(`/pages/category/${this.props.match.params.myid}?currentPage=1&sort=onShelfTime&order=desc&_=${this.state.myDate}`)
        .then(res=>res.json()).then(res=>{
            console.log(res);
            this.setState({
                datalist: res.data,
                categoryId: this.props.match.params.myid
            },()=>{
                console.log(this.state);
            });
        });


         const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop-44;
       

        


        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: -80,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

    }

    componentWillUnmount () {
        mypage = 1;

        //redux显示tabbar
        // store.dispatch(showTabbar());
        this.props.showTabbar();
    }

    goHome () {
        window.location.href="#/home";
    }

    goCategory () {
        window.location.href="#/category";
    }
}

const mapDispatchToProps = {
    showTabbar,
    hideTabbar
}

export default connect(null, mapDispatchToProps)(Page);