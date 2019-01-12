import React, { Component } from 'react';
import DeleteButton from './listStyle.js';

class TodoItem extends Component {

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div>
                {this.props.todo.text}
                <DeleteButton onClick={(e)=>this.removeTodo(this.props.id)}>Delete</DeleteButton> 
            </div>
        )
    }
}
export default TodoItem;

