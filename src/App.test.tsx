import {render, screen,} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "./App";

describe('Test Render Components', () => {
    test('Render Clear', () => {
        render(<App/>)

        const clearBtn = screen.getByText(/clear all completed/i)
        expect(clearBtn).toBeInTheDocument()

        screen.debug()
    })
    test('Render Filter', () => {
        render(<App/>)

        const allBtn = screen.getByText('All')
        const activeBtn = screen.getByText(/active/i)
        const completedBtn = screen.getByText('Completed')

        expect(allBtn).toBeInTheDocument()
        expect(activeBtn).toBeInTheDocument()
        expect(completedBtn).toBeInTheDocument()

        screen.debug()
    })
})

