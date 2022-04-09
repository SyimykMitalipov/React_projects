import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';
import MyContent from "./map";
 
const Content = () => {
    return (<div>
            <MyContent />
        </div>
    );
}
 ReactDOM.render(<Content/>,document.getElementById('root'))