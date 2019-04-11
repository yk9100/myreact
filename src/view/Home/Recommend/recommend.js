import React, {
	Component
} from 'react';
import style from './recommend.module.scss';
import Carousels from '../../../component/Carousels/carousels';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import TitleItme from '../../../component/TitleItem/titleItem';

class Recommend extends Component {
	constructor(props) {
		super(props)
		this.state = {
			datalist: [],
			datalist2: [],
		}
	}
	render() {
		return (
			<div id={style.recommend}>
				{
					this.state.datalist.length?
					<Carousels mylist={this.state.datalist}></Carousels>
					:null
				}

				{
					this.state.datalist2.length?
					<TitleItme mylist2={this.state.datalist2}></TitleItme>
					:null
				}
			</div>
		)
	}
	componentDidMount() {
		fetch('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1554898181326')
			.then(res => res.json())
			.then(res => {
				console.log(res.data.modules[0].moduleContent.banners);
				this.setState({
					datalist: res.data.modules[0].moduleContent.banners
				}, () => {
					console.log('1', this.state.datalist);
					var swiper1 = new Swiper('.swiper1', {
						//autoplay: true,
						loop: true,
						pagination: {
							el: '.swp1',
						}
					});
				});
			})

		fetch('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1554957727931')
			.then(res => res.json())
			.then(res => {
				console.log(res.data.modules[1].moduleContent.products)
				this.setState({
					datalist2: res.data.modules[1].moduleContent.products
				}, () => {
					console.log('2', this.state.datalist2);
					var swiper2 = new Swiper('.swiper2', {
						slidesPerView: 3,
						spaceBetween: -35,
					});
				})
			})


	}
}

export default Recommend;