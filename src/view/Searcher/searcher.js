import React, {
	Component
} from 'react';
import style from './searcher.module.scss'

class Searcher extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchDataList: null,
		}
	}
	render() {
		return (
			<div id={style.searcher}>
				<div className={style.searchTitle}>
					<div className={style.leftType}>
	            		<img src="https://m.wowdsgn.com/static/img/searchIcon-e103f6f03f8488bbc144da2ef8684396.png"/>
	            		<input type="text" placeholder="搜索我的尖叫好物"/>
					</div>
	            	<a href="#/home/recommend">
	            		<img src="/homelogo.png"/>
            		</a>
            	</div>
				<div className={style.hotSearch}>
					<p>热门搜索</p>
					<ul>
						<li onClick={this.xxClick.bind(this)}>尖叫设计</li>
						<li onClick={this.xxClick.bind(this)}>暖手宝</li>
						<li onClick={this.xxClick.bind(this)}>沙发</li>
						<li onClick={this.xxClick.bind(this)}>被子</li>
						<li onClick={this.xxClick.bind(this)}>餐具</li>
						<li onClick={this.xxClick.bind(this)}>茶具</li>
						<li onClick={this.xxClick.bind(this)}>吊灯</li>
						<li onClick={this.xxClick.bind(this)}>厨房</li>
						<li onClick={this.xxClick.bind(this)}>儿童</li>
						<li onClick={this.xxClick.bind(this)}>HAY</li>
						<li onClick={this.xxClick.bind(this)}>Arabia</li>
						<li onClick={this.xxClick.bind(this)}>家饰</li>
						<li onClick={this.xxClick.bind(this)}>收纳</li>
						<li onClick={this.xxClick.bind(this)}>床上用品</li>
						<li onClick={this.xxClick.bind(this)}>旅行</li>
					</ul>
				</div>
				<div className={style.historySearch}>
					<div className={style.historyTitle}>
						<p>历史搜索</p>
						<div className={style.deleteIcon} 
							onClick={this.xxxClick.bind(this)}>
							<img src="/cleanSearchIcon.png" alt=""/>
						</div>
					</div>
					<ul className={style.searchContents}>
						{
							this.state.searchDataList?
							this.state.searchDataList.map((item)=>
								<li key={item} 
									style={{
										padding: '.1rem',
										height: '.36rem',
										background: 'gold',
										textAlign: 'center',
										marginRight: '.1rem',
										marginBottom: '.05rem',
										background: '#f5f5f5',
										fontSize: '.12rem',
									}}>
									{item}
								</li>
								)
							:null
						}
					</ul>
				</div>
			</div>
		)
	}

	xxClick(evt) {
		// console.log('aaa', evt.target.innerHTML);[...new Set([...this.state.searchDataList, evt.target.innerHTML])]
		this.setState({
			searchDataList: Array.from(new Set([...this.state.searchDataList, evt.target.innerHTML]))
		}, () => {
			document.cookie = `historyList=${this.state.searchDataList}`
		})
	}

	xxxClick() {
		// console.log('aaa');
		this.setState({
			searchDataList: ["还没有浏览商品哦"],
		}, () => {
			document.cookie = `historyList=${this.state.searchDataList}`
		})
	}

	componentDidMount() {
		this.setState({
			searchDataList: document.cookie.split("=")[1].split(',')
		});
		console.log(document.cookie.split("=")[1].split(','))
	}
}

export default Searcher;