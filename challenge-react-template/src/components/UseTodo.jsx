import { useSelector, useDispatch } from 'react-redux';

export const useTODO = () => {
  // Accede al estado de todos correctamente desde Redux
  const todos = useSelector(state => state.todos); // Asegúrate de acceder a 'state.todos'
  const dispatch = useDispatch();

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
    dispatch({ type: 'delete', payload: id }); // Despacha acción 'delete'
  };

  const handleToggle = (id) => {
    dispatch({ type: 'toggle', payload: id }); // Despacha acción 'toggle'
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
