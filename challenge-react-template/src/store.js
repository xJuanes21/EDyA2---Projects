import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './components/pokemonApi';
import {TodoReducer} from './components/TodoReducer';

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    todos: TodoReducer, // Reducer de los todos
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware), // Añadir el middleware de la API
});

export default store;