import { configureStore } from '@reduxjs/toolkit'
import faqReducer from './slices/faqSlice'
import categoryReducer from './slices/categorySlice'
import searchParamsReducer from './slices/searchParamsSlice'

export const store = configureStore({
  reducer: {
    faq: faqReducer,
    category: categoryReducer,
    searchParams: searchParamsReducer,
  },
})
