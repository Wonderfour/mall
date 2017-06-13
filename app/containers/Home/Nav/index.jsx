import React from 'react'
//import '../../assets/img/test.jpg'
import './index.css'
import nav3 from '../../../assets/img/nav8_03.png'
import nav5 from '../../../assets/img/nav8_05.png'
import nav7 from '../../../assets/img/nav8_07.png'
import nav9 from '../../../assets/img/nav8_09.png'
import nav15 from '../../../assets/img/nav8_15.png'
import nav16 from '../../../assets/img/nav8_16.png'
import nav17 from '../../../assets/img/nav8_17.png'
import nav18 from '../../../assets/img/nav8_18.png'

class Nav extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:[
				{id:1,img:nav3,name:'多运动APP'},
				{id:2,img:nav5,name:'附近门店'},
				{id:3,img:nav7,name:'购物车'},
				{id:4,img:nav9,name:'团购'},
				{id:5,img:nav15,name:'咨询'},
				{id:6,img:nav16,name:'品牌'},
				{id:7,img:nav17,name:'口碑'},
				{id:8,img:nav18,name:'鲜货'}
			],
		}
	}
	render(){
		return(			
			<div id="nav">
				{this.state.data.map(function(item,index,arr){
					return 	<div className="nav" key={index}><img src={item.img} /><div>{item.name}</div></div>
				})}
			</div>
		)
	}
}
export default Nav