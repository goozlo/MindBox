import React, {FC} from 'react';
import {IInputProps} from "./Input.props";
import style from './Input.module.css'
import cn from "classnames";

const Input: FC<IInputProps> = ({className, getValue, ...props}) => {
    const [value, setValue] = React.useState<string>('')

    const clickToAdd = (value: string) => {
        getValue(value)
        setValue('')
    }

    return (
        <div className={style.form}>
            <input className={cn(style.input, className)} value={value}
                   onChange={(e) => setValue(e.target.value)}
                   type="text" {...props}/>
            <button className={style.btn} onClick={() => clickToAdd(value)}>Add todo</button>
        </div>
    )
};

export default Input;
