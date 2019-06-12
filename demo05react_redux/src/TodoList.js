import React, { Component } from 'react'
import { connect } from 'react-redux'

const TodoList = (props) => {
    const { inputValue, handleInputChange, handleClick } = props;

    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button
                    onClick={handleClick}
                >提交</button>
            </div>
            <ul>
                {
                    props.list.map((item, index) => {
                        return <li key={index}>{ item }</li>
                    })
                }
            </ul>
        </div>
    )

};


//数据映射规则
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

//数据修改分发规则
const mapDispatchToProps = (dispatch) => {
  return {
      handleInputChange(e){
          const action = {
              type: 'change_input_value',
              value: e.target.value
          };
          dispatch(action);
      },
      handleClick(){
         const action = {
             type: 'add_list_item'
         };
         dispatch(action);
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); //使用connect方法让TodoList和store进行连接