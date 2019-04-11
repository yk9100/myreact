import React, { Component } from 'react';
import Carousels from '../../../component/Carousels/carousels';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import style from './jiaju.module.scss'

class Jiaju extends Component {
	constructor(props) {
		super(props);

		this.state = {
			datalist: [],
			banners: null,
		}
	}
	render() {
		return (
			<div>
				{
					this.state.banners?
					<Carousels mylist={this.state.banners}></Carousels>
					:null
				}


			</div>
		)
	}

	componentDidMount() {

		var timestamp = new Date().getTime();

		fetch(`/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=${timestamp}`)
			.then(res => res.json())
			.then(res => {

				//console.log(res.data)

				var bannerData = res.data.modules[0].moduleContent.banners

				var imgArr = [];
				for(var i in bannerData){
					//console.log(res.data.modules[0].moduleContent.banners[i].bannerImgSrc)
					console.log(bannerData[i].bannerImgSrc);
					imgArr.push(bannerData[i].bannerImgSrc);
				}
				//console.log(imgArr);
				

				this.setState({
					datalist: res.data,
					banners: res.data.modules[0].moduleContent.banners,
				}, () => {
					console.log(this.state.datalist);
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

export default Jiaju;