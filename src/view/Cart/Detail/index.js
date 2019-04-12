import React,{Component} from 'react'
import style from './index.module.scss'
import store from '../../../store'
import { Carousel, WingBlank } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import axios from 'axios'
import { Drawer, NavBar, Icon } from 'antd-mobile';

let count = 0;
class ZscDetail extends Component {
	enterCart(){
		this.props.history.push('/cart')
	}
	
	getCount() {
		this.setState({
			count:this.state.count+1
		})
	}
	
	lostCount() {
		if(this.state.count>1){
				this.setState({
				count:this.state.count-1
			})
		}else{
			this.setState({
				count:1,
				gray:!this.state.gray
			})
		}
		
	}
	
	hiddeFooter() {
		this.setState({
			isShow:!this.state.isShow
		})
	}

	changeRed() {
		this.setState({
			changeRed:!this.state.changeRed
		})
	}
	componentDidMount() {
		store.dispatch({
			type:'hide_tabbar',
			isShow:false
		})

		axios({
			url:`/recommend/item?skuId=${this.props.match.params.id}&_=1554877427243`
		}).then(res=>{
			this.setState({
				detailList:res.data.data
			})
		})

		axios({
			url:`/itemdetail/spuInfos/7717?_=1554885000744`
		}).then(res=>{
			this.setState({
				picList:res.data.data.itemDetailIntroVoList
			})
		})

		axios({
			url:`/itemdetail/skuInfos/${this.props.match.params.id}?_=1554885000742`
		}).then(res=>{
			this.setState({
				rulerList:res.data.data.skuAttrPairs
			})
		})

		axios({
			url:`/recommend/item?skuId=${this.props.match.params.id}&_=1554885000747`
		}).then(res=>{
			this.setState({
				loveList:res.data.data
			})
		})

		axios({
			url:`/itemdetail/spec/specific/${this.props.match.params.id}?_=1554948819259`
		}).then(res=>{
			this.setState({
				buyList:res.data.data
			})
		})

		axios({
			url:`/itemdetail/spec/toBuyNow/${this.props.match.params.id}?_=1554948819170`
		}).then(res=>{
			if (res.data.data) {				
				this.setState({
					colorList:res.data.data.itemAttrVoList
				},()=>{
					console.log(res.data.data.itemAttrVoList)
				})
			}
		})
	}
	
	componentWillUnmount() {
		store.dispatch({
			type:'show_tabbar',
			isShow:true
		})

		count = 0;
	}

	state={
		open: false,
    	imgHeight: 300,
    	detailList:null,
    	picList:null,
    	rulerList:[],
    	loveList:[],
    	buyList:null,
    	colorList:[],
    	count:1,
    	colorIndex:0,
    	gray:true,
    	changeRed:false,
    	isShow:true,
    	zIndex:false
	}

	onOpenChange = (...args) => {
    	this.setState({ open: !this.state.open });
    	
    	if ((count++ %2) === 0) {
			this.refs.showul.style.height = 0;

    	} else {
    		this.refs.showul.style.height = 45 + 'px';
    	}
    	
  	}

  	hh () {
  		console.log('hh');
  		this.setState({ open: !this.state.open });
		
    	if ((count++ %2) === 0) {
			this.refs.showul.style.height = 0;
			
    	} else {
    		this.refs.showul.style.height =45 + 'px';
    	}

    	
  	}
	

