import React, {
	Component
} from 'react';
import style from './titleItem.module.scss';

class TitleItem extends Component {
	render() {
		return (
			<div id={style.titleItem}>
				<div className={style.container}>
					<div className={style.titleInfor}>
						<h1>SALE</h1>
						<h3>限时特惠</h3>
					</div>
					<div className="swiper-container swiper2">
					    <div className="swiper-wrapper">
					    {
					    	this.props?
					    	this.props.mylist2.map((item)=>

					        	<div className="swiper-slide"
									key={item.productId}
					        		style={{

					        		}}
					        	 >
				        			<img src={item.productImg} 
				        				style={{
				        					width: "100%",
				        					marginBottom: ".05rem",
				        				}}/>

				        			<div className="slide-bottom">
				        				<div className="goods-infor" 
				        				style={{
												fontSize: '.14rem',
												color: '#808080',
												textAlign: 'center',
												overflow: 'hidden',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',

				        				}}>
				        					{item.productName}
				        				</div>
				        				<div className="goods-prices"
											style={{
												textAlign: 'center',
												fontSize: '.12rem',
											}}>
											<span className="sell-price" 
													style={{}}>{'￥'+ item.sellPrice}
											</span>
				        					<span className="original-price">{'￥'+ item.originalPrice}</span>
				        				</div>
				        			</div>

					        	</div>
					    		)
					    	:null
					    }
					    </div>
					</div>
					<div className={style.moreInfor}>
						<a href="javascript:;">查看全部</a>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		console.log(this.props.mylist2)
	}
}

export default TitleItem;