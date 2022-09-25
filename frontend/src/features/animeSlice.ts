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
    } catch (error: any) {
      const message: string =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllAnime = createAsyncThunk("anime/getAllAnime",async (APIs: any, thunkAPI)=>{
  try {
    console.log(APIs)
    return await axios.all(
      APIs.map(async (API: any, i: number) => {
        const data = await axios.get(API.key);
        const result = { [API.tag]: data.data.data };
        console.log(result)
        return result;
      })
    );
  } catch (error: any) {
    const message: string =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
    return thunkAPI.rejectWithValue(message);
  }
})

const initialState: any = {
  allAnime :[{}],
  anime: null,
  status: "",
  message:""
};

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    reset: (state) => {
      state.anime = null
      state.status = ""
      state.message = ""
    },

  },
  extraReducers: (builder) => {
    builder
      // filtered anime
      .addCase(getAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnime.fulfilled, (state, action) => {
        
        state.status = "idle";
        state.anime = action.payload;
      })
      .addCase(getAnime.rejected, (state,action) => {
        state.message = action.payload
        state.status = "failed";
      })
      //all anime
      .addCase(getAllAnime.pending,(state) => {
        state.status = "loading";
      })
      .addCase(getAllAnime.fulfilled,(state,action) => {
        console.log("len",action.payload.length)
        if (action.payload.length === 1) {
          
          state.status = "not found";
          return;
        }
        state.allAnime = action.payload;
        state.status = "idle";
      })
      .addCase(getAllAnime.rejected,(state,action) => {
        state.message = action.payload
        state.status = "failed";
      })
  },
});

export const {reset} = animeSlice.actions
export default animeSlice.reducer;
