import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {FilterType} from "../Filter/Filter.props";

export interface ITodoListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    filterId: FilterType
}

