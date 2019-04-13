import React,{Component} from 'react'
import store from '../../../store'
import style from './user.module.scss'

class User extends Component {
	
	componentDidMount () {
		
	}
	
	componentWillUnmount () {
		
	}

	render () {
		return <div id={style.User}>

				<header className={style.header}>我</header>

				<div className={style.wode}>
					<ul>
						<li>
							<img src="https://m.wowdsgn.com/static/img/default_portrait.png" alt=""/>
						</li>
						<li>
							<p>Kerwin</p>
							<p>分类：山东吴彦祖</p>
						</li>
						<li>〉</li>
					</ul>
				</div>

				<div className={style.orderAll}>
					<ul>
						<li>全部订单</li>
						<li>
							<img src="" alt=""/>
							<span>待付款</span>
							<span>〉</span>
						</li>
						<li>
							<img src="" alt=""/>
							<span>待发货</span>
							<span>〉</span>
						</li>
						<li>
							<img src="" alt=""/>
							<span>待收货</span>
							<span>〉</span>
						</li>
						<li>
							<img src="" alt=""/>
							<span>待评论</span>
							<span>〉</span>
						</li>
						<li>
							<img src="" alt=""/>
							<span>退换货</span>
							<span>〉</span>
						</li>
					</ul>
				</div>
		</div>
	}
}

export default User