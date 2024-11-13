import React, { useState } from 'react';
import { useGetPokemonQuery } from './pokemonApi';

function PokemonViewer() {
  const [id, setId] = useState(''); 
  const { data, error, isLoading } = useGetPokemonQuery(id, {
    skip: !id, 
  });

  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      <button
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => window.location.href = '/todo'}
      >
        Ir a TODO's challenge
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <input
          type="number"
          placeholder="Ingresa un ID de Pokémon"
          value={id}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
        {(!id || isNaN(id) || id <= 0) && (
          <div>Error: ID de Pokémon no válido. Debe ser un número positivo.</div>
        )}
      </div>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      {data && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <h2>{data.name}</h2>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
      )}
    </>
  );
}

export default PokemonViewer;
