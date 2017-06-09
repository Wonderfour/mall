import React from 'react'
import { DatePicker,Icon } from 'antd' 
//import '../../assets/img/test.jpg'
import './index.css'
import '../../../assets/css/antd.css'
class Header extends React.Component{
	render(){
		return(
			<div id="header">
				<div className="left"><Icon type="bars" /></div>
				<div className="middle">
					<input type="text" className="search" placeholder="蝴蝶|尤尼克斯"/>
				</div>
				<div className="right"><Icon type="notification"/></div>			
			</div>
		)
	}
}
export default Header