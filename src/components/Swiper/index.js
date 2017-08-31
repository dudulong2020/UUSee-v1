import React from 'react';
import ReactSwipe from 'react-swipe';
import HomeSlider from "../HomeSlider/index";

export default class Swiper extends React.Component {
	constructor() {
		super();
		this.state = {
			index: 0,
			left:0,
			leftChange:0,
		}
	}

	render() {
		let {component:Component,slider}=this.props;
		let {left,leftChange}=this.state;
		let option = {
			callback: (index) => {
				let newleft=1/slider.length*100*index+'%';
				this.setState({index:index,left:newleft,leftChange:newleft})
			},
			swiping: (per) => {
				let newleftChange=1/slider.length*per*100;
				this.setState({leftChange:parseFloat(left)+newleftChange+'%'});
			},
			transitionEnd:()=>{
				option.callback(this.state.index)
			},
			continuous: false
		};

		return (
			<div className="swiper">
				{slider.length ?
					(<ReactSwipe className="carousel swiper-carousel" swipeOptions={option}>
						{slider.map((item, index) => (
							<div key={index}>
								<Component nav={item} flag={index === this.state.index}/>
							</div>
						))}
					</ReactSwipe>) :
					(<div className="weui-loadmore">
						<i className="weui-loading"></i>
						<span className="weui-loadmore__tips">正在加载</span>
					</div>)
				}
				<div className="swiper-dots">
					{slider.map((item, index) => (
						<span key={index} className={index === this.state.index ? 'active' : ''}>{item.type}</span>
					))}
					<div className="swiper-line" style={{width:(1/slider.length-0.1)*100+"%",left:leftChange}}></div>
				</div>
			</div>

		)
	}
}
import './index.less'
