import React, {
	Component
} from 'react';
import style from './goToTop.module.scss';

class GoToTop extends Component {
	render() {
		return (
			<div id={style.goToTop}>
				<div onClick={this.toTop.bind(this)}></div>
			</div>
		)
	}

	toTop() {
		document.documentElement.scrollTop = 0;
	}
}

export default GoToTop;