import React from 'react'
import Slider from 'react-slick' 
//import '../../assets/img/test.jpg'
import './index.css'
import '../../../assets/css/slick.css'
import '../../../assets/css/slick-theme.css'
class Swiper extends React.Component{
	render(){
		var settings = {
	      dots: true,
	      infinite: true,
	      autoplay:true,
	      speed: 1000,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    };
		return(
				 <Slider {...settings}>
				    <div className="slider-body"><img src={require('../../../assets/img/5.jpg')} /></div>
				    <div className="slider-body"><img src={require('../../../assets/img/6.jpg')} /></div>
				    <div className="slider-body"><img src={require('../../../assets/img/7.jpg')} /></div>
				    <div className="slider-body"><img src={require('../../../assets/img/8.jpg')} /></div>
				</Slider>
		)
	}
}
export default Swiper