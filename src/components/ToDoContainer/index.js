import React, { Component } from "react";
import Add from './components/add/add.js';
import TodoItem from './components/todoList/todo.js'
import Search from './components/search/search.js'
import { TodoTitle, NoToDo } from './todoStyle.js'

class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newId: 0, 
      search: ""
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  };

addTodo(todoText) {
  let todos = this.state.todos;
  todos.push({id: this.state.newId, text: todoText});
  let newindex = this.state.newId + 1;
  this.setState({
      todos: todos,
      newId: newindex,
  })
}

removeTodo(id) {
  this.setState(prevState => {
    const todos = prevState.todos.filter(todo => todo.id !== id);
    return { todos };
    } )
}

updateSearch(e) {
  this.setState({search: e.target.value});
}

render() {
  const filtered = this.state.todos.filter((el)=> (el.text.includes(this.state.search)))
  // Show list of todos or "no todos to complete" if empty
  let todoList = this.state.todos.length ? (
    <ul>
      {
        filtered.map((todo, index) => {
          return <TodoItem key={index} todo={todo} id={todo.id} removeTodo = {this.removeTodo}/> 
          }
        )
      }
    </ul>
  ) : ( <NoToDo> No todos to complete! </NoToDo> )

  return (
      <React.Fragment>
        <TodoTitle> Todo List </TodoTitle>
        <div>
          <Add todoText='' addTodo = {this.addTodo}/>
        </div>
        <div>
          {todoList}
        </div>
        <div>
          <Search search={this.state.search} fun={this.updateSearch}/> 
        </div>
      </React.Fragment>
  );
  }
};

export default ToDoContainer;
