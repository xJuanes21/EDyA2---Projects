const initialState = [];  // Estado inicial: un arreglo vacío

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter(todo => todo.id !== action.payload);
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;  // Si no se encuentra un tipo de acción válido, devuelve el estado actual
  }
};
