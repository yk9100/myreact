import React,{Component} from 'react';
import style from './index.module.scss';

class Center extends Component {
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

				
		</div>
	}

}
export default Center;