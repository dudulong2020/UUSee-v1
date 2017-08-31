import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/home';
import Swiper from "../../components/Swiper/index";
import HomeSlider from "../../components/HomeSlider/index";

class Home extends Component{
	componentDidMount(){
		if(!this.props.home.types.length){
			this.props.getTypesA();
		}
	}
  render(){
		let {home}=this.props;
	  return (
      <div>
	      <Swiper slider={home.types} component={HomeSlider}/>
      </div>
    )
  }
}
export default connect(
	state=>({...state}),
	actions
)(Home)