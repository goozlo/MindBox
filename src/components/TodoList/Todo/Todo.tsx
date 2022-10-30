import React, {FC} from 'react'
import style from './Todo.module.css'
import cn from 'classnames'
import {ITodoProps} from "./Todo.props"
import CrossIcon from './cross.png'
import CheckICon from './check.png'
import {useTodoDispatch} from "../../../context/Todo.context";

const Todo: FC<ITodoProps> = ({todo, className, ...props}) => {
    const {content, active, id} = todo

    const dispatch = useTodoDispatch()

    const removeTodo = (id: number) => {
        dispatch({type: 'remove', payload: id})
    }

    const toggleTodo = (id: number) => {
        dispatch({type: 'toggle', payload: id})
    }

    return (
        <div className={cn(style.todo, className)} {...props} onClick={() => toggleTodo(id)}>
            <img className={cn(style.check, {[style.hidden]: active})} src={CheckICon} alt="check"/>
            <span className={cn(style.content, {[style.active]: active})}>{content}</span>
            <img className={style.cross} src={CrossIcon} alt="cross" onClick={() => removeTodo(id)}/>
        </div>
    )
}

export default Todo
