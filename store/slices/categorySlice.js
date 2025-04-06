import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryData(state, action) {
      state.categories = action.payload.categories
    },
  },
})

export const { setCategoryData } = categorySlice.actions
export default categorySlice.reducer
