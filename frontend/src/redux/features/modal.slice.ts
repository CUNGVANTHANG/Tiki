import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isVisibleLogin: boolean;
  isVisibleLocation: boolean;
}

const initialState: ModalState = {
  isVisibleLogin: false,
  isVisibleLocation: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModalLogin: (state) => {
      state.isVisibleLogin = true;
    },
    hideModalLogin: (state) => {
      state.isVisibleLogin = false;
    },
    showModalLocation: (state) => {
      state.isVisibleLocation = true;
    },
    hideModalLocation: (state) => {
      state.isVisibleLocation = false;
    },
  },
});

export const {
  showModalLogin,
  hideModalLogin,
  showModalLocation,
  hideModalLocation,
} = modalSlice.actions;
export default modalSlice.reducer;
