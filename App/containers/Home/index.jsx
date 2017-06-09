import React from 'react'
import { DatePicker,Icon } from 'antd' 
import TopAct from './TopAct'
import Header from './Header'
import Swiper from './Swiper'


//import '../../assets/img/test.jpg'
import '../../assets/css/antd.css';
class Home extends React.Component{
	render(){
		return(
			<div id="home">
				<TopAct  show={true}/>
				<Header />
				<Swiper />
			</div>
		)
	}
}
export default Home