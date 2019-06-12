import React from 'react';
import {Button, Input, List} from "antd";
//使用无状态组件
const TodoListUI = (props) => {
    return (
        <div style={{marginTop:'10px', marginLeft:'10px'}}>
            <Input value={props.inputValue}
                   placeholder={'todo info'}
                   style={{width: 300, marginRight: '10px'}}
                   onChange={props.handleInputChange}
            />

            <Button
                type="primary"
                onClick={props.handleSubmit}
            >提交</Button>

            <List
                style={{ marginTop:'10px', width:'300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => {props.handleDelete(index)}}>{item}</List.Item>
                    //此处通过箭头函数为方法传值
                )}
            />
        </div>
    )
};

// class TodoListUI extends Component{
//     render() {
//         return (
//             <div style={{marginTop:'10px', marginLeft:'10px'}}>
//                 <Input value={this.props.inputValue}
//                        placeholder={'todo info'}
//                        style={{width: 300, marginRight: '10px'}}
//                        onChange={this.props.handleInputChange}
//                 />
//
//                 <Button
//                     type="primary"
//                     onClick={this.props.handleSubmit}
//                 >提交</Button>
//
//                 <List
//                     style={{ marginTop:'10px', width:'300px' }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item onClick={() => {this.props.handleDelete(index)}}>{item}</List.Item>
//                         //此处通过箭头函数为方法传值
//                     )}
//                 />
//             </div>
//         );
//     }
// }

export default TodoListUI;