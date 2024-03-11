import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { cartsSlice } from '../slice'

export const store = configureStore({
  reducer: {
    carts: cartsSlice.reducer,
  },
})

export type TAppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<TAppDispatch>()
