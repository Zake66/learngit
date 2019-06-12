import React, { Component } from 'react';
import store from './store'
import 'antd/dist/antd.css';
import axios from 'axios'

import  TodoListUI from './TodoListUI'
import { getAddTodoItemAction, getDeleteTodoItemAction, getInputChangeAction, initListAction , getTodoList} from './store/actionCreators'


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        //console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        store.subscribe(this.handleStoreChange);//订阅store的改变，store一变化handleStoreChange就会被执行
    }

    render() {
        return (
            <TodoListUI
                inputValue = {this.state.inputValue}
                handleInputChange = {this.handleInputChange}
                handleSubmit = {this.handleSubmit}
                list = {this.state.list}
                handleDelete = {this.handleDelete}
            />
        )
    }

    componentDidMount() {
        // axios.get('./list.json').then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action);
        // });
        const action = getTodoList();
        store.dispatch(action);
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);

    }

    handleSubmit(){
        const action = getAddTodoItemAction();
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
        //console.log('store have changed!!!');
    }

    handleDelete(index){
        const action = getDeleteTodoItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;