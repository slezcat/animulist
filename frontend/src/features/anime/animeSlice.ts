import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAnime: any = createAsyncThunk(
  "anime/getAnime",
  async (params: any, thunkAPI) => {
    try {
      return await axios
        .get(`https://api.jikan.moe/v4/anime?q=${params ?? ""}`)
        .then((res) => {
          return res.data.data;
        });
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getAllAnime: any = createAsyncThunk(
  "anime/getAllAnime",
  async (params: any, thunkAPI) => {
    try {
      const response =
      await params.map((api:any) =>{
        return axios.get(api)
       }) 
        // await axios.all([
        //   axios.get(`https://api.jikan.moe/v4/seasons/now`),
        //   axios.get(`https://api.jikan.moe/v4/seasons/upcoming`), 
            
        // ]);
        
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const initialState: any = {
  animeList: null,
  status: "",
 
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // all anime
      .addCase(getAllAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllAnime.fulfilled, (state, action) => {
        state.status = "idle";

        state.animeList = action.payload;
      })
      .addCase(getAllAnime.rejected, (state) => {
        state.status = "failed";
      })
      // filtered anime
      .addCase(getAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnime.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.status = "not found";
          return;
        }
        state.status = "searching";
        state.animeList = action.payload;
      })
      .addCase(getAnime.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default animeSlice.reducer;
