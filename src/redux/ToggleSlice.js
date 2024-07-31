import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  allData: [],
  singleData: {},
};
//Asenkron işlemler için createAsyncThunk kullanılır.
export const getDataById = createAsyncThunk(
  "getDataById",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      return await response.json();
    } catch (error) {
      //thunkAPI.rejectWithValue fonksiyonu bir catch bloğu içerisnde kullanılmalıdır.
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getAllData = createAsyncThunk("getAllData", async (thunkAPI) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=7`);
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    modalToggle: (state) => {
      state.value = !state.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataById.fulfilled, (state, action) => {
        state.singleData = action.payload;
      })
      .addCase(getDataById.rejected, (state, action) => {
        console.error(action.payload);
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        console.error(action.payload);
      });
  },
});

export const { modalToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
