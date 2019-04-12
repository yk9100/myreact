import React, {
	Component
} from 'react';
import style from './itemRecommend.module.scss';

class ItemRecommend extends Component {
	constructor(props) {
		super(props);

		this.state = {
			datalistItem: [],
		}
	}
	render() {
		return (
			<div id={style.items}>
				<ul>
					{
						this.props ?
						this.props.mydatalistItem.map((items)=>
							<li key={items.moduleId} 
								style={{
									background: 'white',
									textAlign: 'center',
									overflow: 'hidden',
									margin: '.15rem 0',
									boxSizing: 'border-box',
								}}>
								<h1 style={{
									textAlign:'center',
									fontSize: '.18rem'
								}}>{items.moduleName}</h1>
								<h3 style={{
									textAlign:'center',
									fontSize: '.12rem',
									color: '#808080',
									marginBottom: '.05rem',
								}}>{items.moduleDescription}</h3>
								<img src={items.moduleContent.banners[0].bannerImgSrc} 
									style={{
										width: '3.45rem',
										margin: 'auto',
									}}/>
							</li>
						)
						:null
					}
				</ul>
			</div>
		)
	}

	componentDidMount() {
		console.log('ddddd', this.props.mydatalistItem)
	}
}

export default ItemRecommend;