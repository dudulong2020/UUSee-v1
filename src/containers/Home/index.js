import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/home';
import Swiper from "../../components/Swiper/index";
import {getHomeBanner} from "../../apis/home"


class Home extends Component{
	constructor(){
		super();
		this.state={
			bannerImage:[]
		}
	}
	componentDidMount(){
		getHomeBanner().then(bannerImage=>{
			this.setState({bannerImage})
		}).catch(err=>{
			console.log(err);
		})

	}
  render(){
  	let optBanner={
	    continuous:true,
	    auto:3000,
	    isReady:this.state.bannerImage.length,
	    slider:this.state.bannerImage.map((item,index)=><img src={item}/>),
	    dots:this.state.bannerImage.map(item=>'')
    };
  	let opt={
	    continuous:true,
	    auto:3000,
	    isReady:this.state.bannerImage.length,
	    slider:this.state.bannerImage.map((item,index)=><img src={item}/>),
	    dots:this.state.bannerImage.map(item=>'')
    };
	  return (
      <div>
	      <Swiper opt={opt} />
        {/*<Swiper opt={optBanner} flag={true}/>*/}
      </div>
    )
  }
}
export default connect(
    state=>({...state}),
    actions
)(Home)