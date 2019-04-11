import React, {
	Component
} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class Carousels extends Component {
	constructor(props) {
		super(props);

		this.state = {
			datalist: [],
		}
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
			        			<img src={item.bannerImgSrc} style={{height:"2.5rem"}}/>
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


}

export default Carousels;