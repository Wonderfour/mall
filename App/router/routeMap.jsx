import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

//引入需要的组件
import App from '../containers/App'
import Home from '../containers/Home'
import Search from '../containers/Search'
import Bar from '../containers/Bar'


class RouteMap extends React.Component{
	render(){
		return (
			<Router history = {this.props.history}>
				<Route path="/" component = {App}>
					<IndexRoute component ={Home}/>
					<Route path="search:value" component={Search} />
					<Route path="bar" component={Bar} />
				</Route>
			</Router>
		)
	}
}
export default RouteMap
