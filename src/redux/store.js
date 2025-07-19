import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slides/counterSilde'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})