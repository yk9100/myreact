import React, {
	Component
} from 'react';
import {
	NavLink,
	Switch,
	Redirect,
} from 'react-router-dom';
import style from './navbar.module.scss';

class Navbar extends Component {
	render() {
		return <div id={style.navbar}>
			<ul>
				<li>
					<NavLink to="/home/recommend" activeClassName="active1">推荐</NavLink>
				</li>
				<li>
					<NavLink to="/home/furniture" activeClassName="active1">家具</NavLink>
				</li>
				<li>
					<NavLink to="/home/jiaju" activeClassName="active1">家居</NavLink>
				</li>
				<li>
					<NavLink to="/home/activity" activeClassName="active1">活动</NavLink>
				</li>
			</ul>
		</div>
	}
}

export default Navbar;