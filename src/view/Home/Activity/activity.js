import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, Button } from 'antd-mobile';
import Carousels from '../../../component/Carousels/carousels';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import style from './activity.module.scss'

// products modules
import Spike from '../../../component/Spike/index.js'
import Popular from '../../../component/Popular/index.js'


var pages = 1
class Activity extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timeNow: null,
			datalist: null,
			page2:null,
			banners: null,
			// 下拉刷新状态
			refreshing: false,
			down: true,
			height: document.documentElement.clientHeight,
		}
	}
	render() {
		return (
			<div>
				<PullToRefresh 
					damping={60} 
					ref={el => this.ptr = el} 
					style={{ height: this.state.height,overflow: 'auto',}}
					indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
					direction="up"
					refreshing={this.state.refreshing}
					onRefresh={() => {
						this.setState({ 
							refreshing: true
						});

						var newTime = new Date().getTime()
						
						
						fetch(`/v2/page?pageId=1&tabId=10010&currentPage=${++pages}&pageSize=8&_=${newTime}`)
							.then(res => res.json())
							.then(res => {
								this.setState({
									datalist:[...this.state.datalist, ...res.data.modules]
								})
								//console.log(this.state.datalist)
							})
						
						setTimeout(() => {
							this.setState({ refreshing: false });
						}, 1000);
					}}>

					{/* 自己的数据 */}
					{
						this.state.banners?
						<Carousels mylist={this.state.banners}></Carousels>
						:null
					}
					{
						this.state.datalist?
						<Spike data={this.state.datalist}></Spike>
						:null
					}
					{
						this.state.datalist?
						<Popular data={this.state.datalist}></Popular>
						:null
					}
				</PullToRefresh>
			</div>
		)
	}

	componentWillMount(){
		this.setState({
			timeNow: new Date().getTime()
		}, ()=>{
			console.log(this.state.timeNow)
		})
	}

	componentDidMount() {

		const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;

		fetch(`/v2/page?pageId=1&tabId=10010&currentPage=1&pageSize=8&_=${this.state.timeNow}`)
			.then(res => res.json())
			.then(res => {
				//console.log(imgArr);
				this.setState({
					datalist: res.data.modules,
					banners: res.data.modules[0].moduleContent.banners,
					// 下拉刷新
					height: hei,
				}, () => {
					//console.log(this.state.datalist);
					//console.log(this.state.banners);
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: true,
						loop: true,
						pagination: {
							el: '.swp1',
						}
					});
				})
			})

	}
}

export default Activity;