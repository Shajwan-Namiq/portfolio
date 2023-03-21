import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   data: 'en',
 };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    kurdish: (state, action) => {
      state.data = action.payload;
    },
    English: (state) => {
      state.data ='en';
    },
  },
});

export const { kurdish, English } = languageSlice.actions;

export default  languageSlice.reducer;

 