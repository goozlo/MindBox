import React, {FC} from 'react';
import Todo from "./Todo/Todo";
import style from "./TodoList.module.css";
import {useTodoState} from '../../context/Todo.context'
import {ITodoListProps} from "./TodoList.props";
import {ITodo} from "./Todo/Todo.props";

const TodoList: FC<ITodoListProps> = ({filterId}) => {
    const {todos} = useTodoState()

    const filter = (array: ITodo[], type = filterId) => {
        if (type === '1') {
            return array.filter(card => card.active)
        }
        if (type === '2') {
            return array.filter(card => !card.active)
        }
        return array
    }

    return (
        <div className={style.todoList}>
            <div className={style.list}>
                {todos && filter(todos).map(todo => <Todo className={style.todo} key={todo.id} todo={todo}/>)}
            </div>
        </div>
    );
};

export default TodoList;
