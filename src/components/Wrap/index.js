import React,{Component} from 'react';
import MHeader from "../MHeader/index";
import MFooter from "../MFooter/index";
import './index.less'
export default class Wrap extends Component{
  render(){
    return (
      <div  style={{height:'100%'}}>
        <MHeader title="UUSee"/>
        <div className="content">
          {this.props.children}
        </div>
        <MFooter/>
      </div>
    )
  }
}