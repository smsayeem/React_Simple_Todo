import React, { Component } from 'react';
///*
class SingleTodo extends Component{
	constructor(){
		super();
	}//End constructor()

	render(){
		return(
					<li>
						{this.props.todo}
						<button onClick={this.props.Delete}>X</button>
					</li>
			);
	}//end render()

}//End--class{}
//*/
/*
//can be done in the functional component way
//that only accept 'props' but no internal state

const SingleTodo = props =>{
	return(
		<li>
			{props.todo}
			<button onClick={props.Delete}>X</button>
		</li>
	);
}
*/
export default SingleTodo;
