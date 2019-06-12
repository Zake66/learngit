import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionType';
import axios from "axios";
import store from "./index";

// export const getInputChangeAction = (value) => {
//     return {
//         type :CHANGE_INPUT_VALUE,     //因为箭头函数返回的是对象，注意此处箭头函数写法
//         value
//     }
// };
export const getInputChangeAction = (value) => ({
    type :CHANGE_INPUT_VALUE,     //因为箭头函数返回的是对象，注意此处箭头函数写法
        value
});

export const getAddTodoItemAction = (value) => {
    return {
        type :ADD_TODO_ITEM,     //因为箭头函数返回的是对象，注意此处箭头函数写法

    }
};

export const getDeleteTodoItemAction = (index) => {
    return {
        type :DELETE_TODO_ITEM,     //因为箭头函数返回的是对象，注意此处箭头函数写法
        index
    }
};

export const initListAction = (data) => {
    return {
        type :INIT_LIST_ACTION,     //因为箭头函数返回的是对象，注意此处箭头函数写法
        data
    }
};

export const getTodoList = () => {
    return () => {
        axios.get('./list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        });
    }
};


