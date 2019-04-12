import React,{Component} from 'react';
import style from './index.module.scss';

let Swiper = window.Swiper;
class Item extends Component {
    state = {
        proList: [],
        parList: [],
        myDate: (new Date()).getTime(),
        title:'',
        price:0,
        datalist:null,
    }

    render () {
        return <div id={style.item}>
            <header>
                <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home-07bdcdd36c9df74ef30110623d2d708b.png"
                  onClick={this.goHome.bind(this)}  
                />
                
                 <span>商品详情</span>

                <img src="https://m.wowdsgn.com/static/img/searchIcon-e103f6f03f8488bbc144da2ef8684396.png"
                    
                />
            </header>

            <div className="swiper-container" style={{ background:"white" }}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{ margin: 0 }}>
                        <img src="https://img.wowdsgn.com/product/images/2923e731-01f2-4de3-9f8f-e5b56762db59_2dimension_800x800.jpg?imageView2/1/w/375/h/300"  style={{width:"100%"}}/>
                    </div>
                    <div className="swiper-slide" style={{margin:0}}>
                        <img src="https://img.wowdsgn.com/product/addtionalImage//e0af06fc-b8d8-4eee-b73f-26467999ecb4_2dimension_750x600.jpg?imageView2/1/w/375/h/300" style={{width:"100%"}}/>
                    </div>
                    <div className="swiper-slide" style={{ margin: 0 }}>
                        <img src="https://img.wowdsgn.com/product/addtionalImage//b3e88985-c88a-4466-8d15-a12b8987578a_2dimension_750x600.jpg?imageView2/1/w/375/h/300" style={{width:"100%"}} />
                    </div>
                    <div className="swiper-slide" style={{ margin: 0 }}>
                        <img src="https://img.wowdsgn.com/product/addtionalImage//b2dd3efa-8fd5-4387-9732-854a25b28ae0_2dimension_750x600.jpg?imageView2/1/w/375/h/300"  style={{width:"100%"}}/>
                    </div>
                    <div className="swiper-slide" style={{ margin: 0 }}>
                        <img src="https://img.wowdsgn.com/product/addtionalImage//c470c11a-123e-4919-860c-af8c8e43d251_2dimension_750x600.jpg?imageView2/1/w/375/h/300"  style={{width:"100%"}}/>
                    </div>
                </div>
                <div className="swiper-pagination swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span></div>
            </div>
            <section>
                <p>{this.state.title}</p>
                <span>{this.state.price}</span>
            </section>
            {
                this.state.parList?
                    this.state.parList.map((item) => <li key={item.content}>
                        <img src={item.content}  style={{width:"100%"}}/>
                </li>):null
            }
            <h1>--猜你喜欢--</h1>
            <main>
                <ul>
                    {
                        this.state.datalist ?
                            this.state.datalist.map((item) =>
                                <li key={item.productId} onClick={this.cai.bind(this, item.productId, item.parentProductId, item.productTitle, item.sellPrice)}>
                                    <img src={item.productImg} />
                                    <p>{item.productTitle}</p>
                                    <span>￥{item.sellPrice}</span>
                                </li>) : null
                    }
                </ul>
            </main>
            <footer>
                <ul>
                    <li> ❤ | ♖</li>
                    <li style={{ backgroundColor: "#f5f5f5"}}>加入购物车</li>
                    <li style={{ backgroundColor: "#FFD444" }}>立即购买</li>
                </ul>
            </footer>
            <aside>
                <img src="https://img.wowdsgn.com/icons/backTop.png" alt="" onClick={this.toTop.bind(this)}/>
            </aside>
        </div>
    }

    cai(id, pId, title, price) {
        // console.log(id);
        this.props.history.push(`/item?myId=${id}&pId=${pId}&title=${title}&price=${price}`);
        window.history.go(0);
    }

    toTop () {
        document.documentElement.scrollTop = 0;
    }

    goHome () {
        window.location.href="#/home"
    }

    componentDidMount () {
        var swiper = new Swiper('.swiper-container', {
            autoplay:true,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
        
        // console.log(this.props.match.params.myid);
        var productId = new URLSearchParams(this.props.location.search).get('myId');
        var parentProductId = new URLSearchParams(this.props.location.search).get('pId');
        var title = new URLSearchParams(this.props.location.search).get('title');
        var price = new URLSearchParams(this.props.location.search).get('price');
        console.log(productId, parentProductId, title, price);
        ///itemdetail/skuInfos/17228?_=1554875405664
        //
        this.setState({
            title: title,
            price: price
        });

        fetch(`/itemdetail/skuInfos/${productId}?_=${this.state.myDate}`).then(res=>res.json())
        .then(res=>{console.log(res)});

        fetch(`/itemdetail/spuInfos/${parentProductId}?_=${this.state.myDate}`).then(res => res.json())
            .then(res => { console.log(res.data.itemDetailIntroVoList);
                if (res.data.itemDetailIntroVoList) {

                    res.data.itemDetailIntroVoList.shift();
                }
            this.setState({
                parList: res.data.itemDetailIntroVoList
            }); });

        

        //猜你喜欢
        fetch(`/recommend/item?skuId=${productId}&_=${this.state.myDate}`).then(res => res.json())
            .then(res => { console.log('猜',res.data);
            this.setState({
                datalist: res.data
            }) });
    }
}
export default Item;