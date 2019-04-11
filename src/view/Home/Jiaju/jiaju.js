import React, {
	Component
} from 'react';
import Carousels from '../../../component/Carousels/carousels';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class Jiaju extends Component {
	constructor(props) {
		super(props);

		this.state = {
			datalist: [],
		}
	}
	render() {
		return (
			<div>
				{
					this.state.datalist.length?
					<Carousels mylist={this.state.datalist}></Carousels>
					:null
				}
			</div>
		)
	}

	componentDidMount() {
		fetch('/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1554944670437')
			.then(res => res.json())
			.then(res => {
				console.log(res.data.modules[0].moduleContent.banners)
				this.setState({
					datalist: res.data.modules[0].moduleContent.banners
				}, () => {
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: true,
						loop: true,
						pagination: {
							el: '.swiper-pagination',
						}
					});
				})
			})
	}
}

export default Jiaju;