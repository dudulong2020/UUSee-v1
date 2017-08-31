import React from 'react';
import Banner from ".././Banner/index";

export default class HomeSlider extends React.Component {
	constructor() {
		super();

	}

	componentDidMount() {

	}

	render() {
		let {nav, flag} = this.props;
		return (
			<div>
				<div className="home-slider-banner">
					{
						nav.type === "推荐" ? (<Banner slider={nav.image}/>) : (
							<a href={nav.image.href} className="home-banner-image"><img src={nav.image.src} alt={nav.image.alt}
							                              />
								<span>{nav.image.alt}</span>
							</a>)
					}
				</div>
				{flag?(<div>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>aa</p>
					<p>bb</p>
				</div>) : null
				}
			</div>
		)
	}
}
import './index.less'