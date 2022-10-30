import React, {FC} from 'react'
import style from './Filter.module.css'
import cn from "classnames";
import {IFilterProps} from "./Filter.props";

const Filter: FC<IFilterProps> = ({clickOnTodo, filterId, ...props}) => {

    return (
        <div>
            <span id='0' className={cn(style.option, {[style.active]: filterId === '0'})}
                  onClick={clickOnTodo}>All</span>
            <span id='1' className={cn(style.option, {[style.active]: filterId === '1'})}
                  onClick={clickOnTodo}>Active</span>
            <span id='2' className={cn(style.option, {[style.active]: filterId === '2'})}
                  onClick={clickOnTodo}>Completed</span>
        </div>
    )
}

export default Filter
