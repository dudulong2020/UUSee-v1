import React from 'react';
import ReactSwipe from 'react-swipe';

export default class Swiper extends React.Component {
	constructor() {
		super();
		this.state = {
			index: 0
		}
	}

	render() {
		let option = {
			callback: (index) => {
				this.setState({index: index})
			},
			auto: this.props.opt.auto,
			continuous: this.props.opt.continuous
		}
		return (
			<div className="swiper">
				{this.props.flag ?
					(<div>
						{this.props.opt.isReady ?
							(<ReactSwipe className="carousel" swipeOptions={option}>
								{this.props.opt.slider.map((item, index) => (
									<div key={index}>{item}</div>
								))}
							</ReactSwipe>) :
							(<div className="weui-loadmore">
								<i className="weui-loading"></i>
								<span className="weui-loadmore__tips">正在加载</span>
							</div>)
						}
						<div className="dots">
							{this.props.opt.dots.map((item, index) => (
								<div key={index} className={index === this.state.index ? 'active' : ''}>{item}</div>
							))}
						</div>
					</div>) : null}
			</div>

		)
	}
}