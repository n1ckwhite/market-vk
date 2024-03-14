import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { cartsSlice } from '@/service'
import { modalSlice } from '@/service/slice'

export const store = configureStore({
  reducer: {
    carts: cartsSlice.reducer,
    modal: modalSlice.reducer,
  },
})

export type TAppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<TAppDispatch>()
