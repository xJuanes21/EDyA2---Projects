import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.json();
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;