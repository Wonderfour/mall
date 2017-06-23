import React from 'react'
import {Icon} from 'antd'

import './index.css'
import '../../assets/css/antd.css'
class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<div className="footer">
				<div className="foot-icon on-icon">
					<Icon type="home" />
					<div>首页</div>
				</div>
				<div className="foot-icon">
					<Icon type="bars" />
					<div>分类</div>
				</div>
				<div className="foot-icon">
					<Icon type="shopping-cart" />
					<div>购物车</div>
				</div>
				<div className="foot-icon">
					<Icon type="user" />
					<div>我的</div>
				</div>
			</div>
		)
	}
}
export default Footer