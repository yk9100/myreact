import React,{Component} from 'react';
import style from './index.module.scss';
import axios from 'axios';
import { PullToRefresh } from 'antd-mobile';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
var count = 1;
class Cart extends Component {
	fuck() {
		this.props.history.push('/home')
	}
	
	
	enterDetail(id) {
		this.props.history.push(`/zscDetail/${id}`)
	}


	state = {
		List:[],
		refreshing: false,
        down: true,
        height: document.documentElement.clientHeight,
        data: []
	}
	

	


    render () {
		
        return <div id={style.box}>

        {/*path-1*/}
           <header className={style.header}>
           		<div className={style.div_1}>
           			<span></span>
           			<img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home.png"
           			 onClick={this.fuck.bind(this)} alt=""/>
           		</div>
           		<p>购物车</p>
           </header>


		{/*path-2*/}
				<div className={style.container}>
					<p>您的购物车还是空的</p>
					<ul>
						<li><a href="/">看看收藏</a></li>
						<li><a href="/">去逛逛</a></li>
					</ul>
				</div>


		{/*path-3*/}
			<div className={style.div_2}>
				<p>- 为您推荐 -</p>
			</div>


		{/*path-4*/}
			

			<PullToRefresh
		        damping={60}
		        ref={el => this.ptr = el}
		        style={{
		          height: this.state.height,
		          overflow: 'auto',
		        }}
		        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
		        direction={ 'up'}
		        refreshing={this.state.refreshing}
		        onRefresh={() => {
		          this.setState({ refreshing: true });
		          // setTimeout(() => {
		          //   this.setState({ refreshing: false });
		          // }, 1000);
		          axios({
						url:`/recommend/cart?currentPage=${++count}&_=1554810493561`
						}).then((res)=>{
							let newList = res.data.data
							this.setState({
								List:[...this.state.List,...res.data.data],
								refreshing: false
							})
							console.log(this.state.List)
						})
		        }}
      		>
	        	<div className={style.div_3}>
					<ul>
						{
							this.state.List.map(item=>(
								<li key={item.productId} onClick={this.enterDetail.bind(this,item.productId)}>
									<img src={item.productImg} alt=""/>
									<p className={style.productTitle}>{item.productTitle}</p>
									<p className={style.sellPrice}>￥{item.sellPrice}</p>
									{
										item.prizeOrSlogan?
										<p className={style.prizeOrSlogan}>{item.prizeOrSlogan}</p>:
										null
									}
								</li>
							))
						}	
					</ul>
				</div>
      		</PullToRefresh>
        </div>
    }

    componentWillUnmount() {
    	count = 1;
    }


    componentDidMount() {
		
			axios({
				url:`/recommend/cart?currentPage=1&_=1554810493561`
				}).then((res)=>{
					let newList = res.data.data
					this.setState({
						List:[...newList]
					})
					console.log(this.state.List)
				})
			
			const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
			    setTimeout(() => this.setState({
			      height: hei
			    }), 0);
    }
}
export default Cart;