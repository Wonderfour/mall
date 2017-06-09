import React from 'react'
//import '../../assets/img/test.jpg'
import './index.css'
class TopAct extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show:props.show
		}
	}
	render(){
		return(
			<div className="actTop">
			{this.state.show ?
				<img src={require('../../../assets/img/download.jpg')}/>
			:
				' '
			}
			</div>
		)
	}
}
export default TopAct