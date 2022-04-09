import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ onDelete, onToggleImportant, todos,onToggleMyDone}) => {
  const elements = todos.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem onToggleImportant={onToggleImportant} onDelete={onDelete} {...item } onToggleMyDone={onToggleMyDone} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
