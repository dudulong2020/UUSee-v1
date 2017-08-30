import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less'
export default class MFooter extends Component {
  render() {
    let style1 = {position: 'absolute', top: '-2px', right: '-13px'};
    let style2 = {position: 'absolute', top: '0', right: '-6px'};
    return (
      <div className="weui-tabbar">
        <NavLink to='/' exact className="weui-tabbar__item" activeClassName="weui-bar__item_on">
                    <span className="com1">
                      <i className="weui-tabbar__icon  iconfont icon-video"></i>
                        <span className="weui-badge" style={style1}>8</span>
                    </span>
          <p className="weui-tabbar__label">主页</p>
        </NavLink>
        <NavLink to='/rank' className="weui-tabbar__item"  activeClassName="weui-bar__item_on">
          <i className="weui-tabbar__icon  iconfont icon-training"></i>
          <p className="weui-tabbar__label">排行榜</p>
        </NavLink>
        <NavLink to='/join' className="weui-tabbar__item"  activeClassName="weui-bar__item_on">
                    <span className='com1'>
                      <i  className="weui-tabbar__icon iconfont icon-jewelry"></i>
                        <span className="weui-badge weui-badge_dot" style={style2}></span>
                    </span>
          <p className="weui-tabbar__label">加入</p>
        </NavLink>
        <NavLink to='/profile' className="weui-tabbar__item"  activeClassName="weui-bar__item_on">
          <i className="weui-tabbar__icon  iconfont icon-account"></i>
          <p className="weui-tabbar__label">我</p>
        </NavLink>
      </div>

    )
  }
}