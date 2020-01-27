import React, { Component } from 'react'
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };
        
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSeach = this.handleSeach.bind(this);
        this.handleRemove = this.handleRemove.bind(this);        
        this.handleChanged = this.handleChanged.bind(this);        
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

        this.refresh();
    }

    refresh(description = '') {

        const search = description ? `&description__regex=/${description}/` : '';

        axios.get(`${URL}?sort=-createdAt${search}`).then(res => {
            this.setState({ ...this.state, description, list: res.data });
        });
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, { description }).then(res => this.refresh());
    }

    handleChanged(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(res => this.refresh());
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(res => this.refresh());
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(res => this.refresh());
    }

    handleSeach() {
        this.refresh(this.state.description);
    }

    render() {
        return (
            <div>
                <PageHeader 
                    name='Tarefas' 
                    small='Cadastro' 
                />

                <TodoForm                     
                    description={this.state.description} 
                    handleAdd={this.handleAdd}
                    handleChanged={this.handleChanged}
                    handleSeach={this.handleSeach}
                />
                
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}
