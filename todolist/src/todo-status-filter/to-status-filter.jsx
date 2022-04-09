import React from "react";
import classes from "./to-do-status-filter.module.css"
const TodoStatusFilter = () => {
    return (
        <div className={classes.input__buttons}>
            <input type="button" value={'all'}/>
            <input type="button" value={'active'}/>
            <input type="button" value={'done'}/>
        </div>
    )
}

export default TodoStatusFilter;