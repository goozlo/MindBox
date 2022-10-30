import React from 'react';
import {useTodoState} from '../../context/Todo.context'

const Left = () => {
    const {todos} = useTodoState()

    const left = todos.reduce((sum, card) => {
        if (!card.active) {
            ++sum
        }
        return sum
    }, 0)

    return <div>{`Left: ${left}`}</div>
}

export default Left
