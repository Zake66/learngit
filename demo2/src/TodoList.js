import React , { Component, Fragment } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';
import Test from './Test'
import './style.css'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : 'hello',
            list: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDel = this.handleItemDel.bind(this);
    }

    render() {
        return(
            <Fragment>
                <div>
                    <label htmlFor={'insertArea'}>输入内容</label>
                    <input
                        id={'insertArea'}
                        className={'input'}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={ (input) => {this.input = input} }
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>

                <ul>
                    { this.getToDoItem() }
                </ul>
                <Test  content={this.state.inputValue}/>
            </Fragment>

        );
    }

    componentDidMount() {
        axios.get('/api/todulist')
            .then( () => {alert('success')} )
            .catch(() => {alert('erro')});
    }

    getToDoItem(){
        return this.state.list.map((item,index) => {
            return (
                <div  key={ item }>
                    <ToDoItem
                        content={item}
                        item={index}
                        list={this.state.list}
                        deletItem = {this.handleItemDel.bind(this)}
                    />

                    {/*{<li*/}
                    {/*    key={index}*/}
                    {/*    onClick={this.handleItemDel.bind(this,index)}*/}
                    {/*    // 通过bind第二个参数把index传递给handleItemDel*/}
                    {/*> {item } </li>}*/}
                </div>
            )
        })
    }

    handleInputChange(e){
        // this.setState({
        //     inputValue:e.target.value
        // })
        //this.state.inputValue = e.target.value;
        //--------------------------------------------------
        //1，e.target可以获得当前的DOM节点
        //const value = e.target.value;

        //2，使用ref！获得当前的DOM节点
        const value = this.input.value;
        this.setState(() =>({   //此处使用简写返回一个（{}）时，为异步，必须在方法外保存value的值
            inputValue:value
        }));
    }

    handleButtonClick(){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            //运用展开运算符，把数据内容展开再从新拼接

            inputValue:''
        })
    }

    handleItemDel(index){
        //先拷贝一份数组
        const newlist = [ ...this.state.list];
        newlist.splice(index,1);//删除第i个数据
        //更新数据
        this.setState({
            list: newlist
        })

    }
}

export default TodoList;