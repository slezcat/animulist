import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const getAnime: any = createAsyncThunk(
  "anime/getAnime",
  async (params: any,thunkAPI) => {
    
    return await axios
      .get(`https://api.jikan.moe/v4/anime?q=${params??""}` )
      .then((res) => {
        return res.data.data;
      });
  }
);

const initialState: any = {
  name: "anime",
  animeList: [{}],
  loading: false,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnime.fulfilled, (state, action) => {
        state.status = "idle";
        state.animeList = action.payload;
      })
      .addCase(getAnime.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default animeSlice.reducer;
