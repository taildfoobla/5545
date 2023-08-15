import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search:"",
  };

  export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
    changeSearch(state,action){
      const value = action.payload;

      state.search=value;
    }
    }
  });
  
  export const { reducer } = tokenSlice;

  export const tokenActions = tokenSlice.actions
  