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
					        	<div className="swiper-slide" key={item.id}>
					        		<img src={item.productImg} style={{height: '.9rem',width: '.9rem'}}/>
					        	</div>
					    		)
					    	:null
					    }
					    </div>
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