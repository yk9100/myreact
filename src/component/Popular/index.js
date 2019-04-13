import React, { Component } from 'react';
import style from './index.module.scss'

class Popular extends Component{

    constructor(props){
        super(props);

        this.state = {
            moduleData:this.props.data,
            thisData:[]
        }
    }

    render(){
        return (
            <div className={style.contain}>
                <div className={style.module_title}>
                    <h3>人气单品</h3>
                </div>
                <div className={style.product_group}>

                    {   this.state.thisData.length?
                        this.state.thisData[0].moduleContent.products.map((item) =>

                        <div className={style.item} key={item.productId}>
                            <img src={item.productImg} alt=""/>
                            <section>
                                <p>{item.productName}</p>
                                <span className={style.sale}>¥ {item.sellPrice}</span>
                            </section>
                        </div>

                    ):null
                    }
                    
                </div>

                <div className={style.more}><a href="javascript:;">查看全部</a></div>
            </div>
        )
    }

    componentDidMount(){

        var transfer = [...this.props.data] //7
        transfer.splice(0,6)
        console.log(transfer)

        this.setState({
            thisData:transfer
        },()=>{
            //console.log(this.state.thisData)
            //console.log(this.state.thisData[0].moduleContent.products)
        })
    }
}

export default Popular