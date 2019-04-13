import React,{Component} from 'react'
import style from './order.module.scss'
import axios from 'axios'
import store from '../../../store'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { Modal } from 'antd-mobile';
import {connect} from 'react-redux';
import {showTabbar, hideTabbar} from '../../../store/actionCreators.js';


const alert = Modal.alert;

class Order extends Component {
	

	showAlert () {
	  const alertInstance = alert('确认放弃该订单吗', '', [
	    { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
	    { text: '确认', onPress: () => {this.props.history.push(`/zscDetail/${this.props.match.params.id}`)} },
  	])}

	successToast () {
  		Toast.success('请添加收货地址', 1);
	}
	
	state = {
		orderList:[]
	}
	
	

	componentDidMount() {
		
		this.props.hideTabbar(); 


		axios({
			url:`/order/settleBuynow?productId=${this.props.match.params.id}&productQty=1&_=1554985155765`
		}).then(res=>{
			console.log(res.data)
		})

		Toast.loading('Loading...', 1, () => {
      		console.log('Load complete !!!');
    	});
	}

	componentWiiUnmount () {
		this.props.showTabbar();
	}

	render () {
		return <div id={style.All}>
			<ul className={style.header}>
				<li onClick={this.showAlert.bind(this)}>〈</li>
				<li>确认订单</li>
			</ul>

			<div className={style.adress}>+添加收货地址</div>

			<div className={style.getOrder}>
				<div className={style.div_1}>订单1</div>
				<div className={style.div_2}>
					<img src="https://img.wowdsgn.com/product/images/93583672-d910-4af9-a846-936621549182.jpg?imageslim" alt=""/>
					<ul>
						<li>硅藻土地垫 小鲸鱼</li>
						<li>小鲸鱼</li>
						<li></li>
						<li>
							<span>￥99</span>
							<span>x1</span>
						</li>
					</ul>
				</div>
				<div className={style.div_3}>
					<div>
						<span>√</span>
						<span>优惠券</span>
					</div>

					<div>
						<span>满10减10</span>
						<span>〉</span>
					</div>
				</div>
				<div className={style.div_4}>
					<span>运费</span>
					<span>￥15</span>
				</div>
				<div className={style.div_5}>
					<span>优惠</span>
					<span>-￥ 10</span>
				</div>
				<div className={style.div_6}>
					买家留言：<input type="text" placeholder="写下您的特殊需求"/>
				</div>
				<div className={style.div_7}>
					<div>共1件</div>
					<div>
						<span>小计</span>
						<span>￥ 104</span>
					</div>
				</div>

			</div>

			<div className={style.div_8}>
					<div>
						<img src="https://m.wowdsgn.com/static/img/zhifubao.png" alt=""/>
						<span>支付宝</span>
					</div>

					<span className={style.span1}>√</span>
			</div>

			<footer className={style.footer}>
				<div>合计: ￥104</div>
				<div onClick={this.successToast.bind(this)}>确认</div>
			</footer>

		</div>
	}
}

let mapDistpatchToProps = {
	showTabbar,
	hideTabbar
}

export default connect(null,mapDistpatchToProps)(Order)