import React,{Component} from 'react';
export default class AirList extends Component{
    render(){
        return (
            <div className="box">
                {
                    this.props.data.map((item,index)=>(
                        <div key={index} className="container">
                            <img src={item.image} alt=""/>
                            <div className="text">
                                <div className="over">
                                    <span className="user">{item.user.userName}</span>
                                    <span className="people">
                            <i className="iconfont icon-people"></i>
                                        {item.people}
                        </span>
                                </div>
                                <p>
                                    <i className="iconfont icon-vedio"></i>
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
import './css.less';