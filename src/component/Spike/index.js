import React, { Component } from 'react';
import style from './index.module.scss'

class Spike extends Component{

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
                    <img src={this.state.moduleData[1].moduleContent.bannerImgSrc} alt=""/>
                    {/* <h3>{this.state.moduleData.moduleDescription}</h3> */}
                </div>
                <div className={style.product_group}>
                    <ul>
                        {this.state.thisData.map((item) =>
                            <li className={style.items} key={item.moduleId}>
                                <img src={item.moduleContent.bannerImgSrc} alt=""/>
                            </li>
                        )}
                    </ul>
                </div>

                {/* <div className={style.more}><a href="javascript:;">查看全部</a></div> */}
            </div>
        )
    }

    componentDidMount(){

        var thisData = [...this.props.data]
            thisData.pop(thisData.splice(0,2))
            //console.log(thisData)

        this.setState({
            thisData:thisData
        })

    }
}

export default Spike