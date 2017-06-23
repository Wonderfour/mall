import React from 'react'
import './index.css'
import posterImg from '../../assets/img/poster.jpg'
import laba from '../../assets/img/laba1.png'

class Poster extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			ten:[
				{id:1,name:"产品名字1111111111",url:posterImg,price:"665",price2:"1122"},
				{id:2,name:"产品名字222222222",url:posterImg,price:"884",price2:"2512"}
			]
		}
	}
	render(){
		return(
			<div className="poster">
				<div>
					<img src={posterImg} className="poster-img" />
					<div className="poster-title">
						<img src={laba} className="laba"/>
						<span>这是专场的广告标题这是专场的广告标题这是专场的广告标题这是专场的广告标题</span>
					</div>
				</div>
				<div>
					<img src={posterImg} className="poster-img" />
					<div className="poster-title">
						<img src={laba} className="laba"/>
						<span>这是专场的广告标题这是专场的广告标题这是专场的广告标题这是专场的广告标题</span>
					</div>
				</div>
				<div>
					<img src={posterImg} className="poster-img" />
					<div className="poster-title">
						<img src={laba} className="laba"/>
						<span>这是专场的广告标题这是专场的广告标题这是专场的广告标题这是专场的广告标题</span>
					</div>
				</div>
				<div>
					<img src={posterImg} className="poster-img" />
					<div className="poster-title">
						<img src={laba} className="laba"/>
						<span>这是专场的广告标题这是专场的广告标题这是专场的广告标题这是专场的广告标题</span>
					</div>
				</div>
				<div>
					<img src={posterImg} className="poster-img" />
					<div className="poster-title">
						<img src={laba} className="laba"/>
						<span>这是专场的广告标题这是专场的广告标题这是专场的广告标题这是专场的广告标题</span>
					</div>
				</div>
			</div>
		)
	}
}
export default Poster