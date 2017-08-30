import React,{Component} from 'react';
export default class Dialog extends Component{
  handleClose=(e)=>{
    e.preventDefault();
    this.refs.dialog2.style={opacity:0}
  }

  render(){
    // debugger
    return (
      <div className="js_dialog" ref="dialog2" style={this.props.isShow?{opacity:1}:{opacity:0}}>
        <div className="weui-mask"></div>
        <div className="weui-dialog">
          <div className="weui-dialog__bd">请先上传图片再开启直播</div>
          <div className="weui-dialog__ft">
            <a onClick={(e)=>this.handleClose(e)} className="weui-dialog__btn weui-dialog__btn_primary">知道了</a>
          </div>
        </div>
      </div>
    )
  }
}