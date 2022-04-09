import React from "react";
import ReactDOM from 'react-dom'
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/to-do-list";


const App = () => {
    const TodoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Build React App', important: true , id: 2},
        {label: 'Learn React', important: false, id: 3},
    ]
    const isLogin = true
    const LoginBox = <span>Login Please</span>
    return (
        <div>
            { isLogin ?  null : LoginBox }
        <AppHeader />
        <SearchPanel />
        <TodoList todos={TodoData} />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))