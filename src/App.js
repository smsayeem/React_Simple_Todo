import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleTodo from './component/SingleTodo';

class App extends Component {
  constructor(){
    super();
    this.state={
      todos:['Shopping','Dinner','Gym'], // array that hold all todo items
      currentTodo:""  //empty
    };
  }
  //any changes in the imput text box, keep the itmes into currentTodo
  onInputChange = (e) =>{
    this.setState({
      currentTodo: e.target.value
    });
  }
  //Add items into the 'todos' array
  addTodo = () =>{
    let todosCopy = this.state.todos.slice(); //copy todos array into todosCopy
    todosCopy.push(this.state.currentTodo); //add new items to array from currentTodo

    this.setState({
      todos:todosCopy,  //after adding new items into todosCopy, put it back to todos array
      currentTodo:""    //make the currentTodo empty to take next input
    });
  }
  deleteTodo = (i) => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i,1);
    this.setState({todos:todosCopy});
  }

//--------------------render output-------------------------
  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return(
              <SingleTodo todo={e} Delete={()=>{return(this.deleteTodo(i))}} />
            );
    });
    return (
      <div>
        <input
          placeholder="Enter todo"
          value={this.state.currentTodo}
          onChange={this.onInputChange}
        />
        <button onClick={this.addTodo}>Add</button> {/* when clicked, goes to addTodo() */}
        <br />
        {this.state.todos.length===0 ? "Todo list empty" : <ul>{bulletedTodos}</ul>}
                            {/* if there is any items in the 'todos' array, it shows as bullet list */}
      </div>
    );
  }
}

export default App;
