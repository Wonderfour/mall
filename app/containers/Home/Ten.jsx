import React from 'react'
import './index.css'
import proImg from '../../assets/img/pro.jpg'

class Ten extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			ten:[
				{id:1,name:"产品名字1111111111",url:proImg,price:"665",price2:"1122"},
				{id:2,name:"产品名字222222222",url:proImg,price:"884",price2:"2512"}
			]
		}
	}
	render(){
		return(
			<div className="ten">
				<div className="ten-body">
					<img src={require('../../assets/img/pro.jpg')} />
					<div className="price">￥123355</div>
					<div className="title">产品名字产品名字产品名字产品名字产品名字产品名字产品名字</div>
				</div>
				<div className="ten-body">
					<img src={require('../../assets/img/pro.jpg')} />
					<div className="price">￥123355</div>
					<div className="title">产品名字</div>
				</div>
			</div>
		)
	}
}
export default Ten