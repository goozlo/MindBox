import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export interface IFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    clickOnTodo: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
    filterId: FilterType
}

export type FilterType = '0' | '1' | '2'

export interface IOption {
    content: string
    id: FilterType
}
