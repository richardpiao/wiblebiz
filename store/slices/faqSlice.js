import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  pageInfo: null,
}

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    setFaqResults(state, action) {
      state.items = action.payload.items
      state.pageInfo = action.payload.pageInfo
    },
    appendFaqResults(state, action) {
      state.items = [...state.items, ...action.payload.items]
      state.pageInfo = action.payload.pageInfo
    },
  },
})

export const { setFaqResults, appendFaqResults } = faqSlice.actions
export default faqSlice.reducer
