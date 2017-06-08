import React from 'react'
import { DatePicker,Icon } from 'antd' 
//import '../../assets/img/test.jpg'
import './index.less'
import '../../assets/css/antd.css';
class Home extends React.Component{
	render(){
		return(
			<div id="header">
				<div className="left"><Icon type="bars" /></div>
				<div className="middle"><input type="text" className="search"/></div>
				<div className="right"><Icon type="notification"/></div>			
			</div>
		)
	}
}
export default Home