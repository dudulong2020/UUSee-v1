import React from 'react';
import ReactSwipe from 'react-swipe';
export default class Banner extends React.Component {
	constructor() {
		super();
		this.state = {
			index: 0,
		}
	}
	render() {
		let opt={
			continuous:true,
			auto:3000,
			stopPropagation:true,
			disableScroll:true,
			callback: (index) => {
				this.setState({index: index})
			}
		};
		let {slider}=this.props;
		return (
			<div className="banner">
						{slider.length ?
							(<ReactSwipe className="carousel banner-carousel" swipeOptions={opt}>
								{slider.map((item, index) => (
									<div key={index}>
										<a href={item.href}><img src={item.src} alt={item.alt}/></a>
										<p style={{paddingRight:slider.length*15+30+'px'}}>{item.alt}</p>
									</div>
								))}
							</ReactSwipe>) :
							(<div className="weui-loadmore">
								<i className="weui-loading"></i>
								<span className="weui-loadmore__tips">正在加载</span>
							</div>)
						}
						<div className="banner-dots" style={{width:slider.length*15+'px'}}>
							{slider.map((item, index) => (
								<span key={index} className={index === this.state.index ? 'active' : ''}></span>
							))}
						</div>
			</div>

		)
	}
}
import './index.less'