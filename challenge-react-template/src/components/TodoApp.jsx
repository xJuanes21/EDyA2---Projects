import React from 'react';
import './TodoApp.css';
import { useTODO } from './UseTodo';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

const initialTodos = [
  {
    id: new Date().getTime(),
    desc: 'Hacer todos los react challenges',
    done: false,
  }
];

export const TodoApp = () => {
  const { todos, handleAddTodo, handleDelete, handleToggle, countTodos, countPendingTodos } = useTODO(initialTodos);

  return (
    <div>
      <h1>
        TodoApp: <small>Total: {countTodos()} - Pendientes: {countPendingTodos()}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};