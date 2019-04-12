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
				itemRecommend
				<ul>
					{
			// this.props ?
			// this.props.mydatalistItem.map((items, index)=>
			// 	<li>{items}</li>

			// )
			// :null
					}
				</ul>
			</div>
		)
	}

	componentDidMount() {
		console.log(this.props)
	}
}

export default ItemRecommend;