  	changeColor (index) {
		this.setState({
			colorIndex: index,
		});
  	}

	
	render () {

		const sidebar = (<List>
	      <div className={style.buy}>
	      	{	this.state.buyList?
	      		<ul className={style.ul_1}>
					<li>
						<img src={this.state.buyList.productImage} alt=""/>
					</li>
					<li>
						<p onClick={this.hh.bind(this)}>{this.state.buyList.productTitle}</p>
						<p>￥{this.state.buyList.originalPrice}</p>
						<p>
							<span>尺寸:{this.state.buyList.sizeText}</span>
							<span>重量:{this.state.buyList.netWeightText}</span>
						</p>
					</li>
				</ul>:
				null
	      	}


	      	<div className={style.color}>
				{
					this.state.colorList.map(item=>
						<ul key={item.attributeId}>
						<li>{item.attributeName}</li>
						{	
							
							item.itemAttrValueVoList.map((item2,index)=>
									<li key={item2.attributeValueId}>
										<span onClick={this.changeColor.bind(this,index)} className={index===this.state.colorIndex?'changeColor':''}>
											{item2.attributeValueText}
										</span>
									</li>
								)
								
						}
					</ul>
					)
				}
	      	</div>


	      	<div className={style.count}>
				<ul>
					<li>数量</li>
					<li>
						<div>
							<span onClick={this.lostCount.bind(this)} className={this.state.count==1?'gray':''}>-</span>
							<span>{this.state.count}</span>
							<span onClick={this.getCount.bind(this)}>+</span>
						</div>
					</li>
				</ul>
	      	</div>



	      	<div className={style.queding} onClick={()=>{
	      		this.props.history.push(`/zscOrder/${this.props.match.params.id}`)
	      	}}>确定</div> 		
	      </div>
	    </List>)





		return <div id={style.detail}>
			<header className={style.header}>
           		<div className={style.div_1}>
           			<span></span>
           			<img className={style.img1} onClick={this.enterCart.bind(this)} src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home.png" alt=""/>
           		</div>
           		<p>商品详情</p>
           		<div className={style.div_2}>
           			<img className={style.img2} src="https://m.wowdsgn.com/static/img/searchIcon-e103f6f03f8488bbc144da2ef8684396.png" alt=""/>
           		</div>
           </header>
			{	this.state.isShow?
	           <footer className={style.footer}>
	           		<ul ref="showul">
	           			<li>
							<span className="iconfont" onClick={this.changeRed.bind(this) } className={this.state.changeRed?'changeRed':''}>❤</span>
							<span className="iconfont" onClick={()=>{
								this.props.history.push('/cart')
							}}>&#xe639;</span>
	           			</li>

	           			<li onClick={this.onOpenChange.bind(this)}>加入购物车</li>
	           			<li onClick={this.onOpenChange.bind(this)}>立即购买</li>
	           		</ul>
	           </footer>:
	           null
			}

           <WingBlank>
		        <Carousel
		          autoplay={true}
		          infinite={true}
		        >
			        <a style={{
			         display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
	              		<img src="https://img.wowdsgn.com/product/images/7d8362a6-770c-46b5-a725-2dea373aab85.jpg?imageView2/1/w/375/h/300" alt=""/>
	            	</a>
	            	<a style={{
			         display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
	              		<img src="https://img.wowdsgn.com/product/addtionalImage//224518aa-737d-49c3-b945-601204b9859d_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt=""/>
	            	</a>
	            	<a style={{
			         display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
	              		<img src="https://img.wowdsgn.com/product/addtionalImage//9f425f17-78df-493b-9a90-160baaef8b4d_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt=""/>
	            	</a>
	            	<a style={{
			         display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
	              		<img src="https://img.wowdsgn.com/product/addtionalImage//c9ab40be-22f7-4db0-858d-da5fc53b4600_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt=""/>
	            	</a>
	            	<a style={{
			         display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
	              		<img src="https://img.wowdsgn.com/product/addtionalImage//cbf3a02e-9e47-48a9-bf96-f502e3ffe77c_2dimension_750x600.jpg?imageView2/1/w/375/h/300" alt=""/>
	            	</a>
		        </Carousel>
      		</WingBlank>


      		<div className={style.title}>
					{	
						this.state.detailList?
						<ul className={style.ul_1}>
							<li>
								<p className={style.p1}>{this.state.detailList[0].productTitle}</p>
							</li>
							<li>
								<p className={style.p2}>￥{this.state.detailList[0].originalPrice}
								</p>
							</li>	
						</ul>:null
					}
      		</div>

      		<div className={style.brand}>
				<img className={style.img_1} src="https://img.wowdsgn.com/brand/logo/7690a35e-b29c-4074-9f88-4fbcedc44da1_2dimension_800x800.jpg?imageslim" alt=""/>
				<ul>
					<li>PIY</li>
					<li>
						家具里的乐高
						PLAY IT YOURSELF！
						从DIY到PIY，从单调的“做”到有趣的“玩”。
						如乔布斯说的“用户体验”，
						PIY是一个强调“组装体验”的互联网家具品牌。
					</li>
					<img className={style.img_2} src="https://m.wowdsgn.com/static/img/icon-location.png" alt=""/>
					<div>中国</div>
				</ul>
      		</div>



      		<div className={style.div_3}>
      			{	this.state.picList?
					<img className={style.pic_1} src={this.state.picList[0].content} alt=""/>
					:null
      			}
      		</div>

      		<div className={style.div_4}>
				{	this.state.picList?
					<img src={this.state.picList[1].content} alt=""/>
					:null
      			}
      		</div>

      		<div className={style.div_5}>
				{
					this.state.picList?
					<img src={this.state.picList[2].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_6}>
				{
					this.state.picList?
					<img src={this.state.picList[3].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_7}>
				{
					this.state.picList?
					<img src={this.state.picList[4].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_8}>
				{
					this.state.picList?
					<img src={this.state.picList[5].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_9}>
				{
					this.state.picList?
					<img src={this.state.picList[6].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_10}>
				{
					this.state.picList?
					<img src={this.state.picList[7].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_11}>
				{
					this.state.picList?
					<img src={this.state.picList[8].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_12}>
				{
					this.state.picList?
					<img src={this.state.picList[9].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_13}>
				{
					this.state.picList?
					<img src={this.state.picList[10].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_14}>
				{
					this.state.picList?
					<img src={this.state.picList[11].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_15}>
				{
					this.state.picList?
					<img src={this.state.picList[12].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_16}>
				{
					this.state.picList?
					<img src={this.state.picList[13].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_17}>
				{
					this.state.picList?
					<img src={this.state.picList[14].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_18}>
				{
					this.state.picList?
					<img src={this.state.picList[15].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_19}>
				{
					this.state.picList?
					<img src={this.state.picList[16].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_20}>
				{
					this.state.picList?
					<img src={this.state.picList[17].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_21}>
				{
					this.state.picList?
					<img src={this.state.picList[18].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_22}>
				{
					this.state.picList?
					<img src={this.state.picList[19].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_23}>
				{
					this.state.picList?
					<img src={this.state.picList[20].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_24}>
				{
					this.state.picList?
					<img src={this.state.picList[21].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_25}>
				{
					this.state.picList?
					<img src={this.state.picList[22].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_26}>
				{
					this.state.picList?
					<img src={this.state.picList[23].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_27}>
				{
					this.state.picList?
					<img src={this.state.picList[24].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_28}>
				{
					this.state.picList?
					<img src={this.state.picList[25].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_29}>
				{
					this.state.picList?
					<img src={this.state.picList[26].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.div_30}>
				{
					this.state.picList?
					<img src={this.state.picList[27].content} alt=""/>
					:null
				}
      		</div>

      		<div className={style.ruler}>
				{	
					this.state.rulerList.length?
					<ul>
						<li><p>详细规格参数</p></li>
						<li>
                            <span>{this.state.rulerList[0].attributeName}</span>
                            <span>{this.state.rulerList[0].attributeValueText}</span>
						</li>
						<li>
                            <span>{this.state.rulerList[1].attributeName}</span>
                            <span>{this.state.rulerList[1].attributeValueText}</span>
						</li>
						<li>
                            <span>{this.state.rulerList[2].attributeName}</span>
                            <span>{this.state.rulerList[2].attributeValueText}</span>
						</li>
						<li>
                            <span>{this.state.rulerList[3].attributeName}</span>
                            <span>{this.state.rulerList[3].attributeValueText}</span>
						</li>
						<li>
                            <span>{this.state.rulerList[4].attributeName}</span>
                            <span>{this.state.rulerList[4].attributeValueText}</span>
						</li>
						<li>
                            <span>{this.state.rulerList[5].attributeName}</span>
                            <span>{this.state.rulerList[5].attributeValueText}</span>
						</li>
					</ul>:
					null
				}
      		</div>

			
			<div className={style.other}>其他信息</div>
			

			<div className={style.fuck}>
				<Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
		          <Accordion.Panel header="服务承诺">
		            <List className="my-list">
		              <ul>
						<li>
							<img src="https://m.wowdsgn.com/static/img/item/promise2.png" alt=""/>
							<div className={style.box1}>
								<p>价格保障/变动返差价</p>
								<p>7 日 保 价</p>
							</div>
						</li>
						<li>
							<img src="https://m.wowdsgn.com/static/img/item/promise3.png" alt=""/>
							<div className={style.box2}>
								<p>三年内质保</p>
								<p>7 日 退 换</p>
							</div>
						</li>
		              </ul>
		            </List>
		          </Accordion.Panel>
		          <Accordion.Panel header="价格说明" className="pad">
						<ul>
							<li>
                    划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考
                			</li>
							<li>
								
                    未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。
                
							</li>
							<li>
								
                    * 此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准
                
							</li>
						</ul>
		          </Accordion.Panel>
		        </Accordion>
			</div>

			<div className={style.shaitu}>猜你喜欢</div>

			<div className={style.love}>
					<ul>
					{this.state.loveList.map(item=>
							<li key={item.productId}>
								<img src={item.productImg} alt=""/>
								<p>{item.productTitle}</p>
								<p>￥{item.originalPrice}</p>
							</li>
						)
					}
					</ul>
			</div>
			
			// <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
		      <Drawer
		        className="my-drawer"
		        style={{ minHeight: document.documentElement.clientHeight }}
		        enableDragHandle
		        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
		        sidebar={sidebar}
		        open={this.state.open}
		        onOpenChange={this.onOpenChange}
		        position="bottom"
		      >   {}
		      </Drawer>
		</div>
	}


}

export default ZscDetail
