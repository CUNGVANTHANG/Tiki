import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBanners } from "~/services/banners";

interface BannerState {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BannerState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchBanners = createAsyncThunk("banners/fetchAll", async () => {
  const banners = await getAllBanners();
  return banners;
});

const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch banners";
      });
  },
});

export default bannersSlice.reducer;
