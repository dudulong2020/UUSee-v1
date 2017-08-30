import React,{Component} from 'react';
export default class LoadMore extends Component{
  render(){
    return (
      <div className="page__bd">
        <div className="weui-loadmore">
          <i className="weui-loading"></i>
          <span className="weui-loadmore__tips">正在加载</span>
        </div>
        <div className="weui-loadmore weui-loadmore_line" style={{display:'none'}}>
          <span className="weui-loadmore__tips">暂无数据</span>
        </div>
        <div className="weui-loadmore weui-loadmore_line weui-loadmore_dot">
          <span className="weui-loadmore__tips"></span>
        </div>
      </div>
    )
  }
}