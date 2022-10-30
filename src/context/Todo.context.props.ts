import {ITodo} from "../components/TodoList/Todo/Todo.props";

export interface IState {
    todos: ITodo[]
}

type ToggleType = {
    type: 'toggle'
    payload: number
}

type AddType = {
    type: 'add'
    payload: ITodo
}

type RemoveType = {
    type: 'remove'
    payload: number
}

type ClearType = {
    type: 'clear'
    payload?: undefined
}


export type ActionType = ToggleType | AddType | RemoveType | ClearType

export type DispatchType = (action: ActionType) => void

