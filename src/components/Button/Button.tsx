import React, {FC} from 'react'
import {IButtonProps} from "./Button.props"
import style from './Button.module.css'
import cn from "classnames"

const Button: FC<IButtonProps> = ({children, className, ...props}) => {
    return <button className={cn(style.button, className)} {...props}>{children}</button>
}

export default Button
