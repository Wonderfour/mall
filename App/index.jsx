import React from 'react'
import { render } from 'react-dom'
import {browserHistory } from 'react-router'


import RouteMap from './router/routeMap'
//淘宝自适应js代码 
import './assets/js/selfAdaption'
render(
	<RouteMap history={browserHistory}/>,
	document.getElementById('root')
)
