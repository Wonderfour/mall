import React from 'react'
import { render } from 'react-dom'
import {browserHistory } from 'react-router'

import RouteMap from './router/routeMap'
render(
	<RouteMap history={browserHistory}/>,
	document.getElementById('root')
)
