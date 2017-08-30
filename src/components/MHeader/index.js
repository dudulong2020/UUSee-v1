import React,{Component} from 'react';
import './index.less'
export default class MHeader extends Component{
  render(){
    return (
      <div className="weui-tab">
        <div className="weui-navbar">
          <div className="weui-navbar__item">
              {this.props.children}
              {this.props.title}
          </div>
        </div>
      </div>
    )
  }
}
