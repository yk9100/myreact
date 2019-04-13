import React, {
	Component
} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class Carousels extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div id="slider">
		        <div className="swiper-container swiper1">
			        <div className="swiper-wrapper">
			        {
			        	this.props?
			        	this.props.mylist.map((item)=>
			        		<div className="swiper-slide" key={item.id}>
			        			<img src={item.bannerImgSrc} alt="banners" style={{height:"2.5rem", width:"100%"}}/>
			        		</div>)
			        	:null
			        }
			        </div>
			        <div className='swp1' 
			        	style={{position: 'absolute',
    							zIndex: '999',
    							textAlign: 'center'}}></div>
		      	</div>
			</div>
		)
	}

	componentDidMount () {
		//console.log('轮播数据',this.props.mylist);
	}


}

export default Carousels;