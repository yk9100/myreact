import React, {
	Component
} from 'react';
import Carousels from '../../../component/Carousels/carousels';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import style from './furniture.module.scss'
import TitleItem from '../../../component/TitleItem/titleItem'
class Furniture extends Component {
	constructor(props) {
		super(props);

		this.state = {
			datalist: [],
			itemlist: [],
			banners: null,
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
				{
					this.state.banners?
					<TitleItem mylist2={this.state.banners}></TitleItem>
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
									item.moduleContent.products.map((item2,index)=>(
										<section key={item2.productId} className={index <= 5 ? '' : 'xiao'} onClick={this.toItem.bind(this, item2.productId, item2.parentProductId, item2.productTitle, item2.sellPrice)}>
											<img src={item2.productImg} />
											<p>{item2.productTitle}</p>
											<span>￥{item2.sellPrice}</span>
										</section>))
				
									
								}
							</div>
						</li>):null
				}
				</ul>
			</div>
		)
	}
	toItem(id, pId, title, price) {
		// console.log(id);
		this.props.history.push(`/item?myId=${id}&pId=${pId}&title=${title}&price=${price}`);
	}

	componentDidMount() {
		fetch('/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1554944667655')
			.then(res => res.json())
			.then(res => {
				console.log('all',res.data.modules)
				this.setState({
					datalist: res.data.modules[0].moduleContent.banners,
					
				}, () => {
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: true,
						loop: true,
						pagination: {
							el: '.swp1',
						}
					})

				})
				this.setState({
					banners: res.data.modules[1].moduleContent.products
				},()=>{
						var swiper2 = new Swiper('.swiper2', {
							slidesPerView: 3,
							spaceBetween: 10,
						});
				});

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