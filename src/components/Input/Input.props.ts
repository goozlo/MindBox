import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface IInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    getValue: (content: string) => void
}
