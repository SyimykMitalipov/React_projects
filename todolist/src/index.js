import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./to-do-list/to-do-list";
import TodoHeader from "./to-do-header/to-do-list-header";
import classes from "./index.module.css";




const App  = () => {
    const todos = [
        {id: 1,label: 'Drink Coffee',done: false,important: false},
        {id: 2,label: 'Lear React',done: false,important: false},
        {id: 3,label: 'Drink vodka',done: false,important: false},
        {id: 4,label: 'Drink cola',done: false,important: false},

    ]
    return (
        <div className={classes.wrapper}>
            <div className={classes.containter}>
                <TodoHeader />
                <TodoList todos={todos}/>
            </div>

        </div>
    )
}
ReactDOM.render(<App />,document.getElementById('root'));

