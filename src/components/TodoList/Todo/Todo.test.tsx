import {fireEvent, render, screen,} from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from './Todo'
import React from "react";
import {TodoDispatchContext, TodoStateContext} from "../../../context/Todo.context";

test('Test Toggle Logic', () => {
    const {container} = render(
        <TodoStateContext.Provider value={{todos: []}}>
            <TodoDispatchContext.Provider value={() => {}}>
                <Todo todo={{content: 'hello world', active: true, id: 0}}/>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )

    expect(container).toBeInTheDocument()

    fireEvent.click(container)

    const check = container.querySelector('img')

    expect(check).toBeInTheDocument()
    expect(check!.classList.contains('hidden')).toBeTruthy()

    screen.debug()
})
