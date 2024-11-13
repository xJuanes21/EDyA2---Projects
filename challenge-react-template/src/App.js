import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TodoApp } from './components/TodoApp';
import PokemonViewer from './components/PokemonViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navigate to="/todo" replace />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/pokemon" element={<PokemonViewer />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
