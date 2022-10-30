import React, {ReactNode} from 'react';
import {TodoList, Left, Button, Htag, Filter, Input} from "./components";
import {todoProvider, useTodoDispatch} from './context/Todo.context'
import style from './App.module.css'
import {FilterType} from "./components/Filter/Filter.props";
import {ITodo} from "./components/TodoList/Todo/Todo.props";


function App() {
    const dispatch = useTodoDispatch()

    const [filterId, setFilterId] = React.useState<FilterType>('0')

    const getFilterId = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => setFilterId(e.currentTarget.id as FilterType)

    const addTodo = (content: string) => {
        if (content.trim().length === 0) {
            throw new Error('Invalid input value')
        }
        const todo = {
            content,
            active: false,
            id: ~~(Math.random() * 1000)
        }
        dispatch({type: 'add', payload: todo})
    }

    return (
        <div className={style.app}>
            <div>
                <Htag tag='h1' children='Todo list for Mindbox'/>
                <Button children='Clear all completed' onClick={() => dispatch({type: 'clear'})}/>
            </div>
            <div>
                <Input getValue={addTodo}/>
                <TodoList filterId={filterId}/>
            </div>
            <div>
                <Left/>
                <Filter clickOnTodo={getFilterId} filterId={filterId}/>
            </div>
        </div>
    )
}

export default todoProvider(App);
