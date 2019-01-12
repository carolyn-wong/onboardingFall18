import React, { Component } from "react";
import { AddButton, AddInput } from './addStyles.js';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        
    }
    handleChange(e) {
        this.setState({item: e.target.value});
    } 

    addTodo(todo) {
        if(todo.length > 0) {
            this.props.addTodo(todo)
            console.log(this.state)
            this.setState({item: ""})
        }
    }

    render() {
        return(
            <div>
                <AddInput type='text' value={this.state.item} onChange={this.handleChange} />
                <AddButton onClick={() => this.addTodo(this.state.item)}>Add Todo</AddButton>
            </div>
        )
    }

}

export default Add;