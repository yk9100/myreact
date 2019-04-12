import React, { Component } from 'react';
import style from './index.module.scss'

class Landscape extends Component{

    constructor(props){
        super(props);

        this.state = {
            moduleData:this.props.data[1]
        }
    }

    render(){
        return (
            <div className={style.contain}>
                <div className={style.module_title}>
                    <h1>{this.state.moduleData.moduleName}</h1>
                    <h3>{this.state.moduleData.moduleDescription}</h3>
                </div>
                <div className={style.product_group}>
                    <ul>
                        {this.state.moduleData.moduleContent.products.map((item) =>
                            <li className={style.items} key={item.productId}>
                                <img src={item.productImg} alt=""/>
                                <p className={style.title}>{item.productTitle}</p>
                                <span>{item.sellPrice}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={style.more}><a href="javascript:;">查看全部</a></div>
            </div>
        )
    }

    componentDidMount(){
        //console.log(this.props.data)
    }
}

export default Landscape