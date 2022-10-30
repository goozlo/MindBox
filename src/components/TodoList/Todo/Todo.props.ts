import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ITodoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    todo: ITodo
}

export interface ITodo {
    content: ReactNode
    active: boolean
    id: number
}
