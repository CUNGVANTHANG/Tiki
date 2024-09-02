import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  isVisible: boolean;
}

const initialState: SearchState = {
  isVisible: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    showSearch: (state) => {
      state.isVisible = true;
    },
    hideSearch: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showSearch, hideSearch } = searchSlice.actions;
export default searchSlice.reducer;
