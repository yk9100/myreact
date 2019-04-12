import React, {
	Component
} from 'react';
import Carousels from '../../../component/Carousels/carousels';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import style from './furniture.module.scss'

class Furniture extends Component {
	constructor(props) {
		super(props);

		this.state = {
			datalist: [],
			itemlist: [],
		}
	}

	render() {
		return (
			<div id={style.furniture}>
				{
					this.state.datalist.length?
					<Carousels mylist={this.state.datalist}></Carousels>
					:null
				}
				<ul>
				{
					this.state.itemlist.length?
					this.state.itemlist.map((item)=>
						<li key={item.moduleId}>
							<h2>{item.moduleName}</h2>
							<h3>{item.moduleDescription}</h3>
							<div>
								{
									
								}
							</div>
						</li>):null
				}
				</ul>
			</div>
		)
	}

	componentDidMount() {
		fetch('/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1554944667655')
			.then(res => res.json())
			.then(res => {
				//console.log(res.data.modules)
				this.setState({
					datalist: res.data.modules[0].moduleContent.banners
				}, () => {
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: true,
						loop: true,
						pagination: {
							el: '.swp1',
						}
					})

				})
				res.data.modules.shift();
				res.data.modules.shift();
				this.setState({
					itemlist: res.data.modules,
				},()=>{
					console.log(res.data.modules)

				})
			})
	}
}

export default Furniture;