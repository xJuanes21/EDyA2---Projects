
import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';

export const useTODO = (initialTodos) => {
  const [todos, dispatch] = useReducer(TodoReducer, initialTodos);

  const handleAddTodo = (desc) => {
    if (desc.trim().length === 0) return;
    const newTodo = {
      id: new Date().getTime(),
      desc,
      done: false,
    };
    dispatch({ type: 'add', payload: newTodo });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'delete', payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: 'toggle', payload: id });
  };

  const countTodos = () => todos.length;

  const countPendingTodos = () => todos.filter(todo => !todo.done).length;

  return {
    todos,
    handleAddTodo,
    handleDelete,
    handleToggle,
    countTodos,
    countPendingTodos,
  };
};
