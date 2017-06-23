import React from 'react'
import {Link,browserHistory} from 'react-router'

import { DatePicker,Icon } from 'antd' 
//import '../../assets/img/test.jpg'
import './index.css'
import '../../../assets/css/antd.css'
class Header extends React.Component{
	constructor(props){
		super(props);
		this.toSearch = this.toSearch.bind(this);
		this.state={
			search:''
		}
	}
	toSearch(e){
		browserHistory.push('/search:'+e.target.value);
	}
	render(){
		return(
			<div id="header">
				<div className="left"><Link to="/bar"><Icon type="bars" /></Link></div>
				<div className="middle">
					<input type="text" className="search" placeholder="蝴蝶|尤尼克斯" onBlur={this.toSearch} />
				</div>
				<div className="right"><Icon type="notification"/></div>			
			</div>
		)
	}


}
export default Header