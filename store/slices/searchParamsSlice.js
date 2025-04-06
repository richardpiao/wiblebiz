import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  limit: 10,
  offset: 0,
  tab: 'CONSULT',
  faqCategoryID: null,
  question: '',
}

const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setSearchParams(state, action) {
      return { ...state, ...action.payload }
    },
    updateSearchParam(state, action) {
      const { key, value } = action.payload
      state[key] = value
    },
    resetSearchParams() {
      return initialState
    },
    clearAllSearchParams(state) {
      state.question = ''
      state.offset = 0
      state.faqCategoryID = null
      state.limit = 10
    },
  },
})

export const {
  setSearchParams,
  updateSearchParam,
  resetSearchParams,
  clearAllSearchParams,
} = searchParamsSlice.actions
export default searchParamsSlice.reducer
