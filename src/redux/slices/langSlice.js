import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: { lang: "English" },
  reducers: {
    switchLang: (state, action) => {
      state.lang = action.payload;
    },
    getLang: (state) => state,
  },
});

export const { switchLang, getLang } = langSlice.actions;
export default langSlice.reducer;
