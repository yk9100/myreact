import React, {
      Component
} from 'react';
import style from './index.module.scss';
import Navbar from '../../component/Navbar/navbar';

class Home extends Component {
      render() {
            return <div id={style.home}>
            <header>
            	<img src="https://m.wowdsgn.com/static/img/titleView.png" alt=""/>
            	<div className="search-infor">
            		<img src="https://m.wowdsgn.com/static/img/searchIcon-e103f6f03f8488bbc144da2ef8684396.png" alt=""/>
            		<input type="text" placeholder="搜索我的尖叫好物" onFocus={this.xFocus.bind(this)}/>
            	</div>
            </header>
            <Navbar></Navbar>
            {this.props.children}
        </div>
      }
      xFocus() {
            // this.props.history.push(`/searcher`);
            window.location.href="#/searcher"
      }
}
export default Home;