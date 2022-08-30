import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAnime: any = createAsyncThunk(
  "anime/getAnime",
  async (APIs: any, thunkAPI) => {
    try {
      if (typeof APIs === "string") {
        const data = await axios.get(APIs);
        return data.data.data;
      } else {
        return await axios.all(
          APIs.map(async (API: any, i: number) => {
            const data = await axios.get(API.key);
            const result = { [API.tag]: data.data.data };
            return result;
          })
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const initialState: any = {
  anime: null,
  status: "",
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    reset:{
      
    }

  },
  extraReducers: (builder) => {
    builder
      // filtered anime
      .addCase(getAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnime.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.status = "not found";
          return;
        }
        state.anime = action.payload;
        state.status = "idle";
      })
      .addCase(getAnime.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default animeSlice.reducer;
