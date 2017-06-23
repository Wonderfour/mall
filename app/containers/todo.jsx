import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import { addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions'
import AddTodo from '../components/addTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component{
	render(){
		const {dispatch,visibleTodos,visibilityFilter }  = this.props
		return(
			<div>
				<addTodo
					onAddClick = {text=>dispatch(addTodo(text))}
			</div>
		)
	}
}