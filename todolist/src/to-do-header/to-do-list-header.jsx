import React from "react";
import TodoSearch from "../to-do-search/todo-serach";
import TodoStatusFilter from "../todo-status-filter/to-status-filter";
import classes from "./header.module.css"

const TodoHeader = () => {
    return (
        <div>
            <div className={classes.header}>
            <TodoSearch /><TodoStatusFilter />
            </div>
        </div>
    )
};
export default TodoHeader