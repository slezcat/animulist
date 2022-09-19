import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import listService from "./listService";

const initialState = {
  animeList: [{}],
  status: "",
  message: "",
};

// Add anime to list
export const addAnime = createAsyncThunk(
  "list/addAnime",
  async (animeData: any, thunkAPI: any) => {
    try {
      console.log(animeData)
      const token = thunkAPI.getState().auth.user.token;

      // Check for duplicate
      const currentList = await listService.getAnimeList(token);
      const duplicate = currentList.find(
        (d: any) => d.title === animeData.title
      );
      console.log("dup",duplicate)
      if (duplicate) {
        await listService.editAnime(duplicate._id,animeData,token)
        return;
      }
      return await listService.addAnime(animeData, token);
    } catch (error: any) {
      const message =
        (error.resonse && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get anime list
export const getAnimeList = createAsyncThunk(
  "list/getAnimeList",
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await listService.getAnimeList(token);
    } catch (error: any) {
      const message =
        (error.resonse && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete anime from list
export const deleteAnime = createAsyncThunk(
  "list/deleteAnimeList",
  async (id, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await listService.deleteAnime(id, token);
    } catch (error: any) {
      const message =
        (error.resonse && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Edit anime
export const editAnime = createAsyncThunk(
  "list/deleteAnimeList",
  async (id, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      // return await listService.editAnime(id, token);
    } catch (error: any) {
      const message =
        (error.resonse && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAnime.fulfilled, (state, action) => {
        state.status = "success";
        state.animeList = [...state.animeList, action.payload];
      })
      .addCase(addAnime.rejected, (state, action: any) => {
        state.status = "failed";
        state.message = action.payload;
      })
      // Get anime list
      .addCase(getAnimeList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnimeList.fulfilled, (state, action) => {
        state.status = "success";
        state.animeList = action.payload;
      })
      .addCase(getAnimeList.rejected, (state, action: any) => {
        state.status = "failed";
        state.message = action.payload;
      })
      // Delete anime from list
      .addCase(deleteAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteAnime.fulfilled, (state, action) => {
        state.status = "success";
        state.animeList = state.animeList.filter((anime: any)=>anime._id !== action.payload.id)
      })
      .addCase(deleteAnime.rejected, (state, action: any) => {
        state.status = "failed";
        state.message = action.payload;
      });
  },
});

export const { reset } = listSlice.actions;
export default listSlice.reducer;
