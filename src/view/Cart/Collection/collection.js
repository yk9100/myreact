import React,{Component} from 'react'
import store from '../../../store'
import style from './collection.module.scss'
import Danpin from './Danpin/danpin.js'
import Pinpai from './Pinpai/pinpai.js'
import Shejishi from './Shejishi/shejishi.js'
class Collection extends Component {
	state = {
		myindex: 0,
	}


	change(index) {
		this.setState({
			myindex: index
		})

		
	}
	
	changeComponent() {
		switch(this.state.myindex) {
			case 0:
			return <Danpin></Danpin>
			case 1:
			return <Pinpai></Pinpai>
			case 2:
			return <Shejishi></Shejishi>
			default:
			return <Danpin></Danpin>
		}
	}
	
	componentDidMount () {
		store.dispatch({
			type:'hide_tabbar',
			isShow:false
		})
	}
	
	componentWillUnmount () {
		store.dispatch({
			type:'show_tabbar',
			isShow:true
		})
	}

	render () {

		return <div id={style.All}>
			<header className={style.header}>
				<img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home-07bdcdd36c9df74ef30110623d2d708b.png" alt="" onClick={()=>{
					this.props.history.push('/home')
				}}/>
				<p>我的收藏</p>
				<img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/me.png" alt="" onClick={
					()=>{
						this.props.history.push('/zscUser')
					}
				}/>
			</header>

			<ul className={style.dongtai}>
				<li><a  onClick={this.change.bind(this,0)} className={0===this.state.myindex?'zscChange':''}>单品</a></li>
				<li><a  onClick={this.change.bind(this,1)} className={1===this.state.myindex?'zscChange':''}>品牌</a></li>
				<li><a onClick={this.change.bind(this,2)} className={2===this.state.myindex?'zscChange':''}>设计师</a></li>
			</ul>
			
			{this.changeComponent()}
			
			
			
		</div>
	}
}

export default Collection