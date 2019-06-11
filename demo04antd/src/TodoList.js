import React, { Component } from 'react';
import store from './store'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List, Typography } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    render() {
        return (
            <div style={{marginTop:'10px', marginLeft:'10px'}}>
                <Input value={this.state.inputValue}
                       placeholder={'todo info'}
                       style={{width: 300, marginRight: '10px'}}
                       onChange={this.handleInputChange}
                />
                <Button type="primary">提交</Button>

                <List
                    style={{ marginTop:'10px', width:'300px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>{item}</List.Item>
                    )}
                />
            </div>
        )
    }

    handleInputChange(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        };
        store.dispatch(action);
    }
}

export default TodoList;