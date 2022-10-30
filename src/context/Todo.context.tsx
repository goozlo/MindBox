import React, {FC} from 'react'
import {DispatchType, ActionType, IState} from "./Todo.context.props";

export const TodoStateContext = React.createContext<IState | null>(null)
export const TodoDispatchContext = React.createContext<DispatchType | null>(null)

function TodoReducer(state: IState, {type, payload}: ActionType): IState {
    switch (type) {
        case 'toggle': {
            if (typeof payload !== 'number') {
                throw new Error('Value wasn\'t provided')
            }

            const newState = state.todos.map(todo => {
                if (todo.id === payload) {
                    todo.active = !todo.active
                }
                return todo
            })

            localStorage.setItem('todos', JSON.stringify({todos: newState}))
            return {todos: newState}
        }
        case 'add': {
            if (typeof payload === 'number') {
                throw new Error('Value wasn\'t provided')
            }
            state.todos.push(payload)

            localStorage.setItem('todos', JSON.stringify({...state}))
            return {...state}
        }
        case 'remove': {
            if (typeof payload !== 'number') {
                throw new Error('Value wasn\'t provided')
            }

            const newState = state.todos.filter(todo => todo.id !== payload)

            localStorage.setItem('todos', JSON.stringify({todos: newState}))
            return {todos: newState}
        }
        case 'clear': {
            const newState = state.todos.filter(todo => !todo.active)

            localStorage.setItem('todos', JSON.stringify({todos: newState}))
            return {todos: newState}
        }
        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

function getInitialState(): IState {
    const json = localStorage.getItem('todos')
    if (json) {
        return JSON.parse(json)
    }
    return {todos: []}
}

const todoProvider = <T extends Record<string, unknown>>(Component: FC<T>) => {
    return function WrappedIntoProvider(props: T): JSX.Element {
        const [todoList, dispatch] = React.useReducer(TodoReducer, getInitialState())
        return (
            <TodoStateContext.Provider value={todoList}>
                <TodoDispatchContext.Provider value={dispatch}>
                    <Component {...props}/>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        )
    }
}

function useTodoState() {
    const context = React.useContext(TodoStateContext)
    if (context === null) {
        throw new Error('useTodoState must be used within a todoProvider')
    }
    return context
}

function useTodoDispatch() {
    const context = React.useContext(TodoDispatchContext)
    if (context === null) {
        throw new Error('useTodoDispatch must be used within a todoProvider')
    }
    return context
}

export {todoProvider, useTodoState, useTodoDispatch}
