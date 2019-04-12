import React, {
      Component
} from 'react';
import style from './index.module.scss';
import Navbar from '../../component/Navbar/navbar';
import GoToTop from '../../component/GoToTop/goToTop';

class Home extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  myTop: 0,
            }
      }
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
            <div style={{
                  width: '100%',
                  height: '.7rem',
                  textAlign: 'center',
                  }}>
                  <h3 style={{
                        fontSize: '.12rem,',
                        fontWeight: '100'
                        }}>已经到底了
                  </h3>
            </div>
            {     
                  this.state.myTop > 800 ?
                  <GoToTop ref='goTop'></GoToTop>
                  :null
            }
        </div>
      }
      xFocus() {
            // this.props.history.push(`/searcher`);
            window.location.href = "#/searcher"
      }

      componentDidMount() {
            window.onscroll = () => {
                  let scrollTop = document.documentElement.scrollTop;
                  this.setState({
                        myTop: scrollTop
                  })
                  // if (scrollTop > 800) {
                  //       this.refs.goTop.style.visibility = 'initial';
                  // } else {
                  //       this.refs.goTop.style.visibility = 'hidden';
                  // }

            }
      }
}
export default Home;