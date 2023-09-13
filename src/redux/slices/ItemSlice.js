import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://api.punkapi.com/v2/beers")
  const data = await response.json()
  return data
})

const initialState = {
  items: [],
  status: "idle",
}

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "success"
        state.items = action.payload
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed"
        console.log("Error: ", action.payload)
      })
  },
})

export default itemSlice.reducer
