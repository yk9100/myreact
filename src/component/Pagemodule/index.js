import React, { Component } from 'react';
import style from './index.module.scss'

class Pagemodule extends Component{
    constructor(props){
        super(props)

        this.state = {
            moduleData:this.props.data[2]
        }
    }

    render(){
        return (
            <div className={style.pageModule}>
                <div className={style.module_title}>
                    <h1>{this.state.moduleData.moduleName}</h1>
                    <h3>{this.state.moduleData.moduleDescription}</h3>
                </div>
                
                <div className={style.flexBox}>

                    {this.state.moduleData.moduleContent.products.map((item, index) =>

                        <div className={style.item} key={item.productId}>
                            <img src={item.productImg} alt={item.productName}/>
                            <section>
                                <p>{item.productTitle}</p>
                                <span>¥{item.sellPrice}</span>
                                <s className={style.original_price}>¥{item.originalPrice}</s>
                            </section>
                        </div>

                    )}
                </div>

                <div className={style.more}><a href="javascript:;">查看全部</a></div>
            </div>
        )
    }

    componentDidMount(){
        console.log(this.state.moduleData)
    }
}

export default Pagemodule