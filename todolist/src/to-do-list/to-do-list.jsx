import React from "react";
import TodolistItem from "../to-do-list-item/to-do-list-item";
import classes from "./to-do-list.module.css";

const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        return <div className={classes.container__item}>
            <li key={item.id}><TodolistItem label={item.label}/></li>

        </div>
    })
    return (
        <div className={classes.ol__list}>
            <ol>
                {elements}
            </ol>
        </div>
    )
}
export default TodoList;